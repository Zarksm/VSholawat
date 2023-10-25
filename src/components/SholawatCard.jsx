import React from 'react';
import { Link } from 'react-router-dom';

function SholawatCard({ id, title }) {
    return (
        <div className='py-2'>
            <Link to={`/${id}`} >

                <div
                    className="p-5 rounded-md bg-secondary shadow-lg cursor-pointer relative border-2 border-transparent hover:border-greenl hover:bg-transparent hover:border-2 transition-all duration-500">
                    {/* Overlay */}
                    {/* <div className="absolute inset-0 bg-secondary opacity-30"></div> */}

                    {/* Content */}
                    <div className="relative z-10">
                        <h1 className='font-medium text-lg font-Quisand text-white'>{title}</h1>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default SholawatCard;