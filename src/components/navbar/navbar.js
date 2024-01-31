import React from "react";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light justify-content-between p-2">
      <div>
        <a className="navbar-brand">Home</a>
        <a className="navbar-brand">Uers</a>
      </div>
     
          <button className="btn btn-outline-primary my-2 my-sm-0 m-2" type="submit">
            Search
          </button>
      </nav>
    </div>
  );
};
export default Navbar;
