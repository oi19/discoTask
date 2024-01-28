
import React from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity, Dimensions, } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../presentaion/screens/HomeScreen/HomeScreen';
import { OffersScreen } from '../presentaion/screens/OffersScreen/OffersScreen';
import { ProfileScreen } from '../presentaion/screens/Profile/ProfileScreen';
import { Retail } from '../presentaion/screens/Retail/RetailScreen';


const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;
let { width, height } = Dimensions.get("window");
const scale = (size: number) => width / guidelineBaseWidth * size
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const tabNames = {
    Home: 'Home',
    Retail: 'Retail',
    Offers: 'Offers',
    Profile: 'Profile'
}

export function HomeTabs() {

    const _renderIcon = (routeName: string, navigate) => {
        const isFocused = (routeName == true)
        return (
            <TouchableOpacity
                onPress={() => navigate(routeName)}
                style={{ alignItems: 'center', }}>
                <View >
                    <Image
                        resizeMode='contain'
                        source={
                            routeName == tabNames.Home
                                ? require(`../../src/assets/icons/home_icon.png`)
                                : routeName == tabNames.Retail
                                    ? require(`../../src/assets/icons/retail_icon.png`)
                                    : routeName == tabNames.Offers
                                        ? require(`../../src/assets/icons/offers_icon.png`)
                                        : require(`../../src/assets/icons/user_icon.png`)

                        }
                        style={{ height: 20, width: 20, tintColor: '#072040' }}
                    />
                </View>
                <Text
                    adjustsFontSizeToFit
                    numberOfLines={1}
                    style={{
                        color: isFocused ? '#072040' : '#C9C9C9',
                        fontSize: 16,
                        paddingTop: 4,
                    }}>
                    {tabNames[routeName]}
                </Text>
            </TouchableOpacity>
        );
    };

    const renderTabBar = ({ navigate }) => {
        return (
            <View
                style={styles.tabBarStyle}>
                {_renderIcon(tabNames.Home, navigate)}
                {_renderIcon(tabNames.Retail, navigate)}
                {_renderIcon(tabNames.Offers, navigate)}
                {_renderIcon(tabNames.Profile, navigate)}
            </View>
        );
    };

    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBar={({ navigation }) => renderTabBar(navigation)}
        >
            <Tab.Screen
                options={{
                    headerShown: false,
                }}
                name={tabNames.Home}
                component={HomeScreen}

            />
            <Tab.Screen
                options={{
                    headerShown: false,
                }}
                name={tabNames.Retail}
                component={Retail}
            />
            <Tab.Screen
                options={{
                    headerShown: false,
                }}
                name={tabNames.Offers}
                component={OffersScreen}
            />
            <Tab.Screen
                options={{
                    headerShown: false,
                }}
                name={tabNames.Profile}
                component={ProfileScreen}
            />
        </Tab.Navigator >
    );
}

const MainStack = () => {
    return (
        <Stack.Navigator initialRouteName={"homeTabs"}>
            <Stack.Screen
                name={'homeTabs'}
                component={HomeTabs}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};


const styles = StyleSheet.create({
    tabBarStyle: {
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width,
        height: 80,
        flexDirection: 'row',
        paddingHorizontal: 28,
        borderTopWidth: .5,
        borderColor: 'lightgrey',
        elevation: 1,
        shadowColor: 'lightgrey',
        shadowOffset: { width: -4, height: -4 },
        shadowRadius: 4,
    },
    focusedIcon: {
        width: 22,
        height: 22,
        tintColor: 'red',
        overflow: 'hidden'
    },
    unFocusedIcon: {
        width: 22,
        height: 22,
    },
    homeIcon: {
        width: 28,
        height: 28
    },
    container: {
        flex: 1,
        padding: 20,
    },
    button: {
        marginVertical: 5,
    },
    bottomBar: {
        borderTopColor: 'lightGray',
        borderTopWidth: 1,
    },
    btnCircle: {
        width: 62,
        height: 62,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        padding: 10,
        shadowColor: 'bluishBlack',
        shadowOffset: {
            width: 0,
            height: 0.5,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 1,
        bottom: 24,
    },
    imgCircle: {
        width: 30,
        height: 30,
        tintColor: 'darkGrey',
    },
    img: {
        width: 30,
        height: 30,
    },
});

export default MainStack;
