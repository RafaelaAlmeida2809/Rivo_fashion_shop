import "./arrow.css";
const CustomRightArrow = ({ onClick, direction, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <button className={`arrow arrow-${direction}`} onClick={() => onClick()}>
      {direction === "right" ? ">" : "<"}
    </button>
  );
};
export default CustomRightArrow;
