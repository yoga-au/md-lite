import React, {useState, useLayoutEffect, useCallback} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FeatherIcon from 'react-native-vector-icons/Feather';

// custom type import
import type {ScreenProps} from '../types';

// component import
import GridCard from '../components/GridCard';
import ListCard from '../components/ListCard';

const Latest = ({navigation}: ScreenProps) => {
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

  const handleChangeView = useCallback(() => {
    setIsListView(!isListView);
  }, [isListView]);

  const columnsNum = isListView ? 1 : 2;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        if (isListView) {
          return (
            <FeatherIcon
              name="grid"
              size={24}
              color="hsl(0, 0%, 80%)"
              onPress={() => handleChangeView()}
            />
          );
        }

        return (
          <FeatherIcon
            name="list"
            size={24}
            color="hsl(0, 0%, 80%)"
            onPress={() => handleChangeView()}
          />
        );
      },
    });
  }, [navigation, isListView, handleChangeView]);

  return (
    <SafeAreaView style={styles.container}>
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
