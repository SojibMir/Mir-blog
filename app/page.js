


export default function Home() {


  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-4 sm:p-8 pb-20 gap-8 sm:gap-16 font-[family-name:var(--font-geist-sans)]">

      <div className="banner bg-blue-500 text-white text-center py-4 sm:py-8 w-full">
        <h1 className="text-2xl sm:text-4xl font-bold">Welcome to Our UNITACH DIGITAL Website!</h1>
        <p className="mt-2 text-base sm:text-lg">Your journey to knowledge starts here.</p>
      </div>

      <footer className="row-start-3 flex gap-4 flex-wrap items-center justify-center">
        <div className="bg-gray-800 text-white p-4 w-full">
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0">
              <h2 className="text-lg font-bold">Contact Us</h2>
              <p>
                Email: <a href="mailto:info@example.com" className="text-blue-400 hover:text-blue-600">info@example.com</a>
              </p>
            </div>
            <div className="mb-4 sm:mb-0 space-x-4">
              <h2 className="text-lg font-bold">Follow Us</h2>
              <ul className="flex space-x-4">
                <li>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-400">Facebook</a>
                </li>
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400">Twitter</a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-blue-400">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
