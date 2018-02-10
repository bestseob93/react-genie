import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import loadGG from 'services/loadGG';

class GenieSDK extends Component {
  state = {
    ttsText: '',
    log: '',
    detailLog: '',
    pathTo: ''
  };

  componentDidMount() {
    const { genieLoaded } = this.props;
    if(!genieLoaded) {
      loadGG(this); // GigaGenie init
    }
  }

  initGenie = () => {
    const { GenieActions, DebugActions } = this.props;
    const options = {
      appid: process.env.REACT_APP_GENIE_APP_ID,
      apikey: process.env.REACT_APP_GENIE_KEY,
      keytype: process.env.REACT_APP_GENIE_KEY_TYPE
    };

    /**
     * gigagenie.init
     */
    this.gigagenie.init(options, (result_cd, result_msg, extra) => {
      if(result_cd === 200) {
        this.gigagenie.voice.onVoiceCommand = this.handleVoiceCommand;
        this.gigagenie.voice.onActionEvent = this.handleActionEvent;
        this.gigagenie.voice.onRequestClose = this.handleRequestClose;
        
        /**
         * 검색 결과 페이지인 경우 1-5 키보드 선택.
         */
        GenieActions.setGenieLoaded();
        if(extra.devicetype === "GGENIE") {
          GenieActions.setAppDevice({
            deviceType: 'GGENIE'
          });
          this.gigagenie.appinfo.getUserInfo(null, (info_result_cd, info_result_msg, info_extra) => {
            if(info_result_cd === 200) {
              GenieActions.setAppInfo({
                registWithApp: info_extra.registwithapp
              });
            }
          });

          this.gigagenie.appinfo.getUserSetInfo(null, (result_cds, result_msgs, extras) => {
            if(result_cds === 200) {
                DebugActions.handleDebugValue({
                  value: JSON.stringify(extras)
                });
                GenieActions.setUserInfo({
                  username: extras.name,
                  address: extras.address
                });
            } else {
                console.log("getContainerId is fail.");
            }
          });
        } else {
          GenieActions.setAppDevice({
            deviceType: 'PC'
          });
          
          this.gigagenie.appinfo.getContainerId(null, (result_cds, result_msgs, extras) => {
            if(result_cds === 200) {
              DebugActions.handleDebugValue({
                value: JSON.stringify(extras)
              });
            }
          });
        }
        this.handleGetVoiceText();
      }
    });
  }

  handleGetVoiceText = () => {
    const { DebugActions } = this.props;

    const options = {
      mode: 1, // 0: extra.voicetext, 1: onActionEvent, 2: onVoiceCommand
      voicemsg: '롯데슈퍼에 오신 것을 환영합니다. 발화가이드를 따라해보세요.'
    };

    this.gigagenie.voice.getVoiceText(options, (result_cd, result_msg, extra) => {
      if(result_cd === 200) {
        if(extra.voicetext) {
          DebugActions.handleDebugValue({
            value: extra.voicetext
          });
        }
        // this.sendTTS();
      }
    });
  }

  handleVoiceCommand = (event) => {
    const { history } = this.props;
    switch(event) {
      case 'nextPage':
        alert("다음페이지 호출됨");
        break;
      case 'prevPage':
        history.goBack();
        break;
      default:
        break;
    }
  }

