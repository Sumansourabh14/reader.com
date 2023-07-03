import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { LeftArrow, RightArrow } from "./CarouselArrows";
import useDrag from "./useDrag";
import "react-horizontal-scrolling-menu/dist/styles.css";

const Carousel = ({ data }) => {
  const { dragStart, dragStop, dragMove, dragging } = useDrag();

  const handleDrag =
    ({ scrollContainer }) =>
    (ev) =>
      dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });

  return (
    <div>
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        onMouseDown={() => dragStart}
        onMouseUp={() => dragStop}
        onMouseMove={handleDrag}
      >
        {data}
      </ScrollMenu>
    </div>
  );
};

export default Carousel;
