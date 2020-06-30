import RNFetchBlob from 'rn-fetch-blob';
import Share from 'react-native-share';
import AsyncStorage from '@react-native-community/async-storage';

// Action button to allow user to share movie poster in WhatApps, email etc.
export const shareImage = (img_url, name) => {
    RNFetchBlob.fetch('GET', img_url)
        .then((resp) => {
            let shareOptions = {
                title: name,
                url: 'data:image/png;base64,' + resp.data,
                message: name,
                subject: name,
            };

            Share.open(shareOptions)
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    err && console.log(err);
                });
        })
        .catch((err) => console.log(err));
};

// add/remove/read favorite movies
export const FavMovies = async (mode, movie_id, movie) => {
    console.log(mode, movie_id);
    try {
        const fav = await AsyncStorage.getItem('favMov');
        console.log('fav', fav);
        let postsFav = [];
        if (Array.isArray(JSON.parse(fav))) {
            postsFav = JSON.parse(fav);
        }

        if (mode === 'read') {
            return postsFav;
        } else if (mode === 'remove') {
            postsFav.splice(
                postsFav.findIndex((x) => x.id === movie_id),
                1,
            );
        } else if (mode === 'add') {
            if (postsFav.findIndex((x) => x.id === movie_id) < 0) {
                postsFav.push({id: movie_id, movie: movie});
            }
        }

        console.log('postsFav', postsFav);
        // updating 'posts' with the updated 'postsItems'
        return await AsyncStorage.setItem('favMov', JSON.stringify(postsFav));
    } catch (error) {
        console.log('error: ', error);
    }
};
