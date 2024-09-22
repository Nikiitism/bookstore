import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import list from "../../public/list.json";
import axios from "axios"

import Cards from './Cards';


export default function Freebook() {
     
    const [book,setBook]= useState([]);
    useEffect(()=>{
      const getBook = async()=>{
        try{
         const res = await axios.get("http://localhost:4001/book");
         setBook(res.data.filter((data) => data.category === "Free"))
         console.log(data)
        }
        catch(error){
          console.log(error)
        }
      };
      getBook();
    },[]);
    // const filterData = list.filter((data) => data.category === "Free");

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">

            <div>
                <h1 className='font-bold text-xl pb-2'>Free Offered Courses</h1>
                <p>Discover a world of knowledge with our extensive collection of free books, available for you to explore across countless topics and genres. Start your learning journey today, and broaden your horizons—all at no cost!</p>
            </div>

            <div className="slider-container hover:" >
                <Slider {...settings}>
                    {book.map((item) => (
                        <Cards item={item} key={item.id} />
                    ))}
                </Slider>
            </div>


        </div>
    );
}
