import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage(props){
   // let history = useHistory()
    return(
        <div>
            <h1>Sorry, but this page doesn't exist in the App</h1>
            <Link to="/">Return to HomePage</Link> 
        </div>
    )
}

export default NotFoundPage