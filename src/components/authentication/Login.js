import React from 'react'
import { useState } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import '../../App.css'

// const Navbar = ({ setIsOpen }) => (
//     <nav className="navbar">
//         <button className="material-symbols-outlined">home</button>
//         <button className="material-symbols-outlined">settings</button>
//         <button className="material-symbols-outlined">build</button>
//         <button
//             onClick={() => setIsOpen(true)}
//             className="material-symbols-outlined"
//         >
//             more_vert
//         </button>
//     </nav>
// );

// const Overlay = ({ isOpen, setIsOpen }) => (
//     <div
//         onClick={() => setIsOpen(false)}
//         className={`overlay ${isOpen ? "open" : ""}`}
//     />
// );

// const Modal = ({ isOpen }) => (
//     <div className={`modal ${isOpen ? "open" : ""}`}>
//         <h2>Side modal</h2>
//         <p>I am some text inside.</p>
//     </div>
// );

const Login = (props) => {

    return (
        <>
            <div className='overlay bg-black fixed opacity-50 top-0 bottom-0 left-0 right-0 z-10' onClick={() => { props.setIsLoginOpen(false) }}>

            </div>
            <div className='modal ' >
                <div className='modal-container'>
                    <MdOutlineClose className='cancel' onClick={() => { props.setIsLoginOpen(false) }} />
                    <div className='modal-header'>
                        <h1 className='modal-title'>Masuk</h1>
                        <a className='nav-href'>Daftar</a>
                    </div>
                    <div className='modal-content'>
                        <div>
                            <p className='modal-input'>Email</p>
                            <input type="text" className='input' placeholder="email@fassion.com" />
                        </div>
                        <div>
                            <p className='modal-input'>Password</p>
                            <input className='input' type="text" />
                        </div>
                        <div className=''>
                            <p className='forget'>Lupa kata sandi?</p>
                        </div>
                        <button className='modal-button'>Masuk</button>

                    </div>
                </div>

            </div>

        </>
    )
    // return (
    //     <>
    //         <Navbar setIsOpen={setIsOpen} />
    //         <Overlay isOpen={isOpen} setIsOpen={setIsOpen} />
    //         <Modal isOpen={isOpen} />
    //     </>
    // );
}

export default Login