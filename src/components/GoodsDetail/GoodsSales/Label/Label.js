import React, { Fragment } from 'react';
import { numberWithCommas } from 'services/utils';

function Label(props) {
  let classnames = '';
  if(props.name === '정상가') {
    classnames = 'cancel';
  } else {
    classnames = '';
  }

  console.log(typeof props.info);
  let markedPrice;
  if(typeof props.info === 'number') {
    markedPrice = numberWithCommas(props.info);
  }
  return (
    <div className={props.dcRate ? 'row dc' : 'row'}>
      <div className="label">
        <span className="label_name">{props.name}</span>
      </div>
      <div className="infos">
        { props.dcRate ? 
          <Fragment>
            <span className="dc_rate"><strong>{numberWithCommas(props.dcRate)}</strong> %</span>
            <span className="genie_price"><strong>{props.geniePrice}</strong> 원</span>
          </Fragment> :
          <span className={`info_txt ${classnames}`}>{markedPrice}원</span>
        }
      </div>
    </div>
  );
}

export default Label;
