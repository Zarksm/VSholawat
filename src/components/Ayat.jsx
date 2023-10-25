import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getAyat } from '../API/Api';
import BackToTop from './BackToTop';

function Ayat() {
    const { surahId } = useParams();
    const [surahData, setSurahData] = useState({});

    useEffect(() => {
        getAyat(surahId).then((result) => {
            setSurahData(result);
        });
    }, [surahId]);


    return (
        <>
            <div className='w-full justify-center py-10 px-0 md:px-24 lg:px-52'>
                <div className='sticky top-0 shadow-xl p-5 bg-primary mb-4 text-white border-b-2 border-white z-30'>
                    <div className='flex justify-between'>
                        <Link to={`/Quran`}>
                            <span className='flex items-center text-[2rem] pl-2'><ion-icon name="arrow-back" className='text-2xl'></ion-icon></span>
                        </Link>
                        <p className='flex items-center'>Surat \ {surahData.namaLatin}</p>
                    </div>
                </div>

                <BackToTop />


                <div className='relative'>
                    <div className='bg-primary p-5 md:p-10 rounded-sm text-white relative z-20'>
                        <h2 className='text-center text-3xl md:text-[2.5rem] pt-5 pb-10 border-b font-Sche'>بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</h2>
                        {surahData.ayat &&
                            surahData.ayat.map((ayah) => (
                                <div key={ayah.nomorAyat}>
                                    <p className='pt-3 text-gray-400'>{`${surahData.nomor} : ${ayah.nomorAyat}`}</p>
                                    <p className='text-right py-10 text-2xl md:text-3xl font-Sche leading-loose'>{ayah.teksArab}</p>
                                    <p className='font-Quisand border-b py-2 text-sm'>{ayah.teksLatin}</p>
                                    <p className='font-Quisand py-2 text-gray-300 text-xs'>{ayah.teksIndonesia}</p>
                                </div>
                            ))}
                    </div>
                </div>
            </div >
        </>
    );
}

export default Ayat;
