import { BudgetCatergory, BudgetRountesNames, Currency_Values, Payment_Method } from "../shared/constants"

export interface transactionItem {
    title: string,
    transactionPaymentMethod: Payment_Method,
    reason: BudgetRountesNames,
    expenses: number,
    currency: Currency_Values,
    date: string,
    category: BudgetCatergory,
    transactionID: number
}