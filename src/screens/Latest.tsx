import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// component import
import SingleCard from '../components/SingleCard';

const Latest = () => {
  const DUMMY_DATA = [
    {
      id: '1',
      title: 'Lorem Ipsum sit dolor amet Lorem Ipsum sit dolor amet',
      timestamp: 'Text One',
    },
    {
      id: '2',
      title: 'Title One',
      timestamp: 'Text Two',
    },
    {
      id: '3',
      title: 'Lorem Ipsum sit dolor amet',
      timestamp: 'Text Three',
    },
    {
      id: '4',
      title: 'Lorem Ipsum sit dolor amet Lorem Ipsum sit dolor amet',
      timestamp: 'Text Four',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DUMMY_DATA}
        renderItem={({item}) => (
          <SingleCard timestamp={item.timestamp} title={item.title} />
        )}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContainer: {
    justifyContent: 'center',
  },
});

export default Latest;
