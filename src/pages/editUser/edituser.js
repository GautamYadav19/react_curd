import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const  Editform=()=>{
  const location =useLocation();
  const setUserEditForm =location?.state?.data
  const [name,setname]=useState();
  useEffect(()=>{
setname(setUserEditForm.username)
},[])
console.log(setUserEditForm)
console.log(name)
return(
    <div className="container">
    <form action="">
      name
      <input type="text" value={name} onChange={(e)=>{
setname(e.target.value)
      }}/>
      password
      <input type="text" />
      <button type="submit">submit</button>
    </form>
  </div>
)
}
export  default Editform;
