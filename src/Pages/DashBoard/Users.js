import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useState } from 'react';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

// 75(6).....
const Users = () => {
    // React Query....
    const { data: users, isLoading,refetch } = useQuery('users', () => fetch('http://localhost:5000/user',{
        // 75(7)....
        method:'GET',
        headers:{
            // 'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    /*
    const[users,setUsers]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/user')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setUsers(data)
        })
    },[])
    */
    return (
        <div>
            <h2 className='text-2xl'>All Users:{users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}

                        {
                            users.map((user,index)=><UserRow
                            key={user._id}
                            user={user}
                            index={index}
                            refetch={refetch}
                            >

                            </UserRow>)
                        }
                        
                        {/* {
                            users.map((user,index)=><tr>
                                <th>{index+1}</th>
                                <td>{user.email}</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>)
                        } */}
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;