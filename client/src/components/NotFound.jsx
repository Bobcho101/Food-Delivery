export default function NotFound() {
   return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center text-center p-6">
        <div>
        <h1 className="text-6xl font-bold">404</h1>
        <p className="mt-4 text-xl text-gray-400">Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
        <a
            href="/"
            className="mt-8 inline-block rounded-md bg-[#006e3c] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#004d29] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006e3c]"
        >
            Go Back Home
        </a>
        </div>
    </div>
   );
}