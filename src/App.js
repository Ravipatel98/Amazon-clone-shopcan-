import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import HeaderBottom from "./HeaderBottom";
import Home from "./Home";
import YourPrime from "./YourPrime";
import Location from "./Location";
import Return from "./Return";
import Footer from "./Footer";
import Payment from "./Payment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js/pure";
import { Elements } from "@stripe/react-stripe-js";
import {
  productsData,
  books,
  newArrivals,
  trending,
  electronics,
  bestSellers,
} from "./data";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const promise = loadStripe(
  "pk_test_51IYbdjBpyry7U3kiIFpxDwK3HZ0c1qUHSQue5CrrzDCC4bYnqSdrW88vKe74VkMfGTbF0WyBxLWhTOhm5jbVEVMX00fzSmBOqT"
);
function App() {
  const [{}, dispatch] = useStateValue();

  const [productsInfo, setProductsInfo] = useState({});

  const [search, setSearch] = useState("");

  useEffect(() => {
    setProductsInfo(productsData);
  }, [productsInfo]);

  useEffect(() => {
    setProductsInfo({
      id: "4903850",
      title: "Benols Beauty Silicone Head Massager Scalp Brush",
      price: 14.99,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71HYPiMkYIL._AC_SL1500_.jpg",
      rating: 4,
    });
    // if (productsInfo.length > 0) {
    //   productsInfo.forEach((product) => {
    //     if (product.title.toLowerCase().includes(search.toLowerCase())) {
    //       console.log("Sdsds");
    //     }
    //   });
    // }
    console.log(productsInfo);
  }, [search, setSearch]);

  // search.addEventListener("onchange", handleSearchClick);

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  console.log(productsData[0]);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <HeaderBottom />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/location">
            <Header />
            <HeaderBottom />
            <Location />
            <Footer />
          </Route>
          <Route path="/yourPrime">
            <Header />
            <HeaderBottom />
            <YourPrime />
            <Footer />
          </Route>
          <Route path="/return">
            <Header />
            <HeaderBottom />
            <Return />
            <Footer />
          </Route>
          <Route path="/payment">
            <Header />
            <HeaderBottom />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer />
          </Route>

          <Route path="/newArrivals">
            <Header />
            <HeaderBottom />
            {newArrivals && <Home product={newArrivals} />}
            <Footer />
          </Route>

          <Route path="/electronics">
            <Header />
            <HeaderBottom />
            {electronics && <Home product={electronics} />}
            <Footer />
          </Route>
          <Route path="/books">
            <Header />
            <HeaderBottom />
            {books && <Home product={books} />}
            <Footer />
          </Route>
          <Route path="/trending">
            <Header />
            <HeaderBottom />
            {trending && <Home product={trending} />}
            <Footer />
          </Route>

          <Route path="/bestSeller">
            <Header />
            <HeaderBottom />
            {bestSellers && <Home product={bestSellers} />}
            <Footer />
          </Route>

          <Route path="/news">
            <Header search={search} setsearch={setSearch} />
            <HeaderBottom />
            {books && <Home product={books} />}
            <Footer />
          </Route>

          <Route path="/">
            <Header search={search} setsearch={setSearch} />
            <HeaderBottom />
            {productsInfo && <Home product={productsInfo} />}
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
