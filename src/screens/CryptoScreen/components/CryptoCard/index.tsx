import React from 'react';
import { View, Text } from 'react-native';
import { cs } from '../../styles';

interface CryptoCardProps {
    symbol: string
    price: string
    change: any
}

const CryptoCard = ({ symbol, price, change }: CryptoCardProps) => {
    return (
        <View style={cs.cryptoItem}>
            <Text style={cs.name}>{symbol}</Text>
            <View style={cs.updateCryptoItem}>
                <Text style={cs.fz18}>${price}</Text>
                <Text style={[cs.fz18, change >= 0 ? cs.positive : cs.negative]}>
                    {change}%
                </Text>
            </View>
        </View>
    );
};

export default CryptoCard;
