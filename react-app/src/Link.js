import clsx from 'clsx';

const Link = props => {
  const { className, children, ...rest } = props;

  const linkClasses = clsx('ui-link', className);

  return (
    <a className={linkClasses} {...rest}>
      {children}
    </a>
  );
};

export default Link;
