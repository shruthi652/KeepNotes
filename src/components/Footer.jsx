import React from "react";

function Footer(){
    const xmas = new Date();
    const year = xmas.getFullYear();
    return (
        <footer>
            <p>Copyright ⓒ {year}</p>
        </footer>
    );
}

export default Footer;