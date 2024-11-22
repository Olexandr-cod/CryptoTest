import React, { useEffect, useRef, useCallback } from 'react';
import { Text, FlatList, Alert, SafeAreaView, View } from 'react-native';
import { cs } from './styles';
import { CRYPTOS_DATA } from './mockData';
import CryptoCard from './components/CryptoCard';
import ButtonDefault from '../../components/UI/ButtonDefault';
import LoadingIndicator from '../../components/UI/LoadingIndicator';
import { useReduxDispatch, useReduxSelector } from '../../store/store';
import { setConnected, setCrypto, toggleCryptoMenu, updateCrypto } from '../../redux/CryptoRedux/cryptoSlice';
import CryptoMenuItem from './components/CryptoMenuItem';

const API_URL = 'wss://stream.binance.com:9443/ws';

const CryptoScreen = () => {
    const dispatch = useReduxDispatch();
    const { cryptoData, selectedCryptos, connected } = useReduxSelector((state) => state.crypto);
    const ws = useRef<null | WebSocket>(null);

    useEffect(() => {
        const connectWebSocket = () => {
            ws.current = new WebSocket(API_URL);
            ws.current.onopen = () => {
                dispatch(setConnected(true));
                subscribeToCrypto();
            };
            ws.current.onmessage = (e) => {
                const data = JSON.parse(e.data);
                dispatch(
                    updateCrypto({
                        symbol: data.s,
                        price: parseFloat(data.c).toFixed(2),
                        change: parseFloat(data.P).toFixed(2),
                    })
                );
            };
            ws.current.onclose = () => {
                dispatch(setConnected(false));
                setTimeout(() => connectWebSocket(), 5000);
            };
            ws.current.onerror = (e) => {
                console.error('WebSocket error:', e.message);
                Alert.alert('WebSocket error', e.message);
            };
        };

        connectWebSocket();

        return () => {
            ws.current?.close();
        };
    }, [dispatch]);

    const subscribeToCrypto = () => {
        ws.current?.send(
            JSON.stringify({
                method: 'SUBSCRIBE',
                params: selectedCryptos.map((symbol) => `${symbol.toLowerCase()}@ticker`),
                id: 1,
            })
        );
    };

    const manualUpdate = () => {
        dispatch(setCrypto([]));
        subscribeToCrypto();
    };

    const RenderCryptoMenu = useCallback(
        ({ item }: { item: string }) => {
            const isSelected = selectedCryptos.includes(item);
            return (
                <CryptoMenuItem
                    title={item}
                    isSelected={isSelected}
                    onPress={() => dispatch(toggleCryptoMenu(item))}
                />
            );
        },
        [selectedCryptos, dispatch]
    );

    const RenderCtyptoItem = useCallback(({ item }: any) => {
        return (
            <>
                {item?.symbol ? <CryptoCard symbol={item.symbol} price={item?.price} change={item.change} /> : null}
            </>
        );
    }, []);

    return (
        <SafeAreaView style={cs.container}>
            <View style={cs.flex1}>
                <Text style={cs.header}>Crypto</Text>
                <View style={cs.mb20}>
                    <FlatList
                        data={CRYPTOS_DATA.map((crypto) => crypto.symbol)}
                        keyExtractor={(item) => item}
                        renderItem={({ item }) => <RenderCryptoMenu item={item} />}
                        horizontal
                        contentContainerStyle={[cs.mh16, cs.cryptoMenuList]}
                    />
                </View>
                {connected ? (
                    <FlatList
                        data={cryptoData.filter((crypto) => selectedCryptos.includes(crypto.symbol))}
                        contentContainerStyle={cs.mh16}
                        keyExtractor={(key) => key?.symbol}
                        renderItem={(item) => <RenderCtyptoItem item={item?.item} />}
                    />
                ) : (
                    <LoadingIndicator loadingSize={'large'} loadingColor="#fff" />
                )}
            </View>
            <ButtonDefault
                title="Update Crypto"
                onPress={manualUpdate}
                buttoStyles={cs.button}
            />
        </SafeAreaView>
    );
};

export default CryptoScreen;

