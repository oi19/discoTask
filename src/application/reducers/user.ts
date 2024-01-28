import { SET_CURRENT_USER } from '../actionTypes'

const initialState = {
    currentUser: null
}

const setCurrentUser = (state, action) => {
    return { ...state, currentUser: action.payload };
};

export const user = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return setCurrentUser(state, action)
        default:
            return state
    }
}

export default user