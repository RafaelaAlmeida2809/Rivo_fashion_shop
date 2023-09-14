import pexelsDima from "./../images/pexels-dima-valkov-6402847 2.png";
import Button from "react-bootstrap/Button";
import "./home.css";

export default function Home() {
  return (
    <section
      id="home"
      className=" home row g-0 p-3 d-flex justify-content-evenly"
    >
      <div className="p-3 p-lg-4 mb-5 col-lg-4 text-start">
        <h1>Discover and Find Your Own Fashion!</h1>
        <p>
          Explore our curated collection of stylish clothing and accessories
          tailored to your unique taste.
        </p>
        <Button className="btn-base">Explore Now</Button>
      </div>
      <div className="pexelsImage col-lg-4 mb-5">
        <img
          src={pexelsDima}
          className="img-fluid"
          alt="Woman in green clothes"
        />
      </div>
    </section>
  );
}
