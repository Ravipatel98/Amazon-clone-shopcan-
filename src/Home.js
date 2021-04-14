import React, { useState, useEffect } from "react";
import "./Home.css";
import { Slide } from "react-slideshow-image";
import HomeBg from "./HomeBg.jpg";
import Product from "./Product";
import productsData from "./data";
import { CompassCalibrationSharp } from "@material-ui/icons";
import ImageSlider from "./imageSlider";
import { SliderData } from "./SliderData";

function Home(products) {
  return (
    <div className="home">
      <div className="home__container">
        <ImageSlider slides={SliderData} />;
        <div className="home__row">
          {products.product.length > 1 &&
            products.product.map((p) => {
              return (
                <Product
                  id={p.id}
                  title={p.title}
                  price={p.price}
                  image={p.image}
                  rating={p.rating}
                />
              );
            })}
        </div>
        {/* <div className="home__row">
          <Product
            className="home__rowProduct"
            id="12321341"
            title={"The lean start up book by Eric Ries"}
            price={11.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            className="home__rowProduct"
            id="4903850"
            title={"Benols Beauty Silicone Head Massager Scalp Brush"}
            price={14.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71HYPiMkYIL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            className="home__rowProduct"
            id="23445930"
            title={
              "Acer Aspire One, 15.6 Full HD, Celeron ICD N4020, 4Gb RAM, 64GB eMMC, Windows 10S, Black, A115-31-C2Y3"
            }
            price={2129.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81EtXsYalvL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            className="home__rowProduct"
            id="3254354345"
            title={
              "RCA Delta Pro 11.6 Inch Quad-Core 2GB RAM 32GB Storage IPS 1366 x 768 Touchscreen WiFi Bluetooth with Detachable Keyboard Android 9.0 Tablet"
            }
            price={1921.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81ckm%2BGPlVL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            className="home__rowProduct"
            id="90829332"
            title={"Basics 3-Button USB Wired Computer Mouse (Black), 1-Pack"}
            price={144.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61i0CV-tKpL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            className="home__rowProduct"
            id="9082932"
            title={
              "SAMSUNG QN32Q50RAFXZA Flat 64 QLED 4K 32Q50 Series Smart TV"
            }
            price={1499.99}
            image=" https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={4}
          />
        </div> */}
      </div>
    </div>
  );
}

export default Home;
