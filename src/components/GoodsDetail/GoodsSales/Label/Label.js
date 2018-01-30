import React, { Fragment } from 'react';

function Label(props) {
  let classnames = '';
  if(props.name === '정상가') {
    classnames = 'cancel';
  } else {
    classnames = '';
  }
  return (
    <div className={props.dcRate ? 'row dc' : 'row'}>
      <div className="label">
        <span className="label_name">{props.name}</span>
      </div>
      <div className="infos">
        { props.dcRate ? 
          <Fragment>
            <span className="dc_rate"><strong>{props.dcRate}</strong> %</span>
            <span className="genie_price"><strong>{props.geniePrice}</strong> 원</span>
          </Fragment> :
          <span className={`info_txt ${classnames}`}>{props.info}</span>
        }
      </div>
    </div>
  );
}

export default Label;
