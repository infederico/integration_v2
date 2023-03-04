import styles from './SearchBar.module.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { search } from '../../redux/actions';

const SearchBar = () => {

  const theme = useSelector(state => state.theme);
  const [query, setQuery] = useState('');
  const [option, setOption] = useState('characters');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(search(query, option));
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search by character, episode or location id"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={styles.input}
      />
      <div>
        <br />
        <label className={ theme ? styles.darkTheme : styles.lightTheme }>
          <input
            className={styles.radio}
            type="radio"
            name="option"
            value="characters"
            checked={option === 'characters'}
            onChange={() => setOption('characters')}
          />
          Characters    
        </label>
        <label className={ theme ? styles.darkTheme : styles.lightTheme }>
          <input
            type="radio"
            name="option"
            value="episodes"
            checked={option === 'episodes'}
            onChange={() => setOption('episodes')}
          />
          Episodes    
        </label>
        <label className={ theme ? styles.darkTheme : styles.lightTheme }>
          <input
            type="radio"
            name="option"
            value="locations"
            checked={option === 'locations'}
            onChange={() => setOption('locations')}
          />
          Locations
        </label>
      </div>
      <br />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;


