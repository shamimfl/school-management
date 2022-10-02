import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from './logo.png'

const AdminLogin = () => {

    const navigate = useNavigate()

    const getAdmit =(e)=>{
        e.preventDefault()
        const EIIN = e.target.EIIN.value ;
        const key = e.target.key.value ;
        if(EIIN == '1230' && key == 'dinajpur'){
            navigate('/getAdmit')
        }else{
            toast.error('Rong EIIN OR Key')
        }
    }

    return (
        <form onSubmit={getAdmit} className='lg:w-1/3 md:2/4 w-full p-5 mx-auto bg-orange-100 rounded  mt-10 shadow text-center'>
            <img className='w-40 mx-auto' src={logo} alt="" />
            <input name='EIIN' type="text" className='p-2 w-full border-2 border-orange-400 focus:outline-none mt-5' placeholder='Enter Your School EIIN '/>
            <input name='key' type="text" className='p-2 w-full border-2 border-orange-400 focus:outline-none mt-5' placeholder='Enter Your Privet Key  '/>
            <input type="submit" className='button' value='Submit' />
        </form>
    );
};

export default AdminLogin;