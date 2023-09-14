import Carousel from "react-grid-carousel";
import img1 from "./../images/img1.png";
import img2 from "./../images/img2.png";
import img3 from "./../images/img3.png";
import "./feedback.css";
export default function FeedbackOld() {
  return (
    <section className="feedback row p-4 d-flex justify-content-center w-100">
      <div className="carousel">
        <Carousel cols={3} rows={1} gap={5} autoplay={15000} scrollSnap loop>
          <Carousel.Item>
            <img src={img1} className="carousel-image" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img2} className="carousel-image" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img3} className="carousel-image" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img1} className="carousel-image" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img2} className="carousel-image" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img3} className="carousel-image" />
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}
