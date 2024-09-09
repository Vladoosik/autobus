// modules
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 34,
    marginTop: 79,
  },
  seat: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 47,
    height: 47,
    backgroundColor: 'white',
    borderRadius: 8,
    marginTop: 19,
  },
  reservedSeat: {
    backgroundColor: '#ABCBFF',
  },
  availableSeat: {
    backgroundColor: '#FFFFFF',
  },
  descriptionContainer: {
    width: 88,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerContent: {
    gap: 5,
  },
  description: {
    fontSize: 12,
  },
  reserved: {
    backgroundColor: '#ABCBFF',
    width: 23,
    height: 23,
    marginLeft: 10,
    borderRadius: 5,
  },
  numSeat: {
    fontSize: 18,
  },
  available: {
    backgroundColor: '#FFFFFF',
    width: 23,
    height: 23,
    marginLeft: 10,
    borderRadius: 5,
  },
  column: {
    gap: 14,
  },
});
