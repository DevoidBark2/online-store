import React from 'react';
import styles from './Auth.module.css'
import {NavLink,useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../../utils/consts";
const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    return (
        <div className={styles.auth_block} style={{height:window.innerHeight -  54}}>
            <h1>{isLogin ? 'Авторизация' :'Регистрация'}</h1>
            <form className={styles.form}>
                <input placeholder="Введите email"/>
                <input placeholder="Введите пароль"/>
                <div>
                    {
                        isLogin ? <NavLink to={REGISTRATION_ROUTE}>Нет аккаунта,регистрируйся!</NavLink>:
                            <NavLink to={LOGIN_ROUTE}>Есть аккаунт,войдите!</NavLink>
                    }
                    <button>
                        {isLogin ? 'Войти': 'Регистрация'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Auth;