// import React from 'react';
// import { useQuery } from 'react-query';
// import Loading from '../Shared/Loading';

// // mod 76(5)..
// const ManageDoctor = () => {
//     // (React Query)...

//     const{data:doctors,isLoading}=useQuery('doctors',()=>fetch('http://localhost:5000/doctor',{
//         // method:'GET',
//         headers:{
//             authorization: `Bearer ${localStorage.getItem('accessToken')}`
//         }
//     }).then(res=>res.json()))
//     if(isLoading){
//         <Loading></Loading>
//     }
//     return (
//         <div>
//             <h2 className='text-2xl'>Manage Doctors: {doctors.length} </h2>
//         </div>
//     );
// };

// export default ManageDoctor;


import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import DoctorRow from './DoctorRow';

// mod 76(5)...
const ManageDoctor = () => {
    
    // mod 76(9)..
    const [deletingDoctor,setDeletingDoctor]=useState(null);

    const { data: doctors, isLoading,refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
    
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-2xl">Manage Doctors: {doctors.length}</h2>
            {/* <h2 className="text-2xl">Manage Doctors: {doctors}</h2> */}

            {/* mod 76(6)... */}
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            doctors.map((doctor,index)=><DoctorRow
                                key={doctor._id}
                                doctor={doctor}
                                index={index}
                                refetch={refetch}
                                setDeletingDoctor={setDeletingDoctor}
                            >

                            </DoctorRow>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
            {/* // mod 76(9).. */}
                        {
                            deletingDoctor && <DeleteConfirmModal
                                deletingDoctor={deletingDoctor}
                                refetch={refetch}
                                setDeletingDoctor={setDeletingDoctor}
                            >

                            </DeleteConfirmModal>
                        }
        </div>
    );
};

export default ManageDoctor;