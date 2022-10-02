import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Line from './line.png'

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='md:flex justify-between items-center bg-orange-500'>
            <div className='flex justify-between p-5'>
                <Link to={'/'} className='font-bold text-white text-3xl lg:w-60'>DCC -Dinajpur <img src={Line} alt="" /></Link>

                <div onClick={() => setOpen(!open)} className='md:hidden cursor-pointer'>
                    <div>
                        <div className='bg-white w-5 h-1'></div>
                        <div className='bg-white w-5 h-1 mt-1'></div>
                        <div className='bg-white w-5 h-1 mt-1'></div>
                    </div>
                </div>
            </div>
            <ul className={`md:flex justify-end absolute p-5 md:static  bg-orange-500  w-full duration-500 ease-in ${open ? 'top-15' : 'top-[-120px]'}`}>
                {/* <li className='md:mr-10 font-bold text-blue-600 focus:text-red-500'>About</li>
                <li className='md:mr-10 font-bold text-blue-600 focus:text-red-500'>Contract</li>
                <li className='md:mr-10 font-bold text-blue-600 focus:text-red-500'>Service</li>
                <li className='md:mr-10 font-bold text-blue-600 focus:text-red-500'>my account</li> */}
                <Link className='md:mr-10 font-bold text-white uppercase ' to='/'>Home</Link>
                <Link className='md:mr-10 font-bold text-white uppercase ' to='/'>About</Link>
                <Link className='md:mr-10 font-bold text-white uppercase ' to='/'>Contact</Link>
                <Link className='md:mr-10 font-bold text-white uppercase ' to='/'>Result</Link>
                <Link className='md:mr-10 font-bold text-white uppercase ' to='/'>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="text-center">Login</label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link className='text-sm text-black  btn-disabled '  to='/student'>Student</Link></li>
                            <li><Link className='button' to='/admin'>Admin</Link></li>
                        </ul>
                    </div>
                </Link>

            </ul>
        </div>
    );
};

export default Header;