import React from 'react'

const NewAddress = () => {
    return (
        <div className='px-8 py-24 lg:top-10 lg:px-36 lg:py-24 bg-light-gray'>
            <div className='px-12 lg:px-24 py-10  gap-12 flex flex-col border rounded-xl border-blue-gray bg-white'>
                <div className=''>
                    <h1 className='text-xl text-dark-blue pb-2'>New Address</h1>
                </div>
                <div className='flex gap-5 lg:gap-9 flex-col'>
                    <div className='address-input'>
                        <input className='input text-input ' type="text" placeholder='First Name' />
                        <div>
                            <input className='input text-input' type="text" placeholder='Last Name' />
                        </div>
                    </div>
                    <div className='address-input'>
                        <input className='input text-input' type="text" placeholder='Province' />
                        <div>
                            <input className='input text-input' type="text" placeholder='City' />
                        </div>
                    </div>
                    <div className='address-input'>
                        <input className='input text-input' type="text" placeholder='Village' />
                        <div>
                            <input className='input text-input' type="text" placeholder='District' />
                        </div>
                    </div>
                    <div className='address-input'>
                        <input className='input text-input' type="text" placeholder='Postal Code' />
                        <div>
                            <input className='input text-input' type="text" placeholder='Contact' />
                        </div>
                    </div>
                    <div className='address-input '>
                        <input className='input text-input lg:w-screen' type="text" placeholder='Street name, street sign, and house number' />
                    </div>

                </div>
                <div className='flex justify-end pr-5'>
                    <button className='w-fit modal-button px-6 py-2 '>Save</button>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default NewAddress