import imgOffer from "./../images/offer-girl.png";
import Button from "react-bootstrap/Button";
import "./offer.css";
export default function Offer() {
  return (
    <section
      id="offer"
      className="row flex-column-reverse flex-lg-row g-0 m-4 m-lg-5 offer d-flex"
    >
      <div className="col-lg-5 px-lg-5">
        <img
          src={imgOffer}
          className="img-fluid"
          alt="Woman in green clothes"
        />
      </div>
      <div className="p-3 p-lg-4 col-lg-6 text-start">
        <h2>Exclusive offer</h2>
        <div className="d-flex">
          <div className="cardData p-2 m-2 text-center">
            <h4 className="m-0">06</h4>
            <p className="m-0">Days</p>
          </div>
          <div className="cardData p-2 m-2 text-center">
            <h4 className="m-0">18</h4>
            <p className="m-0">Hours</p>
          </div>
          <div className="cardData p-2 m-2 text-center">
            <h4 className="m-0">48</h4>
            <p className="m-0">Min</p>
          </div>
        </div>
        <p>
          Unlock the ultimate style upgrade with our exclusive offer Enjoy
          savings of up to 40% off on our latest New Arrivals
        </p>
        <Button className="btn-base px-5 py-2">BUY NOW</Button>
      </div>
    </section>
  );
}
