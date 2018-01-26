import React, { Component, Fragment } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from 'containers/Home';
import GoodsDetail from 'containers/GoodsDetail';

class App extends Component {
  render() {
    const PUBLIC_PATH = process.env.REACT_APP_PUBLIC_PATH || '13.125.57.232:3000';
    return (
      <Fragment>
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to={`${PUBLIC_PATH}/detail`}>상세화면</Link>
        <Switch>
          <Route exact path={`${PUBLIC_PATH}`} component={Home} />
          <Route path={`${PUBLIC_PATH}/detail`} component={GoodsDetail} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
