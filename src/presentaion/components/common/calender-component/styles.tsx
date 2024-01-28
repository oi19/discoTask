import { Dimensions, I18nManager, StyleSheet } from 'react-native';
import { LanguageCode } from '../../../../shared/constants';
import { Theme } from '../../../../shared/theme';
let { width, height } = Dimensions.get("screen");

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;
const scale = (size: number) => width / guidelineBaseWidth * size
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size
const defaultFactor = (width > guidelineBaseWidth) ? .5 : 1.25
export const moderateScale = (size, factor = defaultFactor) => size + (scale(size) - size) * factor;

const styles = (theme: Theme, lang: LanguageCode) =>
    StyleSheet.create({
        periodViewContainer: { flexDirection: 'row', marginHorizontal: scale(16), justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
        periodViewSubContainer: { flexDirection: 'row', },
        periodViewButton: { marginEnd: 8, paddingVertical: verticalScale(6), paddingHorizontal: 16, borderRadius: 8 },
        singleDateContainer: { flexDirection: 'row', justifyContent: 'space-between' },
        singleDateStartDateContainer: { flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginEnd: 10 },
        singleDateMonthText: { color: theme.color.primaryDiscoColor, fontSize: 14, fontFamily: theme.font.getFontForLang(lang).regularFont, },
        singleDateMonthTextFocused: { color: theme.color.darkBlue, fontSize: 20, fontFamily: theme.font.getFontForLang(lang).boldFont, },
        singleDateDayText: { color: theme.color.primaryDiscoColor, fontSize: 24, fontFamily: theme.font.getFontForLang(lang).extraBoldFont, marginTop: I18nManager.isRTL ? -8 : 0 },
        calendarContainer: {
            backgroundColor: theme.color.white,
            borderRadius: 50,
            borderWidth: 1,
            borderColor: theme.color.lightGray,
            height: height / 1.2,
            width: width,
        },
        calenderSubContainer: {
            backgroundColor: theme.color.blackFontColor,
            height: 4,
            width: 60,
            alignSelf: 'center',
            marginVertical: 20,
            borderRadius: 4,
            justifyContent: 'space-between'
        },
        calendarDateDayContainer: { justifyContent: 'center', alignItems: 'center', height: '100%', width: '70%' },
        calendarRightArrowContainer: { height: '100%', alignItems: 'center', justifyContent: 'center', width: '15%', transform: [{ rotateY: I18nManager.isRTL ? '180deg' : '0deg' }] },
        calendarTodayTextStyle: { color: theme.color.blackFontColor, borderWidth: 1, padding: 6, borderColor: theme.color.green, borderRadius: 5 },
        modalView: {
            backgroundColor: theme.color.white,
            position: 'absolute',
            bottom: 0,
            height: height / 1.4,
            borderRadius: 10,
        },
        calendarBarContainer: {
            flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: theme.color.calenderBackgroundColor,
            marginHorizontal: 16,
            borderRadius: 16,
            height: 60,
        },
        calendarBarView: {
            height: 50,
            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
        agendaIcon: {
            width: 30,
            height: 30,
            marginEnd: 10
        },
        arrow: {
            width: 34,
            height: 34,
            tintColor: theme.color.blackTitleColor,
            transform: [{ rotateY: I18nManager.isRTL ? '180deg' : '0deg' }]
        },
        smallArrowLeft: {
            width: 20,
            height: 20,
            tintColor: theme.color.coolGrey,
            transform: [{ rotateY: I18nManager.isRTL ? '180deg' : '0deg' }]
        },
        smallArrowRight: {
            width: 20,
            height: 20,
            tintColor: theme.color.coolGrey,
            transform: [{ rotateY: '180deg' }]
        },
        confirmText: {
            marginVertical: 25,
            color: theme.color.darkBlue,
            alignSelf: 'flex-end',
            marginHorizontal: 20
        },
        selectedDay: {
            backgroundColor: theme.color.green,

        },
        buttomsContainer: {
            flexDirection: 'row',
            marginTop: 10,
            justifyContent: 'space-between',
            marginHorizontal: 16,
            height: 56,
        },
        notClickable: {
            opacity: 0.2
        },
        calendarBarText: {
            fontSize: moderateScale(14),
            fontFamily: theme.font.getFontForLang(lang).mediumFont
        },
        calendarBarTextisFromMoreScreen: {
            fontSize: 16,
            fontFamily: theme.font.getFontForLang(lang).boldFont
        },
        cancelView: {
            borderRadius: 17,
            alignItems: 'center',
            justifyContent: 'center',
            marginEnd: scale(4)
        },
        cancelImage: {
            width: 30,
            height: 30,
            resizeMode: 'contain',
        },
        calenderText: { fontSize: moderateScale(14) }
    });

export default styles;
