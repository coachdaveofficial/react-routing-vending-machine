import React from 'react'
import {Link} from 'react-router-dom'

const IMAGE_LINK = (
    'https://media.istockphoto.com/id/1157797418/vector/cute-cartoon-vending-machine.jpg?s=612x612&w=0&k=20&c=kcPJGbplB-1owJfFKgBFGZLzZjF_YN1AZrPNqhyWa6E='
    )

const Home = () => {
    return (
        <>

                <div className='vending-machine-desc'>
                    <p>
                        This is a vending machine!
                    </p>
                </div>
                <div className='vending-machine-img'>
                    <img src={IMAGE_LINK} alt='vending machine'/>
                </div>
                

                <div className='food-container'>
                    <p><Link to="/drink" className='link'>drinks</Link></p>
                    <p><Link to="/chips" className='link'>chips</Link></p>
                    <p><Link to="/candy" className='link'>candy</Link></p>
                </div>

        </>
    )
}

export default Home