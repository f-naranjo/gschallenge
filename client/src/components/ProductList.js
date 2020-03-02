import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { startGetProducts } from '../redux/actions/products'
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ProductCard from "./ProductCard";
import { ProductsWrapper } from "./ProductListStyle";
import Spinner from "./Spinner";

function ProductsList() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products)

    useEffect(() => {
        if (products.length === 0) {
            dispatch(startGetProducts())
        }
    })

    return (
        <ProductsWrapper>
            {products.length > 0 ?
                products.map(product => <ProductCard key={product.id} {...product}></ProductCard>) :
               <Spinner />
            }
        </ProductsWrapper>
    )

}


export default ProductsList;