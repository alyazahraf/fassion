import React from 'react'
import { MdOutlineClose } from 'react-icons/md'
import Home from '../pages/Home'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Register = (props) => {
    const navigate = useNavigate();
    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const [gender, setGender] = useState('')
    const [contact, setContact] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [c_password, setC_password] = useState('')

    const handleSubmit = () => {
        console.log({ first_name, last_name, birthdate, gender, contact, email, password, c_password })
        axios.post('http://127.0.0.1:8000/api/register', {
            first_name: first_name,
            last_name: last_name,
            birthdate: birthdate,
            gender: gender,
            contact: contact,
            email: email,
            password: password,
            c_password: c_password
        })
            .then(result => {
                console.log(result.data)
                alert('Register Success')
            })
            .catch(error => {
                console.log(error.response)
                alert('Register Failed')
            })
    }

    return (
        <>
            <div className='overlay' onClick={() => { props.setIsRegisterOpen(false) }}>

            </div>
            <div className='modal' >
                <div className='register-container'>
                    <MdOutlineClose className='cancel' onClick={() => { props.setIsRegisterOpen(false) }} />
                    <div>
                        <h1 className='modal-title'>Register Now</h1>
                        <div className='modal-login'>
                            <p className='akun'>Already have an account?</p>
                            <span onClick={
                                () => {
                                    props.setIsRegisterOpen(false)
                                    props.setIsLoginOpen(true)
                                }}
                                className='masuk'>Login</span>
                        </div>
                    </div>
                    <div className='modal-register'>
                        <div>
                            <p className='modal-input'>First Name</p>
                            <input className='input' type="text" value={first_name} onChange={(e) =>
                                setFirst_name(e.target.value)} required />
                        </div>
                        <div>
                            <p className='modal-input'>Last Name</p>
                            <input className='input' type="text" value={last_name} onChange={(e) =>
                                setLast_name(e.target.value)} required />
                        </div>
                        <div>
                            <p className='modal-input'>Birth Date</p>
                            <input className='input' type="date" value={birthdate} onChange={(e) =>
                                setBirthdate(e.target.value)} required />
                        </div>
                        <div>
                            <p className='modal-input'>Gender</p>
                            <div className='profile-gender flex gap-5  '>
                                <div className='flex'>
                                    <input name='gender' type="radio" value="1" onChange={(e) =>
                                        setGender(e.target.value)} required />
                                    <label className='profile-account text-black font-normal'>Male</label>
                                </div>
                                <div className='flex'>
                                    <input name='gender' type="radio" id='female' value="2" onChange={(e) =>
                                        setGender(e.target.value)} required />
                                    <label className='profile-account text-black font-normal' for='female'>Female</label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='modal-input'>Contact</p>
                            <input className='input' type="text" value={contact} onChange={(e) =>
                                setContact(e.target.value)} required />
                        </div>
                        <div>
                            <p className='modal-input'>Email</p>
                            <input className='input' type="text" placeholder="email@fassion.com" value={email} onChange={(e) =>
                                setEmail(e.target.value)} required />
                        </div>
                        <div>
                            <p className='modal-input'>Password</p>
                            <input className='input' type="password" value={password} onChange={(e) =>
                                setPassword(e.target.value)} required />
                        </div>
                        <div>
                            <p className='modal-input'>Confirm Password</p>
                            <input className='input' type="password" value={c_password} onChange={(e) =>
                                setC_password(e.target.value)} required />
                        </div>
                        <div className='approve'>
                            <input type='checkbox' required />
                            <p className='daftar'>I have read and agree to the <span>Terms and Conditions </span> and <span>Privacy Policy</span></p>
                        </div>
                        <div>
                            <button type='submit' className='modal-button' onClick={handleSubmit}>Register</button>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}


export default Register