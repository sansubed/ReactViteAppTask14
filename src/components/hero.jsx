import React from "react";

function Hero(props) {
  console.log(props);
  return (
    <div style={{ backgroundColor: props.backgroundColor }}>
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
      <div>Hero</div>
    </div>
  );
}

export default Hero;
