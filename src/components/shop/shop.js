import img1 from "./../images/pexels-dima-valkov-6211621 1.png";
import img2 from "./../images/pexels-dima-valkov-6211616 (1) 2.png";
import img3 from "./../images/pexels-dima-valkov-6503007 3.png";
import "./shop.css";
import Button from "react-bootstrap/Button";

export default function Shop() {
  return (
    <section
      id="shop"
      className="row shop g-0 p-3 d-flex justify-content-evenly"
    >
      <h2>Best selling</h2>
      <p>
        Get in on the trend with our curated selection of best-selling styles.
      </p>
      <div className="row div-image  d-flex justify-content-evenly">
        <figure className="btn mb-5 col-lg-3 text-center">
          <img
            src={img1}
            className="img-fluid"
            alt="Woman with a regular Fit Long Sleeve Top"
          />
          <figcaption className="figure-caption text-center">
            <b>Regular Fit Long Sleeve Top</b>
            <div className="d-flex justify-content-evenly">
              <b>$38.99</b>
              <div className="vr"></div>
              <b>
                5.0 <i className="bi bi-star-fill"></i>
              </b>
            </div>
          </figcaption>
        </figure>
        <figure className="btn mb-5 col-lg-3 text-center">
          <img
            src={img2}
            className="img-fluid"
            alt="Woman with a black Crop Tailored Jacket"
          />
          <figcaption className="figure-caption text-center">
            <b>Black Crop Tailored Jacket</b>
            <div className="d-flex justify-content-evenly">
              <b>$62.99</b>
              <div className="vr"></div>
              <b>
                4.9 <i className="bi bi-star-fill"></i>
              </b>
            </div>
          </figcaption>
        </figure>
        <figure className="btn mb-5 col-lg-3 text-center">
          <img
            src={img3}
            className="img-fluid"
            alt="Woman with a textured Sunset Shirt"
          />
          <figcaption className="figure-caption text-center">
            <b>Textured Sunset Shirt</b>
            <div className="d-flex justify-content-evenly">
              <b>$49.99</b>
              <div className="vr"></div>
              <b>
                5.0 <i className="bi bi-star-fill"></i>
              </b>
            </div>
          </figcaption>
        </figure>
      </div>
      <Button className="btn-base-second col-lg-2">
        See all
        <i className="bi bi-arrow-right-short"></i>
      </Button>
    </section>
  );
}
