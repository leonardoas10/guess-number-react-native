import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
    return (
        <View style={{...styles.card, ...props.style}}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: { height: 2, width: 0},
        shadowRadius: 10,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        elevation: 5,
        padding: 10,
        borderRadius: 10
    }
});

export default Card;