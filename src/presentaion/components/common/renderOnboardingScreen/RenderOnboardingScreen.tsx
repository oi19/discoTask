import React from "react";
import { View, StyleSheet, Text } from 'react-native'
import PrimaryButton from "../../shared/primaryButton/PrimaryButton";

type inputProps = {
    loginNavigatorCallback: Function,
    registrationNavigatorCallback: Function
}

const RenderOnboardingScreen = (props: inputProps) => {
    const { loginNavigatorCallback, registrationNavigatorCallback } = props

    return (
        <View style={styles.container}>
            <View style={styles.buttonsView}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton
                        title={"Login"}
                        onPress={() => { loginNavigatorCallback() }}
                        isLoading={false}
                        titleFontFamily={""}
                        titleFontSize={30}
                        borderRadius={0}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton
                        title={"Register"}
                        onPress={() => { registrationNavigatorCallback() }}
                        isLoading={false}
                        titleFontFamily={""}
                        titleFontSize={5}
                        borderRadius={0} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    buttonsView: {
        position: 'absolute',
        width: '100%',
        bottom: 20,
        alignItems: 'center',
        paddingHorizontal: 26,
    },
    buttonContainer: {
        width: '100%',
        height: 45,
        marginBottom: 10,
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 30
    }
})

export default RenderOnboardingScreen