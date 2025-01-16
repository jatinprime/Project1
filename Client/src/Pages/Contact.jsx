import React, { useState } from "react";
import ThankYou from "./ThankYou";
import { NavLink, useNavigate } from "react-router-dom";

const Contact = () => {

  const [showform , setShowForm] = useState(true) ;
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault() ;
    setShowForm(false)
  }
  return (
    <>
      {showform ?
          
      (<div className="bg-gray-900 text-white min-h-screen">
          <main className="container mx-auto px-6 py-12">
            <section className="text-center mt-20">
              <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Have questions, feedback, or need support? We're here to help! Reach out to us anytime, and our team will get back to you as soon as possible.
              </p>
            </section>

            {/* Contact Form */}
            <section className="mt-12">
              <form onSubmit={handleSubmit}
              className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-xl mx-auto">
                <div className="mb-4">
                  <label className="block text-gray-400 text-sm mb-2" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-400 text-sm mb-2" htmlFor="email">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-400 text-sm mb-2" htmlFor="message">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    placeholder="Write your message here"
                    className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </section>
          </main>
          </div>
        ): 
        
        ( <main className="text-center py-[200px] px-6 bg-pink-900">

            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">Thank You!</h2>
                <p className="text-gray-300 text-lg mb-8">
                  Your message has been successfully sent. We appreciate you reaching out to us! 
                  Our team will get back to you shortly.
                </p>
              <NavLink
                to="/"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Go Back to Home
              </NavLink>
            </div>
          </main>)
        }
    </>
    
  );
};

export default Contact;
