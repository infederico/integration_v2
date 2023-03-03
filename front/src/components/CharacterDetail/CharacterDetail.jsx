import styles from './CharacterDetail.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CharacterDetail = () => {

    const { id } = useParams();

    const [ character, setCharacter ] = useState({});

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
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
                <h1 className={styles.headerText}>{character?.name}</h1>
                <h2 className={styles.headerSubText}>{character?.status}</h2>
                <h2 className={styles.headerSubText}>{character?.species}</h2>
                <h2 className={styles.headerSubText}>{character?.gender}</h2>
            </div>
            <div className={styles.imageContainer}>
                <img src={character?.image} alt={character?.id} className={styles.characterImage} />
            </div>
        </div>
    );
};

export default CharacterDetail;