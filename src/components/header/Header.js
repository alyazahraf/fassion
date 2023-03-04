import React from 'react';
import { useState } from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';
import { HiUserCircle } from 'react-icons/hi';
import { RiArrowDropDownLine } from 'react-icons/ri';

const Header = () => {
    const [ShowMenu, setShowMenu] = useState(true);

    const toggleMenu = () => {
        setShowMenu((ShowMenu) => !ShowMenu)
        console.log(ShowMenu);
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
                        <li><HiUserCircle /></li>
                        <li><RiArrowDropDownLine className="icon-drop" />
                        </li>
                    </ul>
                </div>
            </div>
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