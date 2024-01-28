import { RESET_REGISTRATION_DATA, SET_RESGISTRATION_ACCESS_TOKEN, } from '../actionTypes';



const setRegistrationAccessToken = (data) => {
    return {
        type: SET_RESGISTRATION_ACCESS_TOKEN,
        payload: data,
    };
};



const resetRegistrationData = (data) => {
    return {
        type: RESET_REGISTRATION_DATA,
        payload: data,
    };
};

export { setRegistrationAccessToken, resetRegistrationData };