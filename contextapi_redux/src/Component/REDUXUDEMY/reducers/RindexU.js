import React from "react";

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
  let msg1 = " Nikki ";
  let msg2 = "Hello " + msg1.trim() + " Good morning";

  //in function programming
  let trimMsg = (name) => name.trim();
  // let pMsg = (name) => "Hello " + name + "gm";
  let pMsg = (name) => `Hello ${name} GOOD MORNING`;
  const result = pMsg(trimMsg(msg1));
  // const result = pMsg(msg1);
  console.log(result);

  console.log(msg2);
  return (
    <div>
      <h1>REDUX UDEMY {message()}</h1>
    </div>
  );
};

export default RindexU;
