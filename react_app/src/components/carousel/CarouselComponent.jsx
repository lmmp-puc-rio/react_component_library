// Carousel Component = a responsive React Card Carousel Component, to display Projects/Cases Cards
// # Main Import
import Carousel from "react-elastic-carousel";
import "./CarouselComponent.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function CarouselComponent(props) {
  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints} itemPadding={[30, 30]} >{props.children}</Carousel>
      </div>
    </div>
  );
}
