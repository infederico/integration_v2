// import { useEffect } from "react";
// import { getAllCharacters } from "../../redux/actions";
// import { useSelector, useDispatch } from "react-redux";
// import CharacterCard from "../CharacterCard/CharacterCard";
// import styles from './Characters.module.css';

// const Characters = () => {

//     const characters = useSelector((state) => state.allCharacters.results);
//     const dispatch = useDispatch();
    
//     useEffect( () => {
//         dispatch(getAllCharacters())
//     }, []);

//     const onClose = (_id) => {
//         window.alert('closing cards functionality coming soon');
//       };

//     return (
//       <div className={styles.cards}>
//         {
//           characters?.map(({id, name, species, gender, image}) => {
//             return <CharacterCard
//             key={id}
//             id={id}
//             name={name}
//             species={species}
//             gender={gender}
//             image={image}
//             onClose={() => onClose(id)}
//             />
//           })
//         }
//       </div>
//     );
// };

// export default Characters;

/***************************************************/

import styles from './Characters.module.css';
import { useEffect, useState } from "react";
import { getAllCharacters } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import CharacterCard from "../CharacterCard/CharacterCard";
import Pagination from "../Pagination/Pagination";

const Characters = () => {

  const [ currentPage, setCurrentPage ] = useState(1); // seteo un estado local para llevar el control de la pagina actual
  const charactersPerPage = 20; // cantidad de cards por pagina

  const characters = useSelector((state) => state.allCharacters.results);
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCharacters(currentPage)) // traigo al store y de la api los 20 chars correspondientes a esa pagina en concreto
  }, [currentPage, dispatch]);

  const handleClose = (_id) => {
    window.alert('closing cards functionality coming soon');
  };

  // Logic for displaying characters
  // const indexOfLastCharacter = currentPage * charactersPerPage;
  // const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  //const currentCharacters = characters?.slice(0, 20);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className={styles.cards}>
        {characters?.map(({ id, name, species, gender, image }) => {
          return (
            <CharacterCard
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
              image={image}
              onClose={() => handleClose(id)}
            />
          );
        })}
      </div>

      <Pagination
        currentPage={currentPage}
        itemsPerPage={charactersPerPage}
        totalItems={characters?.length}
        paginate={paginate}
      />
      
    </div>
  );
};

export default Characters;
