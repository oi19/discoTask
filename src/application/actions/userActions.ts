import { SET_CURRENT_USER } from '../actionTypes';

const setCurrentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        payload: user,
    };
};


export { setCurrentUser };