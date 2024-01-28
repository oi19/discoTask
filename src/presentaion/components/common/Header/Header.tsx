import React from "react";
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import styles from "./styles";

interface inputProps {
    searchBarVisible: boolean,
    isLogoVisible: boolean,
    isLongBackgroundContainer: boolean,
    isRightIconsVisible?: boolean | null,
    title?: string | null,
    backgroundHeight?: number
}

const Header = (props: inputProps) => {
    const { searchBarVisible, isLogoVisible, isLongBackgroundContainer = false, isRightIconsVisible, title, backgroundHeight } = props

    const renderMiddleSection = () => {
        return (
            <View style={styles.middleSectionContainer}>
                {isLogoVisible ?
                    <Image style={styles.logoStyle} source={require('../../../../assets/images/logo.png')} />
                    :
                    <Text style={styles.titleStyle}>{title}</Text>
                }
            </View>
        )
    }

    const renderRightSection = () => {
        return (
            <View style={styles.rightIconsContainerStyle} >
                <TouchableOpacity onPress={() => { }}>
                    <Image
                        style={styles.heartIconStyle}
                        source={require("../../../../assets/icons/heart_icon_off.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }}>
                    <Image
                        style={styles.notifIconStyle}
                        source={require("../../../../assets/icons/notif_icon_on.png")}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    const renderLeftSection = () => {
        return (
            <TouchableOpacity style={styles.leftIconsContainerStyle} onPress={() => { }}>
                <Image style={styles.searchIconStyle} source={require("../../../../assets/icons/search_icon.png")} />
            </TouchableOpacity>
        )
    }

    return (
        <ImageBackground
            style={isLongBackgroundContainer ? styles.backgroundImageStyle : [styles.backgroundImageStyle, { height: backgroundHeight ? backgroundHeight : 180 }]}
            resizeMode={'cover'}
            source={require('../../../../assets/images/headerBackgroundImage.png')}>
            <View style={styles.subContainer}>
                {searchBarVisible ? renderLeftSection() : null}
                {isRightIconsVisible !== false ? renderRightSection() : null}
            </View>
            {renderMiddleSection()}
        </ImageBackground>
    )
};

export default Header;