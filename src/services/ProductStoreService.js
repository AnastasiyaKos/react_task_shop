import axios from 'axios';

export const getAllProduct = async () => {
    return axios.get('http://demo8936049.mockable.io/hui2020');
}

const _transformProduct = (product) => {
    // return{
    //     id: product.iconIndex,
    //     label: product.label,
    //     price: product.price,
    //     count: product.count,
    //     total: product.total,
    //     infoIcon: product.iconIndex
    // }
    return product;
}


getAllProduct().then((data) => {
    //console.log(...data[1].label)
})