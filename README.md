# react_component_library
Library of developed components of React JS 

Index:

1-Logo
    Dependencies: none
    Input props: url, text and iconClassName
    Description: icon + text logo

2-Navbar
    Dependencies: none
    Input props: 
        navlinks object array = 
            [ ... , {url: ... , title: ... , className: ...} , ... ]
    Description: responsive navbar with single-level dynamic navlinks and toggle hamburger menu.

3-Header
    Dependencies: Logo and Navbar
    Input props: mail and navlinks(check Navbar)
    Description: 2 rows Header, with Logo and Navbar Components on the 1st row and Contact mail on the 2nd row.

4-Menu
    Dependencies: none
    Description: menu of static items