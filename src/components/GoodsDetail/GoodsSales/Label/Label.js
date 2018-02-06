import React, { Fragment } from 'react';
import { numberWithCommas } from 'services/utils';

/**
 * GoodsInfo Label Functional Component
 * @param {string} props.name - 라벨에 붙을 이름
 * @param {string} props.info - 상품 상세 정보
 * @param {number} props.dcRate - 상품 할인율
 * @param {number} props.geniePrice - 할인 적용된 상품가
 * @param {number} props.amount - 삼품 수량
 * @return {React.element}
 */
function Label(props) {
  const {
    name,
    info,
    dcRate,
    geniePrice,
    amount
  } = props;
  let classnames = '';
  if(props.name === '정상가') {
    classnames = 'cancel';
  } else {
    classnames = '';
  }

  let markedPrice;
  if(typeof info === 'number') {
    markedPrice = numberWithCommas(info);
  }
  return (
    <div className={props.dcRate ? 'row dc' : 'row'}>
      <div className="label">
        <span className="label_name">{name}</span>
      </div>
      <div className="infos">
        { dcRate ? 
          <Fragment>
            <span className="dc_rate"><strong>{dcRate}</strong> %</span>
            <span className="genie_price"><strong>{numberWithCommas(amount * geniePrice)}</strong> 원</span>
          </Fragment> :
          <span className={`info_txt ${classnames}`}>{classnames === '' ? info : `${markedPrice}원`}</span>
        }
      </div>
    </div>
  );
}

export default Label;
