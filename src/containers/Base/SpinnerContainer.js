import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Spinner from 'components/Common/Spinner';

class SpinnerContainer extends PureComponent {
  render() {
    return (
      <Spinner {...this.props} />
    );
  }
}

export default connect(
  state => ({
    isSpin: state.ui.get('isSpin'),
  }),
  null
)(SpinnerContainer);