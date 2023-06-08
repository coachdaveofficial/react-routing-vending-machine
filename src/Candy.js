import React from 'react'
import {Link} from 'react-router-dom'
const IMAGE_LINK = (
    'https://i.gifer.com/Vsev.gif'
)
const Candy = () => {
    return (
        <>
            <div style={
                {marginTop: '10rem'}
            }>
                best candy
            </div>
            <div style={
                {marginTop: '10rem'}
            }>
                <img alt='candy gif' src={IMAGE_LINK}/>
            </div>
            <div style={
                {marginTop: '10rem'}
            }>
                <Link to="/" className='link'>Back</Link>
            </div>
        </>
    )
}

export default Candy