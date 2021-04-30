import React from 'react';
import { Link } from 'react-router-dom'
import '../assets/styles/components/Header.scss'

import logo from '../assets/static/logo-platzi-video-BW2.png'
import userIcon from '../assets/static/user-icon.png'


const header_menu_p = "Perfil";
const header_menu_li_cuenta = "Cuenta"
const header_menu_li_cerrar_sesion = "Iniciar Sesión"

const Header = () => (
    <header className="header">

        <Link to="/">
            <img className="header__img" src={logo} alt="Platzi Video" />
        </Link>

        <div className="header__menu">
            <div className="header__menu--profile">
                <img src={userIcon} alt="" />
                <p>{header_menu_p}</p>
            </div>
            <ul>
                <li><a href="/">{header_menu_li_cuenta}</a></li>
                <li>
                    <Link to="/login">
                        {header_menu_li_cerrar_sesion}
                    </Link>
                </li>
            </ul>
        </div>
  </header>
);

export default Header;