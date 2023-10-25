import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

function App() {
    const [isAnimated, setIsAnimated] = useState(true);
    const swiperRef = useRef(null);

    useEffect(() => {
        // Initialize Swiper
        const swiperInstance = swiperRef.current.swiper;

        swiperInstance.on('slideChangeTransitionStart', () => {
            // When the slide transition starts, set opacity to 0
            setIsAnimated(false);
        });

        swiperInstance.on('slideChangeTransitionEnd', () => {
            // After a delay, set opacity to 1
            setTimeout(() => {
                setIsAnimated(true);
            }, 1000); // Adjust the delay (in milliseconds) as needed
        });
    }, []);

    return (
        <Swiper
            ref={swiperRef}
            spaceBetween={30}
            effect={'fade'}
            navigation={true}
            pagination={{
                clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className="relative">
                    <p
                        className={`absolute text-5xl font-Quicksand text-black transition-opacity mt-0 ${isAnimated ? 'opacity-100 mt-52' : 'opacity-0 mt-0'
                            }`}
                    >
                        tes
                    </p>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Nature" />
                </div>
            </SwiperSlide>
            {/* Add more slides here */}
            <SwiperSlide>
                <div className="relative">
                    <p
                        className={`absolute text-5xl font-Quicksand text-black transition-opacity ${isAnimated ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        tes
                    </p>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Nature" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative">
                    <p
                        className={`absolute text-5xl font-Quicksand text-black transition-opacity ${isAnimated ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        tes
                    </p>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="Nature" />
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

export default App;
