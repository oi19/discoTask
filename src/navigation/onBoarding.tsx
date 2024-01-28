import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from '../presentaion/screens/OnboardingScreen/OnboardingScreen';
import { AuthStack, RegistrationStack } from './auth'
import MainStack from './main';

const Stack = createStackNavigator();

function OnBoardingStack() {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Onboarding' >
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="Login" component={AuthStack} />
            <Stack.Screen name="Registration" component={RegistrationStack} />
        </Stack.Navigator>
    );
}


export default OnBoardingStack;
