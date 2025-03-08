export default function About() {
    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-gray-300 mt-3 max-w-2xl">
            We are a passionate team committed to delivering high-quality solutions that make a difference.  
            Our goal is to innovate, inspire, and create seamless experiences for our users.
        </p>
    
        <div className="bg-[#006e3c] text-white px-6 py-3 rounded-md mt-6">
            <p className="font-semibold">Innovation. Excellence. Impact.</p>
        </div>
    
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
            {[
            { name: "Jane Doe", role: "CEO & Founder" },
            { name: "John Smith", role: "Lead Developer" },
            { name: "Emily Johnson", role: "Marketing Head" },
            ].map((member, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
            </div>
            ))}
        </div>
        </div>
    );
    }      
