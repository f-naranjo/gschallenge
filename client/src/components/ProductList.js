import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { startGetProducts } from '../redux/actions/products'
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ProductCard from "./ProductCard";

function ProductsList() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products)

    useEffect(() => {
        if (products.length === 0) {
            dispatch(startGetProducts())
        }
    })

    return (
        <div>
            {products.length > 0 ?
                products.map(product => <ProductCard key={product.id} {...product}></ProductCard>) :
                <Loader type="Oval" color="#336699" height={50} width={50} />
            }
        </div>
    )

}


export default ProductsList;