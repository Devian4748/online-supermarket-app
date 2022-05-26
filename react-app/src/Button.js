const Button = props => {
  const { type, disabled } = props;

  return (
    <button type={type} disabled={disabled} className='ui-button'>
      {props.children}
    </button>
  );
};

export default Button;
