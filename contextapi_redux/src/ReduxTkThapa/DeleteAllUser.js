import React from "react";
import { deleteAll } from "./store/userSlice";
import { useDispatch } from "react-redux";

const DeleteAllUser = () => {
  const dispatch = useDispatch();
  const deleteAllUsers = () => {
    dispatch(deleteAll());
  };
  return (
    <div>
      <button className="clearAll" onClick={() => deleteAllUsers()}>
        Clear all
      </button>
    </div>
  );
};

export default DeleteAllUser;
