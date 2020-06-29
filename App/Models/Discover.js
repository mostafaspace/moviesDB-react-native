import client from './client';

export class Discover {
    static async movie(values) {
        try {
            const result = await client().get('/discover/movie', {
                params: {
                    query: values.term,
                },
            });

            console.log(result);
            return result.data;
        } catch (error) {
            console.log('error', error);
        }
    }

    static async search(values) {
        try {
            const result = await client().get('search/movie', {
                params: {
                    query: values.term,
                },
            });

            console.log(result);
            return result.data;
        } catch (error) {
            console.log('error', error);
            console.log('error', error.response);
        }
    }
}
