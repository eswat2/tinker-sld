const Header = (props: any) => {
  return (
    <h1 class="mb-11 ml-0 mr-0 mt-11 text-center text-6xl font-thin uppercase text-clrs-red">
      {props.label}
    </h1>
  );
};

export { Header };
export default Header;
