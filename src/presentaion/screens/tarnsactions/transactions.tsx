import React, { useEffect, useState } from 'react';
import { LanguageCode } from '../../../shared/constants';

import moment from 'moment';

import useTransactionFetch from '../../../hooks/useTransactionFetch';
import { transactionItem } from '../../../domain/transactions';

import { defaultTheme as theme } from "../../../shared/theme";
import RenderTransactionsScreen from '../../components/common/renderTransactionsScreen/RenderTransactionsScreen';


const TransactionsScreen = ({route}) => {
  const { currentRoute } = route.params
  const lang: LanguageCode = LanguageCode.EN
  const [transactionList, setTransactionList] = useState<transactionItem[]>()
  const [isLoading, setLoading] = React.useState(false);

  const fetchDataHandler = (date?) => {
     const { filteredList } = useTransactionFetch(currentRoute,date)
    setTransactionList(filteredList)
  }

  useEffect(() => {
    fetchDataHandler()
  }, [])
  
  return (
    <RenderTransactionsScreen
      fixedTransactionList={transactionList}
      onDateChangeCallback={fetchDataHandler}  
      theme={theme}
      lang={lang}
      isLoading={isLoading}
      loadingHandlerCallback={setLoading}
    />
  );
};

export default TransactionsScreen;

