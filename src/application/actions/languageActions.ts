import { LanguageCode } from '../../../shared/constants';
import { SET_CURRENT_LANGUAGE } from '../actionTypes';

const setCurrentLanguage = (lang: LanguageCode) => {
    return {
        type: SET_CURRENT_LANGUAGE,
        payload: lang,
    };
};


export { setCurrentLanguage };