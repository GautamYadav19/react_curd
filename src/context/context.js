import axios from "axios";
import { createContext, useState } from "react";

export const context=createContext();

export const DataContext=({children})=>{

    const [userData,setUserData]=useState();
    const [usersData,setUsersData]=useState();

    
    const createUser =()=>{
        // console.log('api call',data)
        const data={
            username:"yesy",
            email:'gmail',
            password:"sddd"
        }
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
    var obj={
        createUser:createUser,
        userData:userData,
        getUser:getUser,
        usersData:usersData
    }
    return(<context.Provider value={obj}>{children}</context.Provider>)

}