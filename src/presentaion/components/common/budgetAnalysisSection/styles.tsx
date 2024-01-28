import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { Theme } from "../../../../shared/theme";
import { LanguageCode } from "../../../../shared/constants";


export const styles = (theme: Theme, lang: LanguageCode) => StyleSheet.create({

    analysisRootStyle: {
        paddingHorizontal: 24
    },
    analysisTitleSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    analysisContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    totalExpensesText: {
        fontSize: 28,
        
        fontWeight: 'bold'

    },
    category: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    categoryImageStyle: {
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    categoryText: {
        fontSize: 18,
        marginStart: 20
    },
    categoryPercentage: {
        fontSize: 20
    }
})