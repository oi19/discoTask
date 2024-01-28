import { SET_DEVICE_ID } from '../actionTypes';

const setDeviceID = (deviceID) => {
    return {
        type: SET_DEVICE_ID,
        payload: deviceID,
    };
};


export { setDeviceID };