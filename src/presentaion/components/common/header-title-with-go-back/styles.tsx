import { I18nManager, StyleSheet } from 'react-native';
import { Theme } from '../../../shared/theme';
import { LanguageCode } from "../../../shared/constants";

const styles = (theme: Theme, lang: LanguageCode) =>
    StyleSheet.create({
        containerStyle: {
            paddingVertical: 9,
        },
        titleContainerStyle: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        },
        imageStyle: {
            width: 24,
            height: 24,
            transform: [{ rotateY: I18nManager.isRTL ? '180deg' : '0deg' }],
            tintColor: theme.color.bluishBlack
        },
        titleTextStyle: {
            fontSize: 16,
            textAlign: "center",
            color: theme.color.bluishBlack,
            fontFamily: theme.font.getFontForLang(lang).mediumFont,
        },
        titleTextContainer: {
            flex: 5,
            alignItems: "center"

        },
        titleTextContainerWithoutRightItems: {
            flex: 5,
            alignItems: "center"
        },
        rightItemContainer: {
            flex: 1,
            alignItems: "flex-end",
        },
        leftItemContainer: {
            flex: 1,
        },
        circle: {
            justifyContent: 'center',
            alignItems: 'center',
        },
    });

export default styles;
