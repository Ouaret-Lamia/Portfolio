/// <reference types="vite/client" />

declare namespace JSX {
  interface IntrinsicElements {
    "model-viewer": {
      src?: string;
      alt?: string;
      ar?: boolean;
      "auto-rotate"?: boolean;
      "camera-controls"?: boolean;
      "shadow-intensity"?: string;
      "exposure"?: string;
      "shadow-softness"?: string;
      loading?: "auto" | "lazy" | "eager";
      "camera-orbit"?: string;
      "min-camera-orbit"?: string;
      "max-camera-orbit"?: string;
      "field-of-view"?: string;
      style?: React.CSSProperties;
      className?: string;
      ref?: React.Ref<HTMLElement>;
    };
  }
}
