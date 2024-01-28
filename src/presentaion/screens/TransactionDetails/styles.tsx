import { I18nManager, StyleSheet } from "react-native";
import { Theme } from "../../../shared/theme";
import { LanguageCode } from "../../../shared/constants";
import { Dimensions } from "react-native";
let { width, height } = Dimensions.get("window");

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;
const scale = (size: number) => width / guidelineBaseWidth * size
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size

const styles = (theme: Theme, lang: LanguageCode) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.color.commonNewBackgroundColor,
    },
    progressIndicatorContainer: {
        marginTop: 20
    },
    scrollContainerStyle: {
        flex: 1,
        marginBottom: 100,
    },
    recieptContainer: {
        marginHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: theme.color.commonInputFieldBorderColor,
        borderRadius: 16,
        paddingHorizontal: scale(16),
        paddingVertical: verticalScale(16),
        backgroundColor: theme.color.transactionDetailsBackground,
        elevation: 4
    },
    successMessageTitleTextStyle: {
        fontSize: 16,
        fontFamily: theme.font.getFontForLang(lang).boldFont,
        color: theme.color.blackFontColor,
        textAlign: 'center'
    },
    successMessageDescriptionTextStyle: {
        fontFamily: theme.font.getFontForLang(lang).regularFont,
        color: theme.color.commonInputFieldLabelColor,
        fontSize: 16,
        textAlign: 'center'
    },
    detailsSectionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: I18nManager.isRTL ? verticalScale(2) : verticalScale(8),
    },
    titleContaine: {
        flex: 1.5,
        justifyContent: 'flex-start',
    },
    detailsTitleStyle: {
        fontSize: 12,
        textAlign: 'left'
    },
    detailsValueContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    valueContainer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    detailsValueStyle: {
        fontSize: 12,
        textAlign: 'left',
    },
    amountStyle: {
        fontFamily: theme.font.getFontForLang(lang).boldFont,
        marginEnd: 2
    },
    buttonsView: {
        position: 'absolute',
        bottom: verticalScale(34),
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: theme.color.onboardingButtonShadow,
        shadowOffset: {
            width: 1,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1,
        marginHorizontal: 16
    },
    ButtonContainer: {
        width: scale(343),
        flex: 1,
        height: 56,
        marginTop: verticalScale(16),
        shadowColor: theme.color.buttonShadowColor,
        shadowOffset: {
            width: 0,
            height: 8
        },
        shadowRadius: 12,
        shadowOpacity: 0,
    },
    subContainer: {
        flex: 1,
        alignItems: 'center'
    },
    horizontalseparator: {
        marginTop: 16,
        marginBottom: 8,
        borderColor: theme.color.fieldBorderColor,
        borderBottomWidth: 1,
        alignSelf: 'stretch'
    },
    copyIcon: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        marginEnd: 6
    },
    transactionRecieptText: {
        textAlign: 'center',
        fontSize: 16,
        fontFamily: theme.font.getFontForLang(lang).boldFont,
        marginBottom: verticalScale(20)
    },
    animationView: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: -10,
        marginBottom: verticalScale(-10)
    },
    animation: {
        height: Dimensions.get('window').height * 0.20,
        width: Dimensions.get('window').width * 0.40,
    }
})

export default styles