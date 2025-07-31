import React, {
    Children,
    cloneElement,
    forwardRef,
    isValidElement,
    type ReactElement,
    type ReactNode,
    type RefObject,
    useEffect,
    useMemo,
    useRef,
  } from "react";
  import gsap from "gsap";
  
  export interface CardSwapProps {
    width?: number | string;
    height?: number | string;
    cardDistance?: number;
    verticalDistance?: number;
    delay?: number;
    pauseOnHover?: boolean;
    onCardClick?: (idx: number) => void;
    skewAmount?: number;
    easing?: "linear" | "elastic";
    children: ReactNode;
    
  }
  
  export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    customClass?: string;
  }
  
  export const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ customClass, ...rest }, ref) => (
      <div
        ref={ref}
        {...rest}
        className={`p-4 absolute top-1/2 left-1/2 rounded-xl border border-primary bg-secondary [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden] ${customClass ?? ""} ${rest.className ?? ""}`.trim()}
      />
    )
  );
  Card.displayName = "Card";
  
  type CardRef = RefObject<HTMLDivElement | null>;
  interface Slot {
    x: number;
    y: number;
    z: number;
    zIndex: number;
  }
  
  const makeSlot = (
    i: number,
    distX: number,
    distY: number,
    total: number
  ): Slot => ({
    x: i * distX,
    y: -i * distY,
    z: -i * distX * 1.5,
    zIndex: total - i,
  });
  
  const placeNow = (el: HTMLElement, slot: Slot, skew: number) =>
    gsap.set(el, {
      x: slot.x,
      y: slot.y,
      z: slot.z,
      xPercent: -50,
      yPercent: -50,
      skewY: skew,
      transformOrigin: "center center",
      zIndex: slot.zIndex,
      force3D: true,
    });
  
  const CardSwap: React.FC<CardSwapProps> = ({
    width = 500,
    height = 400,
    cardDistance = 60,
    verticalDistance = 70,
    delay = 5000,
    pauseOnHover = false,
    onCardClick,
    skewAmount = 6,
    easing = "linear",
    children,
  }) => {
    const [windowSize, setWindowSize] = React.useState({
      width: typeof window !== 'undefined' ? window.innerWidth : 1024,
      height: typeof window !== 'undefined' ? window.innerHeight : 768
    });

    // Responsive dimensions
    const responsiveWidth = typeof width === 'number' 
      ? Math.min(width, windowSize.width < 768 ? 300 : windowSize.width < 1024 ? 400 : width)
      : width;
    const responsiveHeight = typeof height === 'number'
      ? Math.min(height, windowSize.width < 768 ? 250 : windowSize.width < 1024 ? 320 : height)
      : height;
    
    // Responsive distances
    const responsiveCardDistance = windowSize.width < 768 ? 30 : windowSize.width < 1024 ? 45 : cardDistance;
    const responsiveVerticalDistance = windowSize.width < 768 ? 35 : windowSize.width < 1024 ? 50 : verticalDistance;
    const responsiveSkewAmount = windowSize.width < 768 ? 3 : windowSize.width < 1024 ? 4 : skewAmount;
    const config =
      easing === "elastic"
        ? {
            ease: "elastic.out(0.6,0.9)",
            durDrop: 2,
            durMove: 2,
            durReturn: 2,
            promoteOverlap: 0.9,
            returnDelay: 0.05,
          }
        : {
            ease: "power1.inOut",
            durDrop: 0.8,
            durMove: 0.8,
            durReturn: 0.8,
            promoteOverlap: 0.45,
            returnDelay: 0.2,
          };
  
    const childArr = useMemo(
      () => Children.toArray(children) as ReactElement<CardProps>[],
      [children]
    );
    const refs = useMemo<CardRef[]>(
      () => childArr.map(() => React.createRef<HTMLDivElement>()),
      [childArr.length]
    );
  
    const order = useRef<number[]>(
      Array.from({ length: childArr.length }, (_, i) => i)
    );
  
    const tlRef = useRef<gsap.core.Timeline | null>(null);
    const intervalRef = useRef<number>(0);
    const container = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const total = refs.length;
      refs.forEach((r, i) =>
        placeNow(
          r.current!,
          makeSlot(i, responsiveCardDistance, responsiveVerticalDistance, total),
          responsiveSkewAmount
        )
      );
  
      const swap = () => {
        if (order.current.length < 2) return;
  
        const [front, ...rest] = order.current;
        const elFront = refs[front].current!;
        const tl = gsap.timeline();
        tlRef.current = tl;
  
        tl.to(elFront, {
          y: "+=500",
          duration: config.durDrop,
          ease: config.ease,
        });
  
        tl.addLabel("promote", `-=${config.durDrop * config.promoteOverlap}`);
                rest.forEach((idx, i) => {
          const el = refs[idx].current!;
          const slot = makeSlot(i, responsiveCardDistance, responsiveVerticalDistance, refs.length);
          tl.set(el, { zIndex: slot.zIndex }, "promote");
          tl.to(
            el,
            {
              x: slot.x,
              y: slot.y,
              z: slot.z,
              duration: config.durMove,
              ease: config.ease,
            },
            `promote+=${i * 0.15}`
          );
        });

        const backSlot = makeSlot(
          refs.length - 1,
          responsiveCardDistance,
          responsiveVerticalDistance,
          refs.length
        );
        tl.addLabel("return", `promote+=${config.durMove * config.returnDelay}`);
        tl.call(
          () => {
            gsap.set(elFront, { zIndex: backSlot.zIndex });
          },
          undefined,
          "return"
        );
        tl.set(elFront, { x: backSlot.x, z: backSlot.z }, "return");
        tl.to(
          elFront,
          {
            y: backSlot.y,
            duration: config.durReturn,
            ease: config.ease,
          },
          "return"
        );
  
        tl.call(() => {
          order.current = [...rest, front];
        });
      };
  
      swap();
      intervalRef.current = window.setInterval(swap, delay);
  
      if (pauseOnHover) {
        const node = container.current!;
        const pause = () => {
          tlRef.current?.pause();
          clearInterval(intervalRef.current);
        };
        const resume = () => {
          tlRef.current?.play();
          intervalRef.current = window.setInterval(swap, delay);
        };
        node.addEventListener("mouseenter", pause);
        node.addEventListener("mouseleave", resume);
        return () => {
          node.removeEventListener("mouseenter", pause);
          node.removeEventListener("mouseleave", resume);
          clearInterval(intervalRef.current);
        };
      }
      return () => clearInterval(intervalRef.current);
    }, [responsiveCardDistance, responsiveVerticalDistance, delay, pauseOnHover, responsiveSkewAmount, easing]);

    // Handle window resize
    useEffect(() => {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    const rendered = childArr.map((child, i) =>
      isValidElement<CardProps>(child)
        ? cloneElement(child, {
            key: i,
            ref: refs[i],
            style: { width: responsiveWidth, height: responsiveHeight, ...(child.props.style ?? {}) },
            onClick: (e) => {
              child.props.onClick?.(e as React.MouseEvent<HTMLDivElement>);
              onCardClick?.(i);
            },
          } as CardProps & React.RefAttributes<HTMLDivElement>)
        : child
    );
  
    return (
      <div
        ref={container}
        className="transform translate-x-[5%] translate-y-[20%] origin-top-left md:origin-bottom-right perspective-[900px] overflow-visible max-[768px]:translate-x-[15%] max-[768px]:translate-y-[15%] max-[768px]:scale-[0.85] max-[480px]:translate-x-[10%] max-[480px]:translate-y-[10%] max-[480px]:scale-[0.7]"
        style={{ width: responsiveWidth, height: responsiveHeight }}
      >
        {rendered}
      </div>
    );
  };
  
  export default CardSwap;
  