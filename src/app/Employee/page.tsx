"use client";
import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link';
import axios from 'axios';
import { FaPlus, FaSearch, FaEdit, FaTrash } from 'react-icons/fa';
import { LocalURL } from '../Hooks/URL_API';
import type { Employee } from '../Interfaces/Employee';
import Sidebar from '../Components/Sidebar';
import { count } from 'console';


function Employee() {
    const [EmployeeData, setEmployeeData] = useState<Employee[]>([]);
    const [Loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage, setItemsPerPage] = useState<number>(10);
    const [searchTerm, setSearchTerm] = useState<string>("");

    useEffect(() => {
        setLoading(true);
        const fetchEmployee = async () => {
            try {
                const FetchResponse = await axios.post(`${LocalURL}/Employee/FetchEmployee`, {
                    "EMP_USERNAME": "",
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    validateStatus: function (status) {
                        return status < 500;
                    },
                });
                // console.log(FetchResponse.data['data']);
                setEmployeeData(FetchResponse.data['data']);
            }
            catch (error) {
                console.log(error);
            }
            finally {
                setLoading(false);
            }

        }
        fetchEmployee();

    }, [])

    const indexOfLastOperator = currentPage * itemsPerPage;
    const indexOfFirstOperator = indexOfLastOperator - itemsPerPage;

    const filteredEmps = EmployeeData.filter(emp =>
        emp.EMP_NAME.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const currentEmps = filteredEmps.slice(indexOfFirstOperator, indexOfLastOperator);

    return (
        <>
            <div className="flex">
                <div className="z-20 w-64">
                    <Sidebar />
                </div>
                <div className="flex-1 m-4">
                    <div className="flex flex-col lg:flex-row p-1 justify-between items-center mb-4 space-x-4">
                        <div className="flex items-center space-x-2">
                            <label htmlFor="itemsPerPage" className="mr-2">Items per page:</label>
                            <select
                                id="itemsPerPage"
                                value={itemsPerPage}
                                onChange={(e) => setItemsPerPage(Number(e.target.value))}
                                className="block px-4 py-2 pr-8 text-base leading-6 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                                <option value="20">20</option>
                            </select>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Link href="/Employee/Register">
                                <button className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-2"><FaPlus /></button>
                            </Link>
                            <input
                                type="text"
                                placeholder="Search Employee"
                                className="block w-full px-4 py-2 text-base leading-6 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            {/* <button type="button" className="btn btn-primary" onClick={OperModal('Operator_Form_Modal')}><FaPlus /></button> */}
                        </div>
                    </div>
                    <div className="rounded-lg shadow-md m-4 ">
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border border-gray-200 shadow-md rounded-lg overflow-hidden">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-800 dark:text-gray-300">
                                    <tr>
                                        <th className="px-4 py-3">ID</th>
                                        <th className="px-4 py-3">Name</th>
                                        <th className="px-4 py-3">Department</th>
                                        <th className="px-4 py-3">Position</th>
                                        <th className='px-4 py-3'>Role</th>
                                        <th className="px-4 py-3">Status</th>
                                        <th className="px-4 py-3 text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                                    {Loading ? (
                                        <tr>
                                            <td colSpan={7} className="text-center py-4">
                                                Loading...
                                            </td>
                                        </tr>
                                    ) : (
                                        currentEmps.length > 0 ? (
                                            currentEmps.map((Employee) => (
                                                <tr key={Employee.EMP_ID} className='hover:bg-gray-100'>
                                                    <td className="px-4 py-3">{Employee.EMP_ID}</td>
                                                    <td className="px-4 py-3">{Employee.EMP_NAME}</td>
                                                    <td className="px-4 py-3">{Employee.DEP_NAME}</td>
                                                    <td className="px-4 py-3">{Employee.JOT_NAME}</td>
                                                    <td className='px-4 py-3'>{Employee.EMP_ROLE}</td>
                                                    <td className="px-4 py-3">{Employee.EMP_STATUS}</td>
                                                    <td className="px-4 py-3 text-center">
                                                        <Link key={Employee.EMP_ID} href={`Employee/EmployeeInfo/[id]`} as={`Employee/EmployeeInfo/${Employee.EMP_ID}`}>
                                                            <button className="cursor-pointer bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full ml-2">
                                                                <FaSearch />
                                                            </button>
                                                        </Link>
                                                        <button className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-2">
                                                            <FaEdit />
                                                        </button>
                                                        <button className="cursor-pointer bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full ml-2">
                                                            <FaTrash />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan={7} className="text-center py-4 text-gray-500">
                                                    No data available
                                                </td>
                                            </tr>
                                        )
                                    )}
                                </tbody>
                                <tfoot>

                                </tfoot>
                            </table>
                        </div>
                    </div>
                    <div className="flex justify-center items-center my-4">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="px-4 py-2 mx-1 text-white bg-blue-500 rounded hover:bg-blue-600 disabled:bg-gray-400"
                        >
                            Previous
                        </button>
                        <span className="px-4 py-2 mx-1 border-t border-b text-blue-500">Page {currentPage}</span>
                        <button
                            onClick={() => setCurrentPage(prev => prev + 1)}
                            disabled={indexOfLastOperator >= filteredEmps.length}
                            className="px-4 py-2 mx-1 text-white bg-blue-500 rounded hover:bg-blue-600 disabled:bg-gray-400"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Employee
