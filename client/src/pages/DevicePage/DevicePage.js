import React from 'react';
import styles from './Devicepage.module.css';
import star from '../../assests/star.png'
const DevicePage = () => {
    const device = {id:1,name:"Iphone 12 pro",price:12000,rating:5,img:'https://jjstore.ru/image/cache/catalog/iphone/iphone12/iphone-12-pro-256gb-blue-1181x865.png'}
    const descriptions = [
        {id:1,title:'Экран',description:'6.7"/2796x1290 Пикс'},
        {id:1,title:'Технология экрана',description:'OLED'},
        {id:1,title:'Тип процессора',description:'A16 Bionic'},
        {id:1,title:'Встроенная память (ROM)',description:'256 ГБ'},
        {id:1,title:'Основная камера МПикс',description:'48/12/12'}
    ]
    return (
        <div className={styles.device_page}>
            <div className={styles.device_block_top}>
                <img src={device.img} alt="device-img" width={800} height={650}/>
                <div className={styles.add_basket}>
                    <div className={styles.device_price}>
                        <p>{device.price}</p>
                        <p>{device.rating}</p>
                        <img src={star} width={18} height={18}/>
                    </div>
                    <button>Добавить в корзину</button>
                </div>
            </div>
            <div className={styles.description}>
                <h1>Характеристики</h1>
                {descriptions.map(description =>
                    <div>
                        {description.title}....................{description.description}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DevicePage;