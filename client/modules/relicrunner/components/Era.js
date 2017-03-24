import React, { PropTypes } from 'react'

const Era = ({ era }) => (
  <img src=`/static/era/${era}.png`></img>
)

Era.propTypes = {
  era: PropTypes.string.isRequired
}

export default Era
