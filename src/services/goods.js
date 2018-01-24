export const getProducts = () => {
    return new Promise((resolve, reject) => {
        const products = JSON.parse(localStorage.getItem('product')) || [];
        console.log(products);
        resolve(products);
        if(!products) {
            reject('No Data');
        }
    });
}