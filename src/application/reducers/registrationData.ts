import { SET_RESGISTRATION_ACCESS_TOKEN, RESET_REGISTRATION_DATA } from '../actionTypes'
import { RegistrationData } from '../model';

const initialState: RegistrationData = {
    accessToken: null
}


const setAccessToken = (state, action) => {
    return { ...state, accessToken: action.payload };
};

const resetData = (state, action) => {
    return null;
};

export const registrationData = (state = initialState, action) => {
    switch (action.type) {
        case SET_RESGISTRATION_ACCESS_TOKEN:
            return setAccessToken(state, action)
        case RESET_REGISTRATION_DATA:
            return resetData(state, action)
        default:
            return state
    }
}

export default registrationData