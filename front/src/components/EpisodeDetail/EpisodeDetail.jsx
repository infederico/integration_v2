import styles from './EpisodeDetail.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EpisodeDetail = () => {

    const { id } = useParams();

    const [ character, setCharacter ] = useState({});

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/episode/${id}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [id]);

    return (
        <div className={styles.detailContainer}>
            <div className={styles.detailHeader}>
                <h1 className={styles.headerText}>{character?.id}</h1>
                <h1 className={styles.headerText}>{character?.episode}</h1>
                <h1 className={styles.headerText}>{character?.name}</h1>
                <h1 className={styles.headerText}>{character?.air_date}</h1>     
        </div> </div>
    );
};

export default EpisodeDetail;