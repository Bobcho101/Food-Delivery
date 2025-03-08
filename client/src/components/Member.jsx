export default function MemberInfo({ member }) {
   return (
    <div className="fixed flex items-center justify-center z-20">
    <div className="bg-[#2A2523] p-6 rounded-lg shadow-lg max-w-2xl w-full">
        <h2 className="text-3xl font-semibold text-[#FFB703]">{member.name}</h2>
        <p className="text-gray-300 mt-4 text-lg">{member.role}</p>
        <p className="text-gray-300 mt-4">{member.bio}</p>
        <p className="text-gray-300 mt-4">
            <span className="font-semibold">Email:</span>{" "}
            <a href={`mailto:${member.email}`} className="text-[#E63946]">
                {member.email}
            </a>
        </p>
        <p className="text-gray-300 mt-2">
            <span className="font-semibold">Phone:</span>{" "}
            <a href={`tel:${member.phone}`} className="text-[#E63946]">
                {member.phone}
            </a>
        </p>
    </div>
</div>
   );
}