import React from 'react';
import {View, BackHandler, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Styles from './styles';
import {search} from '../../Controllers';

export default function HomeScreen() {
    React.useEffect(() => {
        search({term: 'Jack+Reacher'}).then((response) => {
            console.log(response);
        });

        BackHandler.addEventListener('hardwareBackPress', handleBackButton);
        return function () {
            BackHandler.removeEventListener(
                'hardwareBackPress',
                handleBackButton,
            );
        };
    }, []);

    const handleBackButton = () => {
        if (Actions.currentScene === 'Home') {
            BackHandler.exitApp();
            return true;
        }
    };
    return (
        <>
            <View style={Styles.LoggedOutContainer}>
                <View style={Styles.bigButtonContainer}>
                    <Text>{'hjhhkkhhk'}</Text>
                    {/*<BigButton text={'ssss'} onPress={() => Actions.SignIn()} />*/}
                </View>
            </View>
        </>
    );
}

HomeScreen.navigationOptions = () => {
    return {
        headerTitle: <Text>{'UXBERT Usability Lab, Project (Mostafa)'}</Text>,
        headerRight: <View />,
        headerLeft: <View />,
    };
}
