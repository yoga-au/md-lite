import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const Latest = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.exampleText}>Hello React Native</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  exampleText: {
    color: 'white',
  },
});

export default Latest;
