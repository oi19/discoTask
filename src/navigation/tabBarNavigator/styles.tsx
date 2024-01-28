import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { Theme } from "../../shared/theme";
import { LanguageCode } from "../../shared/constants";

let { width } = Dimensions.get("screen");

export const styles = (theme: Theme, lang: LanguageCode) => StyleSheet.create({

    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    tabTextContainerFocused: {
        borderBottomWidth: 2,
        borderColor: theme?.color?.PrimaryColor,
        paddingVertical: 15,
    },
    tabText: {
        fontSize: 16,
        color: theme.color.Black,
    },
    tabTextFocused: {
        color: theme?.color?.PrimaryColor,
        fontSize: 18
    },
    tabBarStyle: {
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width,
        flexDirection: 'row',
        paddingHorizontal: 30,
        backgroundColor: 'white',
        marginVertical: 5
    },
    container: {
        flex: 1,
        padding: 20,
    },
    headerContainerStyle: {
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    budgetTextStyle: {
        fontSize: 42,
        fontWeight: 'bold'
    },
    circularContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 200,
        width: 50,
        height: 50,
    },
    circularTextStyle: {
        fontSize: 16
    }
})
