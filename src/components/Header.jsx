function Header({ name }) {
  // Displays the blog name received through props.
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

export default Header;