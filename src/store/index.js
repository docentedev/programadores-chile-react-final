import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {
    getAllReducer as productGetAllReducer,
    getReducer as productGetReducer,
    updateReducer as productUpdateReducer,
} from './products'

const rootReducers = combineReducers({
    products: combineReducers({
        getAll: productGetAllReducer,
        get: productGetReducer,
        update: productUpdateReducer,
    }),
})

const store = createStore(rootReducers, applyMiddleware(thunk, logger))

export default store
