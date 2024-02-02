import React, {  useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, RefreshControl, ActivityIndicator, I18nManager, } from 'react-native';

import Swipeable from 'react-native-gesture-handler/Swipeable';

import { Currency_Values, LanguageCode, Payment_Method, SWIP_TYPE, ScreenNames, } from '../../../../shared/constants';
import { Theme } from '../../../../shared/theme';

import { transactionItem } from '../../../../domain/transactions';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';


export interface InputProps {
  theme: Theme;
  lang: LanguageCode
  transactionList: transactionItem[];
  refreshing?: any;
  onRefresh?: any;
  loading?: boolean;
  loadSkeleton?: boolean;
  onEndCompletionHandler: Function,
  numberOfTransactionsToShow: number | null
}

const TransactionsList = (props: InputProps) => {
  const navigation = useNavigation();
  const { lang, theme, transactionList, refreshing, onRefresh, numberOfTransactionsToShow = null ,loading} = props;
  const [isLoadingVisible, setIsLoadingVisible] = useState<boolean>(false)
  let row: Array<any> = [];
  let prevOpenedRow;


  const findTransactionPaymentMethodImage = (transactionType: Payment_Method) => {
    switch (transactionType) {
      case Payment_Method.CASH:
        return require('../../../../assets/icons/cash_icon.png')
      case Payment_Method.CREDIT_CARD:
        return require('../../../../assets/icons/credit_icon.png')
      default:
        return require('../../../../assets/icons/cash_icon.png')
    }
  }

  const findTransactionCurrency = (transactionCurrency: Currency_Values) => {
    switch (transactionCurrency) {
      case Currency_Values.USD:
        return ' $ '
      case Currency_Values.EGP:
        return 'L.E'
      case Currency_Values.SAR:
        return 'SAR'
      default:
        return ' $ '
    }
  }

  const swipButtonHandler = (id, index, type) => {
    if (type == SWIP_TYPE.RESEND_BUTTON) {
      closeFocusedRowOnPress(index)
    }
  }

  const renderSwipComponent = (type, dragX, id, index) => {
    const trans = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });
    return (
      <TouchableOpacity
        style={styles(theme, lang).leftAction}
        onPress={() => { swipButtonHandler(id, index, type) }} >
        {type == SWIP_TYPE.RESEND_BUTTON &&
          <>
            < Image
              style={styles(theme, lang).resendImageStyle}
              source={require('../../../../assets/images/disco_logo.png')
              }
            />
          </>
        }
      </TouchableOpacity>
    );
  }


  const closeUnFocusedRow = (index) => {
    if (prevOpenedRow && prevOpenedRow !== row[index]) {
      prevOpenedRow.close();
    }
    prevOpenedRow = row[index];
  };

  const closeFocusedRowOnPress = (index) => {
    if (prevOpenedRow && prevOpenedRow == row[index]) {
      prevOpenedRow.close();
    }
  }

  const renderTransactionItems = ({ item, index }) => {
    return (
      <>
        {
          (!numberOfTransactionsToShow || (numberOfTransactionsToShow && index < numberOfTransactionsToShow)) ?
            < Swipeable
              onSwipeableOpen={() => closeUnFocusedRow(index)}
              ref={(ref) => (row[index] = ref)}
              renderRightActions={(dragX) => (!item.candResend && !I18nManager.isRTL) && renderSwipComponent(SWIP_TYPE.RESEND_BUTTON, dragX, item.referenceNo, index)}
              renderLeftActions={(dragX) => (!item.canResend && I18nManager.isRTL) && renderSwipComponent(SWIP_TYPE.RESEND_BUTTON, dragX, item.referenceNo, index)}
            >
              <TouchableOpacity
                onPress={() => {
                  closeUnFocusedRow(index)
                  navigation.navigate(ScreenNames.TRANSACTION_DETAILS, { transactionReferenceNumber: item.transactionID })
                }}
                style={styles(theme, lang).transactionItemContainer}>
                <View style={styles(theme, lang).transactionItemStyle}>
                  <View>
                    <Image
                      style={styles(theme, lang).transactionImageStyle}
                      source={findTransactionPaymentMethodImage(item.transactionPaymentMethod)}
                    />
                  </View>
                  <View style={styles(theme, lang).merchantContainer}>
                    <Text style={styles(theme, lang).transactionTitle}>{item.title}</Text>
                    <Text style={styles(theme, lang).transactionDateStyle}>{item.date}</Text>
                  </View>
                </View>
                <View style={styles(theme, lang).balanceContainer}>
                  <Text numberOfLines={1} style={styles(theme, lang).expenses}>
                    {item.expenses ? `+ ${item.expenses}` : 0}{findTransactionCurrency(item.currency)}
                  </Text>
                </View>
              </TouchableOpacity>
            </Swipeable >
            : null
        }
      </>
    );
  };

  return (
    <View style={styles(theme, lang).transactionListContainer}>
      <FlatList
        data={transactionList}
        keyExtractor={(index) => 'key' + index}
        renderItem={renderTransactionItems}
        onEndReachedThreshold={0.01}
        ItemSeparatorComponent={(index) => { return (index) < numberOfTransactionsToShow && <View style={styles(theme, lang).separator} /> }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          refreshing && (
            <RefreshControl
              tintColor={theme.color.azure}
              colors={[theme.color.azure]}
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          )
        }
          // ListEmptyComponent={() => {
          //   if (loading && transactionList.length == 0) {
          //   return (
          //       <ActivityIndicator
          //         style={styles(theme, lang).indicatorStyle}
          //         size={'large'}
          //         color={theme.color.azure}
          //       />
          //   );
          //   }
          // }}
      />
    </View>
  );
};

export default TransactionsList;
