// modules
import React, {FC, ReactElement} from 'react';
import {Text, View} from 'react-native';
// styles
import {styles} from './styles.ts';

interface HeaderProps {
  title: string;
  busTitle?: string;
  busName?: string;
  children: ReactElement;
}

const Header: FC<HeaderProps> = props => {
  const {title, busName, busTitle, children} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.descriptionContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.busTitle}>{busTitle}</Text>
          <Text style={styles.busRoute}>{busName}</Text>
        </View>
        {children}
      </View>
    </View>
  );
};

export default Header;
