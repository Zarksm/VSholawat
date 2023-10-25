import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='flex flex-col w-full items-center shadow-xl'>
                <nav className='w-full flex bg-primary text-white items-center justify-center overflow-x-scroll snap-proximity snap-x no-scrollbar shadow-xl'>
                    <ul className='flex gap-10 py-5 text-xl tracking-tighter font-normal px-5'>
                        {/* <li className='hoverText '>
                            <Link to="/">Home</Link>
                        </li> */}
                        <li className='hoverText'>
                            <Link to="/">Sholawat</Link>
                        </li>
                        <li className='hoverText'>
                            <Link to="/quran">Quran</Link>
                        </li>
                        {/* <li className='hoverText'>
                            <Link to="/sunnah">Sunnah</Link>
                        </li> */}
                        <li className='hoverText'>
                            <Link to="/doa">Doa</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar
