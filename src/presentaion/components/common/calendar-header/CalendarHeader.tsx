import React from 'react'
import { View, Text } from 'react-native'
import { LanguageCode } from '../../../../shared/constants'
import styles from './styles'
import { Theme } from '../../../../shared/theme'

interface Props {
    hideDatePicker: () => void,
    handleDateChange: () => void,
    theme: Theme
}

const CalendarHeader = ({ hideDatePicker, handleDateChange, theme }: Props) => {
    const lang: LanguageCode = LanguageCode.EN

    return (
        <View style={styles(theme, lang).calendarHeader}>
            {/* <Text style={styles(theme, lang).text}>{localizedString(LocalizationKeys.DUE_DATE)}</Text> */}
            <Text style={styles(theme, lang).text}>omar</Text>
            <Text style={styles(theme, lang).calendarDone}
                onPress={() => {
                    hideDatePicker();
                    handleDateChange()
                }}>Done</Text>
        </View>
    )
}

export default CalendarHeader
