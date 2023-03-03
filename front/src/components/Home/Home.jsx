import { useSelector } from 'react-redux'
import SearchBar from '../SearchBar/SearchBar';
import SearchResult from '../SearchResult/SearchResult';
import styles from './Home.module.css';

const Home = () => {

    const theme = useSelector(state => state.theme);
    const errors = useSelector(state => state.errors);
    const searchResult = useSelector(state => state.searchResult);
    
    return (
        <div className={ theme ? styles.lightTheme : styles.darkTheme }>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <SearchBar />
            {errors && <div>{errors}</div>}
            <br />
            {!errors && searchResult.id && <SearchResult />}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    );
};

export default Home;
