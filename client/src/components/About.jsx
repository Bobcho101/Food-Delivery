export default function About() {
    return (
        <div className="bg-[#1E1B18] text-gray-100 min-h-screen flex flex-col items-center justify-center p-6 text-center">
            <h1 className="text-5xl font-bold text-[#FFB703]">About Us</h1>
            <p className="text-gray-300 mt-4 max-w-2xl text-lg">
                We are a passionate team dedicated to bringing fresh, delicious meals straight to your door.  
                Our mission is to connect food lovers with their favorite restaurants effortlessly.
            </p>

            <div className="bg-[#E63946] text-white px-6 py-3 rounded-md mt-6 shadow-lg">
                <p className="text-lg font-semibold">Fresh. Fast. Delivered.</p>
            </div>

            <h2 className="text-3xl font-semibold text-[#FFB703] mt-12">Meet Our Team</h2>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
                {[
                    { name: "Jane Doe", role: "CEO & Founder" },
                    { name: "John Smith", role: "Head of Operations" },
                    { name: "Emily Johnson", role: "Marketing Director" },
                ].map((member, index) => (
                    <div key={index} className="bg-[#2A2523] p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-[#FFB703]">{member.name}</h3>
                        <p className="text-gray-300">{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
