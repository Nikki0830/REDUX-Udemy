import React from "react";

const RindexU = () => {
  // console.log("resux udemy");

  function greeting() {
    return "Good morning";
  }
  let message = greeting;

  function printMessage(fun) {
    console.log(fun);
  }
  printMessage(message());
  // printMessage(greeting());

  return (
    <div>
      <h1>REDUX UDEMY {message()}</h1>
    </div>
  );
};

export default RindexU;
