import React from 'react';
import { Link } from 'react-router-dom';
import { ErrorContainer } from './ErrorContainerStyle'

function ErrorServer(){
    return(
        <ErrorContainer>
            <h2>Sorry, the content is not available right now.</h2>
            <Link to="/">Return to HomePage</Link>
        </ErrorContainer>
    )
}

export default ErrorServer
