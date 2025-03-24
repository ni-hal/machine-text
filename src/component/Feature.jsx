
import Image from "next/image"
import image1 from '../images/IMAGES FOR WEB.png'
import image2 from '../images/IMAGES FOR WEB - 2 1.png'
import image3 from '../images/IMAGES FOR WEB - 3 1 (1).png'
import image4 from '../images/IMAGES FOR WEB - 4 1.png'
const Feature = () => {
  return (
    <section className="mt-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Card - Host Friendly Software */}
          <div
            className="text-white p-6 rounded-lg flex flex-col"
            style={{ background: "linear-gradient(to right, rgba(0, 128, 128, 1), rgba(14, 63, 63, 1))" }}
          >
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight">Host Friendly Software for Vacation Rental</h3>
            <div className="mt-4 flex-grow relative">
              <div className="relative h-64 w-full">
                <Image
                  src={image2}
                  alt="Dashboard"
                  fill
                  className="object-contain"
                />
              </div>
              {/* Add the circular progress indicator shown in the image */}
              <div className="absolute top-1/4 right-1/4 bg-white rounded-full h-20 w-20 flex items-center justify-center">
                <div className="bg-teal-500 rounded-full  flex items-center justify-center text-white font-bold">
                  75%
                </div>
              </div>
            </div>
          </div>

          {/* Second Card - Multi-Calendar */}
          <div
            className="text-white rounded-lg flex flex-col"
            style={{ background: "linear-gradient(to right, rgba(0, 128, 128, 1), rgba(14, 63, 63, 1))" }}
          >
            <div className="p-6">
              <h3 className="text-xl md:text-2xl font-semibold">Multi-Calendar for Smooth Operations</h3>
              <p className="mt-2 text-sm">Manage all your properties in one place with our intuitive calendar system</p>
            </div>
            <div className="mt-auto flex justify-end">
              <Image 
                src={image1} 
                alt="Calendar" 
                width={300}
                height={200}
                className="object-contain"
              />
            </div>
          </div>

          {/* Third Card - Effortless Interaction */}
          <div
            className="text-white rounded-lg flex flex-col md:flex-row items-center p-6"
            style={{ background: "linear-gradient(to right, rgba(0, 128, 128, 1), rgba(14, 63, 63, 1))" }}
          >
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
              <Image 
                src={image3} 
                alt="Guest Interaction"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">Effortless Interaction with Your Guest</h3>
              <p className="mt-2 text-sm">
                Automated messages for easy communication, quick access, and better guest experience.
              </p>
            </div>
          </div>

          {/* Fourth Card - Financial Reporting */}
          <div
            className="text-white rounded-lg flex flex-col"
            style={{ background: "linear-gradient(to right, rgba(0, 128, 128, 1), rgba(14, 63, 63, 1))" }}
          >
            <div className="p-6">
              <h3 className="text-xl md:text-2xl font-semibold">Reporting & Financial Management</h3>
              <p className="mt-2 text-sm">Track your revenue, expenses, and occupancy rates with detailed reports</p>
            </div>
            <div className="mt-auto flex justify-end">
              <Image 
                src={image4} 
                alt="Financial Reports" 
                width={200}
                height={150}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature