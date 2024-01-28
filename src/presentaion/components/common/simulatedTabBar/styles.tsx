import { Dimensions, I18nManager, StyleSheet } from 'react-native';
import { LanguageCode } from '../../../../shared/constants';
import { Theme } from '../../../../shared/theme';
let { width, height } = Dimensions.get("window");


const styles = (theme: Theme, lang: LanguageCode) =>
    StyleSheet.create({
        root: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 26
        },
        focusedRouteContainerStyle: {
            borderBottomWidth: 1,
            paddingBottom: 10,
            borderColor: theme.color.primaryDiscoColor
        },
        routeContainerStyle: {

        },
        focusedRouteTextStyle: {
            fontSize: 16,
            color: theme.color.primaryDiscoColor
        },
        routeTextStyle: {
            fontSize: 16,
            color: theme.color.blackFontColor
        },
    });

export default styles;
