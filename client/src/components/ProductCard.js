import React from "react";
import { Link } from 'react-router-dom';

function ProductCard(props){
    const {name, description, imageFileName} = props
    return (
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
            <img src={`/images/${imageFileName}`}></img>
            <Link className="button" to={`${name}/detail/`}>View more</Link>
        </div>
    )
}

export default ProductCard