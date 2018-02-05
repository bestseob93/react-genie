import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Core,
  GoodsDetail,
  HeaderContainer,
  Home,
  SpeakGuide
} from 'containers';

class App extends Component {
  render() {
    const PUBLIC_PATH = process.env.REACT_APP_PUBLIC_PATH || '';
    return (
      <div className="container">
        <HeaderContainer />
        <Switch>
          <Route exact path={`${PUBLIC_PATH}`} component={Home} />
          <Route path={`${PUBLIC_PATH}/ShowDetail/:goods_no`} component={GoodsDetail} />
        </Switch>
        <SpeakGuide />
        <Core />
      </div>
    );
  }
}

export default App;
