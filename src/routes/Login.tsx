import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Login.module.css';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/authSlice';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (ev: React.SubmitEvent<HTMLFormElement>) => {
    ev.preventDefault();
    dispatch(setUser({ name, password }));
    setName('');
    setPassword('');
    navigate('/');
  };

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputWrapper}>
          <label htmlFor='name'>User Name</label>
          <input
            type='text'
            id='name'
            required
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            autoComplete='username'
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            required
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            autoComplete='current-password'
          />
        </div>
        <button className={styles.button} type='submit'>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
