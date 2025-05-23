"use client";

import {useEffect, useRef, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectFade, Navigation, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import {fetchBanners} from "@/utils/api-utils";
// import {homePageBannersData} from "@/data/slider";

export default function HomepageSlides() {
    const swiperRef = useRef(null);
    const [banners, setBanners] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadBanners() {
            try {
                setLoading(true);
                const data = await fetchBanners();
                if (data) {
                    setBanners(data);
                }
            } catch (err) {
                console.error("Error loading banners:", err);
                setError("Failed to load banner content");
            } finally {
                setLoading(false);
            }
        }

        loadBanners();
    }, []);

    if (loading) {
        return (
            <div className="slider-wrapper position-relative">
                <div className="loading-container text-center py-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        );
    }

    if (error || !banners || banners.length === 0) {
        return (
            <div className="slider-wrapper position-relative">
                <div className="alert alert-warning text-center py-5" role="alert">
                    {error || "No banner content available"}
                </div>
            </div>
        );
    }

    return (
        <div className="slider-wrapper position-relative">
            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                slidesPerView={1}
                loop={true}
                autoplay={{delay: 3000, disableOnInteraction: false}}
                effect="fade"
                breakpoints={{
                    0: {slidesPerView: 1},
                    600: {slidesPerView: 1},
                    768: {slidesPerView: 1},
                    1100: {slidesPerView: 1},
                }}
                className="homepage-slides"
            >
                {banners.map((banner) => (
                    <SwiperSlide key={banner.id} className="single-slide-item">
                        <div
                            className="slider-bg bg-cover"
                            style={{
                                backgroundImage: `url(${banner.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                height: "500px",
                            }}
                        ></div>

                        <div className="project-dtl-wrap float-end end-0">
                            <div className="project-dtl-info dark-bg">
                                <div className="project-title">
                                    <h6>Latest Project</h6>
                                    <h2 className="text-white">{banner.project_name}</h2>
                                    <p>{banner.completed_title}</p>
                                </div>
                                <div className="project-info-wrap">
                                    <div className="row gx-0">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="single-project-info">
                                                <p>Location</p>
                                                <h6>{banner.address}</h6>
                                            </div>
                                            <div className="single-project-info">
                                                <p>Price</p>
                                                <h6>${banner.price}</h6>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="single-project-info">
                                                <p>Theme & Style</p>
                                                <h6>{banner.theme_style}</h6>
                                            </div>
                                            <div className="single-project-info">
                                                <p>Architect</p>
                                                <h6>{banner.architect}</h6>
                                            </div>
                                        </div>

                                        {/* ✅ Next & Prev Buttons */}
                                        <div className="owl-nav">
                                            <button
                                                type="button"
                                                role="presentation"
                                                className="owl-prev"
                                                onClick={() => swiperRef.current?.slidePrev()}
                                            >
                                                <i className="las la-arrow-left"></i>
                                            </button>
                                            <button
                                                type="button"
                                                role="presentation"
                                                className="owl-next"
                                                onClick={() => swiperRef.current?.slideNext()}
                                            >
                                                <i className="las la-arrow-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
