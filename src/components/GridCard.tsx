import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

// type import
import type {SingleCardProps} from '../types';

const GridCard = ({title, timestamp}: SingleCardProps) => {
  return (
    <View style={styles.container}>
      <FastImage
        style={styles.cover}
        source={{uri: 'https://picsum.photos/800'}}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={3}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
    marginHorizontal: 8,
    padding: 16,
    backgroundColor: '#121212',
    borderRadius: 8,
  },
  cover: {
    backgroundColor: 'white',
    aspectRatio: 12 / 16,
  },
  textContainer: {
    justifyContent: 'space-between',
    height: 120,
    marginTop: 16,
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
    color: 'hsl(0, 0%, 80%)',
    lineHeight: 24,
  },
  timestampContainer: {
    marginTop: 10,
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
  },
});

export default GridCard;
