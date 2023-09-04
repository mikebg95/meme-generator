import React, { useState } from 'react'
import data from '../memesData'
import Meme from './Meme'

const Content = () => {
    const [meme, setMeme] = useState({
        imgSource: "http://i.imgflip.com/1bij.jpg",
        topText: "",
        bottomText: ""
    })

    function setRandomMeme(event) {
        event.preventDefault()

        const memesArray = data.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const memeUrl = memesArray[randomNumber].url;

        setMeme(prevMeme => ({
            ...meme,
            imgSource: memeUrl
        }))
    }

    function handleChange(event) {
        const { type, name, value } = event.target

        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <div className="Content">
            <form onSubmit={setRandomMeme}>
                <div className="inputs">
                    <input
                        type="text"
                        name="topText"
                        placeholder="Top Text" 
                        onChange={handleChange}
                        value={meme.topText}    
                    />

                    <input
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        onChange={handleChange}
                        value={meme.bottomText}    
                    />
                </div>

                <button onClick={setRandomMeme}>
                    <span>Get a new meme image  🖼</span>
                </button>
            </form>

            <Meme 
                topText={meme.topText}
                bottomText={meme.bottomText}
                imgSource={meme.imgSource}
            />
        </div>
    )
}

export default Content
