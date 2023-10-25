import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { SholawatLyric } from "../API/Sholawat";
import AudioPlayer from "./AudioPlayer";
import ErrorPage from "../404";
import BackToTop from "./BackToTop";

const LyricPage = () => {
  const { id } = useParams(); // Get the id from the URL parameter

  // Find the selected sholawat based on the id
  const selectedSholawat = SholawatLyric.find(
    (item) => item.id === parseInt(id, 10)
  );

  if (!selectedSholawat) {
    // Handle the case where the sholawat with the given id is not found
    return (
      <div>
        <ErrorPage />
      </div>
    );
  }

  return (
    <div className="w-full lg:px-52 py-10 shadow-xl">
      <BackToTop />
      <Link to={`/`}>
        <div className="flex justify-between p-5 bg-primary text-white hover:text-greenl duration-500 border-b border-white">
          <span className="flex items-center text-[2rem] pl-2">
            <ion-icon name="arrow-back" className="text-2xl"></ion-icon>
          </span>
          <p className="flex items-center text-sm md:text-lg">
            <span> {selectedSholawat.title}</span>
          </p>
        </div>
      </Link>

      <div className="bg-primary p-5 md:p-10 rounded-sm">
        <AudioPlayer
          musicUrl={selectedSholawat.music_url}
          {...selectedSholawat}
        />
        <div className="mt-5 text-white">
          {selectedSholawat.lyrics.map((line, index) => (
            <div key={index}>
              <p className="text-right pb-10 pt-16 text-xl md:text-3xl font-normal font-Sche leading-relaxed select-none">
                {line.text}
              </p>

              <p className="font-Quisand text-left text-sm md:text-left py-2">
                {line.latin}
              </p>

              <p className="font-Quisand text-left text-xs md:text-left border-t py-2 text-slate-400">
                {line.translation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LyricPage;
