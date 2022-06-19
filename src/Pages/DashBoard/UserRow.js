import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index,refetch }) => {
    console.log(user)
    const { email,role } = user;
    // 75(7).........
    const makeAdmin=()=>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method:'PUT',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            refetch()
            toast.success('successfully made an admin')
        })
    }
    return (

        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            {/* 75(7)........... */}
            <td>{role !=='Admin'&& <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
            <td><button class="btn btn-xs">Remove User</button></td>
        </tr>


    );
};

export default UserRow;