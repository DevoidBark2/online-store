import React, {useContext} from 'react';
import styles from './NavBar.module.css';
import {Context} from "../../index";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../../utils/consts";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useNavigate()
    return (
        <div className={styles.navbar}>
            <NavLink to={SHOP_ROUTE} className={styles.navbar_logo}>КупиДевайс</NavLink>
                <nav className={styles.nav_link}>
                    {
                        user.isAuth ?
                            <>
                                <p onClick={() => history(ADMIN_ROUTE)}>Админ панель</p>
                                <p onClick={() => history(LOGIN_ROUTE)}>Выйти</p>
                            </> :
                            <p onClick={() => user.setIsAuth(true)}>Авторизация</p>
                    }
                </nav>
        </div>
    );
});

export default NavBar;