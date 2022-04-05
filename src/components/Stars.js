import React from 'react'
import PropTypes from 'prop-types'
import Star from './Star';

function Stars({ count }) {
    if (count < 1 || count > 5 || typeof count !== "number") {
        return null;
    }

    const stars = [];
    for (let i = 0; i < count; i += 1) {
        stars.push(i)
    }

  return (
      <ul className="card-body-stars u-clearfix">
        {stars.map((star) => (
            <Star key={star} />
        ))}
      </ul>
  )
}

Stars.defaultProps = {
    count: 0
}

Stars.propTypes = {
    count: PropTypes.number
}

export default Stars
