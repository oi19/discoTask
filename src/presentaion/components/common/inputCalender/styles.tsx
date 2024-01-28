import { Dimensions, I18nManager, StyleSheet } from 'react-native';
import { LanguageCode } from '../../../shared/constants';
import { Theme } from '../../../shared/theme';

const styles = (theme: Theme, lang: LanguageCode) =>
    StyleSheet.create({
        modalBackgroundStyle: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme.color.modalBackgroundColor,

        },
        modalContainerStyle: {
            width: Dimensions.get('window').width,
            position: 'absolute',
            bottom: Dimensions.get('screen').height / 3.5,
            height: Dimensions.get("screen").height / 2.8,
            backgroundColor: theme.color.whiteTwo,
            borderRadius: 36,
        },
        dateTimePickerContainer: {
            flex: 1,
            marginBottom: 100
        },
        modalTitleView: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 24,
            marginTop: 15,
        },
        modalTitleText: {
            fontFamily: theme.font.getFontForLang(lang).boldFont,
            fontSize: 16,
            color: theme.color.eggplant,
        },
        cancelView: {
            width: 36,
            height: 36,
            borderRadius: 17,
            alignItems: 'center',
            justifyContent: 'center'
        },
        cancelImage: {
            width: 36,
            height: 36,
            tintColor: theme.color.buttonFirstColor
        },
        optionView: {
            height: 53,
            justifyContent: 'center',
            marginStart: 40,
        },
        optionText: {
            fontSize: 14,
            fontFamily: theme.font.getFontForLang(lang).regularFont,
            color: theme.color.blackFontColor,
            textAlign: 'left'
        },
        ButtonContainer: {
            position: 'absolute',
            left: 20,
            right: 20,
            bottom: 25,
            height: 56,
            shadowColor: theme.color.buttonShadowColor,
            shadowOffset: {
                width: 0,
                height: 8
            },
            shadowRadius: 12,
            shadowOpacity: 20,
        },
    });

export default styles;
