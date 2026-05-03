import { faEnvelope, faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useState } from 'react'

function SignUp() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signUp = async (e) => {

        e.preventDefault()

        try {

            const res = await axios.post(
                "http://localhost:8080/auth/signUp",
                {
                    userName: name,
                    email,
                    password
                }
            )

            alert(res.data)

            window.location.href = "/login"

        } catch (error) {

            console.log(error)

            alert(error.response?.data || "Signup failed")
        }
    }

    return (

        <div className='h-screen flex justify-center items-center bg-gray-200'>

            <form
                onSubmit={signUp}
                className='w-96 flex flex-col gap-5 rounded-lg p-6 bg-white'
            >

                <div className='flex flex-col justify-center items-center'>

                    <FontAwesomeIcon
                        icon={faUser}
                        className='text-3xl rounded-full bg-cyan-500 p-3'
                    />

                    <h1 className='text-xl'>Create Account</h1>

                    <p className='text-gray-400'>
                        Sign up to get started
                    </p>

                </div>

                {/* Name */}
                <div>

                    <label>Name</label>

                    <div className='flex items-center border rounded-md px-2'>

                        <FontAwesomeIcon
                            icon={faUser}
                            className='text-gray-500'
                        />

                        <input
                            type="text"
                            placeholder='Enter your name'
                            className='w-full h-10 outline-none pl-2'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                    </div>

                </div>

                {/* Email */}
                <div>

                    <label>Email</label>

                    <div className='flex items-center border rounded-md px-2'>

                        <FontAwesomeIcon
                            icon={faEnvelope}
                            className='text-gray-500'
                        />

                        <input
                            type="email"
                            placeholder='Enter your email'
                            className='w-full h-10 outline-none pl-2'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                    </div>

                </div>

                {/* Password */}
                <div>

                    <label>Password</label>

                    <div className='flex items-center border rounded-md px-2'>

                        <FontAwesomeIcon
                            icon={faLock}
                            className='text-gray-500'
                        />

                        <input
                            type="password"
                            placeholder='Enter your password'
                            className='w-full h-10 outline-none pl-2'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                    </div>

                </div>

                <button
                    type='submit'
                    className='bg-cyan-500 text-white h-10 rounded-md hover:bg-cyan-600'
                >
                    Sign Up
                </button>

            </form>

        </div>
    )
}

export default SignUp