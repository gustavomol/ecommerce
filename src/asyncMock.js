//This JSON file has 50 fake products
//I use https://mockaroo.com/ to generate this JSON file
import data from './Data/products.json';

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data)
        }, 500);
    })
}

export const getItemById = (id) => {
    //console.log("getItemById: " + id)
    return new Promise((resolve, reject) =>  {
        const item = data.find((el) => el.id === id);

        if(item) {
            resolve(item)
        } else {

            reject({error: "Producto no encontrado"})
        }
    })
}