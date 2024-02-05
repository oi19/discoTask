import React from "react";

import useLoginHook from "../../../hooks/auth/useLoginHook";
import RenderLoginScreen from "../../components/common/renderLoginScreen/RenderLoginScreen";

import { defaultTheme as theme } from "../../../shared/theme";

import { useNavigation } from "@react-navigation/native";
import { LanguageCode, ScreenNames } from "../../../shared/constants";

const LoginScreen = () => {

    const navigation = useNavigation()
    const { onSuccess, control, errors, isSubmitting } = useLoginHook('', navigation)

    return <RenderLoginScreen
        onSubmitCallback={()=>{navigation.navigate(ScreenNames.BUDGET)}}
        errors={errors}
        isSubmitting={isSubmitting}
        control={control}
        theme={theme}
        lang={LanguageCode.EN}
    />
}

export default LoginScreen