import React from "react";
import PropTypes from "prop-types"

/**
 * @function
 * @param {object} props - React Props,
 * @returns {JSX.Element} - Rendered component (or null if `success` props)
 */

export default (props) => {
  if (props.success) {
    <div data-test="component-congrats">
      <span data-test="congrats-message">
        Congratulations! You guessed the word!
      </span>
    </div>;
  } else {
    return <div data-test="component-congrats"></div>;
  }
};
