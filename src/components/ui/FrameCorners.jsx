import React from "react";

/**
 * FrameCorners
 * The signature visual motif for ServiJoy: four corner brackets, like the
 * reference marks on a technical drawing or a calibrated instrument panel.
 * Drop it inside any `relative` container to "frame" it.
 *
 * <div className="relative ...">
 *   <FrameCorners />
 *   ...content
 * </div>
 */
const FrameCorners = ({ color = "brass", size = "h-3 w-3" }) => {
  const stroke = color === "verdigris" ? "border-sj-verdigris/70" : "border-sj-brass/70";

  return (
    <>
      <span className={`pointer-events-none absolute -top-px -left-px ${size} border-l border-t ${stroke}`} />
      <span className={`pointer-events-none absolute -top-px -right-px ${size} border-r border-t ${stroke}`} />
      <span className={`pointer-events-none absolute -bottom-px -left-px ${size} border-l border-b ${stroke}`} />
      <span className={`pointer-events-none absolute -bottom-px -right-px ${size} border-r border-b ${stroke}`} />
    </>
  );
};

export default FrameCorners;