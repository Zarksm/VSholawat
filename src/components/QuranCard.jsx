import React from 'react';
import { Link } from 'react-router-dom';

function QuranCard({ item }) {
    return (
        <div>
            <Link to={`/surah/${item.nomor}`} >
                <div
                    className="w-[330px] h-[130px] p-5 bg-primary rounded-md shadow-lg cursor-pointer relative  border-2 border-transparent hover:border-greenl transition-all duration-500">
                    {/* Overlay */}
                    {/* <div className="absolute inset-0 bg-primary opacity-90"></div> */}

                    {/* Content */}
                    <div className="relative z-10">
                        <p className="font-bold font-Quisand text-lmode text-white">{`${item.nomor}. ${item.namaLatin}`}</p>
                        <p className="text-3xl font-Sche text-white text-right">{item.nama}</p>
                        <p className="font-normal font-Quisand text-sm text-white text-right mt-2">{`${item.tempatTurun} | ${item.arti}`}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default QuranCard;
