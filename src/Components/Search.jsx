import { FaSistrix as IconSearch } from "react-icons/fa";
import { IoClose as IconClose } from "react-icons/io5";

const Search = ({ setSearch, value, setValue }) => {
  return (
    <>
      <section className='container__search container__search-title'>
        <section className='content__search-title'>
          <h1>Hello,</h1>
          <p>What do you want to hear today?</p>
        </section>
      </section>
      <section className='container__search'>
        <div className='container search'>
          <input
            className='search__input'
            type='text'
            placeholder='Search your music'
            value={value}
            onChange={(e) => {
              let inputValue = e.target.value;
              setValue(inputValue);
              if (!inputValue) setSearch("");
              else setSearch(value);
            }}
          />
          <button className='button__icon' aria-label='button for search'>
            {value ? (
              <IconClose className='search__icon search__icon-max' />
            ) : (
              <IconSearch className='search__icon' />
            )}
          </button>
        </div>
      </section>
    </>
  );
};
export default Search;
