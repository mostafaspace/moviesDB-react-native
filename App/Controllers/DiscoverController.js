import {Discover} from '../Models';

export const movie = async (values) => {
    Discover.movie(values)
        .then((response) => {
            console.log('movie:', response);

        })
        .catch((error) => {
            console.log('movie: ', error);
        });
};

export const search = async (values) => {
    Discover.search(values)
        .then((response) => {
            console.log('movie:', response);

        })
        .catch((error) => {
            console.log('movie: ', error);
        });
};
