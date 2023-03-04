import styles from './LogOut.module.css';
import logoutIcon from '../../assets/images/logoutIcon.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAccess } from '../../redux/actions';

const LogOut = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const clickHandler = () => {
        dispatch(setAccess(false))
        navigate('/');
    };

    return (
        <button className={styles.outButton} onClick={clickHandler} title='log out'>
            <img src={logoutIcon} alt='logoutIcon' />
        </button>
    );
};

export default LogOut;