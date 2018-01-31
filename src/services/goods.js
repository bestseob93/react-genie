import storage from './storage';

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

export const initDatas = (datas) => {
    return new Promise((resolve, reject) => {
        const results = storage.get('home_data');
        if(results) {
            reject("데이터가 존재하므로 다시 추가하지 않습니다.");
        }
        const homeGoods = JSON.stringify(datas);
        //TODO: detail Datas 추가하기
        storage.set('home_data', homeGoods);
        resolve();

        if(!datas) {
            reject("데이터 없음");
        }
    });
}

export const getGoodsThumbnails = () => {
    return new Promise((resolve, reject) => {
        const results = storage.get('home_data');
        setTimeout(() => {
            resolve(results);
        }, 1500);
        if(!results) {
            reject("저장된 데이터가 존재하지 않습니다.");
        }
    });
}