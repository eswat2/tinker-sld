import { createStore } from 'solid-js/store';
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

    setState('count', c => c + 1);
    setState({ values });
  },
  reset: () => {
    setState({ count: 0, values: [...sample] });
  },
  updatePick: pick => {
    setState({ pick });
  },
};

export { state, actions };
export default state;
