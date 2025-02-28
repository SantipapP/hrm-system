"use client";
import React from 'react'
import { useParams } from 'next/navigation'
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
                <div className="flex-1">
                    <div className="bg-gray-200 rounded-lg shadow-md m-4 ">
                        <div className="p-4">
                            <h2 className="text-xl font-bold">This is info</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmployeeInfo
