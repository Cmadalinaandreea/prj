// components/Navbar.js


const NavbarC = () => {
  return (
      <div className="relative w-full bg-white">
<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1 sm:px-6 lg:px-8">
  <div className="inline-flex items-center space-x-2">
    <span>
      <img className="w-10" src="../favicon.ico"/>
        
          

    </span>
    <span className="font-bold text-black">e-learning</span>
  </div>
  <div className="hidden grow items-start lg:flex">
    <ul className="ml-12 inline-flex space-x-8">
      <li>
        <a
          href="/"
          className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
        >
          Home
         
        </a>
      </li>
      <li>
        <a
          href="/about"
          className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
        >
          About
         
        </a>
      </li>
      
      
      
      <li>
        <a
          href="/contact"
          className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
        >
          Contact
          
        </a>
      </li>
    </ul>
  </div>
  <div className="hidden space-x-2 lg:block">
    <button
      type="button"
      className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      Sign In
    </button>
    <button
      type="button"
      className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      Log In
    </button>
  </div>
  <div className="lg:hidden">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="h-6 w-6 cursor-pointer"
    >
      <line x1="4" y1="12" x2="20" y2="12"></line>
      <line x1="4" y1="6" x2="20" y2="6"></line>
      <line x1="4" y1="18" x2="20" y2="18"></line>
    </svg>
  </div>
</div>
</div>
  );
};

export default NavbarC;
