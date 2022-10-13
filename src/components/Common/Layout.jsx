import Navbar from '../Navbar/Navbar'
import { MobileNavbar } from '../Navbar/MobileNavbar'

export default function Layout({ children }) {
  return (
    <div className="font-['White_Rabbit_Regular'] bg-[#090909] text-[#e8e8e8] min-h-screen min-w-screen scroll-smooth">
      <div className='md:hidden'>
        <MobileNavbar></MobileNavbar>
      </div>
      <div className='hidden md:block md:max-w-7xl md:mx-auto'>
        <Navbar></Navbar>
      </div>
      <main>{children}</main>
    </div>
  )
}