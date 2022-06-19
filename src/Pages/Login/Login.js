import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading';

const Login = () => {
    const [signInWithGoogle, guser, gLoading, gerror] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    //  mod 75(3,4)
    const [token]=useToken(user || guser)

    // Require auth navigate...
    const navigate=useNavigate();
    const location=useLocation()
    let from = location.state?.from?.pathname || "/";


    // BHAI>>>>>>>>>
    //  mod 75(3,4),,,
    useEffect(()=>{
        if (token) {
            navigate(from, { replace: true });
        }
    },[token,from,navigate])

    /* 
    // AMAR system>>>>>>>>
    if(token){
        // navigate('/appointment')
        navigate(from, { replace: true });
    }
    */

    let errorMessage;
    if(error||gerror){
        errorMessage=<p className='text-red-500'>Error: {error?.message || gerror?.mssage}</p>;
    }

    if(loading||gLoading){
        return <Loading></Loading>
    }

    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
    };

    // Require Auth...
    
    
    return (
        <div className='grid justify-items-center content-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl ">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* DAISY */}
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
                                {errorMessage}
                        <input className='btn w-full' type="submit" value="Login" />

                        {/* React Hook form *.........................../}

                        {/* <input {...register("firstName", { required: true })} />
                        {errors.firstName?.type === 'required' && "First name is required"}

                        <input {...register("lastName", { required: true })} />
                        {errors.lastName && "Last name is required"}

                        <input type="submit" /> */}

                    </form>

                    <p><small>New to Doctors Portal? <Link to='/signUp' className='text-secondary'>Create New account </Link></small></p>

                    <div class="divider">OR</div>

                    <button
                        onClick={() => signInWithGoogle()}
                        class="btn btn-active btn-primary"
                    >
                        Continue With Google</button>

                </div>
            </div>
        </div>
    );
};

export default Login;