import React from 'react'
import { darkModeStyle } from './inlineStyles'

const Loader = (props) => {

  return (
    <div ref={props.loaderEl} id='preloader'>
    <div className="line">
    </div>
  </div>
  )
}

export default Loader