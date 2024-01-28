import { SET_MEDIA_ID, SET_USER_INFO } from '../actionTypes'

const initialState = {
    userInfo: null,
    mediaId: null
}

const setUserInfo = (state, action) => {
    return { ...state, userInfo: action.payload };
};

const setMediaId = (state, action) => {
    return { ...state, mediaId: action.payload };
};

export const userInfo = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_INFO:
            return setUserInfo(state, action)
        case SET_MEDIA_ID:
            return setMediaId(state, action)
        default:
            return state
    }
}

export default userInfo