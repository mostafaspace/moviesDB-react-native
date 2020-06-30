import {MoviesDB} from '../Models';

export const movies = async (values) => {
    return MoviesDB.movies(values)
        .then((response) => {
            console.log('movie:', response);
            return {IsSuccess: true, Data: response};
        })
        .catch((error) => {
            console.log('movie: ', error);
            return {IsSuccess: false, Error: error};
        });
};

export const search = async (values) => {
    return MoviesDB.search(values)
        .then((response) => {
            console.log('search:', response);
            return {IsSuccess: true, Data: response};
        })
        .catch((error) => {
            console.log('search: ', error);
            return {IsSuccess: false, Error: error};
        });
};
