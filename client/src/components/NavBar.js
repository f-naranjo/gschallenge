import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { NavWrapper } from './NavBarStyle'

function NavBar() {
    const history = useHistory()
    return (
        <NavWrapper>
            <div>
            <Link to="/" className="logo">PHONE CATALOGUE</Link>
            <ul>
                <li><button onClick={() => history.goBack()}>Go Back</button></li>
                <li><button onClick={() => history.goForward()}>Go Forward</button></li>
            </ul>
            </div>
        </NavWrapper>
    )
}

export default NavBar