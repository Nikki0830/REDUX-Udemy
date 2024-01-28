import React from "react";
import { FirstName, LastName } from "../App";
// import ComB from "./ComB";

const ComC = () => {
  return (
    // <FirstName.Consumer>
    //   {(fname) => {
    //     return <h1>my name is {fname}</h1>;
    //   }}
    // </FirstName.Consumer>
    <FirstName.Consumer>
      {(fname) => {
        return (
          <LastName.Consumer>
            {(lname) => {
              return (
                <div style = {{color:"red"}}>
                  <h1>
                    {/* My name is {fname} {lname} <ComB /> */}
                    My name is {fname} {lname} 
                  </h1>
                </div>
              );
            }}
          </LastName.Consumer>
        );
      }}
    </FirstName.Consumer>
  );
};

export default ComC;
