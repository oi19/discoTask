import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, KeyboardTypeOptions } from 'react-native';
import { Controller } from "react-hook-form";

type FormFieldProps = {
    label: string,
    inputType: any,
    control: any,
    inputFieldKey: string,
    keyboardType: KeyboardTypeOptions,
    sensetive?: boolean,
    autoComplete?: string,
    icon?: string,
    iconPath?: string,
    iconPressCallback?: Function
    marginHorizontal?: number,
    error?: string,
}

const InputField = (props: FormFieldProps) => {
    const { label, keyboardType, inputType, sensetive, icon, iconPath, iconPressCallback, marginHorizontal, control, inputFieldKey, autoComplete = "off" } = props

    return (
        <View style={marginHorizontal ? [styles.rootContainer, { marginHorizontal: marginHorizontal }] : styles.rootContainer}>
            {
                label ?
                    <View>
                        <Text>{label}</Text>
                    </View>
                    : null
            }
            <Controller
                control={control}
                name={inputFieldKey}
                render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (

                    <>
                        <View style={error ? [styles.textInputContainer, { borderColor: 'red' }] : styles.textInputContainer}>

                            <TextInput
                                value={value}
                                onChangeText={onChange}
                                style={styles.textInputStyle}
                                keyboardType={keyboardType}
                                textContentType={inputType}
                                secureTextEntry={sensetive ? true : false}
                                autoCorrect={false}
                                autoCapitalize={'none'}
                                returnKeyLabel="done"
                            // autoComplete={autoComplete &&autoComplete}
                            />
                            {
                                icon ?
                                    <TouchableOpacity
                                        onPress={() => {
                                            iconPressCallback()
                                        }}
                                    >
                                        < Image source={{ uri: iconPath }} />
                                    </TouchableOpacity>
                                    : null
                            }
                        </View>
                        {error ? <Text style={styles.errorText}>{error?.message}</Text> : null}
                    </>
                )}

            />
        </View >
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        marginHorizontal: 26,
        marginVertical: 10
    },
    textInputContainer: {
        marginTop: 10,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'lightgrey',
        borderRadius: 8,
        elevation: 3
    },
    textInputStyle: {
        flex: 1,
        height: 40,
        borderRadius: 10,
        padding: 10,
        fontSize: 14,
    },
    errorText: {
        color: 'red',
        fontSize: 14,
    }

})
export default InputField