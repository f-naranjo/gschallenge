import { put, call, takeLatest } from 'redux-saga/effects'
import { START_GET_PRODUCTS, SUCCESS_GET_PRODUCTS } from '../actions/products';
import fetchProducts from '../api';

function* getProducts() {
    try {
       const results = yield call(fetchProducts)
       yield put({type: SUCCESS_GET_PRODUCTS, results})
    } catch (err) {
       console.log(err)
    }
}

//Watcher
export default function* products(){
    yield takeLatest(START_GET_PRODUCTS, getProducts); 
}
