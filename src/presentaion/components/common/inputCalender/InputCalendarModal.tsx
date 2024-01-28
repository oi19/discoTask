import React, { useState } from 'react';
import { Image, Platform, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { Theme } from '../../../../shared/theme';
import { useSelector } from 'react-redux';
import { RootState } from '../../../application/redux/model';
import { LanguageCode, LocalizationKeys } from '../../../../shared/constants';
import { localizedString } from '../../../infrastrcuture/localization/localization';
import GradiantButton from '../components/GradiantButton';
import DateTimePicker from '@react-native-community/datetimepicker';
import { DatePickerProps } from '../../../domain/CreateAccount';

const InputCalendarModal = (props: DatePickerProps) => {
    const theme: Theme = useSelector((state: RootState) => state.theme.currentTheme);
    const lang: LanguageCode = useSelector((state: RootState) => state.language.currentLanguage);
    const { completionCallback, onCancelHandler, currentDate } = props
    const [selectedDate, setSelectedDate] = useState<Date>(currentDate ? currentDate : new Date(new Date().getFullYear() - 18, new Date().getMonth(), new Date().getDate()))

    const handleDateChange = (event, date: Date) => {
        switch (Platform.OS) {
            case 'android': {
                if (event.type === 'dismissed') {
                    onCancelHandler()
                } else {
                    completionCallback(date)
                }
                break
            } case 'ios': {
                setSelectedDate(date);
                break
            }
        }
    }

    const handleDateConfirm = () => {
        completionCallback(selectedDate)
    }

    const renderCalenderBasedOnPlatform = () => {
        return (
            <View style={styles(theme, lang).dateTimePickerContainer}>
                <DateTimePicker
                    maximumDate={new Date(new Date().getFullYear() - 18, new Date().getMonth(), new Date().getDate())}
                    locale={lang}
                    style={{ flex: 1 }}
                    value={selectedDate}
                    mode='date'
                    display="spinner"
                    onChange={(event, date: any) => { handleDateChange(event, date) }}
                />
            </View>

        )
    }

    return (
        <>

            {
                Platform.OS == 'android' ?
                    renderCalenderBasedOnPlatform()
                    :
                    < View style={styles(theme, lang).modalBackgroundStyle} >
                        <View style={styles(theme, lang).modalContainerStyle}>
                            <View style={styles(theme, lang).modalTitleView}>
                                <Text style={styles(theme, lang).modalTitleText}>{localizedString(LocalizationKeys.DATE_OF_BIRTH)}</Text>
                                <TouchableOpacity
                                    onPress={() => onCancelHandler()}
                                    style={styles(theme, lang).cancelView}>
                                    <Image source={require('../../../assets/icons/close-circle-bold.png')} style={styles(theme, lang).cancelImage} resizeMode={'contain'} />
                                </TouchableOpacity>
                            </View>
                            {renderCalenderBasedOnPlatform()}
                            <View style={styles(theme, lang).ButtonContainer}>
                                <GradiantButton
                                    isLoading={false}
                                    theme={theme}
                                    title={localizedString(LocalizationKeys.CONFIRM)}
                                    firstColor={theme.color.buttonFirstColor}
                                    secondColor={theme.color.buttonSecondColor}
                                    onPress={handleDateConfirm}
                                />
                            </View>
                        </View>
                    </View >
            }

        </>
    )
};

export default InputCalendarModal;
