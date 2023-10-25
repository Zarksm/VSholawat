import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { DoaList } from '../API/Data';
import DoaCard from '../components/DoaCard';

const Doa = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredDoaList = DoaList.filter(item => {
        return (
            item.doa.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.doaSingkat?.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    return (
        <div className='bg-transparent min-h-screen flex flex-col items-center'>
            <div className="pt-10 px-3 pb-4 w-[357px] md:w-[700px] relative">
                <div className="flex items-center rounded bg-primary">
                    <input
                        type="text"
                        placeholder="Cari doa ..."
                        className="w-full p-2 bg-transparent outline-none text-white"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="p-2 bg-primary">
                        <FaSearch className="text-gray-400" />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 py-4 px-4 md:px-16 lg:px-72 gap-2">
                {filteredDoaList.map((item) => (
                    <DoaCard key={item.id} {...item} />
                ))}
            </div>
        </div >
    );
};

export default Doa;
