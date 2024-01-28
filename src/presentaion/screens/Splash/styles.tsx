import { StyleSheet, Dimensions } from "react-native";
import { Theme } from "../../../shared/theme";


const styles = (theme: Theme,) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
        padding: 100,
    },
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    versionContainer: {
        position: 'absolute',
        bottom: 50,
        left: 0,
        right: 0,
        alignItems: "center"
    },
    versionLabel: {
        fontSize: 12,
        lineHeight: 26,
        letterSpacing: -0.27,
        color: theme.color.battleshipGrey,
    },
    logo: {
        position: 'absolute',
        width: 168,
        height: 147,
        alignSelf: 'center',
        bottom: Dimensions.get('screen').height / 2.5
    },

    backgroundPhoto: {
        flex: 1,
    },
    progressBarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'contain'
    },
})

export default styles