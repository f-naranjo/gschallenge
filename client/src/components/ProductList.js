import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { startGetProducts } from '../redux/actions'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ProductCard from "./ProductCard";
import { ProductsWrapper } from "./ProductListStyle";
import Spinner from "./Spinner";
import ErrorServer from "./ErrorServer";

function ProductsList() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products)
    const error = useSelector(state => state.error)

    useEffect(() => {
        if (products.length === 0) {
            dispatch(startGetProducts())
        }
    })

    return (
       
        <ProductsWrapper>
            {error ? <ErrorServer/> :
                products.length > 0 ?
                products.map(product => <ProductCard key={product.id} {...product}></ProductCard>) :
               <Spinner />
            }
        </ProductsWrapper>
    )

}


export default ProductsList;