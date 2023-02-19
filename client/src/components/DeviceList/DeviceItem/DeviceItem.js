import React from 'react';
import styles from './DeviceItem.module.css';
import star from '../../../assests/star.png'
import {useNavigate} from 'react-router-dom'
import {DEVICE_ROUTE} from "../../../utils/consts";
const DeviceItem = ({device}) => {
    const history = useNavigate()
    return (
        <div className={styles.device_item} onClick={() => history(DEVICE_ROUTE + '/' + device.id)}>
            <img src={device.img} width={300} height={250}/>
            <div className={styles.desc}>
                <div>Samsung...</div>
                <div className={styles.rating}>
                    <div> {device.rating}</div>
                    <img src={star} alt="star" width={18} height={18}/>
                </div>
            </div>
            <div>
                {device.name}
            </div>
        </div>
    );
};

export default DeviceItem;