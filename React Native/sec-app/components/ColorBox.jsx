import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

const ColorBox = ({ colorName, hexCode }) => {
    return (
        <View style={[styles.box, { backgroundColor: hexCode}]}>
            <Text style={styles.text}>{colorName}: {hexCode}</Text>
        </View>
    );
}

export default ColorBox;
