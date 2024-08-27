import { Radio } from '../icons';
import { colorKeys, colorFor, state, actions } from '../utils';

const ColorPicker = (props: any) => {
  return (
    <div class="flex flex-wrap" role="radiogroup">
      {colorKeys.map((key: string) => {
        const hex = colorFor(key);
        const selected = state.pick == key;
        return (
          <div
            aria-checked={selected}
            aria-label={key}
            role="radio"
            title={key}
            onClick={() => {
              actions.updatePick(key);
            }}
          >
            <Radio hex={hex} selected={selected} />
          </div>
        );
      })}
    </div>
  );
};

export { ColorPicker };
export default ColorPicker;
