import { useContext } from "react";
import { Address } from "../App";

// import ComA from "./ComA";

const ComB = () => {
  const adds = useContext(Address);
  //   return (
  //     <>
  //       <div>
  //        <ComA/>
  //       </div>
  //     </>
  //   );
  return (
    <div>
      <h1>{adds}</h1>
    </div>
  );
};

export default ComB;
// import React from "react";
// import { FirstName } from "../App";

// const ComB = () => {
//   return (
//     <FirstName.Consumer>
//       {(fname) => {
//         return <h1>my name is {fname}</h1>;
//       }}
//     </FirstName.Consumer>
//   );
// };

// export default ComB;
