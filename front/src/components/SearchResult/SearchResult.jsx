import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { searchClean } from '../../redux/actions';
import styles from './SearchResult.module.css';
import { NavLink } from "react-router-dom";

const SearchResult = () => {

    const { id, name } = useSelector((state) => state.searchResult)
    const dispatch = useDispatch();

    const detailLink = useSelector((state) => state.resultDetailLink);
    const finalLink = detailLink.substring('https://rickandmortyapi.com/api/'.length)
    console.log(finalLink);
    
    useEffect(() => {
        return () => dispatch(searchClean());
    }, []);

    return (
        <div className={styles.searchResult}>
            <h2>id -> {id}</h2>
            <h2 >{name}</h2>   
            <NavLink to={`/detail/${finalLink}`}>
                <h4>click here for details</h4>
            </NavLink>
        </div>
    );
};

export default SearchResult;