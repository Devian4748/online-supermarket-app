import clsx from 'clsx';

const Container = props => {
  const { className, children, ...rest } = props;
  const containerClasses = clsx('ui-container', className);

  return (
    <div className={containerClasses} {...rest}>
      {children}
    </div>
  );
};

export default Container;
