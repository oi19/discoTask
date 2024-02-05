import { BudgetCatergory, BudgetRountesNames } from '../shared/constants';
import { data as transactions } from '../mock/transactions.json';
import { transactionItem } from '../domain/transactions';
import moment from 'moment';

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

const useTransactionFetch = (routeID: BudgetRountesNames, date = { startDate: moment(), endDate: moment().subtract(1, 'month') }): AnalysisResult => {
    try {
        let totalExpenses = 0;
        const categoryExpenses: Record<string, number> = {};

        const filteredList: transactionItem[] = transactions.filter(item => {
            if (routeID == BudgetRountesNames.ALL || item.reason == routeID) {
                totalExpenses += item.expenses;
                categoryExpenses[item.category] = (categoryExpenses[item.category] || 0) + item.expenses;
                return item
                // date filteration 
                    // if (date && date?.startDate && date?.endDate && moment(item.date) > date.startDate && moment(item.date)<date.endDate ) {
                    // return item
                    // }
                    // else {
                    // return item
                    // }
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
    } catch (error) {
        // Handle errors here, e.g., logging, displaying an error message to the user, etc.
        console.error('Error fetching transaction data:', error);
        throw error; // Rethrow the error to propagate it up the call stack
    }
};

export default useTransactionFetch;
