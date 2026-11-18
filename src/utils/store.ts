import { createStore } from 'solid-js';
import { sample } from './funnel-defs';
import { StoreDef, ActionsDef } from './types';

const initStore: StoreDef = {
  count: 0,
  pick: 'bada55',
  values: [...sample],
};

const [state, setState] = createStore(initStore);

const actions: ActionsDef = {
  refresh: () => {
    const values: number[] = sample.map(() => Math.floor(Math.random() * 100));

    setState(s => {
      s.count += 1;
      s.values = values;
    });
  },
  reset: () => {
    setState(s => {
      s.count = 0;
      s.values = [...sample];
    });
  },
  updatePick: pick => {
    setState(s => {
      s.pick = pick;
    });
  },
};

export { state, actions };
export default state;
