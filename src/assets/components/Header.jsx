import React from "react";
import "../components/Header.css";
import logo from "../IMGS/Adopty.png";

function Header() {
    return (
        <>
            <header class="header border-bottom">
                <div class="nav-items d-flex flex-wrap align-items-center justify-content-center">
                    <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                    <img className="logo" src={logo} />
                    </a>

                    <ul class="ms-4 nav col-4 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="#" class="nav-link link-secondary">Home</a></li>
                    </ul>
                </div>
            </header>
        </>
    );
}

export default Header;