import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import "./productList.css";
import Loading from "../components/Loading";
import config from "../config";
const BASE_URL = config.BASE_URL;

function App() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/products/")
      .then(response => {
        // console.log(response);
        setProducts(response.data);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  console.log();
  return (
    <div className="App">
      {loading && <Loading />}
      <div className="ProductList">
        <h2 className="productList__title">
          Availble Products {products.length}
        </h2>
        <div className="productList__container">
          {products.map(product => {
            console.log(BASE_URL + product.Image[0].url);
            return (
              <div className="productList__product" key={product.id}>
                <h3>{product.Name}</h3>
                <img
                  src={BASE_URL + product.Image[0].url}
                  alt={product.Name}
                  className="productList__image"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
