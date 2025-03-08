export default function NotFound() {
    return (
       <div className="min-h-screen bg-[#1E1B18] text-gray-100 flex items-center justify-center text-center p-6">
          <div>
             <h1 className="text-7xl font-bold text-[#E63946]">404</h1>
             <p className="mt-4 text-xl text-gray-300">
                Oops! The page you&apos;re looking for doesn&apos;t exist.
             </p>
             <a
                href="/"
                className="mt-8 inline-block rounded-md bg-[#E63946] px-5 py-3 text-lg font-semibold text-white shadow-md hover:bg-[#C32F3A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E63946]"
             >
                Go Back Home
             </a>
          </div>
       </div>
    );
 }
 