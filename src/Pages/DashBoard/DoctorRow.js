import React from 'react';
import { toast } from 'react-toastify';


// mod 76(6)...
const DoctorRow = ({ doctor, index,setDeletingDoctor, refetch }) => {
    const { name, specialty, email, img } = doctor;

    // const handleDelete = () => {
    //     fetch(`http://localhost:5000/doctor/${email}`, {
    //         method: 'DELETE',
    //         headers: {
    //             authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             if (data.deletedCount) {
    //                 toast.success(`Doctor ${name} is deleted`);
    //                 refetch();
    //             }
    //         })

    // }
    return (
        <tr>
            <th>{index + 1}</th>
            <th>
                <div class="avatar">
                    <div class="w-24 mask mask-hexagon">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{specialty}</td>
            <td>
                <label onClick={()=>setDeletingDoctor(doctor)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
                
            </td>
        </tr>
    );
};

export default DoctorRow;