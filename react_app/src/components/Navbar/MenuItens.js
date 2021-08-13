import React, { Component } from `react`;
class Navbar extends Component {
    render(){
        return(
            <nav className='NavbarItems'>
                {/* Right Navbar Title and Logo */}
                <h1 className='navbar-logo'>React </h1>
                <div className="menu-icon">

                </div>
                <ul>
                    {/* Map the items into the tabs*/}
                    {MenuItems.map((item,index) => {
                        return (
                            <li key={index}>
                                {/* Assemble the link of each item */}
                                <a className={item,cName} href={item,url}>
                                {item,title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }

}