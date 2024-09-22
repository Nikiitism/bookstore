import React, { useEffect, useState } from 'react';
// import list from "../../public/list.json"; // Fixed typo
import Cards from "../components/Cards";
import { Link } from "react-router-dom"
import axios from "axios"

function Course() {
  const [book,setBook]= useState([]);
  useEffect(()=>{
    const getBook = async()=>{
      try{
       const res = await axios.get("http://localhost:4001/book");
       console.log(res.data)
       setBook(res.data)
      }
      catch(error){
        console.log(error)
      }
    };
    getBook();
  },[]);
  return (
    <>
      <div className='max-w-screen-2xl  container mx-auto md:px-20 z-50 px-4 '>
        <div className='pt-28 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl pt-3'>
            We're delighted to have you <span className='text-pink-500 '>Here! :)</span>
          </h1>
          <p className='mt-12'>
          Explore a diverse collection of books across genres like fiction, non-fiction, fantasy, mystery, and romance. Each title offers a unique journey, inviting you to discover new worlds and ideas. From heartwarming stories to thrilling mysteries, there's something for every mood. Find captivating prose from renowned authors or hidden gems from new voices. Whether you seek insightful non-fiction or epic fantasy, your next great read is just a click away. Revisit beloved favorites or uncover inspiring new tales—all ready for you to explore!
          </p>
          <Link to="/">
          <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
            Back
          </button>
          </Link>
        </div>
        <div className='mt-12 grid-cols-1 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2'>  
          {
            book.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Course; 