import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { startGetProducts } from '../redux/actions'
import ProductCard from "./ProductCard";
import { ProductsWrapper } from "./ProductListStyle";
import Spinner from "./Spinner";
import ErrorServer from "./ErrorServer";

function ProductsList() {
    const products = useSelector(state => state.products)
    const error = useSelector(state => state.error)
    const dispatch = useDispatch();

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