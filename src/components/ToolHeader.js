import React from "react";
import PropTypes from "prop-types";

export const ToolHeader = ({ headerText }) => {
    return (
        <header>
            <h1>{headerText}</h1>
        </header>
    )
};

// Props default in case nothing in header
ToolHeader.defaultProps = {
    headerText: "Mind Blowing",
}

// Props type to validate data type passing in
ToolHeader.propTypes = {
    headerText: PropTypes.string,
};
