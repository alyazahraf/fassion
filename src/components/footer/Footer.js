import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="info">
                    <h2 className="footer-title">Fassion</h2>
                    <h3>Jl. xxx Kel. xxx Kec. xxx </h3>
                    <h3>Semarang, Jawa Tengah</h3>
                    <div className="telp">
                        <AiFillPhone className="icon-footer" />
                        <h3>088121821389</h3>
                    </div>
                </div>

                <div className="categories">
                    <h2 className="category-title">Categories</h2>
                    <ul>
                        <li><Link to="">Shirt</Link></li>
                        <li><Link to="">Pants</Link></li>
                        <li><Link to="">Hat</Link></li>
                        <li><Link to="">Shoes</Link></li>
                    </ul>
                </div>

            </div>
            <div className="collab">
                <h3 className="collabs"><FaGithub className="icon-collab"/>alyazahraf collaborated with <FaGithub className="icon-collab"/> adiviaka</h3>
            </div>
        </footer>
    )
}

export default Footer;
