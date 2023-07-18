const Search = ({
  searchText,
  inStockOnly,
  onSearchTextChange,
  onInStockOnlyChange,
}) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => onSearchTextChange(e.target.value)}
      />
      <br />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />{" "}
        Only show products in stock
      </label>
    </div>
  );
};

export default Search;
