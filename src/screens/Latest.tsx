import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// component import
import SingleCard from '../components/SingleCard';

const Latest = () => {
  const DUMMY_DATA = [
    {
      id: '1',
      text: 'Text One',
    },
    {
      id: '2',
      text: 'Text Two',
    },
    {
      id: '3',
      text: 'Text Three',
    },
    {
      id: '4',
      text: 'Text Four',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DUMMY_DATA}
        renderItem={({item}) => <SingleCard text={item.text} />}
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
