import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// type import
import type {SingleCardProps} from '../types/interfaces';

const GridCard = ({title, timestamp}: SingleCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.dummyCover} />
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={3}>
          {title}
        </Text>
        <View style={styles.timestampContainer}>
          <Text style={styles.timestamp}>{timestamp}</Text>
          <View style={styles.flagDummy} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 36,
    marginHorizontal: 12,
    padding: 16,
    backgroundColor: '#121212',
    borderRadius: 8,
  },
  dummyCover: {
    backgroundColor: 'white',
    aspectRatio: 12 / 16,
  },
  textContainer: {
    justifyContent: 'space-between',
    height: 115,
    marginTop: 8,
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
    color: 'hsl(0, 0%, 80%)',
    marginTop: 8,
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
  flagDummy: {
    width: 24,
    height: '100%',
    backgroundColor: 'white',
  },
});

export default GridCard;
