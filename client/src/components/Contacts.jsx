export default function Contact() {
    return (
        <div className="bg-[#1E1B18] text-gray-100 min-h-screen flex flex-col items-center justify-center p-6 text-center">
            <h1 className="text-5xl font-bold text-[#FFB703]">Contact Us</h1>
            <p className="text-gray-300 mt-4 max-w-2xl text-lg">
                We&apos;re here to help! Reach out to us anytime for support or inquiries.
            </p>

            {/* Contact Info Section */}
            <div className="mt-12 max-w-2xl mx-auto">
                <div className="text-left">
                    <p className="text-lg text-gray-300">📧 <span className="font-semibold">Email:</span> <a href="mailto:support@fooddelivery.com" className="text-[#E63946]">bgbobi878@gmail.com</a></p>
                    <p className="text-lg text-gray-300 mt-3">📞 <span className="font-semibold">Phone:</span> <a href="tel:+123456789" className="text-[#E63946]">+359 123456789</a></p>
                </div>
            </div>
        </div>
    );
}
