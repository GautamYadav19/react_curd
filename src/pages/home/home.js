import React from "react";
import Navbar from "../../components/navbar/navbar";
const Home =()=>{
return (
    <div>
<Navbar/>
<div classNameName="container">
<div className="px-4 py-5 my-5 text-center">
  {/* <img className="d-block mx-auto mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> */}
  <h1 className="display-5 fw-bold">Welcome to our site</h1>
  <div className="col-lg-6 mx-auto">
    <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button type="button" className="btn btn-primary btn-lg px-4 gap-3"><a href="/list"></a> Primary button</button>
      <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>
    </div>
  </div>
</div>


</div>
    </div>
)
}
export default Home;