import React from 'react';
import NavigationRouter from './Navigation';
import NetInfo from '@react-native-community/netinfo';
import SplashScreen from 'react-native-splash-screen';
import {StatusBar, Platform} from 'react-native';
import {Actions} from 'react-native-router-flux';

export function App() {
    React.useEffect(() => {
        let unsubscribe = () => {};
        unsubscribe = NetInfo.addEventListener((state) => {
            !state.isConnected &&
                !state.isInternetReachable &&
                Actions.currentScene !== 'NoInternet' &&
                Actions.jump('NoInternet');
        });
        SplashScreen.hide();

        return function () {
            unsubscribe();
        };
    }, []);

    return (
        <>
            <StatusBar
                barStyle={
                    Platform.OS === 'ios' ? 'dark-content' : 'light-content'
                }
            />
            <NavigationRouter />
        </>
    );
}
