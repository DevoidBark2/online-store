import React, {useContext} from 'react';
import styles from './DeviceList.module.css'
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import DeviceItem from "./DeviceItem/DeviceItem";
const DeviceList = observer(() => {
    const {device} = useContext(Context);

    return (
        <div className={styles.device_list}>
            {
                device.devices.map(device =>
                    <DeviceItem key={device.id} device={device}/>
                )
            }
        </div>
    );
});

export default DeviceList;