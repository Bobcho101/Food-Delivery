import { useState } from "react";
import MemberInfo from "./Member";

const members = [
    {
        id: 1,
        name: "Jane Doe",
        role: "CEO & Founder",
        bio: "Jane is the visionary behind the company, driving our mission to bring fresh meals to everyone.",
        email: "jane.doe@fooddelivery.com",
        phone: "+1 (234) 567-891",
    },
    {
        id: 2,
        name: "John Smith",
        role: "Lead Developer",
        bio: "John leads the development team and ensures the technology behind our platform is top-notch.",
        email: "john.smith@fooddelivery.com",
        phone: "+1 (234) 567-892",
    },
    {
        id: 3,
        name: "Emily Johnson",
        role: "Marketing Head",
        bio: "Emily is responsible for bringing our brand to life and ensuring everyone knows about our amazing food delivery service.",
        email: "emily.johnson@fooddelivery.com",
        phone: "+1 (234) 567-893",
    },
];

export default function About() {
    const [isMemberInfoToggled, setMemberInfoToggled] = useState(false);
    const [currentMemberSelected, setCurrentMemberSelected] = useState({});


    return (
        <div className="bg-[#1E1B18] text-gray-100 min-h-screen flex flex-col items-center justify-center p-6 text-center z-20">
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
                {members.map((member, index) => (
                    <div onClick={() => {
                        setCurrentMemberSelected(member)
                        setMemberInfoToggled(curState => !curState)
                    }} 
                    key={index} className="bg-[#2A2523] p-6 rounded-lg shadow-md cursor-pointer">
                        <h3 className="text-xl font-semibold text-[#FFB703]">{member.name}</h3>
                        <p className="text-gray-300">{member.role}</p>
                    </div>
                ))}
            </div>

            {isMemberInfoToggled && 
            <>
            <div
                className="fixed inset-0 bg-black opacity-50 z-10"
                onClick={() => setMemberInfoToggled(false)}
            ></div>

            <MemberInfo member={currentMemberSelected} /> 
            </>
            }
        </div>
    );
}
