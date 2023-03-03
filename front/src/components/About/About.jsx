import styles from './About.module.css';
import aboutProfile from '../../assets/images/aboutProfile.jpg';

const About = () => {

    return (
        <div className={styles.about}>
            <br />
            <br />
            <br />
            <br />
            <h2 className={styles.title}>App creada por Ivan Federico (FT-35a)</h2>
            <img src={aboutProfile} alt='aboutProfile' className={styles.profile}/>
        </div>
    );
};

export default About;