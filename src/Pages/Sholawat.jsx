import React from "react";
import { SholawatLyric } from "../API/Sholawat";
import SholawatCard from "../components/SholawatCard";

const Sholawat = () => {
  return (
    <div className="w-full h-[41rem] px-5 lg:px-52 overflow-x-hidden mt-5 pb-28">
      <h2 className="text-center text-white font-Sche text-lg md:text-3xl pt-8">
        اَللَّهُمَّ صَلِّ عَلٰى سَيِّدِنَا مُحَمَّدٍ وَعَلٰى آلِ سَيِّدِنَا
        مُحَمَّدٍ
      </h2>
      <h2 className="pt-10 text-white text-md md:text-3xl text-center">
        Rasulullah bersabda: “Orang yang paling dekat denganku pada hari kiamat
        adalah yang paling banyak bersholawat kepadaku".
      </h2>
      <p className="pb-10 pt-4 text-white text-center md:text-xl">
        [HR. At-Tirmidzi]
      </p>
      <div className="bg-primary p-5 shadow-xl">
        <h1 className="font-bold text-3xl text-white mb-5 font-Quisand">
          Kumpulan Lirik Sholawat
        </h1>

        <div className="flex flex-col flex-wrap md:flex-row gap-1 md:gap-5 justify-center">
          {SholawatLyric.map((item) => (
            <SholawatCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sholawat;
