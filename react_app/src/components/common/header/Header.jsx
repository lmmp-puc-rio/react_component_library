// # Main Import 
import React from 'react';
// # Main SubComponents
import { Navbar,Logo,Menu } from '../../common';

// # Import Component Style
import './Header.css'

// # Header React Component Construction
function Header () {
    
    return (

        <section className="header">
            {/*  Header Top Section holds Logo, Navbar and menu */}
            <section className="header-top">
                <section className="header-top_logo">
                    <Logo />
                </section>
                <section className="header-top_navbar">
                    <Navbar />
                </section>
                <section className="header-top_menu">
                    <Menu />
                </section>
            </section>
            {/*  Inferior Section for free text and link */}
            <section  className="header-bottom">
                <section  className="header-bottom_info">
                    text;
                </section>
                <section  className="header-top_ink">
                    link;
                </section>
            </section>
        </section>
    )

}

export default Header;
