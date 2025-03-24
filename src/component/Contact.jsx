
const Contact = () => {
  return (
    <div className="mt-16 relative">
      <section
        className="py-16 md:py-24 w-full"
        style={{ background: "linear-gradient(to right, rgba(0, 128, 128, 1), rgba(14, 63, 63, 1))" }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto right-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-left">
              Get started with <span className="text-teal-300">mr.alfred</span>
            </h2>
          </div>
          <form className="space-y-6 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="bg-white text-gray-900 border-none h-12 px-6 w-full shadow-md focus:ring-2 focus:ring-teal-400 rounded-full"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-white text-gray-900 border-none h-12 px-6 w-full shadow-md focus:ring-2 focus:ring-teal-400 rounded-full"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="email"
                placeholder="Email"
                className="bg-white text-gray-900 border-none h-12 px-6 w-full shadow-md focus:ring-2 focus:ring-teal-400 rounded-full"
                required
              />
              <input
                type="text"
                placeholder="Country"
                className="bg-white text-gray-900 border-none h-12 px-6 w-full shadow-md focus:ring-2 focus:ring-teal-400 rounded-full"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Company"
                className="bg-white text-gray-900 border-none h-12 px-6 w-full shadow-md focus:ring-2 focus:ring-teal-400 rounded-full"
                required
              />
              <input
                type="text"
                placeholder="Job Title"
                className="bg-white text-gray-900 border-none h-12 px-6 w-full shadow-md focus:ring-2 focus:ring-teal-400 rounded-full"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="No. of Listings you Manage"
                className="bg-white text-gray-900 border-none h-12 px-6 w-full shadow-md focus:ring-2 focus:ring-teal-400 rounded-full"
                required
              />
              <input
                type="text"
                placeholder="When do you want to start"
                className="bg-white text-gray-900 border-none h-12 px-6 w-full shadow-md focus:ring-2 focus:ring-teal-400 rounded-full"
                required
              />
            </div>

            <textarea
              placeholder="Enter Message"
              className="bg-white text-gray-900 border-none rounded-xl px-6 py-4 w-full min-h-[120px] shadow-md focus:ring-2 focus:ring-teal-400"
            />

            <div className="text-center">
              <button className="bg-teal-500 hover:bg-teal-400 text-white font-bold flex items-center gap-2 justify-center rounded-full px-8 py-3 transition shadow-lg">
                Start Free Trial
                <span className="ml-1">→</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact