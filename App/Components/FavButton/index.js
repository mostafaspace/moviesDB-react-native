import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import Styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const FavButton = ({isActive, onToggle, containerStyle}) => {
    const [active, setActive] = React.useState(false);

    React.useEffect(() => {
        active !== isActive && setActive(isActive);
    }, [isActive]);

    function toggleCheck(check) {
        setActive(check);
        onToggle && onToggle(check);
    }

    return (
        <View style={[Styles.favSection, containerStyle]}>
            <TouchableOpacity
                onPress={() => {
                    toggleCheck(!active);
                }}
            >
                <Icon
                    name={active ? 'star' : 'star-border'}
                    style={[Styles.favIcon, active && Styles.activeFavIcon]}
                />
            </TouchableOpacity>
        </View>
    );
};

FavButton.propTypes = {
    isActive: PropTypes.bool,
    onToggle: PropTypes.func,
    containerStyle: PropTypes.object,
};
