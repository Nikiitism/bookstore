import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Freebook from "../components/Freebook";
import list from "../../public/list.json"; // Fixed typo
import Cards from "../components/Cards"; // Import Cards component
import { Link } from "react-router-dom"

function Course() {
  return (
    <>
      <div className='max-w-screen-2xl  container mx-auto md:px-20 z-50 px-4 '>
        <div className='pt-28 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl pt-3'>
            We're delighted to have you <span className='text-pink-500 '>Here! :)</span>
          </h1>
          <p className='mt-12'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam expedita tempore voluptatibus voluptates cumque molestias officia dolor, fuga totam delectus, blanditiis nisi harum necessitatibus rem quae minus impedit. Dolorum, beatae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae laborum commodi magni saepe laboriosam atque qui, veritatis non provident unde assumenda, nihil delectus rerum optio cupiditate exercitationem minus nam deleniti.
          </p>
          <Link to="/">
          <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
            Back
          </button>
          </Link>
        </div>
        <div className='mt-12 grid-cols-1 grid md:grid-cols-4 '>  
          {
            list.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Course;
