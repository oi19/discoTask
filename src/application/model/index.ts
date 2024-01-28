import { CardInfo } from "../../../domain/cardInfo";
import { ProfileInfoI } from "../../../domain/profileInfoI";
import { User } from "../../../domain/user";
import { userInfoI } from "../../../domain/userInfo";
import { LanguageCode } from "../../../shared/constants";
import { Theme } from "../../../shared/theme";

export interface UserReducer {
    currentUser: User
}

export interface LanguageReducer {
    currentLanguage: LanguageCode
}

export interface ThemeReducer {
    currentTheme: Theme
}

export interface UserInfo {
    userInfo: ProfileInfoI
}

export interface RootState {
    configurations: Configurations;
    user: UserReducer
    language: LanguageReducer,
    theme: ThemeReducer
    userInfo: UserInfo
    deviceInfo: DeviceInfo
    registrationData: RegistrationData | null
    baladCard: BaladCard,
    verificationFlow: VerificationFlow
}

export interface DeviceInfo {
    deviceID: string
}

export interface NationalIDDataI {
    fullName: string,
    nationalIDNumber: string,
    address: string,
    region: string,
    governrate: string
}

export interface RegistrationData {
    accessToken: string | null
}

export interface BaladCard {
    cardDetails: CardInfo
}
export interface Configurations {
    androidMinimumVersion: number
    iosMinimumVersion: number
    huaweiMinimumVersion: number
    otpTimerInSeconds: number
    otpMaximumTrials: number,
    otpMaximumLockOutTimeInMinutes: number
}

export interface VerificationFlow {
    accessToken: string | null,
}
