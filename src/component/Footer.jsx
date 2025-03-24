
import Link from "next/link"
const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-medium text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Content Hub
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Independent Property Owners
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Vacation Rental Management Companies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Login
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-4">Features</h3>
            <div className="grid grid-cols-2 gap-x-4">
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Multi-Calendar
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Finance Module
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Automated Guest Reviews
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Security Deposits
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Guest Identity Verification
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Cleaning Scheduler
                  </Link>
                </li>
              </ul>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Direct Booking Engine
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Client Statements
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Host App
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Channel Management
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Guest Messaging
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Reservation Manager
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-4">Connect with Us</h3>
            <div className="flex space-x-4 mb-6">
              <Link href="#" className="text-blue-600 hover:text-blue-800">
                Facebook
              </Link>
              <Link href="#" className="text-pink-600 hover:text-pink-800">
                Instagram
              </Link>
              <Link href="#" className="text-blue-700 hover:text-blue-900">
                LinkedIn
              </Link>
              <Link href="#" className="text-red-600 hover:text-red-800">
                YouTube
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Privacy Policy
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Terms & Conditions
              </Link>
            </div>
            <p className="text-sm text-gray-500">© 2024 mr.alfred LLC. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer