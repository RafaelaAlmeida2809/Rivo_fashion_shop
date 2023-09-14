import { useState } from "react";
import img1 from "./../images/img1.png";
import img2 from "./../images/img2.png";
import img3 from "./../images/img3.png";
import img4 from "./../images/img4.png";
import img5 from "./../images/img5.png";
import img6 from "./../images/pexels-dima-valkov-6211616 (1) 2.png";
import img7 from "./../images/img7.png";
import img8 from "./../images/img8.png";
import "./products.css";

export default function Products() {
  const [menuSelect, setMenuSelect] = useState("Sale");
  const products = [
    {
      name: "Sale",
      items: [
        {
          name: "Spread Collar Shirt",
          value: "$48.99",
          note: "5.0",
          img: img1
        },
        {
          name: "White Solid Formal Shirt",
          value: "$39.00",
          note: "4.9",
          img: img2
        },
        { name: "Shine On Me Blouse", value: "$42.99", note: "4.8", img: img3 },
        {
          name: "Gray Solid Padded Jacket",
          value: "$32.99",
          note: "4.7",
          img: img4
        },
        {
          name: "Printed Loose T-shirt",
          value: "$39.99",
          note: "5.0",
          img: img5
        },
        {
          name: "Summer Wind Crop Shirt",
          value: "$39.95",
          note: "4.7",
          img: img6
        },
        { name: "Tailored Jacket", value: "$46.00", note: "4.9", img: img7 },
        {
          name: "Solid Round Neck T-shirt",
          value: "$36.00",
          note: "5.0",
          img: img8
        }
      ]
    },
    {
      name: "Hot",
      items: [
        {
          name: "Classic White Sneakers",
          value: "$65.99",
          note: "4.8",
          img: img8
        },
        {
          name: "Stiletto Black Heels",
          value: "$79.00",
          note: "4.9",
          img: img7
        },
        { name: "Suede Ankle Boots", value: "$95.99", note: "4.7", img: img6 },
        { name: "Gladiator Sandals", value: "$45.50", note: "4.6", img: img5 },
        { name: "Leather Loafers", value: "$80.99", note: "5.0", img: img4 },
        {
          name: "Gold Plated Necklace",
          value: "$50.99",
          note: "4.9",
          img: img3
        },
        {
          name: "Silver Hoop Earrings",
          value: "$35.00",
          note: "4.8",
          img: img2
        }
      ]
    },
    {
      name: "New arrivals",
      items: [
        { name: "Leather Belt", value: "$42.99", note: "5.0", img: img5 },
        { name: "Silk Scarf", value: "$28.99", note: "4.7", img: img3 },
        { name: "Beaded Bracelet", value: "$20.99", note: "4.6", img: img1 },
        { name: "Woolen Overcoat", value: "$120.99", note: "4.9", img: img2 },
        { name: "Cashmere Sweater", value: "$85.00", note: "4.8", img: img4 },
        { name: "Turtleneck Top", value: "$60.99", note: "5.0", img: img8 },
        { name: "Thermal Leggings", value: "$50.50", note: "4.7", img: img6 },
        { name: "Knitted Beanie", value: "$25.99", note: "4.6", img: img7 }
      ]
    },
    {
      name: "Accessories",
      items: [
        {
          name: "Performance Running Shoes",
          value: "$105.99",
          note: "4.7",
          img: img6
        },
        {
          name: "Stretchable Yoga Pants",
          value: "$55.00",
          note: "4.9",
          img: img5
        },
        { name: "Quick Dry Tank Top", value: "$35.99", note: "4.8", img: img4 },
        { name: "Compression Socks", value: "$20.50", note: "4.7", img: img3 },
        {
          name: "Sweat-Wicking Headband",
          value: "$15.99",
          note: "4.8",
          img: img1
        },
        { name: "Floral Bikini Set", value: "$50.99", note: "4.6", img: img7 },
        { name: "Beach Sarong Wrap", value: "$28.99", note: "4.9", img: img8 },
        { name: "Men's Swim Trunks", value: "$45.00", note: "4.8", img: img2 }
      ]
    }
  ];

  return (
    <section className="product g-0">
      <h2>Our products</h2>
      <div className="d-flex justify-content-evenly mb-2">
        {products.map((p, index) => {
          return (
            <button
              key={`section_${index}`}
              onClick={() => setMenuSelect(p.name)}
              className="btn-base-link p-2"
            >
              {p.name}
            </button>
          );
        })}
      </div>
      <div className=" row d-flex justify-content-evenly m-lg-5 g-0">
        {products
          .find((p) => p.name === menuSelect)
          .items.map((p, index) => {
            return (
              <figure
                key={`product_${index}`}
                className="btn mb-5 col-5 col-lg-3 text-center image"
              >
                <img
                  src={p.img}
                  className="img-fluid"
                  title={`${p.name}`}
                  alt={`${p.name}`}
                />
                <figcaption className="figure-caption text-center">
                  <b>{p.name}</b>
                  <div className="d-flex justify-content-evenly">
                    <b>{p.value}</b>
                    <div className="vr"></div>
                    <b>
                      {p.note} <i className="bi bi-star-fill"></i>
                    </b>
                  </div>
                </figcaption>
              </figure>
            );
          })}
      </div>
    </section>
  );
}
