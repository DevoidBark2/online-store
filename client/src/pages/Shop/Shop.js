import React from 'react';
import styles from './Shop.module.css';
import TypeBar from "../../components/TypeBar/TypeBar";
import BrandBar from "../../components/BrandBar/BrandBar";
import DeviceList from "../../components/DeviceList/DeviceList";

const Shop = () => {
    return (
        <div className={styles.shop_block}>
            <TypeBar/>
            <div className={styles.shop_content}>
                <BrandBar/>
                <DeviceList/>
            </div>
        </div>
    );
};

export default Shop;