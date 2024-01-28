
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../../presentaion/screens/HomeScreen/HomeScreen';
import { OffersScreen } from '../../presentaion/screens/OffersScreen/OffersScreen';
import { Retail } from '../../presentaion/screens/Retail/RetailScreen';
import { SafeAreaView } from 'react-native-safe-area-context';

let { width } = Dimensions.get("screen");

const Stack = createStackNavigator();

const Tab = createMaterialTopTabNavigator();

const tabNames = {
    Home: 'Home',
    Retail: 'Retail',
    Offers: 'Offers',
}

export function budgetTabs() {

    const renderTabBar = (props) => {
        const { state, navigation, } = props;

        return (
            <SafeAreaView style={{ backgroundColor: 'white' }}>
                <View style={styles.headerContainerStyle}>
                    <Text style={styles.budgetTextStyle}>Budget</Text>
                    <View style={styles.circularContainer}>
                        <Text style={styles.circularTextStyle}>O</Text>
                    </View>
                </View>
                <View style={styles.tabBarStyle}>
                    {state.routes.map((route, index) => {
                        const isFocused = state.index === index;

                        const onPress = () => {
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                            });

                            if (!isFocused && !event.defaultPrevented) {
                                navigation.navigate(route.name);
                            }
                        };

                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={onPress}
                                style={{ alignItems: 'center', }}
                            >
                                <View style={[styles.tabTextContainer, isFocused && styles.tabTextContainerFocused]}>
                                    <Text style={[styles.tabText, isFocused && styles.tabTextFocused]}>
                                        {tabNames[route.name]}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        );
                    })}
                </View >
            </SafeAreaView>

        );
    };

    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBar={(props) => renderTabBar(props)}
        >
            <Tab.Screen
                name={tabNames.Home}
                component={HomeScreen}
                options={{ tabBarLabel: 'All' }}

            />
            <Tab.Screen
                name={tabNames.Retail}
                component={Retail}
            />
            <Tab.Screen

                name={tabNames.Offers}
                component={OffersScreen}
            />
        </Tab.Navigator >
    )
}

const BudgetStack = () => {
    return (
        <Stack.Navigator initialRouteName={"BudgetStack"}>
            <Stack.Screen
                name={'BudgetStack'}
                component={budgetTabs}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    tabTextContainerFocused: {
        borderBottomWidth: 2,
        borderColor: '#0052CC',
        paddingVertical: 15,
    },
    tabText: {
        fontSize: 18,
        color: 'black',
    },
    tabTextFocused: {
        color: '#0052CC',
        fontSize: 18
    },
    tabBarStyle: {
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width,
        flexDirection: 'row',
        paddingHorizontal: 20,
        backgroundColor: 'white',
        marginVertical: 5
    },
    container: {
        flex: 1,
        padding: 20,
    },
    headerContainerStyle: {
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    budgetTextStyle: {
        fontSize: 42,
        fontWeight: 'bold'
    },
    circularContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 200,
        width: 50,
        height: 50,
    },
    circularTextStyle: {
        fontSize: 16
    }

});

export default BudgetStack
