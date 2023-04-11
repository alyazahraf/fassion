import React from 'react'
import Login from '../authentication/Login'
import Register from '../authentication/Register'
import Categories from '../categories/Categories'
import Slider from '../slider/Slider'

const Home = (props) => {

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