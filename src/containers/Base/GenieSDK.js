/*eslint-disable no-undef*/
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import loadGG from 'services/loadGG';

class GenieSDK extends Component {
  state = {
    ttsText: ''
  };

  componentDidMount() {
    const { genieLoaded } = this.props;
    console.log(genieLoaded);
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

    this.gigagenie.init(options, (result_cd, result_msg, extra) => {
      if(result_cd === 200) {
        this.gigagenie.voice.onVoiceCommand = this.handleVoiceCommand;
        this.gigagenie.voice.onActionEvent = this.handleActionEvent;

        GenieActions.setGenieLoaded();

        this.gigagenie.appinfo.getContainerId(null, (result_cds, result_msgs, extras) => {
              if(result_cds === 200) {
                  DebugActions.handleDebugValue({
                    value: JSON.stringify(extras)
                  });

                  this.sendTTS();
              } else {
                  console.log("getContainerId is fail.");
              }
        });
      }
    });
  }

  sendTTS = () => {
    const { DebugActions } = this.props;

    const options = {
      mode: 0, // 0: extra.voicetext, 1: onActionEvent, 2: onVoiceCommand
      voicemsg: '말해보세요'
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
    console.log(event);
    const PUBLIC_PATH = process.env.REACT_APP_PUBLIC_PATH || '';
    switch(event) {
      case 'nextPage':
        alert("다음페이지 호출됨");
        return <Redirect to={`${PUBLIC_PATH}/detail`} />
      case 'prevPage':
        alert("이전페이지 호출됨");
        break;
      default:
        break;
    }
  }

  handleActionEvent = (ev) => {
    const { DebugActions } = this.props;
    DebugActions.handleDebugValue({
      value: "함수 받음"
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
      this.sendTTS();
    }
  }

  render() {
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
          onClick={this.sendTTS}
          type="button"
        >
          전송
        </button>
      </div>
    );
  }
}

export default GenieSDK;
