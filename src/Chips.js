import React from 'react'
import { Link } from 'react-router-dom'
const IMAGE_LINK =(
    'https://media.tenor.com/7XENYaoT6R4AAAAC/lays-chips-potato-chips.gif'
)
const Chips = () => {
    return (
        <>
            <div style={
                {marginTop: '10rem'}
            }>
                decent chips
            </div>
            <div style={
                {marginTop: '10rem'}
            }>
                <img alt='chips gif' src={IMAGE_LINK}/>
            </div>
            <div style={
                {marginTop: '10rem'}
            }>
                <Link to="/" className='link'>Back</Link>
            </div>
        </>
    )
}

export default Chips