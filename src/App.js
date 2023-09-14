import "./styles.css";
import Home from "./components/home/home";
import TopMenu from "./components/topMenu/topMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import Shop from "./components/shop/shop";
import Products from "./components/products/products";
import BaseFooter from "./components/footer/footer";
import Offer from "./components/offer/offer";
import Feedback from "./components/feedback/feedback";
import Contact from "./components/contact/contact";

export default function App() {
  return (
    <div className="App ">
      <TopMenu />
      <Home />
      <Shop />
      <Products />
      <Offer />
      <Feedback />
      <Contact />
      <BaseFooter />
    </div>
  );
}
