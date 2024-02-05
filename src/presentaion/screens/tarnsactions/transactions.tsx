import React, { useEffect, useState } from 'react';

import useTransactionFetch from '../../../hooks/useTransactionFetch';

import { transactionItem } from '../../../domain/transactions';

import { defaultTheme as theme } from "../../../shared/theme";
import { LanguageCode } from '../../../shared/constants';


import RenderTransactionsScreen from '../../components/common/renderTransactionsScreen/RenderTransactionsScreen';
import BlurProgressView from '../../components/common/blur-activity-indicator/BlurProgressView';

const TransactionsScreen = ({ route }) => {
  const { currentRoute } = route.params
  const lang: LanguageCode = LanguageCode.EN
  const [transactionList, setTransactionList] = useState<transactionItem[]>()
  const [isLoading, setLoading] = React.useState(false);

  const transactionFetchHandler = (date?) => {
    setLoading(true)
    const { filteredList } = useTransactionFetch(currentRoute, date);
    setTransactionList(filteredList);
    setLoading(false)
  };

  useEffect(() => {
    transactionFetchHandler()
  }, [])

  if (isLoading ||  !transactionList || transactionList.length == 0) {
    return <BlurProgressView/>
  }
  
  return (
    < RenderTransactionsScreen
        fixedTransactionList = {  transactionList }
        onDateChangeCallback = { transactionFetchHandler }
        theme = { theme }
        lang = { lang }
        isLoading = { isLoading }
        loadingHandlerCallback={setLoading}
    />
  );
};

export default TransactionsScreen;

