// NOTE:  marks the Solid 2.0 release, styled after the gold 2.0 badge in the
//        solidjs.com header. Sits top-left, mirroring the eswat2 link, or at
//        `right` (e.g. beside that link) where the top-left is taken...
const url = 'https://www.solidjs.com';
const label = 'Built with Solid 2.0';

const SolidBadge = (props: { offset?: string; right?: string }) => {
  return (
    <a
      class="solid-badge"
      href={url}
      target="blank"
      title={label}
      aria-label={label}
      style={{
        'position': 'absolute',
        'top': `calc(${props.offset ?? '0px'} + 3px)`,
        'left': props.right ? undefined : (props.offset ?? '0px'),
        'right': props.right,
        'padding': '2px 6px',
        'border-radius': '4px',
        'background': '#ffd400',
        'color': '#03152c',
        'font':
          '600 13px/15px ui-monospace, "SF Mono", Menlo, Consolas, monospace',
        'text-decoration': 'none',
      }}
    >
      2.0
    </a>
  );
};

export { SolidBadge };
export default SolidBadge;
