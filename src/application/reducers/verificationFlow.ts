import { SET_VERIFICATION_FLOW_ACCESS_TOKEN, RESET_VERIFICATION_FLOW_ACCESS_TOKEN } from '../actionTypes'
import { VerificationFlow } from '../model';

const initialState: VerificationFlow = {
    accessToken: null
}

const setAccessToken = (state, action) => {
    return { ...state, accessToken: action.payload };
};

const resetData = (state, action) => {
    return null;
};

export const verificationFlow = (state = initialState, action) => {
    switch (action.type) {
        case SET_VERIFICATION_FLOW_ACCESS_TOKEN:
            return setAccessToken(state, action)
        case RESET_VERIFICATION_FLOW_ACCESS_TOKEN:
            return resetData(state, action)
        default:
            return state
    }
}

export default verificationFlow