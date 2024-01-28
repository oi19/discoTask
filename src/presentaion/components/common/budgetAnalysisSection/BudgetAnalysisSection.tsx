import React from "react"
import { View, Text, Image } from 'react-native'

import { Theme } from "../../../../shared/theme"
import { BudgetCatergory, LanguageCode } from "../../../../shared/constants"

import { styles } from "./styles"
import { AnalysisData } from "../../../../hooks/useTransactionFetch"

export type budgetAnalysisProps = {
    analysisData: AnalysisData
    theme: Theme,
    lang: LanguageCode
}

type categoryAnalysis = {
    title: string,
    percentage: number,
    categoryType: BudgetCatergory
}

const BudgetAnalysisSection = (props: budgetAnalysisProps) => {
    const { analysisData: { categoryPercentages: data, totalExpenses }, theme, lang } = props;

    console.warn(data)

    const findCategoryTitle = (categoryType: BudgetCatergory) => {
        switch (Number(categoryType)) {
            case BudgetCatergory.FOOD:
                return 'Food'
            case BudgetCatergory.CLOTHES:
                return 'Clothes'
            case BudgetCatergory.TRANSPORTATION:
                return 'Transportation'
        }
    }

    const findCategoryTypeImage = (categoryType: BudgetCatergory) => {
        console.warn()
        switch (Number(categoryType)) {
            case BudgetCatergory.FOOD:
                return require('../../../../assets/icons/food_icon.png')
            case BudgetCatergory.CLOTHES:
                return require('../../../../assets/icons/clothes_icon.png')
            case BudgetCatergory.TRANSPORTATION:
                return require('../../../../assets/icons/transportation_icon.png')
        }
    }

    return (
        <View style={styles(theme, lang).analysisRootStyle}>
            <View style={styles(theme, lang).analysisTitleSection}>
                <Text style={styles(theme, lang).title}>Total Expenses</Text>
                <Text style={styles(theme, lang).totalExpensesText}>{(totalExpenses ? totalExpenses : 0) + ' $'}</Text>
            </View>
            <View>
                {
                    data ?
                        data.map((category: categoryAnalysis) => {
                            return (
                                <View style={styles(theme, lang).analysisContainer}>
                                    <View style={styles(theme, lang).category} >
                                        <Image
                                            style={styles(theme, lang).categoryImageStyle}
                                            source={findCategoryTypeImage(category?.categoryType)} />
                                        <Text style={styles(theme, lang).categoryText}>{findCategoryTitle(category?.categoryType)}</Text>
                                    </View>
                                    <Text style={styles(theme, lang).categoryPercentage}>{category?.percentage}</Text>
                                </View>
                            )
                        })
                        :
                        null
                }
            </View>
        </View >
    )
}

export default BudgetAnalysisSection