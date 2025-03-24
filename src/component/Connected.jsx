
import Image from 'next/image';
import Elipse from '../images/Ellipse 53.png';
import Elipse1 from '../images/Ellipse 49.png';

import flight  from '../images/Expedia-Symbol 1.png'
import google from '../images/G.png'
import amozon from '../images/a.png'

import kayak from '../images/Kayak-Emblem 1.png'
import trivago from '../images/Frame 3950.png'


const Connected = () => {
  return (
    <section className="bg-teal-600 p-20 relative overflow-hidden mt-16">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Stay connected with 50+ OTAs
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 mt-2 relative">
            <button className="relative h-[50px] w-40 overflow-hidden border border-green-900 bg-white text-green-900 shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-green-900 before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-green-900 after:duration-500 hover:text-white hover:shadow-green-900 hover:before:h-2/4 hover:after:h-2/4 rounded-full">
              <span className="relative z-10">Start Free Trial</span>
            </button>
            <button className="bg-transparent text-white border border-white hover:bg-teal-500/20 rounded-full px-6 py-3 font-medium">
              Chat with us
            </button>
            <div className="absolute left-80 -top-25  -translate-y-1/2  ">
              <div className="relative w-8 h-8 left-16">
                <Image src={Elipse} alt="OTA" className=" object-cover rounded-full" />
                <div className="absolute top-0 left-0 bg-red-500 rounded-full w-4 h-4 flex items-center justify-center">
                  <span><Image src={kayak} alt="OTA" className="" /></span>
                </div>
                <div className="absolute bottom-0 right-0  rounded-full w-4 h-4 flex items-center justify-center">
                  <span><Image src={trivago} alt="OTA" className="" /></span>
                </div>
                <div className="absolute top-4  rounded-full w-4 h-4 flex items-center justify-center">
                  <span><Image src={trivago} alt="OTA" className="" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Left side OTA icons */}
      <div className="absolute left-4 md:left-72 top-4 -translate-y-1/2">
        <div className="relative w-32 h-32 md:w-40 md:h-40 left-48">
          <Image src={Elipse} alt="OTA" className="w-full h-full object-cover rounded-full" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-red-500 rounded-full w-12 h-12 flex items-center justify-center">
            <span className="text-white font-bold">A</span>
          </div>
          <div className="absolute top-1/2 right-0 bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center">
            <span className="text-white font-bold">B</span>
          </div>
          <div className="absolute bottom-0 left-1/4 bg-white rounded-full w-10 h-10 flex items-center justify-center">
            <span className="text-gray-500 text-xs">V</span>
          </div>
        </div>
      </div>

      {/* Right side OTA icons */}
      <div className="absolute right-4 md:right-64 top-20 -translate-y-1/2">
        <div className="relative w-32 h-32 md:w-40 md:h-40 right-64">
          <Image src={Elipse1} alt="OTA" className="" />
          <div className="absolute bottom-1/4 left-0 rounded-full w-10 h-10 flex items-center justify-center">
            <span className="text-gray-500 font-medium"><Image src={flight} alt="OTA" className="w-full h-full " /></span>
          </div>
          <div className="absolute top-0 right-1/4 flex">
          <Image src={amozon} alt="OTA" className="w-10 h-10 " />
           
          </div>
          <div className="absolute bottom-1/4 right-0 bg-white rounded-full w-8 h-8 flex items-center justify-center">
          <Image src={google} alt="OTA" className="w-10 h-10 " />
          </div>
        </div>
      </div>
      <div className="absolute  left-80  transform -translate-y-1/2 flex items-start justify-start">
        <div className="relative w-8 h-8 left-80 top-7">
          <Image src={Elipse} alt="OTA" className="w-full h-full object-cover rounded-full" />
          <div className="absolute top-0 left-0 bg-red-500 rounded-full w-4 h-4 flex items-center justify-center">
            <span className="text-white text-xs">s</span>
          </div>
          <div className="absolute bottom-0 right-0 rounded-full w-4 h-4 flex items-center justify-center">
            <span className="text-white text-xs">Brr</span>
          </div>
        </div>
      </div>
    
     
    </section>
  )
}

export default Connected