import React from "react";

const Navbar = () => {
  return (
    <>
      <div>
        <h1
          style={{
            color: "cyan",
            fontWeight: "bold",
            textAlign: "center",
            textShadow: "2px 2px 2px black",
          }}
        >
          Admin Table
        </h1>

        <ul
          style={{
            color: "magenta",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Code</li>
          <li>Contact</li>
        </ul>
{/* 
        <h3
          style={{
            marginLeft: "10%",
            color:"lime",
            textShadow: "2px 2px 2px blue",
          }}
        >
          List of user details
        </h3> */}
      </div>
    </>
  );
};

export default Navbar;
