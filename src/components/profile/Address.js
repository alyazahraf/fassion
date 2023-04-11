import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { useNavigate } from "react-router-dom";


const Address = () => {
    const navigate = useNavigate();

    return (
        <div className='px-8 py-24 lg:top-10 lg:px-36 lg:py-24 bg-light-gray'>
            <div className='lg:px-24 py-10 gap-5 flex flex-col border rounded-xl border-blue-gray bg-white'>
                <div className='align-center lg:border-b flex justify-between'>
                    <div>
                        <h1 className='text-lg text-dark-blue pb-2'>My Address</h1>
                    </div>
                    <div className='flex justify-end pb-4'>
                        <button className='w-fit cart px-6 py-2 ' onClick={() => navigate("/new-address")}><AiOutlinePlus className="text-white text-base" />Add New Address</button>
                    </div>
                </div>
                <div className='border-b pb-3 flex flex-row justify-between'>
                    <div className='w-1/2'>
                        <p>Alya Zahra Fatikha | <span>(+62)88221278850</span></p>
                        <p>Jalan Pandanaran No. 119, Kel. Mugassari, Semarang Tengah, Kota Semarang, Jawa Tengah, Indonesia, 50131</p>
                    </div>
                    <div className='flex gap-10 text-yellow font-bold text-base cursor-pointer'>
                        <a>Edit</a>
                        <a>Delete</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Address