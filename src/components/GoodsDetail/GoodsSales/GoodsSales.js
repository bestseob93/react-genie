import React from 'react';
import Label from './Label';
import LabelInput from './LabelInput';

function GoodsSales({
  handleChange,
  amount,
  price,
  dcRate,
  origin,
  company,
  spec
}) {
  let dcPrice;
  if(parseInt(dcRate, 10) === 0) {
    dcPrice = price;
    dcRate = '0';
  } else {
    dcPrice = Math.floor((100 - parseInt(dcRate, 10))/100 * parseInt(price, 10));
  }

  return (
    <div className="info_wrapper">
      <Label name="지니할인가" dcRate={dcRate} geniePrice={dcPrice} amount={amount} />
      <Label name="정상가" info={price*amount} />
      <LabelInput name="수량선택" handleChange={handleChange} amount={amount} />
      <Label name="원산지/제조원" info={`${origin}/${company}`} />
      <Label name="상품규격" info={spec} />
    </div>
  );
}

export default GoodsSales;
