
import { motion } from "framer-motion";
import {staggerContainer,fadeIn} from "../utils/motion";


const Price = () => {
  return (
    <section
      className="py-16 md:py-24 mt-16"
      style={{ background: "linear-gradient(to right, rgba(0, 128, 128, 1), rgba(14, 63, 63, 1))" }}
    >
      <motion.div
        variants={staggerContainer(0.2, 0.1)} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="container mx-auto px-6"
      >
        <motion.div  variants={fadeIn('up', 'tween', 0.3, 1)}className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Pay no more or no less than what you need</h2>
          <p className="text-teal-50 max-w-2xl mx-auto">
            Choose a package that works for your business right now. No hidden terms. No
            unnecessary upsell. We're transparent with our payment plans and are happy to
            adapt as needed.
          </p>
        </motion.div>

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
                  className={`group relative bg-teal-200/30 backdrop-blur-sm rounded-xl p-6 text-center transition duration-300 ease-in-out transform hover:scale-105 ${plan.popular ? 'bg-teal-800 hover:bg-teal-700 shadow-lg' : ''
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
                  <button className={`w-full py-2 rounded-lg transition duration-300 ease-in-out transform group-hover:scale-150 ${plan.popular
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
            <button className="relative h-[50px] w-40 overflow-hidden border border-green-900 bg-white text-green-900 shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-green-900 before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-green-900 after:duration-500 hover:text-white hover:shadow-green-900 hover:before:h-2/4 hover:after:h-2/4 rounded-full">
              <span className="relative z-10">Start Free Trial</span>
            </button>
            <button className="text-white border border-white/30 hover:bg-teal-500/20 px-8 py-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              Chat with us
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Price;