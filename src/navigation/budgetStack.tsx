import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BudgetScreen from '../presentaion/screens/BudgetScreen/BudgetScreen';
import TransactionsScreen from '../presentaion/screens/tarnsactions/transactions';
import TransactionDetails from '../presentaion/screens/TransactionDetails/TransactionDetails';

const Stack = createStackNavigator();

function BudgetStack() {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Budget' >
            <Stack.Screen name="Budget" component={BudgetScreen} />
            <Stack.Screen name="Transactions" component={TransactionsScreen} />
            <Stack.Screen name="TransactionDetails" component={TransactionDetails} />
        </Stack.Navigator>
    );
}


export default BudgetStack;