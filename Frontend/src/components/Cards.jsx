import React from 'react';

function Cards({ item }) {
    return (
        <div className='mt-4 my-3 p-3'>
            <div className="card w-92 max-h-160 h-160 p-3  shadow-xl hover:scale-105 duration-200">
                <figure>
                    <img src={item.image} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item.name}
                        <div className="badge badge-secondary">{item.category}</div>
                    </h2>
                    <p></p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">${item.price}</div>
                        <div className="cursor-pointer hover:bg-pink-500 px-2 py-1 rounded-full border-[2px] hover:text-white duration:200">Buy Now!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Cards; // Default export
