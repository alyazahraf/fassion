import React from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
import Filter from './Filter'
import PaginationButton from './PaginationButton'
import Card from '../assets/Card'
import { AiFillStar } from 'react-icons/ai'

const AllProducts = () => {
    // const card = [
    //     {
    //         id: 1,
    //         title: "face & skin care",
    //         cover: "https://editorial.femaledaily.com/wp-content/uploads/2022/07/skintific-6.png",
    //         category: "skincare",
    //         desc: "Xxxxxxxxx",
    //         price: "Rp x.xxx",
    //         rate: " x.x"
    //     },
    //     {
    //         id: 2,
    //         title: "baby care",
    //         cover: "https://editorial.femaledaily.com/wp-content/uploads/2022/07/skintific-6.png",
    //         category: "skincare",
    //         desc: "Xxxxxxxxx",
    //         price: "Rp x.xxx",
    //         rate: " x.x"
    //     },
    //     {
    //         id: 3,
    //         title: "beauty care",
    //         cover: "https://editorial.femaledaily.com/wp-content/uploads/2022/07/skintific-6.png",
    //         category: "skincare",
    //         desc: "Xxxxxxxxx",
    //         price: "Rp x.xxx",
    //         rate: " x.x"
    //     },
    //     {
    //         id: 4,
    //         title: "contraceptive",
    //         cover: "https://editorial.femaledaily.com/wp-content/uploads/2022/07/skintific-6.png",
    //         category: "skincare",
    //         desc: "Xxxxxxxxx",
    //         price: "Rp x.xxx",
    //         rate: " x.x"
    //     },
    //     {
    //         id: 5,
    //         title: "feminine hygiene",
    //         cover: "https://editorial.femaledaily.com/wp-content/uploads/2022/07/skintific-6.png",
    //         category: "skincare",
    //         desc: "Xxxxxxxxx",
    //         price: "Rp x.xxx",
    //         rate: " x.x"
    //     },
    //     {
    //         id: 6,
    //         title: "health & protein",
    //         cover: "https://editorial.femaledaily.com/wp-content/uploads/2022/07/skintific-6.png",
    //         category: "skincare",
    //         desc: "Xxxxxxxxx",
    //         price: "Rp x.xxx",
    //         rate: " x.x"
    //     },
    //     {
    //         id: 7,
    //         title: "health & wellness",
    //         cover: "https://editorial.femaledaily.com/wp-content/uploads/2022/07/skintific-6.png",
    //         category: "skincare",
    //         desc: "Xxxxxxxxx",
    //         price: "Rp x.xxx",
    //         rate: " x.x"
    //     },
    // ]
    return (
        <div className="product-container">
            <div className="product-filter">
                <Filter />
            </div>


            <div className="data-product">
                <div className="data-filter">
                    <input type="text" placeholder="Urutkan Berdasarkan" />
                    <RiArrowDropDownLine className="icon-drop" />
                </div>


                <div className="all-products">
                    {Card.map((slide, i) => (

                        <NavLink to={"/products/" + slide.id} className="card-container">
                            <div className="card-img">
                                <img src={slide.cover} alt="" />
                            </div>
                            <div className='card-list'>
                                <div className="card-title">
                                    <div className='cate-title'>
                                        <h3>{slide.title}</h3>
                                    </div>
                                    <p>{slide.desc}</p>
                                </div>
                                <div className='card-price'>
                                    <p>{slide.price}</p>
                                    <div className="card-rate">
                                        <AiFillStar className='icon-star' />
                                        <p>{slide.rate}</p>
                                    </div>
                                </div>
                            </div>

                        </NavLink>
                    )
                    )}

                </div>
                <PaginationButton />

            </div>
        </div>
    )

}

export default AllProducts