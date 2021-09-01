# react_component_library
Library of developed components of React JS 

Index:

1-Logo
    Dependencies: none
    Input props: url, text and iconClassName
    Description: icon + text logo

2-Menu
    Dependencies: none
    Description: menu of static items

3-Navbar
    Dependencies: none
    Input props: 
        navlinks object array = 
            [ ... , {url: ... , title: ... , className: ...} , ... ]
    Description: responsive navbar with single-level dynamic navlinks and toggle hamburger menu.

4-Header
    Dependencies: Logo and Navbar
    Input props: mail and navlinks(check Navbar)
    Description: 2 rows Header, with Logo and Navbar Components on the 1st row and Contact mail on the 2nd row.

5-Dropdown
    Dependencies: none
    Description: dropdown selection box with dynamic options

6-GridForm
    Dependencies: Dropdown
    Description: Form in the shape of a grid component divided in sections. Grid is composed of the variable label, input textbox for the variable value and a dropdown selection box for variable unit selection. Variables values and units are set as states, and the fields are passed automatically through two Objects( data ans conversionFactors ) 