import { ChevronDoubleLeft, Close, Refresh } from '../icons';
import { state, actions } from '../utils';

const help: string = 'click a button... ';

const DataSource = (props: any) => {
  return (
    <div class="mb-10px mt-3 flex items-center">
      <button
        aria-label="Refresh"
        title="Refresh"
        class="ds1-button data-button bg-clrs-blue"
        onClick={() => {
          actions.refresh();
        }}
      >
        <Refresh />
      </button>
      <button
        aria-label="Reset"
        title="Reset"
        class="ds1-button data-button bg-clrs-red"
        onClick={() => {
          actions.reset();
        }}
      >
        <Close />
      </button>
      <span class="flex items-center">
        <ChevronDoubleLeft size={28} />
        <span class="italic">
          {help}
          <sup>{state.count}</sup>
        </span>
      </span>
    </div>
  );
};

export { DataSource };
export default DataSource;
