import React, {useState} from 'react';
import s from '../AddProduct/AddProduct.module.css';
import Icon from "../Icon/Icon";
import {Icons as icons} from './../Icon/Icons';

const IconSelect = ({defaultIcon, onChange}) => {

    const [isEditMode, setIsEditMode] = useState(false);
    const setEditProduct = () => setIsEditMode(!isEditMode);

    const [icon, setIcon] = useState(defaultIcon);

    const changeIcon = newIcon => {
        setIcon(newIcon);
        onChange(newIcon);
        setEditProduct();
    }

    return (
        <div>
            <div className={s.productImageWrap} onClick={setEditProduct}>
                <Icon icon={icon} className={s.productImage} />
            </div>
            { isEditMode && <div className={s.productListImage}>
                { icons.map(item => {
                    return <div className={s.productItemWrap} onClick={() => changeIcon(item)}>
                        <Icon icon={item} className={s.productImageItem}/>
                    </div>})
                }
            </div> }
        </div>
    )
};

export default IconSelect;