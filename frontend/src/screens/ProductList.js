import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../components/Loading";

import "../App.css";

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

  console.log(products);
  return (
    <div className="App">
      {loading && <Loading />}
      <div className="ProductList">
        <h2 className="productList__title">
          Availble Products {products.length}
        </h2>
        <div className="productList__container">
          {products.map(product => (
            <div className="productList__product" key={product.id}>
              <h3>{product.Name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
