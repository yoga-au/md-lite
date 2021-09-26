import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Test = () => {
  return <Text style={styles.exampleText}>Test form another component</Text>;
};

const styles = StyleSheet.create({
  exampleText: {
    color: 'red',
  },
});

export default Test;
