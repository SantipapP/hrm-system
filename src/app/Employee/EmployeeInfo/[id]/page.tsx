"use client";
import React from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Sidebar from '@/app/Components/Sidebar'
function EmployeeInfo() {
    const params = useParams();
    console.log(params);
    return (
        <>
            <div className="flex">
                <div className="z-20 w-64">
                    <Sidebar />
                </div>
                <div className="flex-1 p-4">
                    <Link href='/Employee' className='bg-blue-500 text-white p-3 rounded-md'>Go Back</Link>
                    <div className="rounded-lg shadow-md m-4 ">
                        <div className="flex justify-end">
                            <div className='p-4'>
                                <Image src="" className='w-40 h-40 border-4 border-white shadow-lg' alt='pic' width={200} height={200} />
                            </div>
                        </div>
                        <hr className='mx-4' />
                        <h2 className='mx-4 mt-4 text-2xl'>Personal Information</h2>
                        <div className="flex flex-row p-4">
                            <div className="basis-1/6 m-4">
                                <h1 className="text-sm font-bold">Employee ID</h1>
                                <input type="text" className='w-full h-10 bg-transparent placeholder:text-green-500 text-green-700 text-sm border border-green-400 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-green-500 hover:border-green-500 shadow-sm focus:shadow-md' />
                            </div>
                            <div className='basis-2/6 m-4'>
                                <h1 className="text-sm font-bold">Employee Name</h1>
                                <input type="text" className='w-full h-10 bg-transparent placeholder:text-green-500 text-green-700 text-sm border border-green-400 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-green-500 hover:border-green-500 shadow-sm focus:shadow-md' />
                            </div>
                            <div className='basis-1/6 m-4'>
                                <h1 className="text-sm font-bold">Nationality ID</h1>
                                <input type="text" className='w-full h-10 bg-transparent placeholder:text-green-500 text-green-700 text-sm border border-green-400 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-green-500 hover:border-green-500 shadow-sm focus:shadow-md' />
                            </div>
                            <div className='basis-1/6 m-4'>
                                <h1 className="text-sm font-bold">Date of Birth</h1>
                                <input type="text" className='w-full h-10 bg-transparent placeholder:text-green-500 text-green-700 text-sm border border-green-400 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-green-500 hover:border-green-500 shadow-sm focus:shadow-md' />
                            </div>
                            <div className="basis-1/6 m-4">
                                <h1 className="text-sm font-bold">Gender</h1>
                                <input type="text" className='w-full h-10 bg-transparent placeholder:text-green-500 text-green-700 text-sm border border-green-400 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-green-500 hover:border-green-500 shadow-sm focus:shadow-md' />
                            </div>
                        </div>
                        <div className="flex flex-row p-4">
                            <div className='basis-1/8 m-4'>
                                <h1 className="text-sm font-bold">Nationality</h1>
                                <input type="text" className='w-full h-10 bg-transparent placeholder:text-green-500 text-green-700 text-sm border border-green-400 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-green-500 hover:border-green-500 shadow-sm focus:shadow-md' />
                            </div>
                            <div className='basis-3/8 m-4'>
                                <h1 className="text-sm font-bold">Address</h1>
                                <input type="text" className='w-full h-10 bg-transparent placeholder:text-green-500 text-green-700 text-sm border border-green-400 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-green-500 hover:border-green-500 shadow-sm focus:shadow-md' />
                            </div>
                            <div className='basis-2/8 m-4'>
                                <h1 className="text-sm font-bold">Email</h1>
                                <input type="text" className='w-full h-10 bg-transparent placeholder:text-green-500 text-green-700 text-sm border border-green-400 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-green-500 hover:border-green-500 shadow-sm focus:shadow-md' />
                            </div>
                            <div className='basis-2/8 m-4'>
                                <h1 className="text-sm font-bold">Phone</h1>
                                <input type="text" className='w-full h-10 bg-transparent placeholder:text-green-500 text-green-700 text-sm border border-green-400 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-green-500 hover:border-green-500 shadow-sm focus:shadow-md' />
                            </div>
                        </div>
                        <hr className='mx-4' />
                        <h2 className='mx-4 mt-4 text-2xl'>Job & Organization Details</h2>
                        <div className="flex flex-row p-4">
                            <div className="basis-1/4 m-4">
                                <h1 className="text-sm font-bold">Job Title</h1>
                                <input type="text" className='w-full h-10 bg-transparent placeholder:text-green-500 text-green-700 text-sm border border-green-400 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-green-500 hover:border-green-500 shadow-sm focus:shadow-md' />
                            </div>
                            <div className='basis-1/4 m-4'>
                                <h1 className="text-sm font-bold">Department</h1>
                                <input type="text" className='w-full h-10 bg-transparent placeholder:text-green-500 text-green-700 text-sm border border-green-400 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-green-500 hover:border-green-500 shadow-sm focus:shadow-md' />
                            </div>
                            <div className='basis-1/4 m-4'>
                                <h1 className="text-sm font-bold">Employee Type</h1>
                                <input type="text" className='w-full h-10 bg-transparent placeholder:text-green-500 text-green-700 text-sm border border-green-400 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-green-500 hover:border-green-500 shadow-sm focus:shadow-md' />
                            </div>
                            <div className="basis-1/4 m-4">
                                <h1 className="text-sm font-bold">Joining Date</h1>
                                <input type="text" className='w-full h-10 bg-transparent placeholder:text-green-500 text-green-700 text-sm border border-green-400 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-green-500 hover:border-green-500 shadow-sm focus:shadow-md' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmployeeInfo
