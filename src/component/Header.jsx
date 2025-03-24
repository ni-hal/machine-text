"use client";
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="w-full bg-transparent py-4 px-6">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                <h1 className="text-xl font-bold cursor-pointer">mr.alfred</h1>
                <nav className="hidden md:flex items-center space-x-8 text-black text-lg">
                    <a href="#" className="hover:text-teal-600">Home</a>
                    <a href="#" className="hover:text-teal-600">About</a>
                    <a href="#" className="hover:text-teal-600">Features</a>
                    <a href="#" className="hover:text-teal-600">Pricing</a>
                    <a href="#" className="hover:text-teal-600">Contact</a>
                    <a href="#" className="hover:text-teal-600">Blog</a>
                </nav>
                <div className="hidden md:flex space-x-4">
                    <button className="px-5 py-2 bg-teal-600 text-white rounded-full text-lg hover:bg-teal-700">
                        Get Started
                    </button>
                    <button className="px-5 py-2 border border-teal-600 text-black rounded-full text-lg hover:bg-teal-600 hover:text-white">
                        Login
                    </button>
                </div>
                <button className="md:hidden z-50" onClick={() => setIsMenuOpen(true)}>
                    <Menu size={28} />
                </button>
            </div>
            {isMenuOpen && (
                <div className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center">

                    <button
                        className="absolute top-4 right-4 text-white"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <X size={32} />
                    </button>
                    <nav className="flex flex-col items-center gap-6 text-white">
                        <a href="#" className="text-lg hover:text-teal-400">Home</a>
                        <a href="#" className="text-lg hover:text-teal-400">About</a>
                        <a href="#" className="text-lg hover:text-teal-400">Features</a>
                        <a href="#" className="text-lg hover:text-teal-400">Pricing</a>
                        <a href="#" className="text-lg hover:text-teal-400">Contact</a>
                        <a href="#" className="text-lg hover:text-teal-400">Blog</a>
                        <button className="px-5 py-2 bg-teal-600 text-white rounded-full text-lg hover:bg-teal-700">
                            Get Started
                        </button>
                        <button className="px-5 py-2 border border-teal-600 text-white rounded-full text-lg hover:bg-teal-600 hover:text-white">
                            Login
                        </button>
                    </nav>
                </div>
            )}
        </header>
    )
}

export default Header  
