import { SET_CURRENT_LANGUAGE } from '../actionTypes'

const initialState = {
    currentLanguage: null
}

const setCurrentLanguage = (state, action) => {
    return { ...state, currentLanguage: action.payload };
};

export const language = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_LANGUAGE:
            return setCurrentLanguage(state, action)
        default:
            return state
    }
}

export default language