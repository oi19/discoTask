import React, { useEffect, useState } from "react";
import RenderBudgetScreen from "../../components/common/RenderBudgetScreen/RenderBudgetScreen";

import { useNavigation } from "@react-navigation/native";

import { BudgetRountesNames, LanguageCode, ScreenNames } from "../../../shared/constants";
import { defaultTheme } from "../../../shared/theme";

import useTransactionFetch from "../../../hooks/useTransactionFetch";
import { AnalysisData } from "../../../hooks/useTransactionFetch";

import { transactionItem } from "../../../domain/transactions";
import BlurProgressView from "../../components/common/blur-activity-indicator/BlurProgressView";

const routes = ['all', 'personal', 'work']

const BudgetScreen = () => {
    const navigation = useNavigation()
    const [currentRoute, setCurrentRoute] = useState<BudgetRountesNames>(BudgetRountesNames.ALL)
    const [analysisData, setAnalysisData] = useState<AnalysisData>()
    const [filteredList, setFilteredList] = useState<transactionItem[]>([])
    const [isLoading,setLoading] = useState<boolean>(true)

    useEffect(() => {
        setLoading(true)
        const { filteredList, analysisData } = useTransactionFetch(currentRoute)
        setFilteredList(filteredList)
        setAnalysisData(analysisData)
        setLoading(false)
    }, [currentRoute])

    const ViewAllButtonPressed = () => {
        navigation.navigate(ScreenNames.TRANSACTION, { currentRoute }) 
    }

    if (isLoading) { 
        return <BlurProgressView/>
    }

    return (
        <RenderBudgetScreen
            isLoading={isLoading}
            onCompletionHandler={()=>{console.warn('onCompletionHandler')}}
            transactionList={filteredList}
            ViewAllButtonOnPress={ViewAllButtonPressed}
            lang={LanguageCode.EN}
            theme={defaultTheme}
            routes={routes}
            currentRoute={currentRoute}
            onRouteChangeHandler={setCurrentRoute}
            analysisData={analysisData.categoryPercentages && analysisData}
        />
    )
}

export default BudgetScreen