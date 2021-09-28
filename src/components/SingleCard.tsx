import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface SimpleProp {
  text: string;
}

const SingleCard = ({text}: SimpleProp) => {
  return (
    <View style={styles.container}>
      <Text style={styles.simpleText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  simpleText: {
    color: 'white',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    marginTop: 36,
    marginHorizontal: 24,
    padding: 24,
    backgroundColor: '#121212',
    // border for development
    borderColor: 'red',
    borderWidth: 1,
  },
});

export default SingleCard;
