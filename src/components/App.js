import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import {
  Core,
  GoodsDetail,
  HeaderContainer,
  Home,
} from 'containers';

class App extends Component {
  render() {
    const PUBLIC_PATH = process.env.REACT_APP_PUBLIC_PATH || '';
    return (
      <div className="container">
        <HeaderContainer />
        <p className="App-intro">
          { JSON.stringify(window.navigator) }
        </p>
        <Core />
        <Link to={`${PUBLIC_PATH}/detail`}>상세화면</Link>
        <Switch>
          <Route exact path={`${PUBLIC_PATH}`} component={Home} />
          <Route path={`${PUBLIC_PATH}/detail`} component={GoodsDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
