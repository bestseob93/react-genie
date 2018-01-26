import React, { Component, Fragment } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from 'containers/Home';
import GoodsDetail from 'containers/GoodsDetail';

class App extends Component {
  render() {
    return (
      <Fragment>
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to={`${process.env.REACT_APP_PUBLIC_PATH}/detail`}>상세화면</Link>
        <Switch>
          <Route exact path={`${process.env.REACT_APP_PUBLIC_PATH}`} component={Home} />
          <Route path={`${process.env.REACT_APP_PUBLIC_PATH}/detail`} component={GoodsDetail} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
