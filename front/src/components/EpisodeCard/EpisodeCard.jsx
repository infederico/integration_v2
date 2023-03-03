import styles from './EpisodeCard.module.css';


const EpisodeCard = ({ id, name, air_date, episode, onClose }) => {

   return ( 
      <div className={styles.cards}>
         <span className={styles.card}>
            <button className={styles.buttonClose} onClick={onClose}>X</button>
            <br />
            <label className={styles.cardLabel}>id {id}</label>
            <h3 className={styles.cardH3}>{episode}</h3>
            <h2 className={styles.cardH2}>{name}</h2>
            <label className={styles.cardLabel}>title</label>
            <h4 className={styles.cardH4}>{air_date}</h4>
            <label className={styles.cardLabel}>aired</label>
         </span>
      </div>
   );
};

export default EpisodeCard;