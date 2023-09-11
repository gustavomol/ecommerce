//This JSON file has 50 fake products
//I use https://mockaroo.com/ to generate this JSON file
import data from './Data/products.json';

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data)
        });
    })
}