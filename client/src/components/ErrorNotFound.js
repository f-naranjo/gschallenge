import React from 'react';
import { Link } from 'react-router-dom';
import { ErrorContainer } from './ErrorContainerStyle'

function ErrorNotFound(){
    return(
        <ErrorContainer>
            <h2>Sorry, this page can't be found.</h2>
            <Link to="/">Return to HomePage</Link>
        </ErrorContainer>
    )
}

export default ErrorNotFound


