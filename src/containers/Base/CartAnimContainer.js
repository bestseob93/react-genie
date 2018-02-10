import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import CartAnim from 'components/Common/CartAnim';

class CartAnimContainer extends PureComponent {
  render() {
    return (
      <CartAnim {...this.props} />
    );
  }
}

export default connect(
  state => ({
    isCartShow: state.ui.get('isCartShow'),
  }),
  null
)(CartAnimContainer);
