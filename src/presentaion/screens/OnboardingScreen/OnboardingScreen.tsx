import React from "react";
import RenderOnboardingScreen from "../../components/common/renderOnboardingScreen/RenderOnboardingScreen";
import { ScreenNames } from "../../../shared/constants";
import { useNavigation } from "@react-navigation/native";
import { RegistrationStack } from "../../../navigation/auth";

const OnboardingScreen = () => {

    const navigation = useNavigation()

    console.warn('oomars')

    const goToLogin = () => {
        navigation.navigate(ScreenNames.LOGIN)
    }

    const goToRegistration = () => {
        navigation.navigate(ScreenNames.REGISTRATION)
    }

    return (
        <RenderOnboardingScreen
            loginNavigatorCallback={goToLogin}
            registrationNavigatorCallback={goToRegistration}
        />
    )
}

export default OnboardingScreen