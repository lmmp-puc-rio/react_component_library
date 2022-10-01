// # Main Imports
import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

// # External SubComponents & utils
import { AuthContext } from '../../contexts/AuthContext';

function ProtectedRoute (props){
    
    // Get Context
    const { token }  = useContext(AuthContext)
    
    return (
        // Context Consumer
        // Route Component
            <Route path={props.path}>
                {(token && token !== "" && token !== undefined) ? 
                props.children :
                <Redirect to={{
                    pathname: '/login',
                    state: {redirected: 'true'}
                }}/>
                }
            </Route>
    );
}

export default ProtectedRoute