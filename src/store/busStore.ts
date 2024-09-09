// modules
import {action, makeObservable, observable} from 'mobx';
// types
import {BusTypes} from '../types/busTypes.ts';

class BusStore {
  selectedBus: BusTypes | null = null;

  constructor() {
    makeObservable(this, {
      selectedBus: observable,
      selectBus: action,
    });
  }

  selectBus = (item: BusTypes) => {
    this.selectedBus = item;
  };
}

const busStore = new BusStore();
export default busStore;
