import { RESET_VERIFICATION_FLOW_ACCESS_TOKEN, SET_VERIFICATION_FLOW_ACCESS_TOKEN, } from '../actionTypes';

const setVerificationFlowToken = (data) => {
    return {
        type: SET_VERIFICATION_FLOW_ACCESS_TOKEN,
        payload: data,
    };
};

const resetVerificationFlowToken = () => {
    return {
        type: RESET_VERIFICATION_FLOW_ACCESS_TOKEN,
        payload: null,
    };
};

export { setVerificationFlowToken, resetVerificationFlowToken };