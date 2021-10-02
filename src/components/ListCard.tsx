import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

// type import
import type {SingleCardProps} from '../types';

const ListCard = ({title, timestamp}: SingleCardProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} numberOfLines={4}>
        {title}
      </Text>
      <View style={styles.timestampContainer}>
        <Text style={styles.timestamp}>{timestamp}</Text>
        <FastImage
          style={styles.flag}
          source={{uri: 'https://www.countryflags.io/gb/shiny/64.png'}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 16,
    padding: 16,
    backgroundColor: '#121212',
    borderRadius: 8,
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
    color: 'hsl(0, 0%, 80%)',
    lineHeight: 24,
  },
  timestampContainer: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timestamp: {
    fontSize: 14,
    color: 'hsl(0, 0%, 80%)',
  },
  flag: {
    width: 24,
    height: '100%',
    marginRight: 8,
  },
});

export default ListCard;
