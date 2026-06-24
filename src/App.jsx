import SmoothScroll from "./views/components/SmoothScroll";
import { Cursor } from "./views/components/Cursor";
import Home from "./views/pages/Home";

export default function App() {
  return (
    <SmoothScroll>
      <Cursor />
      <Home />
    </SmoothScroll>
  );
}
