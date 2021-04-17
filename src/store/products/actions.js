import {
    PRODUCTS_GET_ALL_ERROR, PRODUCTS_GET_ALL_START, PRODUCTS_GET_ALL_SUCCESS,
    PRODUCTS_GET_ERROR, PRODUCTS_GET_START, PRODUCTS_GET_SUCCESS,
    PRODUCTS_UPDATE_ERROR, PRODUCTS_UPDATE_START, PRODUCTS_UPDATE_SUCCESS,
} from "."
import { productsClient } from "../../client"

export const productsGetAllAction = () => async (dispatch, getState) => {
    dispatch({
        type: PRODUCTS_GET_ALL_START,
        payload: null,
    })
    try {
        const data = await productsClient.getAll()
        dispatch({
            type: PRODUCTS_GET_ALL_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: PRODUCTS_GET_ALL_ERROR,
            payload: error.message,
        })
    }
}

export const productsGetAction = (id) => async (dispatch, getState) => {
    dispatch({
        type: PRODUCTS_GET_START,
        payload: null,
    })
    try {
        const data = await productsClient.get(id)
        dispatch({
            type: PRODUCTS_GET_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: PRODUCTS_GET_ERROR,
            payload: error.message,
        })
    }
}

export const productsUpdateAction = (entity) => async (dispatch, getState) => {
    dispatch({
        type: PRODUCTS_UPDATE_START,
        payload: null,
    })
    try {
        const data = await productsClient.update(entity)
        dispatch({
            type: PRODUCTS_UPDATE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: PRODUCTS_UPDATE_ERROR,
            payload: error.message,
        })
    }
}