import React from 'react'
import Categories from '../categories/Categories'
import Slider from '../slider/Slider'

const Home = () => {
    return (
        <main>
            <div className='home'>
                <div className="home-container">
                    <div className='logo-img'>
                        <img src="fassion.jpg"></img>
                    </div>
                    <Categories />
                    <Slider />
                </div>
            </div>
        </main>
    )
}

export default Home