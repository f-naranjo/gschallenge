import productsReducer from './products'
import { combineReducers } from 'redux';
import detailReducer from './detail';

const allReducers = combineReducers({
    products: productsReducer,
    product: detailReducer
})

export default allReducers