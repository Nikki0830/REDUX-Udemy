import React from "react";
import "./Css/Userdetails.css";
import DeleteAllUser from "./DeleteAllUser";
import { fakeUserData } from "./api/apiData";
import { useDispatch } from "react-redux";
import { addUser } from "./store/userSlice";
import DisplayUsers from "./DisplayUsers";

const Userdetails = () => {
  const dispatch = useDispatch();

  const addNewUser = (name) => {
    // console.log("dispach data" ,name);
    // dispatch(addUser());
    dispatch(addUser(name))
  };
  return (
    <>
      <div className="content">
        <div className="admin-table">
          <div className="admin-subtitle">List of User Details</div>
          <button
            className="AddUser"
            onClick={() => addNewUser(fakeUserData())}
          >
            Add new Users
          </button>
        </div>
        <ul>
          {/* <li>Hi</li>
          <li>Hi2</li>
          <li>Hi3</li> */}
          <DisplayUsers/>
        </ul>
        <hr />
        <DeleteAllUser />
      </div>
    </>
  );
};

export default Userdetails;
