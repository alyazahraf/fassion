import React from 'react'

const Cart = () => {
    const [checked, setChecked] = React.useState(true);
    return (
        <div className='px-8 py-24 lg:top-10 lg:px-24'>
            <div className=' gap-5 flex flex-row justify-between'>
                <div className='flex flex-col w-full'>
                    <div>
                        <h1 className='text-lg text-dark-blue pb-2 pl-4'>My Cart</h1>
                        <div className='flex border-b-2'>
                            <input name='gender' type="checkbox" />
                            <label className='profile-account text-black font-normal'>Check All</label>
                        </div>
                    </div>
                    <div>
                        <div className='flex pt-3 align-start'>
                            <input name='gender' type="checkbox" />
                            <div className='flex flex-col'>
                                <label className='profile-account text-black font-normal'>Kurma Arab</label>
                                <h3 className='pl-1'>Semarang</h3>
                            </div>
                        </div>
                        <div className='flex pt-3 align-start'>
                            <input name='gender' type="checkbox" />
                            <div className='flex flex-col'>
                                <label className='profile-account text-black font-normal'>Kurma Arab</label>
                                <h3 className='pl-1'>Semarang</h3>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className='count-container total'>
                    <h3>Cart Summary</h3>
                    <div className='total border-b-2 pb-2 text-blue-gray'>
                        <h3>Subtotal</h3>
                        <h3>RpX.xxx</h3>
                    </div>
                    <div className='total'>
                        <h3>Total</h3>
                        <h3>RpX.xxx</h3>
                    </div>
                    <div className='cart'>
                        <button>Buy</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Cart