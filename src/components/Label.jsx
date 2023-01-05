import React from 'react'
function Label(props) {
  return (
    <div className="search">
    <input
      value={props.location}
      onChange={event => props.setLocation(event.target.value)}
      onKeyDown={props.searchLocation}
      placeholder='Enter Location'
      type="text" />
  </div>
  )
}

export default Label