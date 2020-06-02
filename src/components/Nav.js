import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../App.module.css';

const activeStyle = {
    color: 'palevioletred',
};

const style = {
    textDecoration: 'none',
};

const Nav = () => {
    return (<ul className={styles.Nav}>
        <li className={styles.NavLink}>
            <NavLink to='/' exact style={style} activeStyle={activeStyle}>Home</NavLink>
        </li>
        <li className={styles.NavLink}>
            <NavLink to='/movies' style={style} activeStyle={activeStyle}>Movies</NavLink>
        </li>
    </ul>)
}

export default Nav;