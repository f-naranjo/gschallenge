const productsReducer = (state = [], action) =>{
    switch(action.type){
        case 'SUCCESS_GET_PRODUCTS':
            return action.results.data
        default:
            return state
    }
};

export default productsReducer;