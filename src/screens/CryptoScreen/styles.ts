import { StyleSheet } from 'react-native';

export const cs = StyleSheet.create({
    flex1: {
        flex: 1,
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#111111',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#fff',
    },
    cryptoItem: {
        padding: 15,
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    updateCryptoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    fz18: {
        fontSize: 18,
    },
    positive: {
        color: 'green',
    },
    negative: {
        color: 'red',
    },
    status: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 20,
    },
    cryptoMenuList: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    selectionItem: {
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
    },
    cryptoText: {
        color: '#000',
        fontSize: 14,
        fontWeight: 'bold',
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: '#4caf50',
        borderRadius: 3,
    },
    button: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 20,
    },
    mh16: {
        marginHorizontal: 16,
    },
    mb20: {
        marginBottom: 20,
    },
});
