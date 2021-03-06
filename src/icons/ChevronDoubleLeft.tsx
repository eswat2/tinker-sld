const ChevronDoubleLeft = (props: any) => {
  const hex = () => props.hex || 'currentColor';
  const size = () => props.size || 24;

  return (
    <svg width={size()} height={size()} viewBox="0 0 24 24">
      <g>
        <path
          fill={hex()}
          d="M18.41,7.41L17,6L11,12L17,18L18.41,16.59L13.83,12L18.41,7.41M12.41,7.41L11,6L5,12L11,18L12.41,16.59L7.83,12L12.41,7.41Z"
        />
      </g>
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
};

export { ChevronDoubleLeft };
export default ChevronDoubleLeft;
