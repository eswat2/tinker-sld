import { TW_VERSION } from '../utils';

const TwLabel = (props: any) => {
  return (
    <label class="ml-auto align-top text-xs italic text-clrs-slate4">
      Tailwind {TW_VERSION}
    </label>
  );
};

export { TwLabel };
export default TwLabel;
