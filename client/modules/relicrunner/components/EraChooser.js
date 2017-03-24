import React, { PropTypes } from 'react'

const EraChooser = ({ era }) => (
  <div>
    <Era era="lith" />
    <Era era="meso" />
    <Era era="neo" />
    <Era era="axi" />
  </div>
)

EraChooser.propTypes = {
}

export default EraChooser
