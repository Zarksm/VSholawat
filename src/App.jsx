import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Doa, Home, Quran, Sholawat, Sunnah, Navbar } from "./Pages";
import LyricPage from "./components/LyricPage";
import Ayat from "./components/Ayat";
import ErrorPage from "./404";

function App() {
  const loc = useLocation();

  const isDetailsContent =
    loc.pathname.includes("/surah") || loc.pathname.includes("/Sholawat");

  return (
    <>
      <div className="bg-secondary bg-cover min-h-screen">
        {!isDetailsContent && <Navbar />}
        <Routes>
          <Route exact path="/" element={<Sholawat />} />
          <Route path="/Quran" element={<Quran />} />
          <Route path="/Sunnah" element={<Sunnah />} />
          <Route path="/Doa" element={<Doa />} />
          <Route path="/Sholawat" element={<Sholawat />} />
          <Route path="/:id" element={<LyricPage />} />
          <Route path="/surah/:surahId" element={<Ayat />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
