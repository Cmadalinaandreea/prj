

const DashboardC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-blue-900 text-white p-4">
        <h1 className="text-3xl font-semibold mb-6">Platforma de Învățare</h1>
        <ul className="space-y-2">
          <li className="hover:text-blue-300 transition duration-300">
            <a href="#" className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              Cursuri
            </a>
          </li>
          <li className="hover:text-blue-300 transition duration-300">
            <a href="#" className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              Lecții
            </a>
          </li>
          <li className="hover:text-blue-300 transition duration-300">
            <a href="#" className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              Exerciții
            </a>
          </li>
          {/* ... adăugați alte link-uri pentru paginile secundare */}
        </ul>
      </div>

      {/* Main content */}
      <div className="w-3/4 p-8">
        <h2 className="text-4xl font-semibold mb-4 text-gray-700">Bun venit în Platforma de Învățare!</h2>
        <p className="text-xl text-gray-700">
          Aici veți găsi conținut educațional și resurse pentru dezvoltarea cunoștințelor și abilităților dvs.
        </p>
        {/* ... adăugați conținut specific pentru fiecare pagină */}
      </div>
    </div>
  );
};

export default DashboardC;
