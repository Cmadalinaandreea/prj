import React from 'react';

const HomeC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="text-white text-center">
        <h1 className="text-4xl font-semibold mb-4">Bine ați venit pe Platforma noastră!</h1>
        <p className="text-lg mb-8">
          Descoperiți o varietate de cursuri și resurse pentru dezvoltarea personală și profesională.
        </p>
        <a
          href="/about"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm transition duration-300 ease-in-out"
        >
          Aflați mai multe
        </a>
      </div>
    </div>
  );
};

export default HomeC;
