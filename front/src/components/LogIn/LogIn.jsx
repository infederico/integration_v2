import styles from './LogIn.module.css';
import validation from './validation';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAccess } from '../../redux/actions';

const LogIn = () => {

    const username = useSelector(state => state.userData.username);
    const password = useSelector(state => state.userData.password);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const login = (userData) => {
        if (userData.password === password && userData.username === username) {
           dispatch(setAccess(true))
           navigate('/home');
        };
    };
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    });

    const [ errors, setErrors ] = useState({
        username: '',
        password: ''
    });

    const handleInputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(
            validation({
                ...userData,
                [event.target.name]: event.target.value
            })
        )
    };

    const handleSubmit = () => {
        login(userData);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className={styles.form}>
            <label className={styles.label}>Username</label>
            <input 
                name='username'
                type='text'
                value={userData.username} 
                onChange={handleInputChange}
                className={styles.input}    
            />
            {errors.username && <p className={styles.errors} >{errors.username}</p>}
            <br />
            <br />
            <label className={styles.label}>Password</label>
            <input
                name='password'
                type="password"
                value={userData.password} 
                onChange={handleInputChange}
                className={styles.input}
            />
            {errors.password && <p className={styles.errors} >{errors.password}</p>}
            <br />
            <br />
            <br />
            <br />
            <button className={styles.buttonLogin}>LOGIN</button>
        </form>
        </div>
    );
};

export default LogIn;





    
    
    
    

    

  
