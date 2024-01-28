import React from "react";

import { View, StyleSheet, Keyboard } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import InputField from "../../../components/shared/InputField";
import PrimaryButton from "../../../components/shared/primaryButton/PrimaryButton";
import Header from "../../../components/common/Header/Header";
import BlurProgressView from "../blur-activity-indicator/BlurProgressView";
import { Theme } from "../../../../shared/theme";
import { LanguageCode } from "../../../../shared/constants";

type inputProps = {
    onSubmitCallback: Function,
    errors: any,
    isSubmitting: boolean,
    control: any,
    theme: Theme,
    lang: LanguageCode
}

const RenderLoginScreen = (props: inputProps) => {

    const { onSubmitCallback, errors, isSubmitting, control, theme, lang } = props

    return (
        <View style={{ flex: 1 }}>
            <Header
                title="Login"
                searchBarVisible={false}
                isRightIconsVisible={false}
                isLogoVisible={false}
                isLongBackgroundContainer={false}
                backgroundHeight={100}
            />
            <KeyboardAwareScrollView
                style={{ flex: 1 }}
                contentContainerStyle={{ justifyContent: 'center', marginTop: 100 }}
            >
                <InputField
                    label={"Name"}
                    inputType={''}
                    keyboardType={'email-address'}
                    error={errors?.name?.message}
                    control={control}
                    inputFieldKey={'loginName'}
                />
                <InputField
                    label={"Email"}
                    inputType={''}
                    keyboardType={'default'}
                    error={errors?.email?.message}
                    control={control}
                    inputFieldKey={'loginEmail'}
                />
            </KeyboardAwareScrollView>
            <View style={styles.buttonContainer}>
                <PrimaryButton
                    title={isSubmitting ? 'loading' : "Login"}
                    onPress={() => {
                        Keyboard.dismiss()
                        onSubmitCallback()
                    }}
                    isLoading={isSubmitting}
                    titleFontFamily={""}
                    titleFontSize={0}
                    borderRadius={0}
                />
            </View>
            {isSubmitting ? <BlurProgressView /> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        height: 45,
        marginVertical: 10,
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 30,
        paddingHorizontal: 26,
        position: 'absolute',
        bottom: 10
    },
})

export default RenderLoginScreen