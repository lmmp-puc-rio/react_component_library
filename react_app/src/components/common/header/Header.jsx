// # Main Import 
import React from 'react';
// # Main SubComponents
import { Navbar,Logo } from '../../common';

// # Import Component Style
import './Header.css'

// # Header React Component Construction
function Header (props) {

    return (
        <section className="header">
            {/*  Header Top Section holds Logo, Navbar and menu */}
            <section className="header-top">
                <section className="header-top_logo">
                    {/* Logo Component with url, icon and text props set*/}
                    <Logo url="/" text="iferencial" iconClassName = "fas fa-react"/>
                </section>
                <section className="header-top_navbar"> 
                    {/* call Navbar component with navlinks prop set*/}
                    <Navbar navlinks={props.navlinks} />
                </section>
            </section>
            <hr className = "header-top_separator"/>
            {/*  Inferior Section for free text and link */}
            <section  className="header-bottom">
                {/* Contact Info */}
                <div>
                    contact:&nbsp;
                </div>
                <section  className="header-bottom_mail">
                    {/* mail link */}
                    <a href = {"mailto: "+props.mail} > {props.mail}</a>
                </section>
            </section>
        </section>
    )

}

export default Header;
