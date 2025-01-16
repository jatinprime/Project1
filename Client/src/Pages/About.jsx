import React from 'react'

const About = () => {
  return (
    <main className="container mx-auto bg-pink-900 px-6 py-12 ">
        <section className="text-center">
          <h2 className="text-4xl mt-20 font-bold mb-4">About MoviesInfo</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Welcome to <span className="text-white font-semibold">MoviesInfo</span>, your one-stop destination for all your entertainment needs. 
            Our mission is to make discovering and streaming your favorite movies and TV shows easier than ever. 
            From blockbuster hits to hidden gems, we have something for everyone.
          </p>
        </section>

        {/* Features Section */}
        <section className="mt-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">What We Offer</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-bold mb-2">Extensive Library</h4>
              <p className="text-gray-300">
                Thousands of movies and TV shows across all genres and languages.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-bold mb-2">Personalized Experience</h4>
              <p className="text-gray-300">
                Tailored recommendations based on your preferences and watch history.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-bold mb-2">Seamless Streaming</h4>
              <p className="text-gray-300">
                Enjoy high-quality, buffer-free streaming on all your devices.
              </p>
            </div>
          </div>
        </section>
      </main>
  )
}

export default About
