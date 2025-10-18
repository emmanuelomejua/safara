import { useState } from 'react'
import Image from './ui/Image';
import { Link } from 'react-router-dom';
import { Typography } from './ui/Typography';
import { Button } from './ui/Button';

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className='flex w-full h-15 md:h-20 items-center justify-between'>
      {/* Logo */}
      <Link to='/' className="flex items-center gap-2">
        <Image src="/logo.png" alt='Safara Logo' className='w-8 h-8'/>
        <Typography label='Safara' className='text-2xl font-semibold text-[#222]'/>
      </Link>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div className="">
          <Image src={openMenu ? '/x.svg' : '/3-vert.svg'} alt="" className="h-8 w-8 object-cover cursor-pointer" onClick={() => setOpenMenu((prev) => !prev)}/>
        </div>

        {openMenu &&
        <div className={`flex h-screen w-full flex-col items-center justify-center gap-5 text-lg text-[#000] font-[500] absolute top-15 ${openMenu ? '-right-0' : '-right-[100%]'} bg-[#51518d] transition-all ease-in-out`}>
            <span className="">Home</span>
            <span className="">Trending</span>
            <span className="">Most Popular</span>
            <span className="">About</span>

            <div className="">
               <Button className='cursor-pointer'>Login</Button>
              {/* <button className="px-5 py-2 text-white bg-blue-700 rounded-3xl cursor-pointer">Login</button> */}
            </div>
        </div>}
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center">
        <div className="flex items-center  gap-5 xl:gap-8 font-medium">
          <span className="">Home</span>
          <span className="">Trending</span>
          <span className="">Most Popular</span>
          <span className="">About</span>

          <div className="">
            <Button className='cursor-pointer'>Login</Button>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Navbar; 
