import { useEffect } from "react"
import { useState } from "react"

const useToken=user=>{
    const[token,setToken]=useState('')

    useEffect(()=>{
        // console.log('token',user)
        const email=user?.user?.email;
        const currentUser={email:email};
        if(email){
            fetch(`https://boiling-sea-44852.herokuapp.com/user/${email}`,{
                method:'PUT',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log('data inside use Token', data)
                console.log('user token',data.token)
                const accessToken=data.token;
                localStorage.setItem('accessToken',accessToken)
                setToken(accessToken)
            })
        }
    },[user])
    return [token];
}
export default useToken;