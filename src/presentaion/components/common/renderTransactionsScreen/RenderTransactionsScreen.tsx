import React, { useState } from 'react';
import { SafeAreaView, View, ScrollView, RefreshControl } from 'react-native';

import TransactionsList from '../../../components/common/tarnsactions-list-component/transactionsList';
import HeaderTitleWithGoBack from '../../../components/common/header-title-with-go-back/HeaderTitleWithGoBack';
import CalendarBar from '../../../components/common/calender-component/CalendarBar';
import SearchBar from '../sarchBarWithOptionalHorizontalIcons/SearchBar';

import { transactionItem } from '../../../../domain/transactions';

import { Theme } from '../../../../shared/theme';
import { LanguageCode } from '../../../../shared/constants';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

type inputProps = {
    fixedTransactionList: transactionItem[],
    onDateChangeCallback: Function,
    isLoading: boolean,
    loadingHandlerCallback:Function,
    theme: Theme,
    lang:LanguageCode,
}

const RenderTransactionsScreen = (props: inputProps) => {
    const { fixedTransactionList,onDateChangeCallback,loadingHandlerCallback,isLoading,lang,theme } = props
    const navigation = useNavigation()
    const [transactionList, setTransactionList] = useState<transactionItem[]>(fixedTransactionList)
    const [refreshing, setRefreshing] = React.useState(false);
    const [searchValue, setSearchValue] = useState<string>('')
    const [calendarVisible, setCalendarVisible] = useState(false)

  const onRefresh = () => {
    setRefreshing(true);
      setTimeout(() => {
    console.warn('memo')
      setRefreshing(false);
    }, 500)
  };

  const search = (text: string) => {
    let filteredList = fixedTransactionList?.filter((item) => {
      return ((item.title.toLowerCase()).includes(text.trim().toLowerCase()))
    })
    setTransactionList(filteredList)
    }


const debounce = (func, delay = 1000)=> {
  let timer;
  return function (...args) {
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(context, args), delay);
  };
}
  const handlChangeText = (text: string) => {
    setSearchValue(text)
    if (text) {
      search(text)
    } else {
      setTransactionList(fixedTransactionList)
    }
  }

  return (
    <SafeAreaView style={styles(theme, lang).containerStyle}>
      <View
        style={styles(theme, lang).continer}>
        <HeaderTitleWithGoBack
          theme={theme}
          backActionCompletionHandler={() => navigation?.goBack()}
          title={'Transactions'}
          lang={lang}
        /> 
        <View style={{height:22}} />
        <SearchBar
            searchValue={searchValue}
            onChangeValueHandlerCallback={(text:string)=> debounce(handlChangeText(text))}
            onAfterIconPressCallback={(currentValue:boolean) => { setCalendarVisible(!currentValue); }}
            onBeforeIconPressCallback={()=>{}}
            afterIcon={true}
            beforeIcon={false}
            theme={theme}
            lang={lang}
              />
        <CalendarBar
          lang={lang}
          theme={theme}
          isCalendarVisibleFromNav={calendarVisible}
            setIsCalendarVisibleFromNav={(value)=>setCalendarVisible(value)}
            onChooseDate={(dates) => {
                onDateChangeCallback(dates)
                loadingHandlerCallback(false)
            }} 
          showCalendarBarHeader={true}
           />
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          refreshControl={
            <RefreshControl
              tintColor={theme.color.primaryDiscoColor}
              colors={[theme.color.primaryDiscoColor]}
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
              loadSkeleton={isLoading}
              onEndCompletionHandler={() => { }}
              lang={lang}
              numberOfTransactionsToShow={null}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default RenderTransactionsScreen;
