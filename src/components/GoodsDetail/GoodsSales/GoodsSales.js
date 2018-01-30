import React from 'react';
import Label from './Label';
import LabelInput from './LabelInput';

function GoodsSales() {
  return (
    <div className="info_wrapper">
      <Label name="지니할인가" dcRate={'30'} geniePrice={'3,150'} />
      <Label name="정상가" info={'4,990원'} />
      <LabelInput name="수량선택" />
      <Label name="원산지/제조원" info={'국산/서울우유협동조합'} />
      <Label name="상품규격" info={'1L'} />
    </div>
  );
}

export default GoodsSales;
