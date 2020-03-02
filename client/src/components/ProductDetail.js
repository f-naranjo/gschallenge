import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { startGetProducts } from '../redux/actions/products';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ProductWrapper, InfoDetailContainer } from "./ProductDetailStyle";
import Spinner from "./Spinner";

function ProductDetail(props) {
    const dispatch = useDispatch()
    let { name } = useParams()
    const products = useSelector(state => state.products)

    useEffect(() => {
        if (products.length === 0) {
            dispatch(startGetProducts())
        }
    })

    if (products.length > 0) {
        const [product] = products.filter(product => product.name === name)
        const { manufacturer, description, color, price, imageFileName, screen, processor, ram } = product

        return (
            <ProductWrapper>
                <img src={`/images/${imageFileName}`}></img>
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

    } else {
        return (
            <Spinner/>
        )
    }

    //console.log(product)

}


export default ProductDetail