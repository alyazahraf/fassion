import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Card from '../assets/Card';

const Slider = () => {
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
        <div className='card'>
            <h1 className='title'>Latest Products</h1>
            <div >
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={5}
                    slidesPerGroup
                    navigation
                    loop={true} x
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <div className='swiper-container'>
                        {Card.map((slide, i) => (
                            <SwiperSlide>
                                <div className="card-container">
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

                                </div>

                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            </div>
        </div>
    )
}


export default Slider;
