import React from "react";

export default function Shop() {
  return (
    <div className="app">
      <div className="panel">
        <img
          className="background-image"
          src="shop.png"
          alt="Background"
        />
        <div className="container">
          <h2 className="title">
            Ornate Your Interior
            <br />
            With Exquisite
            <br />
            Biomimic Pieces.
          </h2>
          <button className="btn"> Shop Now </button>
        </div>
      </div>
    </div>
  );
}
