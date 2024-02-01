import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigator = useNavigate();

  return (
    <div>
      <nav className="navbar navbar-light bg-light justify-content-between p-2">
      <div>
        <a className="navbar-brand" onClick={()=>{
navigator('/')
        }}>Home</a>
         <a className="navbar-brand" onClick={()=>{
navigator('/list')
        }}>User List</a>
        <a className="navbar-brand" onClick={()=>{
navigator('/createuser')
        }}>Add User</a>
      </div>
     
          <button className="btn btn-outline-primary my-2 my-sm-0 m-2" type="submit">
            Search
          </button>
      </nav>
    </div>
  );
};
export default Navbar;
