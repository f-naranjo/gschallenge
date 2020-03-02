import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxSaga from 'redux-saga';

import rootSaga from '../sagas';
import reducers from '../reducers';

const sagaMiddleware = reduxSaga();

export default () => {
    return {
        ...createStore(reducers, composeWithDevTools(
            applyMiddleware(sagaMiddleware)
          )),
        runSaga: sagaMiddleware.run(rootSaga)
    };
};

