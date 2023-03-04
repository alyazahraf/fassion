import React from 'react'

const Filter = () => {
    const data = [
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
        }]
    return (
        <div className='filter-container'>
            <h1 className='title-filter'>Filter</h1>
            <div className='filter'>

                <div className='filter-list'>
                    <h2 className='sub-filter'>Categories</h2>
                    <div>
                        {
                            data.map((value, index) => {
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
    )
}

export default Filter;
