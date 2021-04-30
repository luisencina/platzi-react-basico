import React from 'react';
import '../assets/styles/components/Footer.scss'

const footer_terminos_text = "Terminos de uso"
const footer_privacidad_text = "Declaración de privacidad"
const footer_ayuda_text = "Centro de ayuda"

const Footer = () => (
    <footer className="footer">
        <a href="/">{footer_terminos_text}</a>
        <a href="/">{footer_privacidad_text}</a>
        <a href="/">{footer_ayuda_text}</a>
    </footer>
)

export default Footer;