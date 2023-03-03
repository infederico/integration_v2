// import styles from './CharacterCard.module.css';
// import { Link } from 'react-router-dom';

// function CharacterCard ({ id, name, onClose, image }) {

//    return (
//       <div className={styles.card}>
//          <button className={styles.buttonClose} onClick={onClose}>X</button>
//          <h2 className={styles.cardH2}>{name}</h2>
//          <Link to={`/detail/${id}`}>
//             <img  src={image} alt={name} className={styles.cardImg}/>
//          </Link>
//          <h3 className={styles.cardH3}>{id}</h3>
//       </div>
//    );
// };

// export default CharacterCard;


import styles from './CharacterCard.module.css';
import { Link } from 'react-router-dom';

function CharacterCard ({ id, name, onClose, image }) {




   return (
      <>
         <Link to={`/detail/character/${id}`}>
            <figure>
               {/* <button className={styles.buttonClose} onClick={onClose}>X</button> */}
               <img src={image} alt={name} />
                  <figcaption>{name}</figcaption>
            </figure>   
         </Link>
      </>
   );
};

export default CharacterCard;

{/* <div className={styles.card}>
         
       
         
          
         
         <h3 className={styles.cardH3}>{id}</h3>
      </div> */}