import React, { useCallback, useEffect } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
import PaginationButton from './PaginationButton'
import Card from '../assets/Card'
import { AiFillStar } from 'react-icons/ai'
import { BiFilterAlt } from 'react-icons/bi'
import { useState } from 'react'
import axios from 'axios'

const AllProducts = () => {
    const category = [
        {
            catName: 'Shirts'
        },
        {
            catName: 'Pants'
        },
        {
            catName: 'Hats'
        },
        {
            catName: 'Shoes'
        },
    ]

    const dataRate = [
        {
            catRate: '5'
        },
        {
            catRate: '>4'
        },
        {
            catRate: '>3'
        },
        {
            catRate: '>2'
        },
        {
            catRate: '>1'
        }
    ]

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchProduct = useCallback(() => {
        setLoading(true)

        axios.get('http://127.0.0.1:8000/api/product')
            .then(result => {
                console.log(result.data)
                setData(result.data)
            })
            .catch(error => {
                console.log(error.response)
                setLoading(false)
            })
    }, []);

    useEffect(() => {
        fetchProduct()
    }, [fetchProduct])



    const [ShowFilter, setShowFilter] = useState(false);

    const toggleFilter = () => {
        setShowFilter((ShowFilter) => !ShowFilter)
        console.log(ShowFilter);
    }

    return (
        <div className="product-container">
            <div className="product-filter">
                <div className='flex justify-between'>
                    <div className='filter-button'>
                        <h1 className='title-filter'>Filter
                            {ShowFilter ? <BiFilterAlt className="icon-bars" onClick={toggleFilter} /> : <BiFilterAlt className="icon-bars" onClick={toggleFilter} />}
                        </h1>
                    </div>
                    <div className="data-product">
                        <div className="data-filter">
                            <input type="text" placeholder="Urutkan Berdasarkan" />
                            <RiArrowDropDownLine className="icon-profil" />
                        </div>
                    </div>
                </div>

                <div className='flex'>
                    <div className='filter-container'>
                        <div className={ShowFilter ? "filter-mobile" : "filter-icon"} onClick={() => setShowFilter(false)}>

                            <div className="filter-list" >
                                <h2 className='sub-filter'>Categories</h2>
                                <div>
                                    {
                                        category.map((value, index) => {
                                            return (
                                                <div className="filter-item" key={index}>
                                                    <label>
                                                        <input type="checkbox" className='check' />
                                                        {value.catName}
                                                    </label>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                            <div className='filter-list'>
                                <h2 className='sub-filter'>Harga</h2>
                                <div className='filter-price'>
                                    <h3 className='price'>Rp</h3>
                                    <input type="text" placeholder='Minimum' className='type' />
                                </div>

                                <div className='filter-price'>
                                    <h3 className='price'>Rp</h3>
                                    <input type="text" placeholder='Maximum' className='type' />
                                </div>
                            </div>

                            <div className='filter-list'>
                                <h2 className='sub-filter'>Rating</h2>
                                <div className='filter-rate'>
                                    {
                                        dataRate.map((value, index) => {
                                            return (
                                                <div className="filter-item" key={index}>
                                                    <label>
                                                        <input type="checkbox" className='check' />
                                                        {value.catRate}
                                                    </label>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div className="all-products">
                            {data.map((product) => (

                                <NavLink to={"/products/" + product.id} className="allproduct-container">
                                    <div className="card-img">
                                        <img src={product.thumbnail} alt="" />
                                    </div>
                                    <div className='card-list'>
                                        <div className="card-title">
                                            <div className='cate-title'>
                                                <h3>{product.name}</h3>
                                            </div>
                                            <p>{product.description}</p>
                                        </div>
                                        <div className='card-price'>
                                            <p>{product.price}</p>
                                            <div className="card-rate">
                                                <AiFillStar className='icon-star' />
                                                {/* <p>{slide.rate}</p> */}
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

            </div>
        </div >
    )

}

export default AllProducts