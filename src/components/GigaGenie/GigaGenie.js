import React, { Component } from 'react';

class GigaGenie extends Component {
  state = {
    ttsText: ''
  };

  componentDidMount() {
    ((d, s, id, cb) => {
      const element = d.getElementsByTagName(s)[0];
      const fjs = element;
      let js = element;
      
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://svcapi.gigagenie.ai/sdk/v1.0/js/gigagenie.js';
      fjs.parentNode.insertBefore(js, fjs);
      js.onload = cb;
    })(document, 'script', 'geine-sdk', () => {
      this.gigagenie = global.gigagenie;
      this.initGeine();
    });
  }

  initGeine = () => {
    console.log(process.env.REACT_APP_GEINE_KEY);
    console.log(global.gigagenie);
    const { DebugActions } = this.props;
    const options = {
      appid: process.env.REACT_APP_GENIE_APP_ID,
      apiKey: process.env.REACT_APP_GENIE_KEY,
      keytype: process.env.REACT_APP_GENIE_KEY_TYPE
    };

    this.gigagenie.init(options, (result_cd, result_msg, extra) => {
      console.log(result_msg);
      if(result_cd === 200) {
        console.log("init started");
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

      alert(JSON.stringify(extra));
    });
  }

  sendTTS = () => {
    const options = {
      mode: 1,
      voicemsg: '말해보세요'
    };

    console.log(options);

    this.gigagenie.voice.getVoiceText(options, (result_cd, result_msg, extra) => {
      console.log(result_cd);
      alert(JSON.stringify(extra));
      if(result_cd === 200) {
        // console.log(this.gigagenie.voice.onVoiceCommand);
        console.log('success');
        this.handleGenieActionEvent(extra.voicetext);
      }
    });
  }

  handleGenieActionEvent = (voiceText) => {
    console.log('called : ', voiceText);
    this.gigagenie.voice.onActionEvent = (extra) => {
      console.log(extra);
      console.log('hi');
    };
    
    this.gigagenie.voice.onVoiceCommand = (event) => {
      console.log(event);
      // switch(event){
      //   case 'nextPage':
      //     console.log('called nextPage');
      //   // location.href="http://image.lottesuper.co.kr/static-root/image/gigagenie/test/more.html";
      //   break;
      // case 'prevPage':
      //   console.log('prevPage');
      //   break;
      // default:
      //   break;
      // }
    };
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

export default GigaGenie;