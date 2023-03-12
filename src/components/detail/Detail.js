import { paste } from '@testing-library/user-event/dist/paste';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../assets/Card'
import { AiFillStar } from 'react-icons/ai'

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
            <div className="card-detail">
                <div className="detail-img">
                    <img src={product.cover} alt="" />
                </div>
                <div className='detail-list'>
                    <div className="product-title">
                        <p>{product.desc}</p>
                        <div className="card-rate">
                            <AiFillStar className='icon-star' />
                            <p>{product.rate}</p>
                        </div>
                    </div>
                    <div className='card-info'>
                        <p className='product-price'>{product.price}</p>
                        <hr />
                        <div className='card-category'>
                            <h3>Categories: <span className='span-title'>{product.title}</span></h3>
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur. Enim vulputate ac sagittis ultricies. Vitae et viverra nisl egestas amet eget non donec varius. Nisl blandit varius ac congue neque. Dolor molestie platea nunc sagittis aenean. Cras eget diam id eu in platea. Sagittis libero aliquet tortor mauris proin dictum egestas ornare. Ornare neque nam venenatis pellentesque sed massa facilisis tempor. Tellus ultricies nam vitae nunc facilisis cursus egestas. Sit aliquet eros mauris quis mauris congue.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='count-container'>
                    <div className='total'>
                        <h3>Count</h3>
                        <div className='count'>
                            <button>-</button>
                            <input type="text" value='0' className='value' />
                            <button>+</button>
                        </div>
                    </div>
                    <div className='total'>
                        <h3>Subtotal</h3>
                        <p>{product.price}</p>
                    </div>
                    <div className='cart'>
                        <button>+ Add to Cart</button>
                    </div>
                    <div className='buy'>
                        <button>Buy</button>
                    </div>
                </div>

            </div>

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