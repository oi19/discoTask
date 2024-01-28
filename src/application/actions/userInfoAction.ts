import { SET_USER_INFO } from '../actionTypes';

const setUserInfo = (userInfo) => {
    return {
        type: SET_USER_INFO,
        payload: userInfo,
    };
};

export { setUserInfo };