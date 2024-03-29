import React from 'react';
/**
 * Functional Component for GenieHelp
 * @param {string} genieMsg - got from genie
 * @returns jsx
 */
function GenieHelp({ genieMsg }) {
  return (
    <div className="temp_footer">
      <div className="debug_box">
        <div>
          <h3>기가지니 정보</h3>
          <p className="genie_info">앱아이디: { process.env.REACT_APP_GENIE_APP_ID }</p>
          <p className="genie_info">키: { process.env.REACT_APP_GENIE_KEY }</p>
          <p className="genie_info">타입: { process.env.REACT_APP_GENIE_KEY_TYPE }</p>
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
      <div className="debug_box">
        <div className="scroll_wrapper">
          <div>
            <h3>현재 경로</h3>
            <p>{window.location.pathname}</p>
            <h3>로그</h3>
            <p className="genie_info">{ genieMsg }</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenieHelp;
