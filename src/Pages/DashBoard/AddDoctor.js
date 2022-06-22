import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../Pages/Shared/Loading'

//  mod 76(1)...
const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit,reset } = useForm();

    // (React Query)...
    const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/services').then(res => res.json()))

    // 76(3)...
    const imageStorageKey = "2d59c7729d24b4215adc2da4eeab7ea0"
    const onSubmit = async data => {
        console.log('data', data) /*output..{name: 'jerry', email: 'jerry@gmail.com', specialty: 'Oral Surgery', image: FileList}
        email: "jerry@gmail.com"
        image: FileList {0: File, length: 1}
        name: "jerry"
        specialty: "Oral Surgery" */


        // 76(3)...
        // doctor (image)...set
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url=`https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url,{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        // aikhane (data) er poriborte (result) use kora hoise...
        .then(result=>{
            console.log('imgbb result',result)
            if(result.success){
                const img=result.data.url;
                const doctor={
                    name:data.name,
                    email:data.email,
                    specialty:data.specialty,
                    img:img
                }
                // mod 76(4).........
                //  send to database
                fetch('http://localhost:5000/doctor',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    
                    body:JSON.stringify(doctor)
                })
                .then(res=>res.json())
                .then(inserted=>{
                    console.log('doctor inserted',inserted) /* output..{acknowledged: true, insertedId: '62b2297fff81c8c2407a7869'}
                    acknowledged: true
                    insertedId: "62b2297fff81c8c2407a7869" */
                    if(inserted.insertedId){
                        toast.success('Doctor added successfully');
                        reset()
                    }
                    else{
                        toast.error('Failed to add Doctor')
                    }
                })
            }
        })
    };
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl'>Add a New Doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* DAISY */}
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Name</span>
                        {/* <span class="label-text-alt">Alt label</span> */}
                    </label>
                    <input
                        type="text"
                        placeholder="Name"
                        class="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is required'
                            }

                        })}
                    />
                    <label class="label">
                        {errors.name?.type === 'required' && <span className=' label-text-alt text-red-500'>{errors.name.message}</span>}

                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Email</span>
                        {/* <span class="label-text-alt">Alt label</span> */}
                    </label>
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        class="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'provide a valid email' // JS only: <p>error message</p> TS only support string
                            }
                        })}
                    />
                    <label class="label">
                        {errors.email?.type === 'required' && <span className=' label-text-alt text-red-500'>{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className=' label-text-alt text-red-500'>{errors.email.message}</span>}

                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Specialty</span>
                        {/* <span class="label-text-alt">Alt label</span> */}
                    </label>
                    <select  {...register("specialty")} class="input input-bordered select w-full max-w-xs">
                        {
                            services.map(service =>
                                <option
                                    key={service._id}
                                    value={service.name}
                                >
                                    {service.name}
                                </option>)
                        }

                    </select>

                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Photo</span>
                        {/* <span class="label-text-alt">Alt label</span> */}
                    </label>
                    <input
                        type="file"
                        class="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is required'
                            }

                        })}
                    />
                    <label class="label">
                        {errors.image?.type === 'required' && <span className=' label-text-alt text-red-500'>{errors.image.message}</span>}

                    </label>
                </div>

                <input className='btn w-full max-w-xs' type="submit" value="ADD" />
            </form>
        </div>
    );
};

export default AddDoctor;