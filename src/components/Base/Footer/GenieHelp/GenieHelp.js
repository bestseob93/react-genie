import React from 'react';

function GenieHelp({ genieMsg }) {
  return (
    <footer>
      <div className="debug_box">
        <div>
          <h3>기가지니 정보</h3>
          <p>기가지니: { genieMsg }</p>
          <p>앱아이디: { process.env.REACT_APP_GENIE_APP_ID }</p>
          <p>키: { process.env.REACT_APP_GENIE_KEY }</p>
          <p>타입: { process.env.REACT_APP_GENIE_KEY_TYPE }</p>
        </div>
      </div>
      <div className="debug_box">
        <div>
          <h3>로그</h3>
          <p>hi</p>
        </div>
        <div>
          <h3>발화 Input</h3>
          <input
            type="text"
            name="speak"
            placeholder="발화문을 입력해주세요"
          />
          <button type="button" className="btn">말하기</button>
        </div>
      </div>
    </footer>
  );
}

export default GenieHelp;
