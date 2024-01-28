import { BudgetCatergory, BudgetRountesNames } from '../shared/constants';
import { data as transactions } from '../mock/transactions.json';
import { transactionItem } from '../domain/transactions';

interface CategoryPercentage {
    percentage: string;
    categoryType: BudgetCatergory
}

interface AnalysisResult {
    filteredList: transactionItem[];
    analysisData: AnalysisData
}

export interface AnalysisData {
    categoryPercentages: CategoryPercentage[];
    totalExpenses: number;
}

const useTransactionFetch = (routeID: BudgetRountesNames): AnalysisResult => {
    let totalExpenses = 0;
    const categoryExpenses: Record<string, number> = {};

    const filteredList = transactions.filter(item => {
        if (routeID == BudgetRountesNames.ALL || item.reason == routeID) {
            totalExpenses += item.expenses;
            categoryExpenses[item.category] = (categoryExpenses[item.category] || 0) + item.expenses;
            return item
        }
    });

    const categoryPercentages: CategoryPercentage[] = Object.entries(categoryExpenses)
        .map(([category, expenses]) => ({
            categoryType: category,
            percentage: ((expenses / totalExpenses) * 100).toFixed(0) + '%',
        }))
        .sort((a, b) => parseFloat(b.percentage) - parseFloat(a.percentage));

    const analysisData = {
        categoryPercentages,
        totalExpenses,
    };

    return {
        filteredList,
        analysisData,
    };
};

export default useTransactionFetch;
