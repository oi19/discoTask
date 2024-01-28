import { SET_DEVICE_ID } from '../actionTypes'

const initialState = {
    deviceID: null
}

const setDeviceID = (state, action) => {
    return { ...state, deviceID: action.payload };
};

export const deviceInfo = (state = initialState, action) => {
    switch (action.type) {
        case SET_DEVICE_ID:
            return setDeviceID(state, action)
        default:
            return state
    }
}

export default deviceInfo