import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Core,
  GoodsDetail,
  HeaderContainer,
  Home,
  SpeakGuideContainer,
  NoMatch,
  Search
} from 'containers';

class App extends Component {
  render() {
    const PUBLIC_PATH = process.env.REACT_APP_PUBLIC_PATH || '';
    return (
      <div className="container">
        <HeaderContainer />
        <Switch>
          <Route exact path={`/${PUBLIC_PATH}`} component={Home} />
          <Route path={`${PUBLIC_PATH}/Search`} component={Search} />
          <Route path={`${PUBLIC_PATH}/ShowDetail/:goods_no`} component={GoodsDetail} />
          <Route component={NoMatch} />
        </Switch>
        <SpeakGuideContainer />
        <Core />
      </div>
    );
  }
}

export default App;
