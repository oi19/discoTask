import { Dimensions, I18nManager, Platform, StyleSheet } from "react-native";
import { LanguageCode } from "../../../shared/constants";
import { Theme } from "../../../shared/theme";
import { tabBarHeight } from '../../../shared/constants'
import { hasNotch } from "react-native-device-info";


const styles = (theme: Theme, lang: LanguageCode) => StyleSheet.create({
    continer: {
        flex: 1,
    },
    searchBarContainer: {
        marginTop: 16,
        marginHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchBarSubContainer: {
        backgroundColor: theme.color.commonInputFieldBackgroundColor,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: theme.color.commonInputFieldBorderColor,
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 14,
        flex: 1
    },
    searchBarLabelStyle: {
        marginStart: 10,
        flex: 1,
        textAlign: I18nManager.isRTL ? 'right' : 'left'
    },
    searchIcon: {
        width: 12,
        height: 12,
        tintColor: theme.color.commonInputFieldLabelColor
    },
    containerStyle: {
        flex: 1,
        backgroundColor: theme.color.commonNewBackgroundColor
    },
    transactionsTitleStyle: {
        marginVertical: 21,
        marginHorizontal: 16,
    },
    transactionsTitleTextStyle: {
        fontSize: 24,
        fontFamily: theme.font.getFontForLang(lang).boldFont,
        textAlign: 'left'
    },
    transactionsFilterStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 24,
        paddingVertical: 20,
        paddingHorizontal: 16,
        borderRadius: 16,
        backgroundColor: theme.color.commonNewBackgroundColor,
        shadowColor: theme.color.gray1,
        shadowOffset: {
            width: 1,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: .5,
    },
    calendarIconStyle: {
        width: 30,
        height: 25,
        tintColor: theme.color.Black
    },
    filterClandarTextStyle: {
        fontSize: 16,
        fontFamily: theme.font.getFontForLang(lang).regularFont
    },
    transactionsFilterOptionsStyle: {
        flexDirection: "row",
        marginTop: 32,
        marginHorizontal: 24,
        justifyContent: "space-between",
        backgroundColor: theme.color.commonNewBackgroundColor,
        borderRadius: 12

    },
    filterOptionsStyle: {
        flex: 1,
        backgroundColor: theme.color.commonNewBackgroundColor,
        margin: 8,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    selectFilterOptionsStyle: {
        flex: 1,
        backgroundColor: theme.color.azure,
        margin: 8,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    filterOptionTextStyle: {
        fontSize: 13,
        fontFamily: theme.font.getFontForLang(lang).mediumFont,
        color: theme.color.azure,
        textAlign: 'center'
    },
    selectfilterOptionTextStyle: {
        fontSize: 13,
        fontFamily: theme.font.getFontForLang(lang).mediumFont,
        color: theme.color.white,
        textAlign: 'center'
    },
    transactionContiner: {
        flex: 1,
    },
})

export default styles