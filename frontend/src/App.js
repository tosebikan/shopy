import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./components/Loading";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [product, setProducts] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:1337/products/")
  //     .then(response => {
  //       // console.log(response);
  //       setProducts(response.data);
  //       setLoading(false);
  //     })
  //     .catch(err => {
  //       setLoading(false);
  //       console.log(err);
  //     });
  // });

  return <div className="App">{loading && <Loading />}</div>;
}

export default App;
