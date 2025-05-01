import { SmoothCursor as SmoothCursorComponent } from "./ui/smooth-cursor";

export function SmoothCursor() {
  return (
    <>
      <span className="hidden md:block">Move your mouse around</span>
      <span className="block md:hidden">Tap anywhere to see the cursor</span>
      <SmoothCursorComponent />
    </>
  );
}
