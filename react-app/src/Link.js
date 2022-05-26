const Link = props => {
  const { href } = props;
  return (
    <a className='ui-link' href={href}>
      {props.children}
    </a>
  );
};

export default Link;
