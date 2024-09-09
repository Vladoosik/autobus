// modules
import React from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {observer} from 'mobx-react';
// components
import {Header} from '../../components';
// styles
import {styles} from './styles.ts';
// store
import busStore from '../../store/busStore.ts';

interface RenderItemProps {
  index: number;
  side: 'leftSide' | 'rightSide';
}

const SeatAvaliability = () => {
  const seatsArray = new Array(14).fill(null);
  const reservedSeats = busStore.selectedBus?.seats.reserved;

  const isSeatReserved = (index: number, side: 'leftSide' | 'rightSide') => {
    if (reservedSeats) {
      return reservedSeats[side].includes(index + 1);
    }
  };

  const RenderItem = ({index, side}: RenderItemProps) => {
    const reserved = isSeatReserved(index, side);

    return (
      <View
        style={[
          styles.seat,
          {backgroundColor: reserved ? '#ABCBFF' : 'white'},
        ]}>
        <Text style={styles.numSeat}>{index + 1}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <Header
        title={'Seat availability'}
        busName={busStore.selectedBus?.route || ''}
        busTitle={busStore.selectedBus?.name || ''}>
        <View style={styles.headerContent}>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>Reserved</Text>
            <View style={styles.reserved} />
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>Available</Text>
            <View style={styles.available} />
          </View>
        </View>
      </Header>
      <View style={styles.container}>
        <FlatList
          // bounces={false}
          columnWrapperStyle={styles.column}
          data={seatsArray}
          renderItem={({index}) => (
            <RenderItem index={index} side={'leftSide'} />
          )}
          numColumns={2}
        />
        <FlatList
          // bounces={false}
          columnWrapperStyle={styles.column}
          data={seatsArray}
          renderItem={({index}) => (
            <RenderItem index={index} side={'rightSide'} />
          )}
          numColumns={2}
          contentContainerStyle={{alignItems: 'flex-end'}}
        />
      </View>
    </SafeAreaView>
  );
};

export default observer(SeatAvaliability);
