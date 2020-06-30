import client from './client';

export class MoviesDB {
    //movies API data
    static async movies(values) {
        try {
            const result = await client().get('/discover/movie', {
                params: {
                    page: values.PageIndex,
                },
            });

            return result.data;
        } catch (error) {
            console.log('error', error);
        }
    }

    static async search(values) {
        try {
            const result = await client().get('search/movie', {
                params: {
                    query: values.SearchText,
                    page: values.PageIndex,
                },
            });

            return result.data;
        } catch (error) {
            console.log('error', error);
        }
    }
}
