import {StyleSheet, I18nManager} from 'react-native';

export default StyleSheet.create({
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#e7e8ea',
        backgroundColor: 'white',
        height: 44,
        paddingHorizontal: 16,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,

        elevation: 1,
    },
    searchInput: {
        flex: 1,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
        color: '#222',
    },
    searchIcon: {
        marginTop: 8,
        width: 30,
        height: 30,
    },
});
