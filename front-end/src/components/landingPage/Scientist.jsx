import React from "react";

export default function Scientist() {
  return (
    <div className="app">
      <div className="panel">
        <img
          className="background-image"
          src="https://images.squarespace-cdn.com/content/v1/5a58ddef7131a5bcf998ff80/1599055643548-PJZGVBW6X5YH2SU4ALCM/MA___With+team+inside+Aguahoja.jpeg?format=2500w"
          alt="Background"
        />
        <div className="container">
          <h2 className="title">
            Are You A
            <br />
            Researcher?
            <br />
            Let's Collaborate
          </h2>
          <button className="btn"> Let's Connect </button>
        </div>
      </div>
    </div>
  );
}
