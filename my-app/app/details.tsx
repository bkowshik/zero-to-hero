import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Details = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('@/assets/images/react-logo.png')}
                style={styles.image}
            />
            <Text style={styles.title}>Details Page</Text>
            <Text style={styles.description}>
                This is a detailed description of the page. You can add more content here to make it more informative and engaging.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee',
        padding: 20,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        lineHeight: 24,
    },
});

export default Details;