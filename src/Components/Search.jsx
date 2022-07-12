import { FaSistrix as IconSearch } from "react-icons/fa";

const Search = ({ setSearch }) => {
  return (
    <section>
      <div className='container search'>
        <IconSearch className='search__icon' />
        <input
          className='search__input'
          type='text'
          placeholder='Search your movie'
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
        />
      </div>
    </section>
  );
};
export default Search;
