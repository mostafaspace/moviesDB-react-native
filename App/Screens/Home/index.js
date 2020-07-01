import React from 'react';
import {
    View,
    BackHandler,
    Text,
    FlatList,
    TouchableOpacity,
    Linking,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Styles from './styles';
import {movies, search} from '../../Controllers';
import {FavMovies} from '../../Helpers';
import {SearchInput} from '../../Components/SearchInput';
import {Indicator} from '../../Components/Indicator';
import {NoRecord} from '../../Components/NoRecord';
import {MovieCard} from '../../Components/MovieCard';
import Icon from 'react-native-vector-icons/MaterialIcons';

let timer;
export default function HomeScreen() {
    const [state, setState] = React.useState({
        SearchText: '',
        List: [],
        FavList: [],
        PageCount: 1,
        PageIndex: 1,
        PageSize: 20,
        load: true,
        moreLoad: false,
        searchLoad: false,
    });

    React.useEffect(() => {
        let mounted = true;
        mounted && handleLoadList();

        BackHandler.addEventListener('hardwareBackPress', onBack);
        return function () {
            mounted = false;
            BackHandler.removeEventListener('hardwareBackPress', onBack);
        };
    }, []);

    const onBack = () => {
        if (Actions.currentScene === 'Home') {
            BackHandler.exitApp();
            return true;
        }
    };

    React.useEffect(() => {
        console.log('statestatestatestate', state);
    }, [state]);

    function handleLoadList() {
        if (state.PageIndex <= state.PageCount) {
            setState({...state, moreLoad: true});
            if (state.SearchText !== '') {
                search(state).then((response) => {
                    populateList(response);
                });
            } else {
                movies(state).then((response) => {
                    populateList(response);
                });
            }
        } else {
            setState({
                ...state,
                load: false,
                moreLoad: false,
                searchLoad: false,
            });
        }
    }

    function populateList(response) {
        if (response.IsSuccess) {
            console.log('response', response);

            //filling the list
            const newList = [...response.Data.results];
            FavMovies('read').then((fav) => {
                console.log('read', fav);
                setState({
                    ...state,
                    FavList: fav,
                    List: [...state.List, ...newList],
                    PageIndex: state.PageIndex + 1,
                    PageCount: response.Data.total_pages,
                    SearchText: state.SearchText,
                    load: false,
                    moreLoad: false,
                    searchLoad: false,
                });
            });
        } else {
            setState({
                ...state,
                List: [],
                PageIndex: 1,
                SearchText: state.SearchText,
                load: false,
                moreLoad: false,
                searchLoad: false,
            });
        }
    }

    //search handling
    React.useEffect(() => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            handleLoadList();
        }, 600);
    }, [state.SearchText]);

    function handleSearch(searchText) {
        setState({
            ...state,
            ...{
                PageIndex: 1,
                PageCount: 1,
                List: [],
                searchLoad: true,
                SearchText: searchText,
            },
        });
    }

    return (
        <View style={Styles.container}>
            <SearchInput
                value={state.SearchText}
                onChangeText={(value) => {
                    handleSearch(value);
                }}
            />
            {state.searchLoad || state.load ? (
                <Indicator />
            ) : state.List.length > 0 ? (
                <FlatList
                    data={state.List}
                    renderItem={({item}) => (
                        <MovieCard
                            key={item.id}
                            movie={item}
                            isActive={
                                state.FavList.findIndex(
                                    (x) => x.id === item.id,
                                ) >= 0
                            }
                        />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    refreshing={state.moreLoad}
                    contentContainerStyle={Styles.flatContainerStyle}
                    onEndReached={!state.moreLoad && handleLoadList}
                    onEndReachedThreshold={0.2}
                    ListFooterComponent={() =>
                        state.moreLoad ? (
                            <View style={Styles.moreLoad}>
                                <Indicator size={'small'} />
                            </View>
                        ) : (
                            <View />
                        )
                    }
                />
            ) : (
                <NoRecord />
            )}
        </View>
    );
}

HomeScreen.navigationOptions = () => {
    return {
        headerTitle: <Text>{'MoviesDB Project (Mostafa Magdy)'}</Text>,
        headerRight: (
            <TouchableOpacity onPress={() => Actions.FavMovies()}>
                <Icon name={'star'} style={Styles.favIcon} />
            </TouchableOpacity>
        ),
        headerLeft: (
            <TouchableOpacity
                onPress={() =>
                    Linking.openURL(
                        'https://github.com/mostafaspace/moviesDB-react-native',
                    )
                }
            >
                <Icon name={'public'} style={Styles.favIcon} />
            </TouchableOpacity>
        ),
    };
};
