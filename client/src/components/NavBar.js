import React from 'react'
import { Link, useHistory } from 'react-router-dom'

function NavBar(props){
    console.log(props)
    const history = useHistory()
    return(
        <nav>
            <ul>
                <li><Link onClick={()=>history.goBack()}>Go Back</Link></li>
                <li><Link to="/">Go Home</Link></li>
                <li><Link onClick={()=>history.goForward()}>Go Fordward</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar