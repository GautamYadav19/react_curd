import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { context } from "../../context/context";
import Navbar from "../../components/navbar/navbar";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles

const Editform = () => {
  const { editUser } = useContext(context);
  const location = useLocation();
  const setUserEditForm = location?.state?.data;

  const [name, setname] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [ID, setId] = useState("");

  useEffect(() => {
    setname(setUserEditForm?.name);
    setPhoneNumber(setUserEditForm?.phonenumber);
    setId(setUserEditForm?._id);
  }, [setUserEditForm]);

  const navigator = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    editUser({ ID, name, phonenumber });
    navigator("/list");
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5 ">
        <form onSubmit={handleSubmit}>
          <div className="mb-3 myclass">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phonenumber" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="phonenumber"
              value={phonenumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Editform;
