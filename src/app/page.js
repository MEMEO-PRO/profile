import Image from 'next/image'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'



export default function Home() {
  return (
    <main className="mt-24 flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <div className='container mx-auto px-10 py-7'>
        
        <HeroSection />
      </div>
    </main>
  )
}
