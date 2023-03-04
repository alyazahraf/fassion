import React from 'react'
import { FaTshirt, FaRedhat } from 'react-icons/fa'
import { GiTrousers, GiRunningShoe } from 'react-icons/gi'

const Categories = () => {
    const data = [
        {
            cateIcon: <FaTshirt />,
            cateName: 'Shirts'
        },
        {
            cateIcon: <GiTrousers />,
            cateName: 'Pants'
        },
        {
            cateIcon: <FaRedhat />,
            cateName: 'Hats'
        },
        {
            cateIcon: <GiRunningShoe />,
            cateName: 'Shoes'
        }]

    return (
        <div className='category'>
            <h1 className='title'>Categories</h1>
            <div className='category-grid'>
                {
                    data.map((value, index) => {
                        return (
                            <div className="category-item" key={index}>
                                <div className='cateicon'>{value.cateIcon} </div>
                                <h1 className='catename'>{value.cateName}</h1>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Categories;
