
import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "CRISTIANO",
      role: "FOUNDER",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "LEO MESSI",
      role: "CO-FOUNDER",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "DAVID SMITH",
      role: "PHOTOGRAPHER",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "EMMA WILSON",
      role: "PHOTOGRAPHER",
      image: "https://images.unsplash.com/photo-1494790108755-2616c64e4e4a?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "JAMES ANDERSON",
      role: "PHOTOGRAPHER",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "SARAH JOHNSON",
      role: "VIDEO SPECIALIST",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "MICHAEL BROWN",
      role: "DESIGNER",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-teal-900 to-teal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-center text-yellow-200 tracking-wider mb-16">
          OUR TEAM
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative mx-auto mb-6 w-48 h-48 rounded-full overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/30 to-transparent"></div>
              </div>
              
              <h3 className="text-2xl font-light text-yellow-200 tracking-wider mb-2">
                {member.name}
              </h3>
              <p className="text-yellow-300/80 tracking-widest text-sm">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
