"use client";
import React from 'react'
import Link from 'next/link';
import { useState } from 'react';
import { FaHome, FaBars, FaUserTie } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
function Sidebar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className="flex">
                <div className={`fixed top-0 left-0 h-full md:w-64 bg-gray-800 transition-width duration-300 text-white
                ${isOpen ? "w-64" : "w-15"}
                `}>
                    <div className="flex justify-between item-center p-4">
                        <h2 className={`text-xl fout-bold md:block ${isOpen ? "block" : "hidden"}`}>HRM App</h2>
                        <button className="block md:hidden" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <IoCloseSharp size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>

                    <nav className="mt-4">
                        <ul>
                            <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
                                <FaHome size={24} />
                                <span className={`ml-4 md:block ${isOpen ? "block" : "hidden"}`}>
                                    Home
                                </span>
                            </li>
                            <Link href={`/Employee`}>
                                <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
                                    <FaUserTie size={24} />
                                    <span className={`ml-4 md:block ${isOpen ? "block" : "hidden"}`}>
                                        Employee
                                    </span>
                                </li>
                            </Link>
                        </ul>
                    </nav>
                </div>
            </div >
        </>
    )
}

export default Sidebar
