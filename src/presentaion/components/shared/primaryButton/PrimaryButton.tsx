import React from "react";
import { View, Text, ActivityIndicator, TouchableOpacity, Image, StyleSheet } from 'react-native'

type PrimaryButtonProps = {
    title: string,
    onPress: Function,
    isLoading: boolean,
    iconPath?: number,
    disabled?: boolean,
    backgroundColor?: string,
    titleColor?: string,
    borderColor?: string,
    borderWidth?: number,
    titleFontFamily: string,
    titleFontSize: number,
    borderRadius: number
}

const PrimaryButton = (props: PrimaryButtonProps) => {
    const { title, onPress, isLoading, iconPath, disabled } = props

    return (
        <TouchableOpacity
            style={props.backgroundColor ? [styles.container, { backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth }]
                : props.borderRadius ? [styles.container, { backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth }]
                    : styles.container}
            disabled={isLoading || disabled}
            onPress={() => onPress()}>

            {isLoading ? <ActivityIndicator size={'small'} color={'white'} /> :
                <View style={styles.subContainer}>
                    {iconPath ?
                        <Image
                            source={iconPath}
                            style={[styles.icon, { marginEnd: title ? 8 : 0 }]} />
                        : null
                    }
                    {title ?
                        <Text style={props.titleColor ? [styles.title, { color: props.titleColor }]
                            : (props.titleFontSize && props.titleFontFamily) ? [styles.title, { color: props.titleColor, fontFamily: props.titleFontFamily, fontSize: props.titleFontSize }]
                                : styles.title}>{title}</Text>
                        : null
                    }

                </View>
            }
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#072040",
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    subContainer: {
        flexDirection: "row",
    },
    title: {
        fontSize: 16,
        color: 'white',
    },
    icon: {
        height: 24,
        width: 22
    }
});


export default PrimaryButton
