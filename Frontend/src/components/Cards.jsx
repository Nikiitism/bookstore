import React from 'react';

function Cards({ item }) {
    return (
        <div className='mt-4 my-3 p-3'>
            <div className="card w-92 max-h-160 h-160 p-3 shadow-xl hover:scale-105 duration-200">
                <figure>
                    <img src={item.image} alt={item.name} />
                </figure>
                <div className="card-body">
                    <div className="flex flex-col">
                        {/* Title and category will align on the same line if there's enough space */}
                        <div className="flex flex-wrap items-center justify-between">
                            <h2 className="card-title text-xl font-bold">
                                {item.name}
                            </h2>
                            <div className="badge badge-secondary mt-2 lg:mt-0 lg:ml-4">
                                {item.category}
                            </div>
                        </div>
                        <p className='mt-2'></p>
                        <div className="card-actions mt-4 flex flex-col lg:flex-row lg:justify-between">
                            <div className="badge badge-outline">${item.price}</div>
                            <div className="cursor-pointer hover:bg-pink-500 px-2 py-1 rounded-full border-[2px] hover:text-white duration-200 mt-2 lg:mt-0">
                                Buy Now!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;



