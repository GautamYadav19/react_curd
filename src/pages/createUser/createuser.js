import React, { useContext, useState } from "react";
import "./createuser.css";
import { context } from "../../context/context";
const CreateUser = () => {
  // const {userData}=useContext(context)
  const {createUser}=useContext(context)
  const [name,setName]=useState('')
  const [password,setPassword]=useState('')
  const handlerSubmit =(e)=>{
    e.preventDefault()
    console.log(e)
    createUser({name,password})
// console.log(data)
  }
  // console.log('Name',name)
  // console.log('Password',password)
  return (
    <>
      <div className="container" type="POST">
        <form onSubmit={handlerSubmit}>
          name
          <input type="text" onChange={(e)=>setName(e.target.value)}/>
          password
          <input type="text" onChange={(e)=>setPassword(e.target.value)} />
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
};
export default CreateUser;
