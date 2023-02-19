import React, {useContext} from 'react';
import styles from './BrandBar.module.css'
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
const BrandBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <div className={styles.brands}>
            {
                device.brands.map(brand =>
                    <div
                        key={brand.id}
                        className={brand.id === device.selectedBrand.id ? styles.active : styles.brand_item}
                        onClick={() => device.setSelectedBrand(brand)}
                    >
                        {brand.name}
                    </div>
                )
            }
        </div>
    );
});

export default BrandBar;