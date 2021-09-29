import React, {useState} from 'react';
import {StyleSheet, FlatList, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// component import
import GridCard from '../components/GridCard';
import ListCard from '../components/ListCard';

const Latest = () => {
  // state definition
  const [isListView, setIsListView] = useState(false);

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

  const handleChangeView = () => {
    setIsListView(!isListView);
    console.log(isListView);
  };

  const columnsNum = isListView ? 1 : 2;

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title={isListView ? 'List' : 'Grid'}
        onPress={() => handleChangeView()}
      />
      <FlatList
        data={DUMMY_DATA}
        renderItem={({item}) => {
          if (isListView) {
            return <ListCard timestamp={item.timestamp} title={item.title} />;
          }

          return <GridCard timestamp={item.timestamp} title={item.title} />;
        }}
        keyExtractor={item => item.id}
        key={columnsNum}
        numColumns={columnsNum}
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
