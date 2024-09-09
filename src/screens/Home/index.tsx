// modules
import React, {useEffect, useState} from 'react';
import {FlatList, Pressable, SafeAreaView, Text} from 'react-native';
import {observer} from 'mobx-react';
// components
import {AutoCard} from '../../components';
// styles
import {styles} from './styles.ts';
// types
import {BusTypes} from '../../types/busTypes.ts';
// store
import busStore from '../../store/busStore.ts';

const busData = require('../../mock/mock.json');
const Home = props => {
  const {navigation} = props;
  const [buses, setBuses] = useState<BusTypes[]>([]);

  useEffect(() => {
    setBuses(busData.buses);
  }, [buses]);

  const handleReserveSeatNavigate = (item: BusTypes) => {
    busStore.selectBus(item);
    navigation.navigate('bottomTab', {
      screen: 'seatAviability',
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Select your route</Text>
      <FlatList
        style={styles.flatList}
        data={buses}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Pressable onPress={() => handleReserveSeatNavigate(item)}>
            <AutoCard item={item} />
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
};

export default observer(Home);
