import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { startGetProducts } from '../redux/actions/products';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

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
            <div>
                {products.length > 0 &&
                    <div>
                        <img src={`/images/${imageFileName}`}></img>
                        <h1>Name: {name}</h1>
                        <h2>Manufacturer: {manufacturer}</h2>
                        <p>Description: {description}</p>
                        <p>Price: {price}</p>
                    </div>
                }
            </div>
        )

    } else {
        return (
            <Loader type="Oval" color="#336699" height={50} width={50} />
        )
    }

    //console.log(product)

}


export default ProductDetail