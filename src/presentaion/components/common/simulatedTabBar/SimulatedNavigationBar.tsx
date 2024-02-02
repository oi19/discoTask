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

   const capitalizeText=(text:string)=> {
     return text.charAt(0).toUpperCase() + text.slice(1);
    }

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
                                {capitalizeText(route)}
                            </Text>
                        </TouchableOpacity>
                    )
                })

            }
        </View>
    )

}

export default SimulatedTabBar