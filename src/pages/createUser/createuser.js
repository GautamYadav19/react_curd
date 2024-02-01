import React, { useContext, useState } from "react";
import "./createuser.css";
import { context } from "../../context/context";
import Navbar from "../../components/navbar/navbar";
import { useNavigate } from "react-router-dom";
const CreateUser = () => {
  const { createUser } = useContext(context);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setphoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigator =useNavigate()
  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    createUser({ name, email, phonenumber, password });
    navigator('/list')
  };
  return (
    <>
      <Navbar />
      <div className="wrapper fadeInDown">
      <div id="formContent">
        <h2 className="active"> Create User </h2>

        <div className="fadeIn first"></div>

        <form onSubmit={handlerSubmit}>
          <input
            type="text"
            className="fadeIn second"
            name="Name"
            placeholder="Enter name"
            
            onChange={(e) => setName(e.target.value)}
            
          />
          <input
            type="text"
            className="fadeIn third"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
             <input
            type="text"
            className="fadeIn third"
            placeholder="Enter phone number"
            onChange={(e) => setphoneNumber(e.target.value)}
          />
          <input
            type="text"
            id="password"
            className="fadeIn third"
            name="password"
            placeholder="Enter password"
            
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="submit"
            className="fadeIn fourth"
            onClick={() => {
              navigator("/");
            }}
          />
        </form>
        {/* onChange={(e) => setphoneNumber(e.target.value)} */}
        <h2
          className="inactive underlineHover"
          onClick={() => {
            navigator("/");
          }}
        >
        
        </h2>
      </div>
    </div>
     
      {/* <div className="container" type="POST">
        <form onSubmit={handlerSubmit}>
          name
          <input type="text" onChange={(e) => setName(e.target.value)} />
          password
          <input type="text" onChange={(e) => setPassword(e.target.value)} />
          email
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
          phonenumber
          <input type="text" onChange={(e) => setphoneNumber(e.target.value)} />
          <button type="submit">submit</button>
        </form>
      </div> */}
    </>
  );
};
export default CreateUser;
