import { put, call, takeLatest } from 'redux-saga/effects'
import { START_GET_PRODUCTS, SUCCESS_GET_PRODUCTS, FAILED_GET_PRODUCTS } from '../actions';
import fetchProducts from '../api';

function* getProducts() {
    try {
       const results = yield call(fetchProducts)
       yield put({type: SUCCESS_GET_PRODUCTS, results})
    } catch (err) {
        console.log("ENTRA EN EL ERROR")
       yield put({type: FAILED_GET_PRODUCTS, err})
    }
}

export default function* products(){
    yield takeLatest(START_GET_PRODUCTS, getProducts); 
}
