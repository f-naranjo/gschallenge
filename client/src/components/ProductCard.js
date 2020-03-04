import React from "react";
import { Link } from 'react-router-dom';
import { CardContainer, InfoContainer } from "./ProductCardStyle";

function ProductCard(props) {
    const { name, manufacturer, processor, ram, price, imageFileName } = props
    const parseName = name.split(" ").join("-")
    return (
        <CardContainer>
            <img src={`/images/${imageFileName}`} alt={imageFileName}></img>
            <InfoContainer>
                <h3>{manufacturer}</h3>
                <h2>{parseName}</h2>
                <ul>
                    <li><span>Processor:</span> {processor}</li>
                    <li><span>Ram:</span> {ram}GB</li>
                </ul>
                <h4>{price}€</h4>
                <Link to={`${parseName}/detail/`}>View more</Link>
            </InfoContainer>
        </CardContainer>
    )
}

export default ProductCard