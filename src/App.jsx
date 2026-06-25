import { MotionConfig } from "framer-motion";
import SmoothScroll from "./views/components/SmoothScroll";
import { Cursor } from "./views/components/Cursor";
import Home from "./views/pages/Home";

export default function App() {
  return (
    // `reducedMotion="user"` makes every framer-motion animation respect the
    // OS "reduce motion" setting (GSAP + CSS animations already do).
    <MotionConfig reducedMotion="user">
      <SmoothScroll>
        <Cursor />
        <Home />
      </SmoothScroll>
    </MotionConfig>
  );
}
