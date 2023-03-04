import React from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
import Filter from './Filter'
import PaginationButton from './PaginationButton'

const AllProducts = () => {
    const card = [
        {
            id: 1,
            title: "face & skin care",
            cover: "https://editorial.femaledaily.com/wp-content/uploads/2022/07/skintific-6.png",
            category: "skincare",
            desc: "Xxxxxxxxx",
            price: "Rp x.xxx",
            rate: " x.x"
        },
        {
            id: 2,
            title: "baby care",
            cover: "https://editorial.femaledaily.com/wp-content/uploads/2022/07/skintific-6.png",
            category: "skincare",
            desc: "Xxxxxxxxx",
            price: "Rp x.xxx",
            rate: " x.x"
        },
        {
            id: 3,
            title: "beauty care",
            cover: "https://editorial.femaledaily.com/wp-content/uploads/2022/07/skintific-6.png",
            category: "skincare",
            desc: "Xxxxxxxxx",
            price: "Rp x.xxx",
            rate: " x.x"
        },
        {
            id: 4,
            title: "contraceptive",
            cover: "https://editorial.femaledaily.com/wp-content/uploads/2022/07/skintific-6.png",
            category: "skincare",
            desc: "Xxxxxxxxx",
            price: "Rp x.xxx",
            rate: " x.x"
        },
        {
            id: 5,
            title: "feminine hygiene",
            cover: "https://editorial.femaledaily.com/wp-content/uploads/2022/07/skintific-6.png",
            category: "skincare",
            desc: "Xxxxxxxxx",
            price: "Rp x.xxx",
            rate: " x.x"
        },
        {
            id: 6,
            title: "health & protein",
            cover: "https://editorial.femaledaily.com/wp-content/uploads/2022/07/skintific-6.png",
            category: "skincare",
            desc: "Xxxxxxxxx",
            price: "Rp x.xxx",
            rate: " x.x"
        },
        {
            id: 7,
            title: "health & wellness",
            cover: "https://editorial.femaledaily.com/wp-content/uploads/2022/07/skintific-6.png",
            category: "skincare",
            desc: "Xxxxxxxxx",
            price: "Rp x.xxx",
            rate: " x.x"
        },
    ]
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
                    {card.map((slide, i) => (

                        <NavLink to='/detail' className="card-container">
                            <div className="card-img">
                                <img src={slide.cover} alt="" />
                            </div>
                            <div className="card-title">
                                <h3>{slide.title}</h3>
                            </div>
                            <div className="card-desc">
                                <p>{slide.desc}</p>
                            </div>
                            <div>
                                <div className="card-price">
                                    <p>{slide.price}</p>
                                </div>
                                <div className="card-rate">
                                    <p>{slide.rate}</p>
                                </div></div>
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