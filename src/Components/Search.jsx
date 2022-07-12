import { FaSistrix as IconSearch } from "react-icons/fa";

const Search = ({ setSearch }) => {
  return (
    <>
      <section className='container__search container__search-title'>
        <section className='content__search-title'>
          <h1>Hello,</h1>
          <p>What you want yo hear today?</p>
        </section>
      </section>
      <section className='container__search'>
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
    </>
  );
};
export default Search;
