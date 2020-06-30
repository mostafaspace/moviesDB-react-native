import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 16,
        marginHorizontal: 8,
        backgroundColor: 'white',
        borderRadius: 6,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    sideContainer: {
        flex: 1,
    },
    movieContainer: {
        flex: 1,

        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#e7e8ea',
    },
    posterImage: {
        borderRadius: 6,
        width: '40%',
        height: '100%',
        minHeight: 250,
        resizeMode: 'cover',
    },
    movieTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 8,
        marginHorizontal: 12,
        flexWrap: 'wrap',
        textAlign: 'left',
    },
    movieYear: {
        fontSize: 12,
        fontWeight: '200',
        marginHorizontal: 12,
        flexWrap: 'wrap',
        textAlign: 'left',
    },
    movieDetail: {
        marginHorizontal: 12,
        marginBottom: 12,
        marginTop: 4,
        fontSize: 12,
        fontWeight: '200',
        color: 'gray',
    },

    ratingContainer: {
        backgroundColor: '#009688',
        borderRadius: 50,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'black',
        position: 'absolute',
        bottom: 12,
        marginHorizontal: 12,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    ratingText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 11,
        color: 'white',
    },

    bottomView: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
    },
});
