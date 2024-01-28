import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { Theme } from '../../../../shared/theme';
import { LanguageCode } from '../../../../shared/constants';

import styles from './styles';

export interface InputProps {
    lang: LanguageCode
    theme: Theme;
    title?: string;
    backActionCompletionHandler: Function;
    rightItems?: Element | null;
    backButtonVisible?: boolean | null;
}

const HeaderTitleWithGoBack = (props: InputProps) => {
    const { lang, theme, title, backActionCompletionHandler, rightItems, backButtonVisible = true } = props;

    return (
        <View style={styles(theme, lang).containerStyle}>
            <View
                style={styles(theme, lang).titleContainerStyle}
            >

                <View style={styles(theme, lang).leftItemContainer}>
                    {backButtonVisible && <TouchableOpacity style={styles(theme, lang).circle} onPress={() => backActionCompletionHandler()}>
                        <Image
                            resizeMode={'contain'}
                            style={styles(theme, lang).imageStyle}
                            source={require("../../../../assets/icons/back_btn.png")}
                        />
                    </TouchableOpacity>
                    }
                </View>

                <View style={rightItems ? styles(theme, lang).titleTextContainer : styles(theme, lang).titleTextContainerWithoutRightItems}>
                    {title && <Text style={styles(theme, lang).titleTextStyle}>{title}</Text>}
                </View>
                <View style={styles(theme, lang).rightItemContainer}>
                    {rightItems !== null ? rightItems : <View />}
                </View>

            </View>
        </View >
    );
};
export default HeaderTitleWithGoBack;