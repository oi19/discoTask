import { SET_CARD_DETAILS } from '../actionTypes'

const initialState = {
    cardDetails: null
}

const setCardDetails = (state, action) => {
    return { ...state, cardDetails: action.payload };
};

export const baladCard = (state = initialState, action) => {
    switch (action.type) {
        case SET_CARD_DETAILS:
            return setCardDetails(state, action)
        default:
            return state
    }
}

export default baladCard