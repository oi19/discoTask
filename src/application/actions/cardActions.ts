import { SET_CARD_DETAILS } from '../actionTypes';

const setCardDetails = (cardDetails) => {
    return {
        type: SET_CARD_DETAILS,
        payload: cardDetails,
    };
};


export { setCardDetails };