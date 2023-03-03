import styles from './Menu.module.css';

const Menu = () => {


    return (
        <>
            <button className={styles.hamburgerButton}>
                <span className={styles.hamburgerIcon}></span>
            </button>
        </>
    );
};

export default Menu;