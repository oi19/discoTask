import { Dimensions, StyleSheet } from "react-native";
import { defaultTheme as theme } from "../../../../shared/theme";
let { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
    backgroundImageStyle: {
        width: width,
        height: 300,
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 25,
        marginTop: 70,
    },
    rightIconsContainerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    heartIconStyle: {
        width: 25,
        height: 22
    },
    notifIconStyle: {
        marginStart: 14,
        resizeMode: 'contain',
        width: 22,
        height: 22
    },
    searchIconStyle: {
        resizeMode: 'contain',
        width: 22,
        height: 22
    },
    logoStyle: {
        resizeMode: 'contain',
        width: 35,
        height: 62
    },
    titleStyle: {
        color: 'white',
        fontFamily: 'Inter',
        fontSize: 24,
        fontWeight: '400',
        marginTop: 16
    },
    middleSectionContainer: {
        position: 'absolute',
        width: '100%',
        alignItems: 'center',
        top: 50,
    },
    leftIconsContainerStyle: {}

});

export default styles