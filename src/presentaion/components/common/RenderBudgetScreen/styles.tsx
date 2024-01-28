import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { Theme } from "../../../../shared/theme";
import { LanguageCode } from "../../../../shared/constants";


export const styles = (theme: Theme, lang: LanguageCode) => StyleSheet.create({
    rootStyle: {
        flex: 1,
        backgroundColor: theme.color.whiteColorBackground,
    },
    headerContainerStyle: {
        flexDirection: 'row',
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
        borderColor: theme.color.Black,
        borderRadius: 200,
        width: 50,
        height: 50,
    },
    circularTextStyle: {
        fontSize: 24
    },
    transactionsHistoryLabels: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 24,
        alignItems: 'center',
        marginTop: 20
    },
    transactionsHistoryLabel: {
        fontSize: 30,
        color: theme.color.blackFontColor,
    },
    seeAllLabel: {
        fontSize: 14,
        color: theme.color.primaryDiscoColor,
        fontFamily: theme.font.getFontForLang(lang).regularFont,
    },
    transactionsHistoryList: {
        bottom: 10,
    },
    homeScrollableContainer: {
        flex: 1,
    },
    analysisRootStyle: {
        paddingHorizontal: 24
    },
    analysisTitleSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    analysisContainer: {
        flexDirection: 'row'
    },
    category: {
        flexDirection: 'row',
        marginTop: 20,
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

    },
    dateContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginHorizontal: 24,
        marginVertical: 40
    },
    calenderTextStyle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginStart: 4
    },
    calenderImage: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    }
})