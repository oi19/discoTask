import { SET_CURRENT_THEME } from '../actionTypes'

const initialState = {
    currentTheme: null
}

const setCurrentTheme = (state, action) => {
    return { ...state, currentTheme: action.payload };
};

export const theme = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_THEME:
            return setCurrentTheme(state, action)
        default:
            return state
    }
}

export default theme