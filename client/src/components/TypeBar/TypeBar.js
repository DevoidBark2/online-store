import React, {useContext} from 'react';
import styles from './TypeBar.module.css'
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
const TypeBar = observer(() => {

    const {device} = useContext(Context)

    return (
        <div className={styles.typebar}>
            {
                device.types.map(type =>
                    <div
                        className={type.id === device.selectedType.id ? styles.active : styles.type_item}
                        key={type.id}
                        onClick={() => device.setSelectedType(type)}
                    >
                        {type.name}
                    </div>
                )
            }
        </div>
    );
});

export default TypeBar;