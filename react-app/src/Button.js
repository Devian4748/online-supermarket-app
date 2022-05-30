import clsx from 'clsx';

const Button = props => {
  const { className, children, ...rest } = props;

  const btnClasses = clsx('ui-button', className);

  return (
    <button className={btnClasses} {...rest}>
      {children}
    </button>
  );
};

export default Button;
