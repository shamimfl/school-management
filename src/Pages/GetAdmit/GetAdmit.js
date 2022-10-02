import React from 'react';
import { useState } from 'react';

const GetAdmit = () => {

    const [info, setInfo] = useState({})

    const makeAdmit = e => {
        e.preventDefault()

        const name = e.target.name.value
        const roll = e.target.roll.value
        const fee = e.target.fee.value
        const group = e.target.group.value
        const className = e.target.class.value
        const info = { name, roll, fee, group, className }
        setInfo(info)
        e.target.reset()
    }

    console.log(info)

    return (
        <div className='md:p-10 md:flex justify-between gap-10' >
            <form onSubmit={makeAdmit} className='p-5 shadow lg:w-2/4 text-center'>
                <input name='name' type="text" placeholder='Student Name' className='p-2 w-full focus:outline-none mt-2 border-2' />
                <input name='class' type="number" placeholder='class Name' className='p-2 w-full focus:outline-none mt-2 border-2' />
                <input name='roll' type="number" placeholder='Roll' className='p-2 w-full focus:outline-none mt-2 border-2' />
                <input name='fee' type="number" placeholder='Fee Paid' className='p-2 w-full focus:outline-none mt-2 border-2' />
                <input name='group' type="text" placeholder='Group' className='p-2 w-full focus:outline-none mt-2 border-2' />
                <input type="submit" value="Make Admit" className='button' />
            </form>
            <div className='w-2/4'>
                <div className='border-2 border-dashed border-red-400 p-5 relative  h-full'>
                    <h1 className='text-center  text-sm font-bold uppercase '>Dinajpur City High School</h1>
                    <div className='flex justify-between mt-10 gap-5'>
                        <p className='font-semibold w-full border-b-2 border-black border-dotted'>Name : {info.name}</p>
                        <p className='font-semibold w-full border-b-2 border-black border-dotted'>Roll : {info.roll}</p>
                    </div>
                    <div className='flex justify-between mt-5 gap-5'>
                        <p className='font-semibold border-b-2 border-black border-dotted w-full'>Fee : {info.fee}</p>
                        <p className='font-semibold border-b-2 border-black border-dotted w-full'>Group : {info.group}</p>
                        <p className='font-semibold border-b-2 border-black border-dotted w-full'>Class : {info.className}</p>
                    </div>
                    <div className='mt-5'>
                        <span className='flex items-center gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-green-500 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <p className='text-sm font-bold '>Must be present at specified time.</p>
                        </span>
                        <span className='flex items-center gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-green-500 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <p className='text-sm font-bold '>Must be present at specified time.</p>
                        </span>
                        <span className='flex items-center gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-green-500 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <p className='text-sm font-bold '>Must be present at specified time.</p>
                        </span>
                        <span className='flex items-center gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-green-500 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <p className=' text-sm font-bold '>Mobiles, books will not be acceptable </p>
                        </span>
                    </div>
                    <div className='absolute bottom-4 right-5 w-2/4'>
                        <p className='w-full border-b-2 border-black border-dotted '></p>
                        <p className='text-sm font-bold text-center'>Principal (DCHS)</p>
                    </div>
                </div>
                <button className='btn bg-green-500 mt-5 border-0 rounded'>Print</button>
            </div>
        </div>
    );
};

export default GetAdmit;