const errorReducer = (state = null, action) =>{
    switch(action.type){
        case 'FAILED_GET_PRODUCTS':
            return action.err;
        case 'SUCCESS_GET_PRODUCTS':
            return null;
        default:
            return state
    }
};

export default errorReducer;