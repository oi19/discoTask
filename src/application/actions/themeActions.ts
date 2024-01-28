import { SET_CURRENT_THEME } from '../actionTypes';

const setCurrentTheme = (theme) => {
    return {
        type: SET_CURRENT_THEME,
        payload: theme,
    };
};


export { setCurrentTheme };