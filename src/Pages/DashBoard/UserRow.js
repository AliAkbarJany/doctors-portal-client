import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
    console.log(user)
    const { email, role } = user;
    // 75(7).........
    const makeAdmin = () => {
        fetch(`https://boiling-sea-44852.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('failed to made an admin')
                }
                return res.json()
            })
            .then(data => {
                console.log(data) /*output.. acknowlwdge:true  modifiedCount:1 */

                // mod 75(8)....
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('successfully made an admin')
                }

            })
    }
    return (

        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            {/* 75(7)........... */}
            <td>{role !== 'Admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>

            <td><button class="btn btn-xs">Remove User</button></td>
        </tr>


    );
};

export default UserRow;