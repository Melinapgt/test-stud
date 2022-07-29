const Header = (props) => {
  //Props destructuring
  const { setSearch } = props;

  //Saisie de la recherche
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  return (
    <header className="h-24 bg-orange-200 w-screen flex items-center p-2 ">
      <div className="mr-14">Test technique</div>
      <div className="w-1/3">
        <input
          className="w-full p-2 rounded"
          type="text"
          placeholder="Recherche par mots clés"
          onChange={handleChange}
        />
      </div>
    </header>
  );
};

export default Header;
