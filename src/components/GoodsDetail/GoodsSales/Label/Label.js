import React, { Fragment } from 'react';
import { numberWithCommas } from 'services/utils';

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

  console.log(typeof info);
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
          <span className={`info_txt ${classnames}`}>{classnames === '' ? info : markedPrice}원</span>
        }
      </div>
    </div>
  );
}

export default Label;
