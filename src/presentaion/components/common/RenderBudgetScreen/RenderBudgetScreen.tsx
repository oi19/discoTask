import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, RefreshControl, Image } from 'react-native'

import { styles } from "./styles";
import { Theme, defaultTheme } from "../../../../shared/theme";

import TransactionsList from "../tarnsactions-list-component/transactionsList";
import { BudgetRountesNames, LanguageCode } from "../../../../shared/constants";

import SimulatedTabBar from "../simulatedTabBar/SimulatedNavigationBar";
import BudgetAnalysisSection, { budgetAnalysisProps } from "../budgetAnalysisSection/BudgetAnalysisSection";

import CalendarBar from "../calender-component/CalendarBar";
import { transactionItem } from "../../../../domain/transactions";
import { AnalysisData } from "../../../../hooks/useTransactionFetch";

type InputProps = {
    isLoading: boolean,
    isLoadingTransactions?: boolean,
    onCompletionHandler: Function,
    transactionList: transactionItem[];
    ViewAllButtonOnPress: Function,
    routes: string[],
    currentRoute: BudgetRountesNames,
    onRouteChangeHandler: Function,
    analysisData: AnalysisData,
    lang: LanguageCode,
    theme: Theme
}

const RenderBudgetScreen = (props: InputProps) => {
    const { isLoading, isLoadingTransactions = false, onCompletionHandler, ViewAllButtonOnPress, lang, theme = defaultTheme, routes, onRouteChangeHandler, currentRoute, analysisData, transactionList } = props
    const [isCalendarVisible, setCalendarVisible] = useState<boolean>(false)

    const renderHeader = () => {
        return (
            <View style={styles(theme, lang).headerContainerStyle}>
                <Text style={styles(theme, lang).budgetTextStyle}>Budget</Text>
                <View style={styles(theme, lang).circularContainer}>
                    <Text style={styles(theme, lang).circularTextStyle}>1</Text>
                </View>
            </View>
        )
    }

    const renderDateSection = () => {
        return (
            <TouchableOpacity
                style={styles(theme, lang).dateContainer}
                onPress={() => { setCalendarVisible(true) }}
            >
                <Text style={styles(theme, lang).calenderTextStyle}>{'15 March'}</Text>
                <Text style={styles(theme, lang).calenderTextStyle}>{'To'}</Text>
                <Text style={styles(theme, lang).calenderTextStyle}>{'15 April  '}</Text>
                <Image
                    style={styles(theme, lang).calenderImage}
                    source={require('../../../../assets/icons/food_icon.png')} />
            </TouchableOpacity>
        )
    }

    const renderTransactionSection = () => {
        return (
            <>
                <View style={styles(theme, lang).transactionsHistoryLabels}>
                    <Text style={styles(theme, lang).transactionsHistoryLabel}>Transactions</Text>
                    <TouchableOpacity
                        onPress={() => ViewAllButtonOnPress()}>
                        <Text style={styles(theme, lang).seeAllLabel}>
                            View All
                        </Text>
                    </TouchableOpacity>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={styles(theme, lang).homeScrollableContainer}
                    refreshControl={
                        <RefreshControl
                            tintColor={theme.color.primaryDiscoColor}
                            colors={[theme.color.primaryDiscoColor]}
                            refreshing={false}
                            onRefresh={() => { }}
                        />
                    }>

                    <View style={styles(theme, LanguageCode.EN).transactionsHistoryList}>
                        <TransactionsList
                            theme={theme}
                            transactionList={transactionList}
                            loading={isLoading}
                            loadSkeleton={isLoadingTransactions}
                            onEndCompletionHandler={() => onCompletionHandler()}
                            lang={lang}
                            numberOfTransactionsToShow={4} />
                    </View>
                </ScrollView>
            </>

        )
    }


    return (
        <View style={styles(theme, lang).rootStyle} >
            {renderHeader()}
            <SimulatedTabBar
                routes={routes}
                onRoutePress={onRouteChangeHandler}
                currentRoute={currentRoute}
            />
            {renderDateSection()
            }
            <CalendarBar
                lang={lang}
                theme={theme}
                isCalendarVisibleFromNav={isCalendarVisible}
                setIsCalendarVisibleFromNav={setCalendarVisible}
                onChooseDate={() => {
                    console.warn('meroo');
                }}
                showCalendarBarHeader={false}
            />
            <BudgetAnalysisSection
                analysisData={analysisData}
                theme={theme}
                lang={lang} />
            {renderTransactionSection()}
        </View>
    )

}

export default RenderBudgetScreen