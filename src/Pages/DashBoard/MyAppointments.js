import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointments = () => {
    const [appointsments, setAppointments] = useState([])
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            // mod 74(7,8)....
            fetch(`http://localhost:5000/booking?patient=${user?.email}`,{
                // mod 75(4)
                method:'GET',
                headers:{
                    'authorization':`Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setAppointments(data)
                })
        }

    }, [user])
    return (
        <div>
            <h2>My Appointments:{appointsments.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            appointsments.map((a,index)=> <tr>
                                <th>{index+1}</th>
                                <td>{a.patientName}</td>
                                <td>{a.date}</td>
                                <td>{a.slot}</td>
                                <td>{a.treatment}</td>
                            </tr>)
                        }
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;