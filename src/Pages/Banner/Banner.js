// import React from 'react';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Banner.css";

// import required modules
import { Pagination } from "swiper";


const Banner = () => {
    return (
        <div className='p-10 lg:flex justify-between gap-5 w-full'>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper lg:w-2/4 static"
            >
                <SwiperSlide><img className="lg:h-[50vh] w-full" src="https://thedailynewnation.com/library/1557160707_2.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className="lg:h-[50vh] w-full" src="https://upload.wikimedia.org/wikipedia/commons/d/dc/St_Gregory%27s_School_%28Dhaka%29007.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className="lg:h-[50vh] w-full" src="https://roverscouts.daffodilvarsity.edu.bd/template/images/social-share/social-cover.jpg" alt="" /></SwiperSlide>
            </Swiper>
            <section className="w-2/4">
                <div tabIndex={0} className="collapse collapse-plus border border-orange-500  rounded">
                    <div className="collapse-title text-xl font-medium">
                        Focus me to see content
                    </div>
                    <div className="collapse-content">
                        <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus border border-orange-500  rounded">
                    <div className="collapse-title text-xl font-medium">
                        Focus me to see content
                    </div>
                    <div className="collapse-content">
                        <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus border border-orange-500  rounded">
                    <div className="collapse-title text-xl font-medium">
                        Focus me to see content
                    </div>
                    <div className="collapse-content">
                        <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus border border-orange-500  rounded">
                    <div className="collapse-title text-xl font-medium">
                        Focus me to see content
                    </div>
                    <div className="collapse-content">
                        <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus border border-orange-500  rounded">
                    <div className="collapse-title text-xl font-medium">
                        Focus me to see content
                    </div>
                    <div className="collapse-content">
                        <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;