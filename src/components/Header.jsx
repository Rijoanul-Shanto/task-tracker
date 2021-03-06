import Button from './Button';

const Header = ({ title }) => {
  return (
    <header className='header'>
      <h2>{title}</h2>
      <Button />
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

export default Header;
