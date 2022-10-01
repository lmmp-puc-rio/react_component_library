# react_component_library
Library of developed components of React JS 

# Index:

## 1-Logo
    Dependencies: none
    Input props: url, text and iconClassName
    Description: icon + text logo

## 2-Menu
    Dependencies: none
    Description: menu of static items

## 3-Navbar
    Dependencies: none
    
    Input props: 
        navlinks object array = 
            [ ... , {url: ... , title: ... , className: ...} , ... ]
    
    Description: responsive navbar with single-level dynamic navlinks and toggle hamburger menu.

## 4-Header
    Dependencies: Logo and Navbar
    
    Input props: mail and navlinks(check Navbar)
    
    Description: 2 rows Header, with Logo and Navbar Components on the 1st row and Contact mail on the 2nd row.

## 5-Dropdown
    Dependencies: none
    
    Description: dropdown selection box with dynamic options

## 6-GridForm
    Dependencies: Dropdown
    
    Description: Form in the shape of a grid component divided in sections. Grid is composed of the variable label, input textbox for the variable value and a dropdown selection box for variable unit selection. Variables values and units are set as states, and the fields are passed automatically through two Objects( data ans conversionFactors )

## 7-FloatActionButtom: Composed by a FAB (Main Container), Link and Buttom components  
#TODO: Automate links and buttom creation from data
### 7a-FAB(Main Container)  
    Dependencies: none
    
    Input props: position

    Description: Container that sets floar buttom position

### 7b-Buttom  
    Dependencies: none
    
    Input props: tooltip, icon, rotates and styles(optional)

    Description: buttom that shows the links when clicked or hovered by.

### 7c-Link  
    Dependencies: none
    
    Input props: tooltip, icon, href and styles(optional)

    Description: link that are shown when buttom is clicked or hobered by.

## 8-Card
    Dependencies: none
    
    Description: card with a image in the top, a card title, a card description and a button into the bottom

## 9-NewsBox
    Dependencies: none
    
    Description: News box that has a text and a image, with the option to change the side of the image and the text.

## 10-VideoCard
    Dependencies: none
    
    Description: Video Card that has a video based on a youtube link, the title of the video and the description of the video.

## 11-AccordionPanel
    Dependencies: none
    
    Description: Accordion Panel.

## 12-LiteratureReference
    Dependencies: none
    
    Description: A line element that has the title, year and the link for the reference.

## 13-ExpandableGrid
    Dependencies: gridActionIcon
    
    Description: A grid that changes size with the screen and has action buttons for each row.

## 14-GridActionIcon
    Dependencies: Link from "react-router-dom"
    
    Description: A grid that changes size with the screen and has action buttons for each row.

## 15-RadioGroup: Composed by a group of RadioButtons 
### 15a-RadioGroup
    Dependencies: none
    
    Description: A group of radio buttons working as a single selection entry.

### 15b-RadioButton
    Dependencies: none
    
    Description: A single radio button.

## 16-Toast: Composed by Toast and ToastComtexts
### 16a-Toast
    Dependencies: Toast Context
    
    Description: A message card that enters floating the screen and disappears after some times.

### 16b-ToastContexts
    Dependencies: createContext from React
                  showToast from possibleAlerts(usually in the Toast folder).
    
    Description: Creates a context, so the actions performed by the components in different app sections can be seen by the Toast.

## 16-ProtectedRoute: Composed by ProtectedRoute, AuthContexts and useAuth
### 16a-ProtectedRoute
    Dependencies: AuthContext
                  Route, Redirect from "react-router-dom"
    
    Description: Routes to be used with Router-DOM, but with authentication protection.

### 16b-AuthContexts
    Dependencies: createContext from React
                  useAuth
    
    Description: Creates a context, so the actions performed by the components in different app sections can be seen by the Toast.

### 16c-useAuth
    Dependencies: none
    
    Description: Hook to easy authentification by JWT in localstorage.

## 17-Modal: Composed by Modal and ModalContexts
### 17a-Modal
    Dependencies: ModauContext
                  ReactDOM from "react-dom"
                  Link from "react-router-dom"
    
    Description: Modal window(blocking the app behind) that opens to give a warning or to ask confirmation.

### 17b-ModalContexts
    Dependencies: createContext from React
    
    Description: Creates a context, so the components in different app sections can access the Modal call.