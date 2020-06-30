import React from 'react';
import {Text, View} from 'react-native';
import Styles from './styles';
import PropTypes from 'prop-types';

export function NoRecord({containerStyle}) {
    return (
        <View style={[Styles.emptyListContainer, containerStyle]}>
            <Text style={Styles.emptyListText}>{'No Records'}</Text>
        </View>
    );
}

NoRecord.propTypes = {
    containerStyle: PropTypes.object,
};
