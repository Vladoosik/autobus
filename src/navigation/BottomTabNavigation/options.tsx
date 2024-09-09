// modules
import {Platform, View} from 'react-native';
// styles
import {styles} from './styles.ts';
import {BusIcon, InfoIcon, MapIcon} from '../../assets';

const getIcon = (name: string) => {
  switch (name) {
    case 'autobus':
      return <BusIcon />;
    case 'Map':
      return <MapIcon />;
    case 'seatAviability':
      return <InfoIcon />;
  }
};

export default function getTabOptions(route: any) {
  return {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
      paddingBottom: Platform.select({ios: 0, android: 30}),
    },
    tabBarIcon: () => {
      return <View style={styles.container}>{getIcon(route.name)}</View>;
    },
  };
}
