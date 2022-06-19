import React from 'react';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const SingnUp = () => {
    // Google singn in.................
    const [signInWithGoogle, guser, gLoading, gerror] = useSignInWithGoogle(auth);

    // react-hook-form.....
    const { register, formState: { errors }, handleSubmit } = useForm();

    // create user,......
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    //Update user name/profile.............
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    // mod 75......
      const [token]=useToken(user || guser)


    // navigate.........

    const navigate=useNavigate();

    let errorMessage;
    if (error || gerror ||updateError) {
        errorMessage = <p className='text-red-500'>Error: {error?.message || gerror?.message||updateError?.message}</p>;
    }

    if (loading || gLoading||updating) {
        return <Loading></Loading>
    }

    const onSubmit = async data => {
        console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName:data.name});
        alert('Updated profile');
        console.log('Update done')
        navigate('/appointment')
    };

    if(user|| guser){
        console.log(user,guser)
    }

    // mod 75....
    if(token){
        navigate('/appointment')
    }

    return (
        <div className='grid justify-items-center content-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl ">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold">Sign Up</h2>
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
                                <span class="label-text">password</span>
                                {/* <span class="label-text-alt">Alt label</span> */}
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                class="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 Characters or Longer' // JS only: <p>error message</p> TS only support string
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.password?.type === 'required' && <span className=' label-text-alt text-red-500'>{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className=' label-text-alt text-red-500'>{errors.password.message}</span>}

                            </label>
                        </div>
                        {/* error................. */}
                        {errorMessage}
                        <input className='btn w-full' type="submit" value="Sign Up" />

                        {/* React Hook form *.........................../}

                        {/* <input {...register("firstName", { required: true })} />
                        {errors.firstName?.type === 'required' && "First name is required"}

                        <input {...register("lastName", { required: true })} />
                        {errors.lastName && "Last name is required"}

                        <input type="submit" /> */}

                    </form>

                    <p><small>Already have an Account? <Link to='/login' className='text-secondary'>Please Login</Link></small></p>

                    <div class="divider">OR</div>

                    <button
                        onClick={() => signInWithGoogle()}
                        class="btn btn-active btn-primary"
                    >Continue With Google</button>

                </div>
            </div>
        </div>
    );
};

export default SingnUp;