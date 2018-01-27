import React, { Component, Fragment } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from 'containers/Home';
import GoodsDetail from 'containers/GoodsDetail';
import HeaderContainer from 'containers/Base/HeaderContainer';

class App extends Component {
  render() {
    const PUBLIC_PATH = process.env.REACT_APP_PUBLIC_PATH || '';
    return (
      <Fragment>
        <HeaderContainer />
        <p className="App-intro">
          { JSON.stringify(window.navigator) }
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
