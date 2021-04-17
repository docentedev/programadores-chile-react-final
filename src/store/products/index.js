const initialState = {
    success: null,
    error: null,
    data: [],
    loading: false,
    errorMessage: '',
}

const initialGetState = {
    success: null,
    error: null,
    data: {},
    loading: false,
    errorMessage: '',
}

const initialUpdateState = {
    success: null,
    error: null,
    data: {},
    loading: false,
    errorMessage: '',
}

const initialCreateState = {
    success: null,
    error: null,
    data: {},
    loading: false,
    errorMessage: '',
}

export const PRODUCTS_GET_ALL_START = 'PRODUCTS_GET_ALL_START'
export const PRODUCTS_GET_ALL_ERROR = 'PRODUCTS_GET_ALL_ERROR'
export const PRODUCTS_GET_ALL_SUCCESS = 'PRODUCTS_GET_ALL_SUCCESS'

export const PRODUCTS_GET_START = 'PRODUCTS_GET_START'
export const PRODUCTS_GET_ERROR = 'PRODUCTS_GET_ERROR'
export const PRODUCTS_GET_SUCCESS = 'PRODUCTS_GET_SUCCESS'

export const PRODUCTS_UPDATE_START = 'PRODUCTS_UPDATE_START'
export const PRODUCTS_UPDATE_ERROR = 'PRODUCTS_UPDATE_ERROR'
export const PRODUCTS_UPDATE_SUCCESS = 'PRODUCTS_UPDATE_SUCCESS'
export const PRODUCTS_UPDATE_RESET = 'PRODUCTS_UPDATE_RESET'

export const PRODUCTS_CREATE_START = 'PRODUCTS_CREATE_START'
export const PRODUCTS_CREATE_ERROR = 'PRODUCTS_CREATE_ERROR'
export const PRODUCTS_CREATE_SUCCESS = 'PRODUCTS_CREATE_SUCCESS'
export const PRODUCTS_CREATE_RESET = 'PRODUCTS_CREATE_RESET'

export const getAllReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case PRODUCTS_GET_ALL_START:
            return { ...initialState, loading: true, errorMessage: '', }
        case PRODUCTS_GET_ALL_ERROR:
            return { success: false, error: true, data: prevState.data, loading: false, errorMessage: action.payload }
        case PRODUCTS_GET_ALL_SUCCESS:
            return { success: true, error: false, data: action.payload, loading: false, errorMessage: '' }
        default:
            return prevState
    }
}

export const getReducer = (prevState = initialGetState, action) => {
    switch (action.type) {
        case PRODUCTS_GET_START:
            return { ...initialGetState, loading: true, errorMessage: '', }
        case PRODUCTS_GET_ERROR:
            return { success: false, error: true, data: prevState.data, loading: false, errorMessage: action.payload }
        case PRODUCTS_GET_SUCCESS:
            return { success: true, error: false, data: action.payload, loading: false, errorMessage: '' }
        default:
            return prevState
    }
}

export const updateReducer = (prevState = initialUpdateState, action) => {
    switch (action.type) {
        case PRODUCTS_UPDATE_RESET:
            return initialUpdateState
        case PRODUCTS_UPDATE_START:
            return { ...initialUpdateState, loading: true, errorMessage: '', }
        case PRODUCTS_UPDATE_ERROR:
            return { success: false, error: true, data: prevState.data, loading: false, errorMessage: action.payload }
        case PRODUCTS_UPDATE_SUCCESS:
            return { success: true, error: false, data: action.payload, loading: false, errorMessage: '' }
        default:
            return prevState
    }
}

export const createReducer = (prevState = initialCreateState, action) => {
    switch (action.type) {
        case PRODUCTS_CREATE_RESET:
            return initialCreateState
        case PRODUCTS_CREATE_START:
            return { ...initialCreateState, loading: true, errorMessage: '', }
        case PRODUCTS_CREATE_ERROR:
            return { success: false, error: true, data: prevState.data, loading: false, errorMessage: action.payload }
        case PRODUCTS_CREATE_SUCCESS:
            return { success: true, error: false, data: action.payload, loading: false, errorMessage: '' }
        default:
            return prevState
    }
}
