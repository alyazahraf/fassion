import React from 'react';
import { useState } from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';
import { HiUserCircle } from 'react-icons/hi';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import Login from '../authentication/Login';
import Register from '../authentication/Register';


const Header = (props) => {
    const { isUserLoggedIn, userAuth } = props;
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

    //     const [isOpen, setIsOpen] = useState(false);

    const openLogin = () => {
        console.log('open login');
        props.setIsLoginOpen(true)
    }

    const openRegister = () => {
        console.log('open register');
        props.setIsRegisterOpen(true)
    }

    // const dropdownList = ShowSubmenu ? (<>
    //     <li className='nav-drop'><a className='nav-href' onClick={openLogin}>Login</a></li>
    //     <li><a className='nav-href' onClick={openRegister} >Register</a></li>
    // </>) : (<>
    //     <li className='nav-drop'><a className='nav-href' onClick={openLogin}>Login</a></li>
    //     <li><a className='nav-href' onClick={openRegister} >Register</a></li>
    // </>)

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
                    <ul className={ShowMenu ? "nav" : "nav-links"} onClick={() => setShowMenu(false)}>
                        <li><a className='nav-href' href="/" >Home</a></li>
                        <li><a className='nav-href' href="/products">Products</a></li>
                        <li className='nav-drop lg:hidden'><a className='nav-href' onClick={openLogin}>Login</a></li>
                        <li className='lg:hidden'><a className='nav-href' onClick={openRegister} >Register</a></li>
                        <div className='nav-icon hidden lg:flex'>
                            <ul className='nav-profil'>
                                <li ><HiUserCircle className='icon-profil' onClick={toggleSubmenu} /> </li>
                                <li onClick={toggleSubmenu} ><RiArrowDropDownLine className="icon-profil" />
                                    <ul className="dropdown" style={{ display: ShowSubmenu ? 'block' : 'none' }}>
                                        <li className='nav-drop'><a className='nav-href' onClick={openLogin}>Login</a></li>
                                        <li><a className='nav-href' onClick={openRegister} >Register</a></li>
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
                                            <li className='nav-drop'><a className='nav-href' onClick={openLogin}>User</a></li>
                                            <li><a className='nav-href' onClick={openRegister} >Logout</a></li>
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