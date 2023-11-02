import React from "react";
import "./Social.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Social({socialLink}) {
    return(
    <>          
            <button className="social-button">
                <FontAwesomeIcon  className="social-icon" icon={socialLink.fontId} />
            </button>
    </>
    );
}

export default Social;