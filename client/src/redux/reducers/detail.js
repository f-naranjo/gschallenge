const detailReducer = (state = null, action) =>{
    switch(action.type){
        case 'GET_PRODUCT_DETAIL':
            return action.payload
        default:
            return state
    }
};

export default detailReducer;