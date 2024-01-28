import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

interface PlainButtonProps {
    title: string,
    onPress: Function,
    testID: string,
    titleColor: string,
    underline?: boolean | null,
    fontSize?: number | null
}

const PlainButton = (props: PlainButtonProps) => {
    // const lang: LanguageCode = useSelector((state: RootState) => state.language.currentLanguage);
    const { title, onPress, testID, titleColor, underline, fontSize } = props
    return (
        <TouchableOpacity
            testID={testID}
            onPress={() => onPress()}>
            <Text style={[styles.title, { color: titleColor, textDecorationLine: underline ? 'underline' : 'none', fontSize: fontSize ? fontSize : 12, }]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    title: {
        // fontFamily: theme.font.getFontForLang(lang).boldFont,
        color: 'lightblue',
    }
});

export default PlainButton