const Header = ({ title }) => {
  return (
    <header className='header'>
      <h2>{title}</h2>
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

export default Header;
