import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { BlurView, VibrancyView } from "@react-native-community/blur";
import { styles } from './styles';

export interface InputProps {
    loadingDisabled?: boolean
}

const BlurProgressView = (props: InputProps) => {
    let { loadingDisabled } = props

    return (
        <View
            style={styles.container}
        // blurType="light"
        // blurAmount={10}
        // reducedTransparencyFallbackColor="white"
        >
            {!loadingDisabled &&
                <View style={styles.container} >
                    <ActivityIndicator size="large" color={'#072040'} />
                </View>
            }
        </View>
    )
}

export default BlurProgressView;