import React, { useEffect, useState } from 'react';
import { getQuran } from '../API/Api';
import { FaSearch } from 'react-icons/fa';
import logo from '../assets/logo1.svg';
import heroImg from '../assets/mosque.png';
import QuranCard from '../components/QuranCard';
import BackToTop from '../components/BackToTop';

const Quran = () => {
    const [quranData, setQuranData] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [filteredQuranData, setFilteredQuranData] = useState([]);

    useEffect(() => {
        getQuran().then((result) => {
            setQuranData(result);
            setFilteredQuranData(result);
        });
    }, []);

    const handleSearchInputChange = (event) => {
        const searchText = event.target.value.toLowerCase();
        setSearchInput(searchText);

        const regex = new RegExp(searchText.split(' ').join('.*'));

        const filteredData = quranData.filter(({ namaLatin }) => {
            const cleanNamaLatin = namaLatin.replace(/-/g, '').toLowerCase();
            return (
                cleanNamaLatin.includes(searchText.replace(/-/g, '').toLowerCase()) ||
                regex.test(cleanNamaLatin)
            );
        });

        setFilteredQuranData(filteredData);
    };

    return (
        <div className='w-full min-h-screen md:px-5 py-10 overflow-x-hidden flex flex-col items-center no-scrollbar'>
            {/* <img src={heroImg} alt='' className='absolute mr-[64rem] mt-[5rem]' width={600} /> */}
            <div className='flex justify-center'>
                <img src={logo} alt='My Logo' width={200} className='colored-svg' />
            </div>

            <div className='flex items-center rounded bg-primary mt-10 w-[330px] md:w-[400px] z-10'>
                <input
                    type='text'
                    placeholder='Cari surat ...'
                    className='w-full p-2 bg-transparent outline-none text-white'
                    value={searchInput}
                    onChange={handleSearchInputChange}
                />
                <div className='p-2 bg-primary'>
                    <FaSearch className='text-gray-400' />
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                {filteredQuranData.map((item) => (
                    <QuranCard key={item.nomor} item={item} />
                ))}
            </div>

            {/* Place BackToTop component here */}
            <BackToTop />
        </div>
    );
};

export default Quran;
