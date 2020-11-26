import React, {useState} from 'react';
import s from '../AddProduct/AddProduct.module.css';
import Icon from "../Icon/Icon";
import {Icons as icons} from './../Icon/Icons';

const IconSelect = ({defaultIcon, onChange}) => {

    const [isEditMode, setIsEditMode] = useState(false);
    const setEditProduct = () => setIsEditMode(!isEditMode);

    const [icon, setIcon] = useState(defaultIcon);

    const changeIcon = newIcon => {
        console.log(newIcon)
        setIcon(newIcon);
        onChange(newIcon);
        setEditProduct();
    }

    return (
        <div>
            <div className={s.productImageWrap} onClick={setEditProduct}>
                <Icon icon={icon} className={s.productImage} />
            </div>
            {isEditMode && <div className={s.productListImage}>
                <div className={s.productItemWrap} onClick={() => changeIcon(icons[1])}>
                    <Icon icon={icons[1]} className={s.productImageItem}/>
                </div>

                <div className={s.productItemWrap} onClick={() => changeIcon(icons[2])}>
                    <Icon icon={icons[2]} className={s.productImageItem}/>
                </div>

                <div className={s.productItemWrap} onClick={() => changeIcon(icons[3])}>
                    <Icon icon={icons[3]} className={s.productImageItem}/>
                </div>

                <div className={s.productItemWrap} onClick={() => changeIcon(icons[4])}>
                    <Icon icon={icons[4]} className={s.productImageItem}/>
                </div>
            </div>}
        </div>
    )
};

export default IconSelect;