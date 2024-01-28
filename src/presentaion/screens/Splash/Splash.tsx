import React, { useEffect, useRef, useState } from "react";

import { ImageBackground, SafeAreaView, View, Text, ProgressBarAndroidBase, Dimensions, Image } from "react-native";
import * as Progress from 'react-native-progress';

import { AuthStack } from "../../../navigation/auth";

import { defaultTheme } from "../../../shared/theme";

import styles from "./styles";



const Splash = () => {
    const [progressBarValue, setProgressBarValue] = useState<number>(0.2)
    const [currentUser, setCurrentUser] = useState<string | null>()

    useEffect(() => {

        const appLoader = setInterval(() => {
            if (progressBarValue >= 2) {
                setCurrentUser('authToken')
            } else {
                setProgressBarValue(currentValue => currentValue + .4)
            }
        }, 1000)

        return () => clearInterval(appLoader);
    }, [])


    return (
        <SafeAreaView style={{ flex: 1, width: '100%' }}>
            {
                (currentUser || progressBarValue >= 2) ?
                    <AuthStack />
                    :
                    <SafeAreaView style={styles(defaultTheme).container}>
                        <Image
                            style={styles(defaultTheme).logo}
                            resizeMode={'contain'}
                            source={require('../../../assets/images/disco_logo.png')}>
                        </Image>
                        <View
                            style={styles(defaultTheme).containerStyle}>
                        </View>
                        <View style={styles(defaultTheme).progressBarContainer}>
                            <Progress.Bar
                                progress={progressBarValue}
                                height={8}
                                borderRadius={6}
                                color={defaultTheme.color.primaryDiscoColor}
                                borderWidth={1}
                                unfilledColor={defaultTheme.color.white}
                            />
                        </View>
                        <View style={styles(defaultTheme).versionContainer}>
                            <Text style={styles(defaultTheme).versionLabel}> 1.0 </Text>
                        </View>
                    </SafeAreaView>
            }
        </SafeAreaView >
    )
}

export default Splash