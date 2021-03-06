import { Fingerprint } from '../icons';

const url = 'https://eswat2.dev';
const who = 'eswat2';

const EswatIo = (props: any) => {
  return (
    <a
      class="absolute top-8 right-8 text-clrs-gray hover:text-clrs-navy"
      href={url}
      aria-label={who}
      title={who}
    >
      <Fingerprint />
    </a>
  );
};

export { EswatIo };
export default EswatIo;
