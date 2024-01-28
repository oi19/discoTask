import { combineReducers } from 'redux'
import user from './user'
import language from './language'
import theme from './theme'
import userInfo from './userInfo'
import deviceInfo from './deviceInfo'
import registrationData from './registrationData'
import baladCard from './cardDetails'
import configurations from './configurations'
import verificationFlow from './verificationFlow'

export default combineReducers({
    user,
    language,
    theme,
    userInfo,
    deviceInfo,
    registrationData,
    baladCard,
    configurations,
    verificationFlow
})