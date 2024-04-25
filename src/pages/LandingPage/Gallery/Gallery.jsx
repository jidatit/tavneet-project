import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../../../assets/b1.jpg"
import img2 from "../../../assets/b2.jpg"

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className=" absolute top-[50%] right-[0px] sm:right-[-25px] cursor-pointer px-1 z-[20]"
            onClick={onClick}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="max-w-[24px] md:max-w-[40px] w-full h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className=" absolute top-[50%] left-[0px] sm:left-[-25px] cursor-pointer px-1 z-[20]"
            onClick={onClick}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="max-w-[24px] md:max-w-[40px] w-full h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
        </div>
    );
}

function Gallery() {

    var settings = {
        infinite: true,
        autoplay: false,
        speed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0
                }
            }
        ],
    };

    return (
        <div className="w-full flex flex-col justify-center items-center mt-[20px] mb-[20px]">
            <div className="slider-container w-full !max-w-[360px] sm:!max-w-[360px] md:!max-w-[700px] lg:!max-w-[1000px] xl:!max-w-[1140px]">
                <Slider {...settings}>
                    <div>
                        <img className="h-full w-full object-cover" src={img1} alt="" />
                    </div>
                    <div className=" h-full xl:min-h-[390px] lg:min-h-[300px] md:min-h-[240px] min-h-[210px] !flex justify-center items-center ">
                        <video
                            id="segments-video"
                            className={`w-full min-h-full object-cover my-auto `}
                            src="\1.mp4"
                            type="video/mp4"
                            muted
                            playsInline
                            autoPlay
                            loop
                        />
                    </div>
                    <div>
                        <img className="h-full w-full object-cover" src={img2} alt="" />
                    </div>
                    <div>
                        <img className="h-full w-full object-cover" src={img1} alt="" />
                    </div>
                    <div>
                        <img className="h-full w-full object-cover" src={img2} alt="" />
                    </div>
                    <div className=" h-full xl:min-h-[390px] lg:min-h-[300px] md:min-h-[240px] min-h-[210px] !flex justify-center items-center ">
                        <video
                            id="segments-video"
                            className={`w-full min-h-full object-cover my-auto `}
                            src="\2.mp4"
                            type="video/mp4"
                            muted
                            playsInline
                            autoPlay
                            loop
                        />
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Gallery;
