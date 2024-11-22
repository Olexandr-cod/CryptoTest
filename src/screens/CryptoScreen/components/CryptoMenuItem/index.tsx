import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { cs } from '../../styles';

interface CryptoMenuItemProps {
    title: string
    isSelected: boolean
    onPress: () => void
}

const CryptoMenuItem = ({ title, isSelected, onPress }: CryptoMenuItemProps) => {
    return (
        <TouchableOpacity
            style={[cs.selectionItem, { backgroundColor: isSelected ? '#fff' : 'silver' }]}
            onPress={onPress}
        >
            <Text style={cs.cryptoText}>{title}</Text>
        </TouchableOpacity>
    );
};

export default CryptoMenuItem;
