import productsReducer from './products'
import errorReducer from './error'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    products: productsReducer,
    error: errorReducer
})

export default allReducers