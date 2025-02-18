import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Index Page</Text>
      <Link href={'/details'}>Go to details</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#aaffff',
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
});

export default Index;