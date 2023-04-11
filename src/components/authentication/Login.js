import React, { useEffect } from 'react'
import { useState } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import '../../App.css'
import Home from '../pages/Home'
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Login = (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = () => {
        console.log({ email, password })
        axios.post('http://127.0.0.1:8000/api/login', {
            email: email,
            password: password
        })
            .then(result => {
                console.log(result.data)
                alert('Login Success')
                navigate('/')
                props.userAuth()
            })
            .catch(error => {
                alert('Login Failed')
                console.log(error)
            })
    }

    return (
        <div>
            <div className='overlay bg-black fixed opacity-50 top-0 bottom-0 left-0 right-0 z-10' onClick={() => { props.setIsLoginOpen(false) }}>

            </div>
            <div className='modal ' >
                <div className='modal-container'>
                    <MdOutlineClose className='cancel' onClick={() => { props.setIsLoginOpen(false) }} />
                    <div className='modal-header'>
                        <h1 className='modal-title'>Login</h1>
                        <span onClick={
                            () => {
                                props.setIsLoginOpen(false)
                                props.setIsRegisterOpen(true)
                                // userAuth = { userAuth }
                            }
                        } className='nav-href'>Register</span>
                    </div>
                    <div className='modal-content'>
                        <div>
                            <p className='modal-input'>Email</p>
                            <input type="text" value={email} onChange={handleEmail} className='input' placeholder="email@fassion.com" required />
                        </div>
                        <div>
                            <p className='modal-input'>Password</p>
                            <input className='input' value={password} onChange={handlePassword} type="password" required />
                        </div>
                        <div className=''>
                            <p className='forget'>Forget Password?</p>
                        </div>
                        <button type='submit' className='modal-button' onClick={handleSubmit}>Login</button>

                    </div>
                </div>

            </div>
        </div >
    )
}

export default Login