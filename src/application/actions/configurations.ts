import { SET_CONFIGURATIONS } from '../actionTypes';


const setConfigurations = (data) => {
    return {
        type: SET_CONFIGURATIONS,
        payload: data
    }
}


export { setConfigurations };