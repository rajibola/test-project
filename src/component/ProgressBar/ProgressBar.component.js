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

import "./ProgressBar.style";

/** @namespace Component/ProgressBar/Component */
export class ProgressBar extends PureComponent {
  static propTypes = {
    steps: PropTypes.array.isRequired,
    activeStep: PropTypes.string.isRequired,
  };

  formatName = (name) => {
    const firstName = name.split("_")[0];
    return firstName[0].toUpperCase() + firstName.substring(1).toLowerCase();
  };

  renderProgress() {
    const { steps, activeStep } = this.props;
    const stepsArray = Object.keys(steps);
    const activeIndex = stepsArray.indexOf(activeStep);

    return (
      <div className="container">
        <div className="line">
          <div className="centered">
            {stepsArray.map((item, i) => {
              const active = item === activeStep;
              const showMark =
                activeIndex > i ? <div className="tick-mark" /> : i + 1;
              const circleClassName =
                active || activeIndex >= i ? "circle colored" : "circle";
              const lineClassName =
                i == 0
                  ? ""
                  : active || activeIndex > i
                  ? "line-overlay line-overlay-active"
                  : "line-overlay";

              return (
                <div className="circle-container" key={i}>
                  <div className={lineClassName} />
                  <div className="circle-text">
                    <div className="circle-padding">
                      <div className={circleClassName}>{showMark}</div>
                    </div>
                    <div className="subtext">{this.formatName(item)}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  render() {
    return <div>{this.renderProgress()}</div>;
  }
}
