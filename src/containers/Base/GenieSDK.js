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

  handleSendTTS = (txt='하이하이하이') => {
    alert('sendTTS called');
    const options = {
      ttstext: txt
    };

    this.gigagenie.voice.sendTTS(options, (result_cd, result_msg, extra) => {
      if(result_cd === 200) {
        // 성공
      } else {
        // extra.reason에 voice 오류 전달
      }
    })
  }

  handleVoiceCommand = (event) => {
    console.log(event);
    const { history } = this.props;
    switch(event) {
      case 'nextPage':
        alert("다음페이지 호출됨");
        console.log(this.state);
        break;
      case 'prevPage':
        const pathTo = `${process.env.REACT_APP_PUBLIC_PATH}`;
        history.push(pathTo);
        break;
      default:
        break;
    }
  }

  handleTest = () => {
    const { history } = this.props;
    const pathTo = `${process.env.REACT_APP_PUBLIC_PATH}`;
    history.push(pathTo);
  }

  handleActionEvent = (extra) => {
    const { AuthActions, history, match, goods } = this.props;
    this.setState({
      ...this.state,
      log: JSON.stringify(extra)
    });
    switch(extra.actioncode) {
      case 'ShowDetail':
        /**
         * Home에 뿌려진 데이터에서 발화구문하고 같은 이름을 가진 상품번호 불러온 뒤, 페이지 전환
         */
        const goodsNo = goods.toJS().find(data => data.GOODS_CATEGORY === extra.parameter['NE-Prd']).GOODS_NO;
        const pathTo = `${extra.actionpath}/${goodsNo}`;

        history.push(pathTo);
        break;
      case 'CCInform':
        this.handleSendTTS('010 2448 7085');
        break;
      case 'Login':
        AuthActions.login();
        break;
      case 'Logout':
        AuthActions.logout();
        break;
      case 'AddProd':
        // 개수에 따른 예외 처리
        break;
      case 'Order':
        let superWeb = `http://www.lottesuper.co.kr/handler/goods/GoodsDetail?goods_no=${match.params.goods_no}&tracking=Main_2SCL_takt02&sale_shop_sct_cd=00`
        this.handleAppPush('EXEC_WEB', superWeb);
        break;
      default:
    }
    alert(this.props.location.pathname);
  }

  handleRequestClose = () => {
    this.gigagenie.voice.svcFinished(null, (result_cd, result_msg, extra) => {

    });
  }

  handleChange = (ev) => {
    const { DebugActions } = this.props;
    this.setState({
      ttsText: ev.target.value
    });
    console.log(DebugActions);
    DebugActions.handleDebugValue({
      value: ev.target.value
    });
  }

  handleKeyPress = (ev) => {
    if(ev.charCode === 13) {
      this.setState({
        ...this.state,
        chgView: true
      });
    }
  }

  handleAppPush = (msgType, url) => {
    const options = {
      target: 'COMP_APP', // 해당 G-BOX에 연계된 Companion App 타겟
      msgtype: msgType,
      msg: url,
      popuptext: '롯데슈퍼 TV로부터 알람이 도착했어요!' // 팝업 문구로 android만 적용. null일 경우 Default 메시지 전달.
    }
    this.gigagenie.appinfo.sendPushMsg(options, (result_cd, result_msg, extra) => {
      if(result_cd === 200) {
        alert("성공적으로 푸쉬 알람을 보냈습니다.");
      } else {
        alert(JSON.stringify(extra));
      }
    });
  }

  render() {
    const PUBLIC_PATH = process.env.REACT_APP_PUBLIC_PATH || '';
    if(this.state.chgView) {
      return <Redirect to={`${PUBLIC_PATH}/GoodsDetail`} />;
    } else {
      return (
        <div>
          <input
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
          {this.state.log}
          <br />
          세부로그: {this.state.detailLog}
          <br />
          패스: {this.state.pathTo}
        </div>
      );
    }
  }
}

export default GenieSDK;
