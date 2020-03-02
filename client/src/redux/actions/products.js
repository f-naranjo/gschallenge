export const START_GET_PRODUCTS = 'START_GET_PRODUCTS'
export const SUCCESS_GET_PRODUCTS = 'SUCCESS_GET_PRODUCTS'
export const FAILED_GET_PRODUCTS = 'FAILED_GET_PRODUCTS'

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
    return {
        type: 'FAILED_GET_PRODUCTS',
        payload
    };
}


