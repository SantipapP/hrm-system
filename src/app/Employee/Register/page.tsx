"use client";
import React from 'react'
import { useState } from 'react'
import axios from 'axios';
// import Image from 'next/image'
import { LocalURL } from '@/app/Hooks/URL_API';
import Sidebar from '@/app/Components/Sidebar'
function Register() {
    const [EMP_ID, setEMP_ID] = useState('')
    const [EMP_NAME, setEMP_NAME] = useState('')
    const [EMP_NATIONAL_ID, setEMP_NATIONAL_ID] = useState('')
    const [EMP_DOB, setEMP_DOB] = useState('')
    const [EMP_GENDER, setEMP_GENDER] = useState('')
    const [EMP_NATIONAL, setEMP_NATIONAL] = useState('')
    const [EMP_ADDRESS, setEMP_ADDRESS] = useState('')
    const [EMP_EMAIL, setEMP_EMAIL] = useState('')
    const [EMP_PHONE, setEMP_PHONE] = useState('')
    const [EMP_JOB_TITLE, setEMP_JOB_TITLE] = useState('')
    const [EMP_DEPARTMENT, setEMP_DEPARTMENT] = useState('')
    const [EMP_TYPE, setEMP_TYPE] = useState('')
    const [EMP_JOIN_DATE, setEMP_JOIN_DATE] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const payloadData = {
            "EMP_ID": EMP_ID,
            "EMP_NAME": EMP_NAME,
            "EMP_NATIONAL_ID": EMP_NATIONAL_ID,
            "EMP_DOB": EMP_DOB,
            "EMP_GENDER": EMP_GENDER,
            "EMP_NATIONAL": EMP_NATIONAL,
            "EMP_ADDRESS": EMP_ADDRESS,
            "EMP_EMAIL": EMP_EMAIL,
            "EMP_PHONE": EMP_PHONE,
            "EMP_JOB_TITLE": EMP_JOB_TITLE,
            "EMP_DEPARTMENT": EMP_DEPARTMENT,
            "EMP_TYPE": EMP_TYPE,
            "EMP_JOIN_DATE": EMP_JOIN_DATE
        }

        try {
            const RegisterResponse = await axios.post(`${LocalURL}/Employee/RegisterEmployee`, payloadData,{
                headers: {
                    'Content-Type': 'application/json'
                },
                validateStatus(status) {
                    return status < 500
                },
            })
            console.log(RegisterResponse);
        } catch (error) {
            console.log(error);
        }    
    }

    return (
        <>
            <div className="flex">
                <div className="z-20 w-64">
                    <Sidebar />
                </div>
                <div className="flex-1">
                    <div className="rounded-lg shadow-md m-4 ">
                        <div className="flex justify-end">
                            <div className='p-4'>
                                {/* <Image src="/" className='w-40 h-40 border-4 border-white shadow-lg' alt='pic' width={200} height={200} /> */}
                            </div>
                        </div>
                        <hr className='mx-4' />
                        <form onSubmit={handleSubmit}>
                            <h2 className='mx-4 mt-4 text-2xl'>Personal Information</h2>
                            <div className="flex flex-row p-4">
                                <div className="basis-1/6 m-4">
                                    <h1 className="text-sm font-bold">Employee ID</h1>
                                    <input type="text" value={EMP_ID} onChange={(e) => setEMP_ID(String(e.target.value))} className='w-full h-10 bg-transparent placeholder:text-green-500 text-green-700 text-sm border border-green-400 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-green-500 hover:border-green-500 shadow-sm focus:shadow-md' />
                                </div>
                                <div className='basis-2/6 m-4'>
                                    <h1 className="text-sm font-bold">Employee Name</h1>
                                    <input type="text" value={EMP_NAME} onChange={(e) => setEMP_NAME(String(e.target.value))} className='w-full h-10 bg-transparent placeholder:text-green-500 text-green-700 text-sm border border-green-400 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-green-500 hover:border-green-500 shadow-sm focus:shadow-md' />
                                </div>
                                <div className='basis-1/6 m-4'>
                                    <h1 className="text-sm font-bold">Nationality ID</h1>
                                    <input type="text" value={EMP_NATIONAL_ID} onChange={(e)=>setEMP_NATIONAL_ID(e.target.value)} className='w-full h-10 bg-transparent placeholder:text-green-500 text-green-700 text-sm border border-green-400 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-green-500 hover:border-green-500 shadow-sm focus:shadow-md' />
                                </div>
                                <div className='basis-1/6 m-4'>
                                    <h1 className="text-sm font-bold">Date of Birth</h1>
                                    <input type="date" value={EMP_DOB} onChange={(e) => setEMP_DOB(e.target.value)} className='w-full h-10 bg-transparent placeholder:text-green-500 text-green-700 text-sm border border-green-400 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-green-500 hover:border-green-500 shadow-sm focus:shadow-md' />
                                </div>
                                <div className="basis-1/6 m-4">
                                    <h1 className="text-sm font-bold">Gender</h1>
                                    <select value={EMP_GENDER} onChange={(e) => setEMP_GENDER(e.target.value)} className='w-full h-10 bg-transparent placeholder:text-green-500 text-green-700 text-sm border border-green-400 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-green-500 hover:border-green-500 shadow-sm focus:shadow-md'>
                                        <option value="">-Select-</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-row p-4">
                                <div className='basis-1/8 m-4'>
                                    <h1 className="text-sm font-bold">Nationality</h1>
                                    <select value={EMP_NATIONAL} onChange={(e)=>setEMP_NATIONAL(e.target.value)} className='w-full h-10 bg-transparent placeholder:text-green-500 text-green-700 text-sm border border-green-400 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-green-500 hover:border-green-500 shadow-sm focus:shadow-md'>
                                        <option value="">-Select-</option>
                                    </select>
                                </div>
                                <div className='basis-3/8 m-4'>
                                    <h1 className="text-sm font-bold">Address</h1>
                                    <input type="text" value={EMP_ADDRESS} onChange={(e)=>setEMP_ADDRESS(e.target.value)} className='w-full h-10 bg-transparent placeholder:text-green-500 text-green-700 text-sm border border-green-400 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-green-500 hover:border-green-500 shadow-sm focus:shadow-md' />
                                </div>
                                <div className='basis-2/8 m-4'>
                                    <h1 className="text-sm font-bold">Email</h1>
                                    <input type="email" value={EMP_EMAIL} onChange={(e)=>setEMP_EMAIL(e.target.value)} className='w-full h-10 bg-transparent placeholder:text-green-500 text-green-700 text-sm border border-green-400 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-green-500 hover:border-green-500 shadow-sm focus:shadow-md' />
                                </div>
                                <div className='basis-2/8 m-4'>
                                    <h1 className="text-sm font-bold">Phone</h1>
                                    <input type="text" value={EMP_PHONE} onChange={(e)=>setEMP_PHONE(e.target.value)} className='w-full h-10 bg-transparent placeholder:text-green-500 text-green-700 text-sm border border-green-400 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-green-500 hover:border-green-500 shadow-sm focus:shadow-md' />
                                </div>
                            </div>
                            <hr className='mx-4' />
                            <h2 className='mx-4 mt-4 text-2xl'>Job & Organization Details</h2>
                            <div className="flex flex-row p-4">
                                <div className="basis-1/4 m-4">
                                    <h1 className="text-sm font-bold">Job Title</h1>
                                    <select value={EMP_JOB_TITLE} onChange={(e)=>setEMP_JOB_TITLE(e.target.value)} className='w-full h-10 bg-transparent placeholder:text-green-500 text-green-700 text-sm border border-green-400 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-green-500 hover:border-green-500 shadow-sm focus:shadow-md'>
                                        <option value="">-Select-</option>
                                    </select>
                                </div>
                                <div className='basis-1/4 m-4'>
                                    <h1 className="text-sm font-bold">Department</h1>
                                    <select value={EMP_DEPARTMENT} onChange={(e)=>setEMP_DEPARTMENT(e.target.value)} className='w-full h-10 bg-transparent placeholder:text-green-500 text-green-700 text-sm border border-green-400 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-green-500 hover:border-green-500 shadow-sm focus:shadow-md'>
                                        <option value="">-Select-</option>
                                    </select>
                                </div>
                                <div className='basis-1/4 m-4'>
                                    <h1 className="text-sm font-bold">Employee Type</h1>
                                    <select value={EMP_TYPE} onChange={(e)=>setEMP_TYPE(e.target.value)} className='w-full h-10 bg-transparent placeholder:text-green-500 text-green-700 text-sm border border-green-400 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-green-500 hover:border-green-500 shadow-sm focus:shadow-md'>
                                        <option value="">-Select-</option>
                                    </select>
                                </div>
                                <div className="basis-1/4 m-4">
                                    <h1 className="text-sm font-bold">Joining Date</h1>
                                    <input type="date" value={EMP_JOIN_DATE} onChange={(e)=>setEMP_JOIN_DATE(e.target.value)} className='w-full h-10 bg-transparent placeholder:text-green-500 text-green-700 text-sm border border-green-400 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-green-500 hover:border-green-500 shadow-sm focus:shadow-md' />
                                </div>
                            </div>
                            <hr className='mx-4' />
                            <div className='flex justify-end'>
                                <button type='submit' className='m-4 cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-2'>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
