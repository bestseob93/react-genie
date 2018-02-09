import storage from './storage';
import { HOME_DATA, DETAIL_DATA } from './JSONdata';

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

/**
 * request Goods Thumbnails and simple Data for Home.
 */
export const requestGoodsThumbnails = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(HOME_DATA);
    }, 1000);
    if(!HOME_DATA) {
      reject("저장된 데이터가 존재하지 않습니다.");
    }
  });
}

/**
 * request Goods Detail Data with goods number
 * @param {number} goods_no - goods number
 */
export const requestGoodsDetail = (goods_no) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = DETAIL_DATA.find(
        data => data.GOODS_NO === parseInt(goods_no, 10));
      
      if(result) {
        resolve(result);
      } else {
        reject("저장된 데이터가 존재하지 않습니다.");
      }
    }, 1500);
  });
}

export const requestSearchResult = (goods_category) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let results = [];
      DETAIL_DATA.find(data => {
        if(data.GOODS_CATEGORY === decodeURI(goods_category, 'UTF-8')) {
          results.push(data);
        }
      });
      if(results.length > 0) {
        resolve(results);
      } else {
        reject("저장된 데이터가 존재하지 않습니다.");
      }
    }, 1500);
  });
}