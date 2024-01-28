import { Dimensions, I18nManager, StyleSheet } from 'react-native';
import { LanguageCode } from '../../../../shared/constants';
import { Theme } from '../../../../shared/theme';
let { width, height } = Dimensions.get("window");

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;
const scale = (size: number) => width / guidelineBaseWidth * size
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size

const styles = (theme: Theme, lang: LanguageCode) =>
  StyleSheet.create({
    transactionListContainer: {
      marginTop: 16,
      marginBottom: 80,
    },
    swipableStyle: {
      flex: 1,
    },
    transactionItemContainer: {
      paddingVertical: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
      backgroundColor: theme.color.commonNewBackgroundColor
    },
    transactionImageStyle: {
      width: 40,
      height: 40,
      borderRadius: 12,
      resizeMode: 'contain'
    },
    status: {
      height: 20,
      width: 20,
      position: 'absolute',
      bottom: I18nManager.isRTL ? -6 : -8,
      end: I18nManager.isRTL ? 0 : -6
    },
    transactionItemStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 2,
    },
    transactionTitle: {
      color: theme.color.blackFontColor,
      fontSize: 14,
      fontFamily: theme.font.getFontForLang(lang).regularFont,
      textAlign: 'left',
    },
    transactionDateStyle: {
      color: theme.color.fieldLabelColor,
      fontSize: 14,
      fontFamily: theme.font.getFontForLang(lang).regularFont,
      textAlign: 'left',
    },
    expenses: {
      fontSize: 16,
      fontFamily: theme.font.getFontForLang(lang).boldFont,
      textAlign: 'right',
      color: theme.color.blackFontColor
    },
    noTransactionTextStyle: {
      fontSize: 16,
      fontFamily: theme.font.getFontForLang(lang).regularFont,
      color: theme.color.commonInputFieldLabelColor
    },
    noTransactionHintsTextStyle: {
      fontSize: 16,
      fontFamily: theme.font.getFontForLang(lang).regularFont,
    },
    notransactionContainerStyle: {
      alignItems: 'center',
      marginTop: 36,
    },
    noTransactionImageStyle: {
      width: scale(171),
      height: verticalScale(171),
      marginBottom: 8,
    },
    indicatorStyle: {
      alignSelf: 'center',
      marginTop: 16,
    },
    balanceContainer: {
    },
    merchantContainer: {
      flex: 2,
      marginStart: 12,
    },
    separator: {
      height: 1,
      width: '90%',
      alignSelf: 'center',
      backgroundColor: theme.color.coolGrey,
      opacity: .6
    },
    leftActionContainer: {
      backgroundColor: theme.color.coolGrey,
      justifyContent: 'center',
      alignItems: 'center',
    },
    leftAction: {
      backgroundColor: theme.color.coolGrey,
      justifyContent: 'center',
      alignItems: 'center',
      width: 80,
      paddingHorizontal: 5,
    },
    actionText: {
      color: theme.color.white,
      fontSize: 12,
      textAlign: 'center',
      marginTop: 5
    },
    resendImageStyle: {
      width: 30,
      height: 30,
      resizeMode: 'contain',
    }
  });

export default styles;
