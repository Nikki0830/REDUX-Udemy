import React from "react";
//to access/get the data we need useSelector hook
import { useDispatch, useSelector } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { deleteMe } from "./store/userSlice";

const DisplayUsers = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.users;
  });
  console.log("data", data);

  //id from map(users,id)
  // const deleteUsers = (id) => {
  //   console.log("deleteruser", id);
  //   dispatch(deleteMe(id));
  // };
  const deleteUsers = (user) => {
    console.log("deleteruser", user);
    dispatch(deleteMe(user));
  };

  return (
    <div className="mapData">
      {data.map((user, id) => {
        return (
          <li key={id}>
            {user}
            {/* <button className="deleteBtn" onClick={() => deleteUsers(id)}> */}
            <button className="deleteBtn" onClick={() => deleteUsers(user)}>
              {/* component from react icons */}
              <MdDeleteForever size={24} color="#f00" className="deleteIcons" />
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default DisplayUsers;
