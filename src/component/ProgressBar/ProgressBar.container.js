/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */

import PropTypes from "prop-types";
import { PureComponent } from "react";
import { connect } from "react-redux";

import { ProgressBar } from "./ProgressBar.component";

/** @namespace Component/CheckoutProgressBar/Container/mapStateToProps */
export const mapStateToProps = (state) => ({});

/** @namespace Component/CheckoutProgressBar/Container/mapDispatchToProps */
export const mapDispatchToProps = (dispatch) => ({});

/** @namespace Component/CheckoutProgressBar/Container */

export class ProgressBarContainer extends PureComponent {
  static propTypes = {
    steps: PropTypes.array.isRequired,
    activeStep: PropTypes.string.isRequired,
  };

  containerFunctions = {};

  __construct(props) {
    super.__construct(props);

    this.state = {};
  }

  render() {
    return (
      <ProgressBar
        {...this.props}
        {...this.containerFunctions}
        {...this.state}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProgressBarContainer);
