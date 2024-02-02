import React, { useEffect, useState } from "react";
import RenderBudgetScreen from "../../components/common/RenderBudgetScreen/RenderBudgetScreen";

import { useNavigation } from "@react-navigation/native";

import { BudgetRountesNames, LanguageCode, ScreenNames } from "../../../shared/constants";
import { defaultTheme } from "../../../shared/theme";

import useTransactionFetch from "../../../hooks/useTransactionFetch";
import { AnalysisData } from "../../../hooks/useTransactionFetch";

import { transactionItem } from "../../../domain/transactions";

const routes = ['all', 'personal', 'work']

const BudgetScreen = () => {
    const navigation = useNavigation()
    const [currentRoute, setCurrentRoute] = useState<BudgetRountesNames>(BudgetRountesNames.ALL)
    const [analysisData, setAnalysisData] = useState<AnalysisData>()
    const [filteredList, setFilteredList] = useState<transactionItem[]>([])

    useEffect(() => {
        const { filteredList, analysisData } = useTransactionFetch(currentRoute)
        setFilteredList(filteredList)
        setAnalysisData(analysisData)
    }, [currentRoute])

    return (
        <>
            {
                analysisData?.categoryPercentages ?
                    <RenderBudgetScreen
                        isLoading={false}
                        onCompletionHandler={undefined}
                        transactionList={filteredList}
                        ViewAllButtonOnPress={() => { navigation.navigate(ScreenNames.TRANSACTION, { currentRoute }) }}
                        lang={LanguageCode.EN}
                        theme={defaultTheme}
                        routes={routes}
                        currentRoute={currentRoute}
                        onRouteChangeHandler={setCurrentRoute}
                        analysisData={analysisData.categoryPercentages && analysisData}
                    />
                    :

                    null
            }
        </>
    )
}

export default BudgetScreen