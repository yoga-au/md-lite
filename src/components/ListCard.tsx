import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

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
        <View style={styles.flagDummy} />
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
  flagDummy: {
    width: 24,
    height: '100%',
    marginRight: 8,
    backgroundColor: 'white',
  },
});

export default ListCard;
