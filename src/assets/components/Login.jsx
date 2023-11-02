import React from "react";
import "../components/Login.css";
import Social from "./Social";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);


function Login() {

    const socialLinks = [
        {
            name: "Facebook",
            fontId: ["fab", "facebook"],
        },
        {
            name: "Github",
            fontId: ["fab", "github"],
        },
        {
            name: "Linkedin",
            fontId: ["fab", "linkedin"],
        }
    ];
    
    return (
        <>
            {socialLinks.map((link, index) => (
                <Social key={index} socialLink={link} />
            ))}
        </>
    );
}

export default Login;