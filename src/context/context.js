import axios from "axios";
import { createContext, useState } from "react";

export const context=createContext();

export const DataContext=({children})=>{

    const [userData,setUserData]=useState();
    const [usersData,setUsersData]=useState();
    const [editData,setUsersEditData]=useState();


    
    const createUser =(data)=>{
        axios.post('http://localhost:3000/api/createUsers',data).then(()=>{
            console.log("data inserted")
        }).catch(e=>{
            console.log( e)
        })
    }
    const getUser=()=>{
        axios.get('http://localhost:3000/api/getUsers').then((data)=>{
            setUsersData(data)    
        console.log("user data")


        }).catch(e=>{
            console.log(e)
        })
    }
    const editUser=(data)=>{
        axios.patch(`http://localhost:3000/api/edituser/${data.ID}`,data).then((data)=>{
            setUsersEditData(data)    
        console.log("user data updated")
        }).catch(e=>{
            console.log(e)
        })
    }
    // userdelete
    const userDelete=(data)=>{
        axios.delete(`http://localhost:3000/api/userdelete/${data.ID}`).then((data)=>{
            setUsersEditData(data)    
        console.log("Deleted")
        }).catch(e=>{
            console.log(e)
        })
    }
    var obj={
        createUser:createUser,
        userData:userData,
        getUser:getUser,
        usersData:usersData,
        editUser:editUser,
        editData:editData


    }
    return(<context.Provider value={obj}>{children}</context.Provider>)

}