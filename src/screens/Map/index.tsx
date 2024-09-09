// modules
import React, {useEffect, useRef, useState} from 'react';
import {Platform, SafeAreaView, Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {observer} from 'mobx-react';
// components
import {Header} from '../../components';
// styles
import {styles} from './styles.ts';
// store
import busStore from '../../store/busStore.ts';
// assets
import {SpeedIcon} from '../../assets';

const Map = () => {
  const [position, setPosition] = useState({
    latitude: 10,
    longitude: 10,
    latitudeDelta: 2,
    longitudeDelta: 2,
  });
  const mapRef = useRef<MapView>(null);


  useEffect(() => {
    Geolocation.getCurrentPosition(
      pos => {
        const crd = pos.coords;
        setPosition({
          latitude: crd.latitude,
          longitude: crd.longitude,
          latitudeDelta: 2,
          longitudeDelta: 2,
        });
      },
      err => {
        console.log(err);
      },
    );
  }, []);
  console.log(position);

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Location'} busTitle={busStore.selectedBus?.name} busName={busStore.selectedBus?.route}>
        <View style={styles.speedContainer}>
        <SpeedIcon/>
        <Text style={styles.speedText}>{busStore.selectedBus?.speed}kmph</Text>
        </View>
      </Header>
      <MapView
        style={styles.map}
        provider={undefined}
        ref={mapRef}
        region={position}
        followsUserLocation
        initialRegion={position}>
        <Marker title="Yor are here" coordinate={position} />
      </MapView>
    </SafeAreaView>
  );
};

export default observer(Map);
