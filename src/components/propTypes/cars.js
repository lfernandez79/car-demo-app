// Cars prop types

import PropTypes from "prop-types";

// defined car propType object with certing set of properties using shape
export const carPropType = PropTypes.shape({
    id: PropTypes.number,
    make: PropTypes.string,
    model: PropTypes.string,
    year: PropTypes.number,
    color: PropTypes.string,
    price: PropTypes.number,
});

// defined propTypes for array of cars, getting an array of something with certing properties
export const carsPropType = PropTypes.arrayOf(carPropType);  
