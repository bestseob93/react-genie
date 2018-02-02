import storage from './storage';
import { DETAIL_DATA } from './JSONdata';

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

/**
 * 상품 리스트 초기 데이터 앱 실행 시 로컬 스토로지에 저장
 * @param {Object[]} datas - 상품 리스트
 */
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

export const requestGoodsThumbnails = (results) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(results);
    }, 1000);
    if(!results) {
      reject("저장된 데이터가 존재하지 않습니다.");
    }
  });
}

export const requestGoodsDetail = (goods_no) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let i = 0;
      let arrLen = DETAIL_DATA.length;
      let result;
      for(i = 0; i < arrLen; i += 1) {
        console.log(DETAIL_DATA[i].GOODS_NO);
        if(DETAIL_DATA[i].GOODS_NO === parseInt(goods_no, 10)) {
          result = DETAIL_DATA[i];
        }
      }
      console.log(result);
      if(result) {
        resolve(result);
      } else {
        reject("저장된 데이터가 존재하지 않습니다.");
      }
    }, 1500);
  });
}