import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

let UserContext = createContext()
export const UserProvider =({children}) =>{
  const [data,setdata] = useState({})
  async function manage(){
   let managedata = await axios.get(`https://62e0d51698dd9c9df6177ef5.mockapi.io/institute`)
   setdata(managedata.data)
  }
  useEffect(()=>{
    manage()
  },[])
    return (
        <UserContext.Provider value={{data}}>
          {children}
        </UserContext.Provider>
    )
}
export default UserContext