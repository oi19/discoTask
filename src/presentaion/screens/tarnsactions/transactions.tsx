import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, ScrollView, TouchableOpacity, RefreshControl, Image, TextInput, } from 'react-native';
import { LanguageCode } from '../../../shared/constants';
import { defaultTheme as theme } from "../../../shared/theme";
import styles from './styles';
import TransactionsList from '../../components/common/tarnsactions-list-component/transactionsList';
import moment from 'moment';
import HeaderTitleWithGoBack from '../../components/common/header-title-with-go-back/HeaderTitleWithGoBack';
import CalendarBar from '../../components/common/calender-component/CalendarBar';

import useTransactionFetch from '../../../hooks/useTransactionFetch';
import { transactionItem } from '../../../domain/transactions';

const TransactionsScreen = ({ navigation, route }) => {
  const { currentRoute } = route.params
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState({ startDate: moment(), endDate: moment(), });
  const [transactionFixedData, setTransactionFixedData] = useState<transactionItem[]>();
  const [transactionList, setTransactionList] = useState<transactionItem[]>()
  const [refreshing, setRefreshing] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [searchValue, setSearchValue] = useState<string>('')
  const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true);
  const [calendarVisible, setCalendarVisible] = useState(false)
  const lang: LanguageCode = LanguageCode.EN



  useEffect(() => {
    const { filteredList } = useTransactionFetch(currentRoute)
    setTransactionFixedData(filteredList)
    setTransactionList(filteredList)
  }, [])

  useEffect(() => {

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [selectedDate]);

  const onRefresh = () => {
    setIsInitialLoad(true)
    setRefreshing(true);
    setTimeout(() => {
      setIsInitialLoad(false)
      setRefreshing(false);
    }, 500)

  };

  const search = (text: string) => {
    let filteredList = transactionFixedData?.filter((item) => {
      return ((item.title.toLowerCase()).includes(text.trim().toLowerCase()))
    })
    setTransactionList(filteredList)
  }

  const handlChangeText = (text: string) => {
    setSearchValue(text)
    if (text) {
      search(text)
    } else {
      setTransactionList(transactionFixedData)
    }
  }



  const renderRightHeaderIcon = () =>
    <TouchableOpacity onPress={() => setCalendarVisible(true)} style={{ marginStart: 6 }}>
      <Image
        resizeMode={'contain'}
        style={styles(theme, lang).calendarIconStyle}
        source={require("../../../assets/icons/calendar_icon.png")}
      />
    </TouchableOpacity>

  return (
    <SafeAreaView style={styles(theme, lang).containerStyle}>
      <View
        style={styles(theme, lang).continer}>
        <HeaderTitleWithGoBack
          theme={theme}
          backActionCompletionHandler={() => navigation?.goBack()}
          title={'Transactions'}
          lang={lang} />

        <View style={styles(theme, lang).searchBarContainer}>
          <View style={styles(theme, lang).searchBarSubContainer}>
            <Image
              source={require("../../../assets/icons/searchbutton.png")}
              style={styles(theme, lang).searchIcon} resizeMode={'contain'}
            />
            <TextInput
              style={styles(theme, lang).searchBarLabelStyle}
              placeholder={'Search'}
              value={searchValue}
              onChangeText={(text) => handlChangeText(text)}
            />
          </View>
          {renderRightHeaderIcon()}
        </View>
        <View style={{ height: 22 }} />
        <CalendarBar
          theme={theme}
          isCalendarVisibleFromNav={calendarVisible}
          setIsCalendarVisibleFromNav={setCalendarVisible}
          onChooseDate={(dates) => { }} lang={lang}
          showCalendarBarHeader={true} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          refreshControl={
            <RefreshControl
              tintColor={theme.color.neonBlue}
              colors={[theme.color.neonBlue]}
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }>
          <View style={styles(theme, lang).transactionContiner}>
            <TransactionsList
              theme={theme}
              transactionList={transactionList}
              refreshing={refreshing}
              onRefresh={onRefresh}
              loadSkeleton={loading}
              onEndCompletionHandler={() => { }}
              lang={LanguageCode.EN}
              numberOfTransactionsToShow={null}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default TransactionsScreen;
