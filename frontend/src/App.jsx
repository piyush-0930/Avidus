import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-10 text-center text-white max-w-lg w-full">
        <h1 className="text-5xl font-extrabold mb-4">
          Tailwind CSS Works 🚀
        </h1>

        <p className="text-lg text-gray-200 mb-8">
          Your React + Tailwind setup is running perfectly.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-xl shadow-lg hover:scale-105 transition duration-300">
            Explore
          </button>

          <button className="px-6 py-3 bg-black/30 border border-white rounded-xl hover:bg-black/50 transition duration-300">
            Learn More
          </button>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-4">
          <div className="bg-pink-400 p-4 rounded-2xl shadow-md">
            <h2 className="font-bold text-xl">React</h2>
          </div>

          <div className="bg-purple-400 p-4 rounded-2xl shadow-md">
            <h2 className="font-bold text-xl">Tailwind</h2>
          </div>

          <div className="bg-orange-400 p-4 rounded-2xl shadow-md">
            <h2 className="font-bold text-xl">Vite</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;