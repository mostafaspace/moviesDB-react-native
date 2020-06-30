import React from 'react';
import {TextInput, View} from 'react-native';
import PropTypes from 'prop-types';
import Styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const SearchInput = ({onChangeText, value}) => {
    return (
        <View style={Styles.searchSection}>
            <TextInput
                style={Styles.searchInput}
                placeholder={'Search'}
                value={value + ''}
                onChangeText={onChangeText}
                underlineColorAndroid="transparent"
            />
            <Icon
                name="search"
                size={28}
                color="#222"
                style={Styles.searchIcon}
            />
        </View>
    );
};

SearchInput.propTypes = {
    value: PropTypes.string,
    onChangeText: PropTypes.func,
};
