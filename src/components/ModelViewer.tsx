import { useEffect, useRef } from "react";
import "@google/model-viewer";

interface ModelViewerProps {
  src: string;
  alt?: string;
  className?: string;
}

const ModelViewer = ({ src, alt = "3D Model", className = "" }: ModelViewerProps) => {
  const viewerRef = useRef<HTMLDivElement>(null);
  const modelViewerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const container = viewerRef.current;
    if (!container) return;

    // Clear old viewer if exists
    while (container.firstChild) container.removeChild(container.firstChild);

    const modelViewer = document.createElement("model-viewer");
    modelViewerRef.current = modelViewer;

    modelViewer.setAttribute("src", src);
    modelViewer.setAttribute("alt", alt);
    modelViewer.setAttribute("auto-rotate", "");
    modelViewer.setAttribute("camera-controls", "");
    modelViewer.setAttribute("shadow-intensity", "1");
    modelViewer.setAttribute("exposure", "0.8");
    modelViewer.setAttribute("shadow-softness", "0.5");
    modelViewer.setAttribute("camera-orbit", "0deg 75deg 100%");
    modelViewer.setAttribute("field-of-view", "30deg");
    modelViewer.style.width = "100%";
    modelViewer.style.height = "100%";
    modelViewer.style.display = "block";

    container.appendChild(modelViewer);

    return () => {
      if (modelViewerRef.current && container.contains(modelViewerRef.current)) {
        container.removeChild(modelViewerRef.current);
      }
      modelViewerRef.current = null;
    };
  }, [src, alt]);

  return (
    <div
      ref={viewerRef}
      className={`flex items-center justify-center w-screen h-screen ${className}`}
    />
  );
};

export default ModelViewer;
