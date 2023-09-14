import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "./../images/img1.png";
import img2 from "./../images/img2.png";
import img3 from "./../images/img3.png";
import "./feedback.css";
import CustomArrow from "./../items/arrow";

export default function Feedback() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  const data = [
    {
      name: "Emily Wilson",
      text:
        "The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I'm beyond satisfied!"
    },
    {
      name: "Sarah Thompson",
      text:
        "I absolutely love the quality and style of the clothing I purchased from this website. customer service was outstanding, and I received my order quickly. Highly recommended!"
    },
    {
      name: "Olivia Martinez",
      text:
        "I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable. Highly satisfied!"
    },
    {
      name: "Jacob Brown",
      text:
        "This site is now my go-to place for trendy apparel. The clothes fit well and are made from high-quality materials. I appreciate the quick responses from customer service when I had a question."
    },
    {
      name: "Lucas Smith",
      text:
        "I was skeptical at first, but after receiving my first order, I was blown away by the quality and design of the clothes. The delivery was on time, and the packaging was impeccable. Will order again soon!"
    },
    {
      name: "Sophia Johnson",
      text:
        "The designs are unique, and I always receive compliments whenever I wear them. Plus, the user interface of the website made my shopping experience a breeze. Very impressed with the overall service!"
    }
  ];
  return (
    <section className="feedback row p-4 d-flex justify-content-center w-100">
      <div className="carousel">
        <Carousel
          className="pb-5"
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="transform 300ms ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          customRightArrow={<CustomArrow direction="right" />}
          customLeftArrow={<CustomArrow direction="left" />}
        >
          {data.map((d, index) => {
            return (
              <div
                key={`feedback_${index}`}
                className="card text-start px-4 mx-2"
              >
                <b className="quote"></b>
                <h4>{d.name}</h4>
                <p>{d.text}</p>
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}
