import React from "react";
// import { render } from "react-dom";
import Spinner from "react-activity/lib/Spinner";
import "react-activity/lib/Spinner/Spinner.css";
import "./loading.css";

function Loading() {
  return (
    <div className="loading__container">
      <Spinner color="#fff" />
    </div>
  );
}

export default Loading;
