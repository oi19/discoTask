import React from "react";
import { View, Text, TouchableOpacity } from 'react-native'

import { BudgetRountesNames, LanguageCode } from "../../../../shared/constants";

import styles from "./styles";
import { defaultTheme } from "../../../../shared/theme";

type InputProps = {
    onRoutePress: Function,
    routes: string[],
    currentRoute: BudgetRountesNames
}

const SimulatedTabBar = (props: InputProps) => {
    const { onRoutePress, routes, currentRoute } = props

    return (
        <View style={styles(defaultTheme, LanguageCode.EN).root}>
            {
                routes.map((route: BudgetRountesNames, index) => {
                    const isFocused = route === currentRoute
                    return (
                        <TouchableOpacity
                            style={isFocused ? styles(defaultTheme, LanguageCode.EN).focusedRouteContainerStyle : styles(defaultTheme, LanguageCode.EN).routeContainerStyle}
                            onPress={() => onRoutePress(route)}
                        >
                            <Text
                                style={isFocused ? styles(defaultTheme, LanguageCode.EN).focusedRouteTextStyle : styles(defaultTheme, LanguageCode.EN).routeTextStyle}>
                                {route}
                            </Text>
                        </TouchableOpacity>
                    )
                })

            }
        </View>
    )

}

export default SimulatedTabBar