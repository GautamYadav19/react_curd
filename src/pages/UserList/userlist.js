import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { context } from "../../context/context";
import Navbar from "../../components/navbar/navbar";

const List = () => {
  const { usersData, getUser } = useContext(context);
  useEffect(() => {
    getUser();
  }, []);
  const navigator = useNavigate();

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:3000/api/userdelete/${userId}`);
      console.log('User deleted successfully');
      // Refresh the user data after deletion
      getUser();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-5">
        {usersData?.data?.length === 0 ? (
          <p>No users available.</p>
        ) : (
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">User Name</th>
                <th scope="col">PhoneNumber</th>
                <th scope="col">Gmail</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>

            <tbody>
              {usersData?.data?.map((data, index) => (
                <tr key={index}>
                  <th scope="row">{data._id}</th>
                  <td>{data.name}</td>
                  <td>{data.phonenumber}</td>
                  <td>{data.email}</td>
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
                      onClick={() => {
                        handleDelete(data._id);
                      }}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default List;
