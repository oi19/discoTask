import { StyleSheet } from 'react-native';
import { LanguageCode } from "../../../../shared/constants";
import { Theme } from '../../../../shared/theme';

const styles = (theme: Theme, lang: LanguageCode) =>
    StyleSheet.create({
        calendarHeader: {
            flexDirection: 'row',
            backgroundColor: theme.color.calendarBackground,
            paddingStart: 19,
            paddingEnd: 24,
            paddingVertical: 16,
            justifyContent: 'space-between',
        },
        text: {
            fontSize: 16,
            color: theme.color.eggplant,
            fontFamily: theme.font.getFontForLang(lang).mediumFont
        },
        calendarDone: {
            color: theme.color.calendarButtonColor,
            fontSize: 16,
            fontFamily: theme.font.getFontForLang(lang).boldFont
        }
    });

export default styles;
