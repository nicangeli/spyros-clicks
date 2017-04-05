import React from 'react'

const handleClick = (e) => {
    e.preventDefault()
    // i do absolutely jack shit
}

const StillPrettySimpleClickHandler = (props) => (
    <button onClick={handleClick}>
        I got fucking clicked
    </button>
)

export default StillPrettySimpleClickHandler