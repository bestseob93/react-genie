import React, { Component } from 'react';

export default function asyncRoute(getComponent) {
  return class AsyncComponent extends Component {
    static Component = null;
    mounted = false;

    state = {
      Component: AsyncComponent.Component
    };

    componentWillMount() {
      if(this.state.Component === null) {
        getComponent().then(m => m).then(Component => {
         AsyncComponent.Component = Component;
          if(this.mounted) {
            this.setState({Component});
          }
        })
      }
    }

    componentDidMount() {
      this.mounted = true;
    }

    componentWillUnmount() {
      this.mounted = false;
    }

    render() {
      const {Component} = this.state;

      if(Component !== null) {
        return <Component {...this.props} />
      }
      return null; // or <div /> with a loading spinner, etc..
    }
  }
}