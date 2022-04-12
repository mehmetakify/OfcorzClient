import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import LogoIcon from '../public/LogoIcon';
import { login } from '../store/actions';

export default function LoginCard() {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  return (
    <div className={styles.screen1}>
      <LogoIcon />
      <div className={styles.field}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="userName">User Name</label>
        <div className="sec-2">
          <input
            id="userName"
            type="text"
            className={styles.field}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="User Name"
          />
        </div>
      </div>
      <div className={styles.field}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="password">Password</label>
        <div className="sec-2">
          <input
            id="password"
            className={styles.field}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="············"
          />
        </div>
      </div>
      {/* eslint-disable-next-line react/button-has-type */}
      <button
        onClick={() =>
          dispatch(
            login(axios, {
              userName,
              password,
            })
          )
        }
        className={styles.login}
      >
        Login
      </button>
    </div>
  );
}
