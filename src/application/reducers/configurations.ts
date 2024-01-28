import { SET_CONFIGURATIONS, } from '../actionTypes'

const initialState = {
    androidMinimumVersion: null,
    iosMinimumVersion: null,
    huaweiMinimumVersion: null,
    otpTimerInSeconds: null,
    otpMaximumTrials: null,
    otpMaximumLockOutTimeInMinutes: null
}

const setConfigurations = (state, action) => {
    return { ...state, ...action.payload };
};


export const configurations = (state = initialState, action) => {
    switch (action.type) {
        case SET_CONFIGURATIONS:
            return setConfigurations(state, action)
        default:
            return state
    }
}

export default configurations