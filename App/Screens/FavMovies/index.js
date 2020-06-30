import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Styles from './styles';
import {FavMovies} from '../../Helpers';
import {Indicator} from '../../Components/Indicator';
import {MovieCard} from '../../Components/MovieCard';
import {NoRecord} from '../../Components/NoRecord';

export default function FavoriteMovies() {
    const [state, setState] = React.useState({
        List: [],
        load: true,
    });

    React.useEffect(() => {
        FavMovies('read').then((response) => {
            console.log('read', response);
            setState({
                ...state,
                List: response,
                load: false,
            });
        });
    }, []);

    return (
        <View style={Styles.container}>
            {state.load ? (
                <Indicator />
            ) : state.List.length > 0 ? (
                <FlatList
                    data={state.List}
                    renderItem={({item, index}) => (
                        <MovieCard
                            key={'key' + index}
                            movie={item.movie}
                            isActive={true}
                        />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={Styles.flatContainerStyle}
                />
            ) : (
                <NoRecord />
            )}
        </View>
    );
}

FavoriteMovies.navigationOptions = () => {
    return {
        headerTitle: <Text>{'My Favorites'}</Text>,
    };
};
