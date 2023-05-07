import React, { useEffect } from 'react';
import { useState } from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';
import { HiUserCircle } from 'react-icons/hi';
import { RiArrowDropDownLine, RiBillLine } from 'react-icons/ri';
import { AiOutlineClose, AiOutlineShoppingCart } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import Login from '../authentication/Login';
import Register from '../authentication/Register';
import axios from 'axios';


const Header = (props) => {
    useEffect(() => {
        if (!localStorage.getItem('token')) {
        }
    }, [])

    const navigate = useNavigate();

    const auth = JSON.parse(localStorage.getItem('user'));

    // const logout = () => {
    //     localStorage.removeItem('token');
    // }

    const handleLogout = (e) => {
        e.preventDefault()
        axios.post('http://127.0.0.1:8000/api/auth/logout', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + localStorage.getItem('access_token')
            }
        });
        localStorage.removeItem('access_token');
        localStorage.removeItem('user');
        console.log('logout');
    }

    const [ShowMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu((ShowMenu) => !ShowMenu)
        console.log(ShowMenu);
    }

    const [ShowSubmenu, setShowSubmenu] = useState(false);

    const toggleSubmenu = () => {
        setShowSubmenu((ShowSubmenu) => !ShowSubmenu)
        console.log(ShowSubmenu);
    }

    const openLogin = () => {
        console.log('open login');
        props.setIsLoginOpen(true)
    }

    const openRegister = () => {
        console.log('open register');
        props.setIsRegisterOpen(true)
    }

    return (
        <header>
            <div className="container">
                <div className="title">
                    <h1 className='nav-title'>Fassion</h1>
                </div>

                <div className="search">
                    <input className='Search' type="text" placeholder="Search..." />
                    <FaSearch className="icon-search" />
                </div>

                <div className="icon-bars" >
                    {ShowMenu ? <AiOutlineClose className="icon-bars" onClick={toggleMenu} /> : <FaBars className="icon-bars" onClick={toggleMenu} />}
                </div>

                <div className="nav" >
                    <ul className={ShowMenu ? "nav top-10" : "nav-links"} onClick={() => setShowMenu(false)}>
                        <li><a className='nav-link' href="/" >Home</a></li>
                        <li><a className='nav-link' href="/products">Products</a></li>
                        <li className='nav-drop lg:hidden'><a className='nav-href' onClick={openLogin}>Login</a></li>
                        <li className='lg:hidden'><a className='nav-href' onClick={openRegister} >Register</a></li>
                        <div className='nav-icon hidden lg:flex'>
                            <ul className='nav-profil'>
                                <li ><HiUserCircle className='icon-profil' onClick={toggleSubmenu} /> </li>
                                <li onClick={toggleSubmenu} ><RiArrowDropDownLine className="icon-profil" />
                                    <ul className="dropdown" style={{ display: ShowSubmenu ? 'block' : 'none' }}>
                                        {
                                            auth ?
                                                <>
                                                    <li className='flex flex-row p-2'><a className='text-dark-blue'>Login as {auth.email}</a>
                                                    </li>
                                                    <div className='profile-edit justify-between p-2 ' >
                                                        <div className='flex items-center nav-href p-0' onClick={() => navigate("/cart")}>
                                                            <AiOutlineShoppingCart />
                                                            <a >Cart</a>
                                                        </div>
                                                        <div className='px-2 bg-soft-pink rounded-full'>
                                                            <a className='text-yellow '>0</a>
                                                        </div>
                                                    </div>
                                                    <div className='profile-edit nav-href '>
                                                        <RiBillLine />
                                                        <a >Transaction</a>
                                                    </div>
                                                    {/* <button className='nav-href p-2' onclick={handleLogout}>Logout</button> */}
                                                    <li className='p-2 pl-1'><a className='nav-href p-2' onClick={handleLogout} >Logout</a></li>
                                                </> :
                                                <>
                                                    <li className='p-2'><a className='nav-href' onClick={openLogin}>Login</a></li>
                                                    <li className='p-2'><a className='nav-href' onClick={openRegister} >Register</a></li>
                                                </>
                                        }
                                    </ul>
                                    {/* {dropdownList} */}
                                    {/* {
                                    isUserLoggedIn ? (
                                        <ul>
                                            <li className='nav-drop'><a className='nav-href' onClick={openLogin}>Login</a></li>
                                            <li><a className='nav-href' onClick={openRegister} >Register</a></li>
                                        </ul>
                                    ) : (
                                        <ul>
                                            <li className='nav-drop'><a>Login as User</a></li>
                                            <li><AiOutlineShoppingCart/>Cart</li>
                                            <li><RiBillLine/>Transaction</li>
                                            
                                        </ul>
                                    )
                                } */}

                                </li>

                            </ul>

                        </div>
                        {props.children}


                        {/* <li><RiArrowDropDownLine className="icon-drop" /> */}
                        {/* </li> */}
                    </ul>
                    {props.isLoginOpen ? <Login setIsLoginOpen={props.setIsLoginOpen} setIsRegisterOpen={props.setIsRegisterOpen} /> : ""}
                    {props.isRegisterOpen ? <Register setIsRegisterOpen={props.setIsRegisterOpen} setIsLoginOpen={props.setIsLoginOpen} /> : ""}
                </div>
            </div>
        </header >
    )
}

export default Header