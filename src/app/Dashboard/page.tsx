import React from 'react'
import Sidebar from '../Components/Sidebar'
function Dashboard() {
    return (
        <>
            <div className="flex">
                <div className="z-20 w-64">
                    <Sidebar />
                </div>
                <div className="flex-1">
                    <div className="bg-gray-200 rounded-lg shadow-md m-4 ">
                        <div className="p-4">
                            <h2 className="text-xl font-bold">Welcome to Dashboard</h2>
                            <p className="text-gray-600">This is a simple dashboard page</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
