import React from "react";
import { compose, pipe } from "lodash/fp";

const RindexU = () => {
  // console.log("resux udemy");

  function greeting() {
    return "Good morning";
  }
  let message = greeting;

  // function printMessage(fun) {
  //   console.log(fun);
  // }
  // printMessage(message());
  // printMessage(greeting());
  // function printMessage(fun){
  //   console.log(message())
  // }
  // printMessage()
  function printMessage(fun) {
    console.log(fun());
  }
  printMessage(message);

  function returnFun() {
    return function () {
      return "Good Morning😊";
    };
  }

  let funvar = returnFun();
  let msg = funvar();
  console.log(msg);

  //higher order function

  let arr = [1, 2, 4, 6, 7];
  const data = arr.map((x) => x * 2);
  console.log(data);

  //function compposition
  let msg1 = " Nikki nikki ";
  let msg2 = "Hello " + msg1.trim() + " Good morning";
  console.log(msg2);

  //in function programming
  let trimMsg = (name) => name.trim();
  // let pMsg = (name) => "Hello " + name + "gm";
  let pMsg = (name) => `Hello ${name} good morning`;

  const convertToUper = (name) => name.toUpperCase();
  // const result = pMsg(convertToUper(trimMsg(msg1)));
  // const result = pMsg(msg1);
  // console.log(result);

  //solve this composition
  //problemn(complex parathesis structutre)
  // const newValue = compose(pMsg, convertToUper, trimMsg);
  const newValue = pipe(trimMsg, convertToUper, pMsg);
  const result = newValue(msg1);
  console.log(result);

  //Currying in functional programming

  // let pMsg1 = (name) => `Hello ${name}`;
  // console.log(pMsg1(msg1))

  // const trimMsg1 = (name) => name.trim();
  // const pMsg3 = (msg, name) => `Hello ${name} ${msg}`;
  // const convertToUper2 = (name) => name.toUpperCase();

  // const newValue1 = pipe(trimMsg1, convertToUper2, pMsg3);
  // const result1 = newValue1(msg1);
  // console.log(result1);

  ///currying code
  let multi = function (a) {
    return function (b) {
      return a * b;
    };
  };
  // let result5 = multi(2);
  let result5 = multi(2)(6);
  console.log(result5);

  //currying with arrow function
  let multiple = (x) => {
    return function (y) {
      console.log(x * y);
    };
  };
  // let multiple = (a) => (b) => a * b;
  let result6 = multiple(2);
  result6(4);
  // multiple(2)(10)

  //applying currying
  const trimMsg1 = (name) => name.trim();
  const pMsg3 = (msg) => (name) => `Hello ${name} ${msg} `;
  const convertToUper2 = (name) => name.toUpperCase();

  const newValue1 = pipe(trimMsg1, convertToUper2, pMsg3("good morning"));
  const result1 = newValue1(msg1);
  console.log(result1);

  return (
    <div>
      <h1>REDUX UDEMY {message()}</h1>
    </div>
  );
};

export default RindexU;
