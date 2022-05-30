import clsx from 'clsx';

const Input = props => {
  const { type = 'text', className, children, ...rest } = props;

  const inputClasses = clsx('ui-textfield', className);

  return <input {...rest} type={type} className={inputClasses} />;
};

export default Input;
