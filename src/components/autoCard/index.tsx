// modules
import React, {FC} from 'react';
import {Image, Text, View} from 'react-native';
//styles
import {styles} from './styles.ts';

interface AutoCardProps {
  item: any;
}

const AutoCard: FC<AutoCardProps> = props => {
  const {item} = props;
  return (
    <View style={styles.container}>
      <View style={styles.descriptionContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.route}>{item.route}</Text>
      </View>
      <View style={styles.imgContainer}>
        <Image source={{uri: item.image}} style={styles.image} />
      </View>
    </View>
  );
};

export default AutoCard;
