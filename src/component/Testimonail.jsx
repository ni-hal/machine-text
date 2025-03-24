"use client"
import Image from "next/image"
import { Play } from "lucide-react"
const Testimonail = () => {
  return (
    <section className="mt-16 px-6">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="w-full md:w-2/5">
          <h3 className="text-3xl font-bold">What Hosts are saying about us</h3>
          <p className="text-gray-600 mt-4">
            Hear what real hosts have to say about how mr.alfred has transformed their rental management and helped
            them grow their business.
          </p>
          <div className="mt-6">
            <h4 className="text-xl font-bold">Sachin Tendulkar</h4>
            <p className="text-gray-500">Marketing Manager</p>
          </div>
        </div>
        <div className="relative w-full md:w-2/5 h-[400px]">
          <Image
            src="/placeholder.svg?height=400&width=300"
            alt="Host"
            fill
            className="rounded-lg shadow-lg object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white p-4 rounded-full shadow-md">
              <Play className="w-8 h-8 text-teal-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Testimonail