  handleActionEvent = (extra) => {
    const {
      UiActions,
      AuthActions,
      GoodsActions,
      history,
      location,
      goods,
      searchResults,
      logged
    } = this.props;

    // alert(JSON.stringify(extra));
    switch(extra.actioncode) {
      case 'SearchProd':
        /**
         * 홈 화면에 뿌려진 데이터에서 발화구문하고 같은 이름을 가진 상품 목록을 불러온 뒤, 검색결과 페이지로 이동
         */
        const goodsCategory = goods.toJS().find(data => data.GOODS_CATEGORY === extra.parameter['NE-Prd']).GOODS_CATEGORY;
        const path = '/static-root/image/gigagenie/lhstest/Search?query=' + goodsCategory;
        alert(goodsCategory);
        alert(path);
        history.push(path);
        break;
      case 'ShowDetail':
        /**
         * 검색 결과에 뿌려진 데이터에서 발화구문하고 같은 번호를 가진 상품번호 불러온 뒤, 해당 상품상세 정보 페이지로 이동
         */
        const goodsNo = searchResults.toJS().find(data => data.PRIORITY_RANK + '번' === extra.parameter['NE-B-Ordinal']).GOODS_NO;
        const pathTo = `${extra.actionpath}/${goodsNo}`;

        history.push(pathTo);
        break;
      case 'CCInform':
        this.handleSendTTS('010 2448 7085');
        break;
      case 'Login':
        AuthActions.login();
        this.handleSendTTS('로그인 되었습니다. 상품을 주문해보세요!');
        break;
      case 'Logout':
        AuthActions.logout();
        this.handleSendTTS('로그아웃 되었습니다. 다음에 또 방문해주세요!');
        break;
      case 'AddProd':
        // 개수에 따른 예외 처리
        
        if(!logged) {
          this.handleSendTTS('로그인을 먼저 하고 장바구니에 담아주시길 바랍니다.');
        } else {
          const cartGoodsNo = location.pathname.split('ShowDetail')[1];
          const cartGoods = goods.toJS().find(data => data.GOODS_NO === cartGoodsNo);
          GoodsActions.addProdCart(cartGoods);

          // 임시.. 애니메이션
          UiActions.setCartAnimVisible(true);
          setTimeout(() => {
            UiActions.setCartAnimVisible(false);
          }, 1500);
        }
        break;
      case 'Order':
        if(!logged) {
          this.handleSendTTS('로그인을 먼저 하고 주문해주시길 바랍니다.');
        } else {
          const paramsGoodsNo = location.pathname.split('ShowDetail')[1];
          const superWeb = `http://www.lottesuper.co.kr/handler/goods/GoodsDetail?goods_no=${paramsGoodsNo}&tracking=Main_2SCL_takt02&sale_shop_sct_cd=00`
          alert(superWeb);
          this.handleAppPush('EXEC_WEB', superWeb);
        }
        break;
      case 'Paging':
        const keyboardEvent = document.createEvent("KeyboardEvent");
        const initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";
        keyboardEvent[initMethod]('keydown', true, true, 'prev');
        /**
         * 이전 상품, 다음 상품목록
         * 
         */
        break;
      default:
        history.push('/');
    }
  }

  handleSendTTS = (txt) => {
    alert(txt);
    const options = {
      ttstext: txt
    };

    this.gigagenie.voice.sendTTS(options, (result_cd, result_msg, extra) => {
      if(result_cd === 200) {
        // 성공
      } else {
        // extra.reason에 voice 오류 전달
      }
    });
  }

  handleRequestClose = () => {
    // this.gigagenie.voice.svcFinished(null, (result_cd, result_msg, extra) => {
    //   alert('롯데슈퍼 앱이 종료되었습니다.');
    // });
  }

  handleChange = (ev) => {
    const { DebugActions } = this.props;
    this.setState({
      ttsText: ev.target.value
    });
    DebugActions.handleDebugValue({
      value: ev.target.value
    });
  }

  handleAppPush = (msgType, url) => {
    let self = this;
    const options = {
      target: 'COMP_APP', // 해당 G-BOX에 연계된 Companion App 타겟
      msgtype: msgType,
      msg: url,
      popuptext: '롯데슈퍼 TV로부터 알람이 도착했어요!' // 팝업 문구로 android만 적용. null일 경우 Default 메시지 전달.
    }
    
    alert(JSON.stringify(options));
    
    this.gigagenie.appinfo.sendPushMsg(options, (result_cd, result_msg, extra) => {
      alert(JSON.stringify(extra));
      if(result_cd === 200) {
        alert("성공적으로 푸쉬 알람을 보냈습니다.");
        self.handleSendTTS(`배송 예정 주소는 ${self.props.address} 입니다.`);
      } else {
        alert(JSON.stringify(extra));
      }
    });
  }

  render() {
    return (
      <div>
        {/* <input
          type="text"
          name="tts"
          value={this.state.ttsText}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button
          onClick={this.handleSendTTS}
          type="button"
        >
          전송
        </button>
          */}
        {this.state.log}
        <br />
        세부로그: {this.state.detailLog}
        <br />
        패스: {this.state.pathTo}
      </div>
    );
  }
}

export default GenieSDK;
