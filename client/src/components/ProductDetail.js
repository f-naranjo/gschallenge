import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import { startGetProducts } from '../redux/actions';
import { ProductWrapper, InfoDetailContainer } from "./ProductDetailStyle";
import Spinner from "./Spinner";

function ProductDetail() {
    let { name } = useParams()
    const products = useSelector(state => state.products)
    const dispatch = useDispatch()
    const originalName = name.split("-").join(" ")

    useEffect(() => {
        if (products.length === 0) {
            dispatch(startGetProducts())
        }
    })

    if (products.length === 0) {
        return <Spinner />
    }

    const [product] = products.filter(product => product.name === originalName)

    if (product) {
        const { name, manufacturer, description, color, price, imageFileName, screen, processor, ram } = product

        return (
            <ProductWrapper>
                <img src={`/images/${imageFileName}`} alt={imageFileName}></img>
                <InfoDetailContainer>
                    <h1>{name}</h1>
                    <h2>Designed by {manufacturer}</h2>
                    <p>{description}</p>
                    <h3>{name} Specs:</h3>
                    <ul>
                        <li>Processor: {processor}</li>
                        <li>Ram: {ram}GB</li>
                        <li>Screen: {screen}</li>
                        <li>Color: {color}</li>
                    </ul>
                    <h4>{price}€</h4>
                </InfoDetailContainer>
            </ProductWrapper>
        )
    }else return <Redirect to="/404"/>

}


export default ProductDetail