import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { context } from "../../context/context";
const List = () => {
  const { usersData, getUser } = useContext(context);
  useEffect(() => {
    getUser();
  }, []);
  const navigator = useNavigate();
  // const location =useLocation();
  // const setUserEditForm =location?.state?.data

  return (
    <div className="p-5">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">User Name</th>
            <th scope="col">Gmail</th>
            <th scope="col">password</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {usersData?.data?.map((data, index) => {
            return (
              <tr key={index}>
                <th scope="row">{data._id}</th>
                <td>{data.username}</td>
                <td>{data.email}</td>
                <td>{data.password}</td>
                <td>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => {
                      navigator(`/edit/${data._id}`, { state: { data: data } });
                    }}
                  >
                    EDIT
                  </button>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    style={{ marginLeft: "5px" }}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default List;
