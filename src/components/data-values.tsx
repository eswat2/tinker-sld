import { TwLabel } from './tw-label';
import { state } from '../utils';

const DataValues = (props: any) => {
  return (
    <div class="flex">
      <div class="flex flex-col">
        <div class="flex">
          <span class="mr-10px font-bold">color:</span>
          <span class="italic text-clrs-slate4">{state.pick}</span>
        </div>
        <div class="mt-5px flex">
          <span class="mr-10px font-bold">sample:</span>
          <span class="italic text-clrs-slate4">{`${
            state.count > 0 ? state.values : '...'
          }`}</span>
        </div>
      </div>
      <TwLabel />
    </div>
  );
};

export { DataValues };
export default DataValues;
