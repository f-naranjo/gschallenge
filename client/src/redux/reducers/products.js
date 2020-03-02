const productsReducer = (state = [], action) =>{
    switch(action.type){
        case 'SUCCESS_GET_PRODUCTS':
            return action.results.data
        case 'FAILED_GET_PRODUCTS':
            return action.err
        default:
            return state
    }
};

export default productsReducer;