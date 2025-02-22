import React from 'react'

const Loader = (props) => {

  return (
    <div ref={props.loaderEl} id='preloader'>
    <div className="line">
    </div>
  </div>
  )
}

export default Loader