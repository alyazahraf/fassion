import React from 'react';
import { useState } from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';
import { HiUserCircle } from 'react-icons/hi';
import { RiArrowDropDownLine } from 'react-icons/ri';


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

const Header = (props) => {
    const [ShowMenu, setShowMenu] = useState(true);

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

    return (
        <header>
            <div className="container">
                <div className="title">
                    <h1 className='nav-title'>Fassion</h1>
                </div>

                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <FaSearch className="icon-search" />
                </div>

                <div className="navbar" onClick={toggleMenu}>
                    <FaBars className="icon-bars" />
                </div>

                <div className="nav" >
                    <ul className="nav" style={{ display: ShowMenu ? 'inherit' : 'none' }}>
                        <li><a className='nav-href' href="/" >Home</a></li>
                        <li><a className='nav-href' href="/products">Products</a></li>
                        <li className='nav'><HiUserCircle /> </li>
                        <li className='nav' onClick={toggleSubmenu} ><RiArrowDropDownLine className="icon-drop" />
                            <ul className="dropdown" style={{ display: ShowSubmenu ? 'block' : 'none' }}>
                                <li className='nav-drop'><a className='nav-href' onClick={openLogin}>Login</a></li>
                                <li><a className='nav-href' onClick={openRegister} >Register</a></li>
                            </ul>
                        </li>
                        {/* <li><RiArrowDropDownLine className="icon-drop" /> */}
                        {/* </li> */}
                    </ul>
                </div>
            </div>

            {/* <Overlay isOpen={isOpen} setIsOpen={setIsOpen} />
            <Modal isOpen={isOpen} /> */}
            {/* <User /> */}
            {/* <button className="toggle" onClick={() => setMobileMenu(!MobileMenu)}>
                    {
                        MobileMenu ? <FaBars className="close" /> : <FontAwesomeIcon icon={faBars} className="open"></FontAwesomeIcon>
                    }
                </button> */}


        </header >
    )
}

export default Header