const Button = ({ title }) => {
  return <button className='btn'>{title}</button>;
};

Button.defaultProps = {
  title: 'Add',
};

export default Button;
