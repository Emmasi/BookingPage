import React from 'react';
function Footer(){
    return(
        <footer className="footer">
            <div className="footer__container">
            <a className="footer__item footer__item--link">Facebook</a>
            <a className="footer__item footer__item--link">Instagram</a>
            </div>
            <div className="footer__container">
            <address className=" footer__item footer__item--address">Hej hoppgatan 526 123 45 Stockholm</address>
            </div>

        </footer>
    )
}

export default Footer