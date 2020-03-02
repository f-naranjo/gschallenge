export const START_GET_PRODUCTS = 'START_GET_PRODUCTS'
export const SUCCESS_GET_PRODUCTS = 'SUCCESS_GET_PRODUCTS'
export const GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL'

export const startGetProducts = (payload) => {
    return {
        type: 'START_GET_PRODUCTS',
        ...payload
    };
}

export const successGetProducts = (payload) => {
    return {
        type: 'SUCCESS_GET_PRODUCTS',
        ...payload
    };
}

export const getProductDetail = (payload) => {
    console.log("entra en getproduct")
    return {
        type: 'GET_PRODUCT_DETAIL',
        payload: payload
    };
}


