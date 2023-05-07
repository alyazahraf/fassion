import React, { useEffect } from 'react'
import { HiOutlinePencil } from 'react-icons/hi'
import { AiOutlineUser } from 'react-icons/ai'
import { BsCartCheck, BsFillCaretDownFill } from 'react-icons/bs'
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext'

const Profile = (props) => {

    const navigate = useNavigate();
    const [profileList, setProfileList] = React.useState(false)

    useEffect(() => {
        props.setHeaderChildren(
            <React.Fragment>
                <div >
                    <h1 className='nav-href border-t lg:hidden'>Profile</h1>
                    <h1 className='nav-href lg:hidden' >Address</h1>
                    <h1 className='nav-href lg:hidden'>Order</h1>
                </div>
            </React.Fragment>
        )

    }, [])

    return (
        <div className='profile-container'>
            <div className='profile-card'>
                <div className='profile'>
                    <img src="rapunzel.png" className='profil-icon'></img>
                    <div className='profile-name'>
                        <h3 className='list-input' >Alya Zahra</h3>
                        <div className='profile-edit'>
                            <HiOutlinePencil className='text-dark-blue' />
                            <h3 className='profile-text'>Edit Profile</h3>
                        </div>
                    </div>
                </div>
                <div className='profile-info'>
                    <div className='profile-edit justify-between cursor-pointer' onClick={() => {
                        setProfileList(!profileList)
                    }}>
                        <div className='profile-edit'>
                            <AiOutlineUser className='text-dark-blue' />
                            <h2 className='profile-account '>My Account</h2>
                        </div>
                        <BsFillCaretDownFill className='text-dark-blue' />
                    </div>
                    {profileList && <div className='profile-list'>
                        <h2 className='profile-account pl-0' onClick={() => navigate("/profile")}>Profile</h2>
                        <h2 className='profile-account pl-0' onClick={() => navigate("/address")}>Address</h2>
                    </div>}
                    <div className='profile-edit'>
                        <BsCartCheck className='text-dark-blue' />
                        <h2 className='profile-account'>Order</h2>
                    </div>
                </div>
                <div>
                </div>

            </div>
            <div className='profile-item'>
                <div className='profile-title border-b-2'>
                    <h1 className='mb-2 text-dark-blue text-2xl font-bold'>My Profile</h1>
                </div>
                <div>
                    <div className='profile-item-list'>
                        <div className='profile-input'>
                            <h3 className='list-input'>First Name</h3>
                            <input className='input text-input' type="text" />
                        </div>
                        <div className='profile-input'>
                            <h3 className='list-input'>Last Name</h3>
                            <input className='input text-input' type="text" />
                        </div>
                        <div className='profile-input'>
                            <h3 className='list-input'>Contact</h3>
                            <input className='input text-input' type="text" />
                        </div>
                        <div className='profile-input'>
                            <h3 className='list-input'>Gender</h3>
                            <div className='profile-gender  lg:w-96 flex gap-5'>
                                <div className='flex'>
                                    <input name='gender' type="radio" />
                                    <label className='profile-account text-black font-normal'>Male</label>
                                </div>
                                <div className='flex'>
                                    <input name='gender' type="radio" id='female' />
                                    <label className='profile-account text-black font-normal' for='female'>Female</label>
                                </div>
                            </div>
                        </div>
                        <div className='profile-input'>
                            <h3 className='list-input'>Birthdate</h3>
                            <input className='input text-input' type="date" />
                        </div>
                        <div className='profile-input'>
                            <h3 className='list-input'>Password</h3>
                            <input className='input text-input' type="text" />
                        </div>
                        <div className='profile-input'>
                            <h3 className='list-input'>New Password</h3>
                            <input className='input text-input' type="text" />
                        </div>
                    </div>
                </div>
                <div className='flex justify-end pr-10'>
                    <button className='w-fit modal-button px-6 py-2 '>Save</button>
                </div>
            </div>
            <div className='flex justify-around'>
                <div className='lg:pt-16 px-10 flex flex-col'>
                    <img src='rapunzel.png' className='w-40 h-40' />
                    <div className='pl-2'>
                        <input type="file" id='file' className='hidden' />
                        <label className='w-fit modal-button px-6 py-2 ' for="file">Change Profile</label>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile
