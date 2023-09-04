import React from 'react'

const Meme = ({ topText, bottomText, imgSource }) => {
  return (
    <div className="Meme">
        <h1 className="top-text">{topText}</h1>
        <h1 className="bottom-text">{bottomText}</h1>
        <img src={imgSource} />
    </div>
  )
}

export default Meme
