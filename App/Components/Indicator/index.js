import React from 'react';
import {ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import Styles from './styles';

export const Indicator = ({size, containerStyle, color}) => {
    return (
        <ActivityIndicator
            size={size ? size : 'large'}
            color={'#222222'}
            style={[Styles.indicator, containerStyle]}
        />
    );
};

Indicator.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
    containerStyle: PropTypes.object,
};
