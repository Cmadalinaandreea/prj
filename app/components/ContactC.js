

const ContactC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Contactează-ne</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nume
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 p-2 block w-full border rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Numele tău"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 block w-full border rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="adresa@exemplu.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Mesaj
            </label>
            <textarea
              id="message"
              className="mt-1 p-2 block w-full border rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              rows="4"
              placeholder="Scrie-ne mesajul tău..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Trimite
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactC;
