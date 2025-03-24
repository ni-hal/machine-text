const Price = () => {
  return (
    <section
      className="py-16 md:py-24 mt-16"
      style={{ background: "linear-gradient(to right, rgba(0, 128, 128, 1), rgba(14, 63, 63, 1))" }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Pay no more or no less than what you need</h2>
          <p className="text-teal-50 max-w-2xl mx-auto">
            Choose a package that works for your business right now. No hidden terms. No
            unnecessary upsell. We're transparent with our payment plans and are happy to
            adapt as needed.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto ">
          <div className="bg-teal-500/20 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Lite", price: "$0", desc: "Get your business on autopilot. More profit. More Time.", popular: false },
                { name: "Pro", price: "$7", desc: "Turbo-boost your operations and run your business like a pro.", popular: false },
                { name: "Platinum", price: "$15", desc: "Work with a fully customized solution designed to aid growth & business longevity.", popular: true }
              ].map((plan, index) => (
                <div 
                  key={index} 
                  className={`group relative bg-teal-200/30 backdrop-blur-sm rounded-xl p-6 text-center transition duration-300 ease-in-out transform hover:scale-105 ${
                    plan.popular ? 'bg-teal-800 hover:bg-teal-700 shadow-lg' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 right-6 bg-teal-500 text-xs font-medium px-2 py-1 rounded-full">
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-teal-300">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                    <span className="text-sm text-teal-50">/Unit/month</span>
                  </div>
                  <p className="text-sm mb-6 text-teal-50">{plan.desc}</p>
                  <button className={`w-full py-2 rounded-lg transition duration-300 ease-in-out transform group-hover:scale-110 ${
                    plan.popular 
                      ? 'bg-teal-500 hover:bg-teal-400 text-white' 
                      : 'bg-teal-500 hover:bg-teal-400 text-white'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
            <button className="bg-white text-teal-600 hover:bg-teal-50 px-8 py-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              Start Free Trial →
            </button>
            <button className="text-white border border-white/30 hover:bg-teal-500/20 px-8 py-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              Chat with us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;