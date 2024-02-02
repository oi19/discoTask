import React from "react";
import { View,Image,TextInput, TouchableOpacity} from 'react-native'

import { LanguageCode } from "../../../../shared/constants";
import { Theme } from "../../../../shared/theme";

import styles from "./styles";

type searchBarProps = {
    searchValue: string,
    onChangeValueHandlerCallback: Function,
    onBeforeIconPressCallback: Function,
    onAfterIconPressCallback:Function
    afterIcon:boolean,
    beforeIcon:boolean,
    theme:Theme,
    lang:LanguageCode
}

const SearchBar = (props:searchBarProps) => {

    const { searchValue, onChangeValueHandlerCallback ,onBeforeIconPressCallback,onAfterIconPressCallback, afterIcon,beforeIcon ,theme,lang} = props
    
    const renderIcon = (onPress:Function) => {
        return(
            <TouchableOpacity onPress={()=>onPress()} style={{ marginStart: 6 }}>
                <Image
                    resizeMode={'contain'}
                    style={styles(theme, lang).calendarIconStyle}
                    source={require("../../../../assets/icons/calendar_icon.png")}
                />
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles(theme, lang).searchBarContainer}>
          {beforeIcon ? renderIcon(onBeforeIconPressCallback) : null}
          <View style={styles(theme, lang).searchBarSubContainer}>
            <Image
              source={require("../../../../assets/icons/searchbutton.png")}
              style={styles(theme, lang).searchIcon} resizeMode={'contain'}
            />
            <TextInput
              style={styles(theme, lang).searchBarLabelStyle}
              placeholder={'Search'}
              value={searchValue}
              onChangeText={(text) => onChangeValueHandlerCallback(text)}
            />
          </View>
          {afterIcon ? renderIcon(onAfterIconPressCallback) : null}
        </View>
    )
}

export default SearchBar