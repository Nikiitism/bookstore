import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Login from './Login.jsx';
import { useForm } from "react-hook-form";

function Signup() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    const [showLogin, setShowLogin] = useState(false);

    return (
        <>
            <div className='flex h-screen items-center justify-center'>
                <div className='w-[600px] '>
                    <div className="bg-white modal-box">
                        <form method="dialog" onSubmit={handleSubmit(onSubmit)} >
                            {/* if there is a button in form, it will close the modal */}
                            <Link
                                to="/"
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                            <h3 className="font-bold text-lg">Sign up</h3>

                            {/* Name */}
                            <div className='mt-4 space-y-2'>
                                <span>Name</span>
                                <br />
                                <input
                                    type="text"
                                    placeholder='Enter your fullname '
                                    className='w-80 py-1 px-3 border rounded-md outline-none bg-white'
                                    {...register("name", { required: true })}
                                />
                                <br />
                                {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>

                            {/* Email */}
                            <div className='mt-4 space-y-2'>
                                <span>Email</span>
                                <br />
                                <input
                                    type="email"
                                    placeholder='Enter your email '
                                    className='w-80 py-1 px-3 border rounded-md outline-none bg-white'
                                    {...register("email", { required: true })}
                                />
                                <br />
                                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>

                            {/* Password */}
                            <div className='mt-4 space-y-2'>
                                <span>Password</span>
                                <br />
                                <input
                                    type="password"
                                    placeholder='Enter your password'
                                    className='w-80 py-1 px-3 border rounded-md outline-none bg-white'
                                    {...register("password", { required: true })}
                                />
                                <br />
                                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>

                            {/* Button */}
                            <div className='flex justify-around mt-7'>
                                <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Sign up</button>
                                <p className='text-xl'>Already registered?
                                    <button
                                        className='underline text-blue-500 cursor-pointer '
                                        onClick={() => document.getElementById("my_modal_3").showModal()}>
                                        Login
                                    </button>
                                    {/* <Login /> */}
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
                {showLogin && <Login />}
            </div>
        </>
    )
}

export default Signup
