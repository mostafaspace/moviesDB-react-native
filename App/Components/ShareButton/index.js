import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import Styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const ShareButton = ({onShare, containerStyle}) => {
    return (
        <View style={[Styles.shareSection, containerStyle]}>
            <TouchableOpacity onPress={onShare && onShare}>
                <Icon name={'share'} style={Styles.shareIcon} />
            </TouchableOpacity>
        </View>
    );
};

ShareButton.propTypes = {
    containerStyle: PropTypes.object,
    onShare: PropTypes.func,
};
