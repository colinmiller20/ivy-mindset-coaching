const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* About Me Section */}
      <section className="flex flex-col lg:flex-row items-center gap-6 p-6 lg:p-12">
        {/* Bio */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-lg mx-auto lg:mx-0">
            Hello, I’m Ivy Magdalene, a mindset coach that has transformed my own life in the most extraordinary ways. 
            Using my knowledge of the Law of Assumption and our divine abilities, I empower individuals to achieve their 
            highest goals. I guide my clients toward unlocking their full potential with actionable strategies.
          </p>
        </div>
        {/* Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/assets/athena.webp"
            alt="Athena - Representation of Wisdom"
            className="w-48 sm:w-64 lg:w-80 rounded-full shadow-lg object-cover"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-200 py-6 px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-6">Testimonials</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="bg-white p-4 sm:p-6 rounded shadow">
            <p className="text-gray-700">
              "Working with Ivy has been life-changing! Her guidance helped me find clarity and achieve my goals."
            </p>
            <p className="text-right text-gray-900 font-bold">- Jane Doe</p>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded shadow">
            <p className="text-gray-700">
              "Ivy's wisdom and encouragement have inspired me to take control of my life and pursue my dreams."
            </p>
            <p className="text-right text-gray-900 font-bold">- John Smith</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;



