import { paste } from '@testing-library/user-event/dist/paste';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../assets/Card'

const Detail = () => {
    // return (
    //     <div className="all-products">
    //         <div className="card-container">
    //             <div className="card-img">
    //                 <img src="https://editorial.femaledaily.com/wp-content/uploads/2022/07/skintific-6.png" alt="" />
    //             </div>
    //             <div className="card-title">
    //                 <h3>Skincare</h3>
    //             </div>
    //             <div className="card-desc">
    //                 <p>Xxxxx</p>
    //             </div>
    //             <div>
    //                 <div className="card-price">
    //                     <p>Rp X.xxx</p>
    //                 </div>
    //                 <div className="card-rate">
    //                     <p>5</p>
    //                 </div></div>
    //         </div>

    //     </div>)



    const { id } = useParams();
    const [product, setProduct] = useState({ id: null, title: null, cover: null, category: null, desc: null, price: null, rate: null })
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // const getProduct = async () => {
        //     const response = await fetch(`/${id}`)
        //     setProduct(await response.json())

        //     setLoading(false)
        // }
        // getProduct()

        // console.log('id: ', id);
        console.log(typeof parseInt(id));

        const item = Card.filter((i) => i.id == id)
        setProduct(...item);
        setLoading(false)
        console.log(item[0]);
        console.log(product);
        // Card.find((item) => item.id === id)
    }, [product]);

    const Loading = () => {
        return (
            <>
                Loading.....
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
                <div className='show-detail'>
                    {/* <img src={product.cover} alt={product.title} /> */}
                </div>
            </>
        )
    }

    const Show = (<>
        <div className='show-detail'>
            {/* <img src={product.cover} alt={product.title} /> */}
        </div>
    </>)

    return (
        <div>
            <div className='detail-container'>
                <div className='row'>
                    {loading ? <Loading /> : Show}
                </div>

            </div>
        </div>
    )
}

export default Detail