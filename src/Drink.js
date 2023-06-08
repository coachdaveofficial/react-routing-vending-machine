import React from 'react'
import { Link } from 'react-router-dom'
const IMAGE_LINK = (
    'https://thumbs.gfycat.com/BewitchedAgreeableCricket-max-1mb.gif'
)
const Drink = () => {
    return (
        <>
            <div style={
                {marginTop: '10rem'}
            }>
                lol delicious!
            </div>
            <div style={
                {marginTop: '10rem'}
            }>
                <img alt='soda gif' src={IMAGE_LINK} style={{height: '30rem'}}/>
            </div>
            <div style={
                {marginTop: '10rem'}
            }>
                <Link to="/" className='link'>Back</Link>
            </div>
        </>

    )
}

export default Drink;