import { useEffect } from "react"
import { useState } from "react"

// Admin......
// 75(8)
const useAdmin=user=>{
    const[admin,setAdmin]=useState(false)
    // 75(9).........
    const[adminLoading,setAdminloading]=useState(true)

    useEffect(()=>{
        const email=user?.email;
        if(email){
            fetch(`http://localhost:5000/admin/${email}`,{
                method:'GET',
                headers:{
                    'content-type':'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                setAdmin(data.admin)
                // 75(9).........
                setAdminloading(false)
            })
        }
    },[user])
    return [admin,adminLoading]
}
export default useAdmin;