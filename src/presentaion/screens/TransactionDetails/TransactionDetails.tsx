import React, { useEffect, useState, useRef } from 'react';
import { SafeAreaView, View, StatusBar, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import { LanguageCode, ScreenNames } from '../../../shared/constants';
import { defaultTheme as theme, Theme } from '../../../shared/theme';
import PrimaryButton from '../../components/shared/primaryButton/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import HeaderTitleWithGoBack from '../../components/common/header-title-with-go-back/HeaderTitleWithGoBack';
// import { TransactionDetailsParams } from '../../../domain/transactionReceiptDetails';
import BlurProgressView from '../../components/common/blur-activity-indicator/BlurProgressView';

import styles from './styles';


const TransactionDetails = ({ route }) => {
    const lang = LanguageCode.EN
    const { transactionDetailsType, transactionReferenceNumber } = route?.params
    const [isLoadingVisible, setLoadingVisible] = useState<boolean>(false)
    const [transactionData, setTransactionData] = useState()
    const [sendCurrency, setSendCurrency] = useState<any>()
    const [recieveCurrency, setRecieveCurrency] = useState<any>()
    const [reason, setReason] = useState()
    const [beneficiary, setBeneficiary] = useState<any>()
    const navigation = useNavigation()

    const handleCopyContent = () => {
        const contentToCopy = 'transactionData?.referenceNo!'
        // Clipboard.setString(contentToCopy);
    };

    const findItem = (itemList: any, value: string, isBeneficariesList = false) => {
        let filteredSelectedList = itemList.filter((e) => {
            if (isBeneficariesList) {
                return e.id == value
            } else {
                return e.value == value
            }
        })
        return filteredSelectedList[0]!
    }

    const renderTransactionDetailsRow = (title: string, value: any, currencyNeeded: boolean) => {
        return (
            <View style={styles(theme, lang).detailsSectionContainer}>
                <View style={styles(theme, lang).titleContaine}>
                    <Text style={styles(theme, lang).detailsTitleStyle}>{title}</Text>
                </View>
                <View style={styles(theme, lang).valueContainer}>
                    {
                        (title == 'localizedString(LocalizationKeys.TRANSACTION_SERIAL_NUMBER))' && value) ?
                            <TouchableOpacity
                                style={styles(theme, lang).detailsValueContainerStyle}
                                onPress={() => { handleCopyContent() }}>
                                <Image
                                    style={styles(theme, lang).copyIcon}
                                    source={require("../../../assets/icons/food_icon.png")}
                                />
                                <Text style={styles(theme, lang).detailsValueStyle}>{value}</Text>
                            </TouchableOpacity> :
                            <View style={styles(theme, lang).detailsValueContainerStyle}>
                                <Text style={currencyNeeded ? styles(theme, lang).amountStyle : styles(theme, lang).detailsValueStyle}>{(title === 'omar') && value ? '1' : value}</Text>
                                {currencyNeeded &&
                                    title == 'amount' ?
                                    <Text>{recieveCurrency?.shortName}</Text>
                                    :
                                    currencyNeeded ?
                                        <Text>{sendCurrency?.shortName}</Text>
                                        :
                                        null
                                }
                            </View>
                    }
                </View >
            </View >
        )
    }

    const horizontalseparator = () => {
        return (
            <View style={styles(theme, lang).horizontalseparator} />
        )
    }

    return (
        <SafeAreaView
            style={styles(theme, lang).container}
        >
            <StatusBar barStyle="dark-content" />
            {
                <>
                    <HeaderTitleWithGoBack
                        theme={theme}
                        title={'Transaction Reciept'}
                        backActionCompletionHandler={() => navigation?.goBack()}
                        rightItems={null}
                        lang={lang} />
                </>
            }
            <ScrollView
                style={styles(theme, lang).scrollContainerStyle}
                contentContainerStyle={{
                    justifyContent: 'center',
                    flex: 1
                }}
            >
                <View style={styles(theme, lang).recieptContainer}>
                    {renderTransactionDetailsRow('Date ', '10/2/2023', false,)}
                    {renderTransactionDetailsRow('Reciept Serial Number', '12324324', false,)}
                    {horizontalseparator()}
                    {renderTransactionDetailsRow('Expenses', '100', true,)}
                    {renderTransactionDetailsRow('Category ', 'Food', true,)}
                    {renderTransactionDetailsRow('Payment Method', 'Cash', true,)}
                    {renderTransactionDetailsRow('', '', false)}
                </View>
            </ScrollView>
            <View style={styles(theme, lang).buttonsView}>
                <View style={styles(theme, lang).ButtonContainer}>
                    <PrimaryButton
                        title={'Share'}
                        titleColor={theme.color.white}
                        // iconPath={require("../../../assets/icons/food_icon.png")}
                        onPress={() => { }}
                        isLoading={false}
                        titleFontFamily={''}
                        titleFontSize={0}
                        borderRadius={0}
                        backgroundColor={theme.color.primaryDiscoColor}
                    />
                </View >


            </View >
            {isLoadingVisible && <BlurProgressView />}
        </SafeAreaView>
    );
}

export default TransactionDetails;

