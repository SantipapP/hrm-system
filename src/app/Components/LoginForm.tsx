"use client";
import React from 'react'
import { useState } from 'react';
import { LocalURL } from '../Hooks/URL_API';
import axios from 'axios';
import Swal from 'sweetalert2';
function LoginForm() {
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const AuthData = {
            "EMP_ID": Username,
            "EMP_PASSWORD": Password
        }
        try {
            const AuthResponse = await axios.post(`${LocalURL}/Employee/AuthLogin`, AuthData, {
                headers: {
                    'Content-Type': 'application/json',
                },
                    validateStatus: function (status) {
                    return status < 500;
                },
            });
            if (AuthResponse.data['status'] === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Login Success',
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: `${error}`,
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    return (
        <>
            <section>
                <div className="bg-white rounded-xl relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
                    <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
                        <div className="flex flex-col items-center mb-8">
                            <h2 className="text-4xl text-black">HRM System</h2>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="mt-4 space-y-6">
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-gray-600">Username</label>
                                    <input
                                        type="text"
                                        className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                                        value={Username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-gray-600">Password</label>
                                    <input
                                        type="password"
                                        className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                                        value={Password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                <div className="col-span-full">
                                    <button
                                        type="submit"
                                        className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                                    >
                                        Login
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LoginForm
