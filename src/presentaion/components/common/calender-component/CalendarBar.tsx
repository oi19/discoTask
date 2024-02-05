import React, { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, I18nManager, Modal } from 'react-native';
import { LanguageCode, PeriodsTypes } from '../../../../shared/constants';
import { Theme } from '../../../../shared/theme';
import styles, { moderateScale } from './styles';
import moment from "moment";
import CalendarPicker from 'react-native-calendar-picker';
import PrimaryButton from '../../shared/primaryButton/PrimaryButton';

interface ICalendarBar {
    lang: LanguageCode,
    theme: Theme,
    isCalendarVisibleFromNav: boolean,
    setIsCalendarVisibleFromNav: Dispatch<SetStateAction<boolean>>
    onChooseDate: Function,
    showCalendarBarHeader: boolean
}

const CalendarBar = (props: ICalendarBar) => {
    const { lang, theme, onChooseDate, isCalendarVisibleFromNav, setIsCalendarVisibleFromNav, showCalendarBarHeader = false } = props
    const [isCalendarVisible, setCalendarVisible] = useState<boolean>(false)
    const [isNextButton, setNextButton] = useState<boolean>(false)
    const [isPrevButton, setPrevButton] = useState<boolean>(false)
    const [startDate, setStartDate] = useState<moment.Moment | null>(null)
    const [endDate, setEndDate] = useState<moment.Moment | null>(null)
    const [startTempDate, setStartTempDate] = useState<moment.Moment | null>(moment().startOf('month'))
    const [endTempDate, setEndTempDate] = useState<moment.Moment | null>(moment().endOf('month'))
    const [selectedIndex, setSelectedIndex] = useState(-1)

    const onDateChange = (date: moment.Moment, type: string): void => {
        if (type === 'START_DATE') {
            setStartTempDate(date)
            setEndTempDate(null)
        } else {
            setEndTempDate(date)
        }
        setNextButton(false)
        setPrevButton(false)
    }

    const renderPeriodView = () => {
        return (
            <View style={styles(theme, lang).periodViewContainer}>
                <View style={styles(theme, lang).periodViewSubContainer}>
                    {PeriodsTypes().map((period, index) => {
                        return (<TouchableOpacity key={index} style={[selectedIndex == index ? { backgroundColor: theme.color.datePeriodContainerColor, } : { backgroundColor: theme.color.buttonBackground }, styles(theme, lang).periodViewButton]} onPress={() => {
                            //@ts-ignore
                            let newStartDate = moment().subtract(period.number, period.type)
                            setStartTempDate(newStartDate)
                            setEndTempDate(moment())
                            setNextButton(false)
                            setPrevButton(false)
                            setSelectedIndex(index)
                        }}>
                            <Text style={[selectedIndex == index ? { color: theme.color.white } : { color: theme.color.primaryDiscoColor }, { fontSize: I18nManager.isRTL ? moderateScale(14) : moderateScale(12) }]}>{period.title}</Text>
                        </TouchableOpacity>)
                    })}
                </View>
                <TouchableOpacity
                    onPress={onCancel}
                    style={styles(theme, lang).cancelView}>
                    <Image source={require('../../../../assets/icons/cancelpost_btn.png')} style={styles(theme, lang).cancelImage} />
                </TouchableOpacity>
            </View>
        )
    }

    const moveToNextDate = (): void => {
        setSelectedIndex(-1)
        let newEndDate = moment(endDate ?? moment(), "DD-MM-YYYY").add(1, 'month')
        setEndDate(newEndDate)
        setStartDate(newEndDate)
        onChooseDate({ startDate: newEndDate, endDate: newEndDate })
        setNextButton(true)
        setPrevButton(false)
    }

    const moveToPrevDate = (): void => {
        setSelectedIndex(-1)
        let newStartDate = moment(startDate ?? moment(), "DD-MM-YYYY").subtract(1, 'month')
        setStartDate(newStartDate)
        setEndDate(newStartDate)
        onChooseDate({ startDate: newStartDate, endDate: newStartDate })
        setPrevButton(true)
        setNextButton(false)
    }

    const onConfirm = (): void => {
        if (endTempDate != null) {
            if (isNextButton || isPrevButton) {
                setCalendarVisible(false)
                setIsCalendarVisibleFromNav(false)
            } else {
                let weekBefore = moment(endTempDate).subtract(1, 'week').format('DD MMMM')
                let monthBefore = moment(endTempDate).subtract(1, 'months').format('DD MMMM')
                let threeMonthsBefore = moment(endTempDate).subtract(3, 'months').format('DD MMMM')
                if ((moment(startTempDate)?.format('DD MMMM') !== weekBefore && moment(startTempDate)?.format('DD MMMM') !== monthBefore && moment(startTempDate)?.format('DD MMMM') !== threeMonthsBefore)) {
                    setSelectedIndex(-1)
                }
                setStartDate(startTempDate)
                setEndDate(endTempDate)
                onChooseDate({ startDate: startTempDate, endDate: endTempDate })
            }
            setCalendarVisible(false)
            setIsCalendarVisibleFromNav(false)
        }
        else {
            null
        }
    }

    const onCancel = (): void => {
        setCalendarVisible(false)
        setIsCalendarVisibleFromNav(false)
    }

    const renderSingleDateContainer = (startDate, endDate) => {
        return (
            <View style={styles(theme, lang).singleDateContainer}>
                {(startDate && startDate != endDate) ? <View style={{ flexDirection: 'row' }}><View style={styles(theme, lang).singleDateStartDateContainer}>
                    <Text adjustsFontSizeToFit numberOfLines={1} style={styles(theme, lang).singleDateMonthText}>{moment(startDate).locale(LanguageCode.EN).format('MMMM')}</Text>
                    <Text adjustsFontSizeToFit numberOfLines={1} style={styles(theme, lang).singleDateDayText}>{moment(startDate).locale(LanguageCode.EN).format('D')}</Text>
                </View>
                    <View style={{ alignSelf: 'center' }}>
                        <Text style={{ fontSize: 40, color: theme.color.darkBlue, marginTop: 15 }}>-</Text>
                    </View>
                </View>
                    :
                    null
                }
                <View style={[{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }, startDate && { marginStart: 10 }]}>
                    <Text adjustsFontSizeToFit numberOfLines={1} style={startDate ? styles(theme, lang).singleDateMonthText : styles(theme, lang).singleDateMonthTextFocused}>{moment(endDate).locale(lang).format('MMMM')}</Text>
                    {startDate && <Text adjustsFontSizeToFit numberOfLines={1} style={styles(theme, lang).singleDateDayText}>{moment(endDate).locale(LanguageCode.EN).format('D')}</Text>}
                </View>
            </View>
        )
    }

    const handleDateText = () => {
        if (startDate && endDate) {
            if (moment(startDate).format('DD MMMM') == moment(endDate).format('DD MMMM')) {
                return renderSingleDateContainer(null, startDate)
            }
            else if ((moment(startDate).format('DD') == moment(startDate).startOf('month').format('DD')) && moment(endDate).format('DD') == moment(endDate).endOf('month').format('DD')) {
                return renderSingleDateContainer(startDate, endDate)
            }
            else if (isNextButton) {
                return renderSingleDateContainer(null, endDate)
            }
            else if (isPrevButton) {
                return renderSingleDateContainer(null, startDate)
            }
            else {
                return renderSingleDateContainer(startDate, endDate)
            }
        } else {
            return renderSingleDateContainer(null, moment().locale(lang).format())
        }
    }

    
    return (
        <View style={{}}>
            {
                (isCalendarVisibleFromNav || isCalendarVisible) ?
                    <Modal transparent={true}>
                        <View
                            style={styles(theme, lang).modalView}>
                            <View style={styles(theme, lang).calendarContainer} >
                                <View style={styles(theme, lang).calenderSubContainer} />
                                {renderPeriodView()}
                                <CalendarPicker
                                    selectMonthTitle={'Select Month'}
                                    lang={lang}
                                    allowRangeSelection={true}
                                    swipe={true}
                                    initialDate={startDate ? startDate : new Date()}
                                    nextComponent={<Image source={require('../../../../assets/icons/back_btn.png')} resizeMode={'contain'} style={styles(theme, lang).smallArrowRight} />}
                                    previousComponent={<Image source={require('../../../../assets/icons/back_btn.png')} resizeMode={'contain'} style={styles(theme, lang).smallArrowLeft} />}
                                    textStyle={styles(theme, lang).calenderText}
                                    selectedDayStyle={styles(theme, lang).selectedDay}
                                    selectedDayColor={theme.color.green}
                                    selectedDayTextColor={theme.color.white}
                                    todayTextStyle={styles(theme, lang).calendarTodayTextStyle}
                                    todayBackgroundColor={theme.color.white}
                                    width={Dimensions.get('screen').width - 16}
                                    onDateChange={onDateChange}
                                    selectedStartDate={startDate}
                                    selectedEndDate={endDate}
                                />
                                <View style={styles(theme, lang).buttomsContainer}>
                                    <View style={{ width: '100%', }}>
                                        <PrimaryButton
                                            title={'Done'}
                                            onPress={onConfirm }
                                            isLoading={false}
                                            titleFontFamily={""}
                                            titleFontSize={0}
                                            borderRadius={0}
                                            backgroundColor={theme.color.primaryDiscoColor}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </Modal>
                    : null
            }
            {
                showCalendarBarHeader ?
                    <View style={styles(theme, lang).calendarBarContainer}>
                        <TouchableOpacity
                            style={styles(theme, lang).calendarRightArrowContainer}
                    onPress={() => { I18nManager.isRTL ? moveToNextDate() : moveToPrevDate() }}>
                            <Image source={require('../../../../assets/icons/back_btn.png')} resizeMode={'contain'} style={styles(theme, lang).smallArrowLeft} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles(theme, lang).calendarDateDayContainer}
                            onPress={() => { setCalendarVisible(true) }}>
                            {handleDateText()}
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles(theme, lang).calendarRightArrowContainer}
                    onPress={() => { I18nManager.isRTL ? moveToPrevDate() : moveToNextDate() }}>
                            <Image source={require('../../../../assets/icons/back_btn.png')} resizeMode={'contain'} style={styles(theme, lang).smallArrowRight} />
                        </TouchableOpacity>
                    </View>
                    :
                    null
            }

        </View >
    )
}
export default CalendarBar