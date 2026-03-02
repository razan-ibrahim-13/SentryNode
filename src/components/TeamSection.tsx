
import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "CRISTIANO",
      role: "FOUNDER",
      description: "Visionary leader with 15+ years in wedding photography, bringing unique perspectives to every shoot.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "LEO MESSI",
      role: "CO-FOUNDER",
      description: "Creative director specializing in capturing intimate moments and emotional storytelling.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "DAVID SMITH",
      role: "PHOTOGRAPHER",
      description: "Expert in destination weddings with a passion for natural light and candid photography.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "EMMA WILSON",
      role: "PHOTOGRAPHER",
      description: "Specialist in portrait photography with an eye for detail and composition perfection.",
      image: "https://images.unsplash.com/photo-1494790108755-2616c64e4e4a?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "JAMES ANDERSON",
      role: "PHOTOGRAPHER",
      description: "Documentary-style wedding photographer capturing authentic moments and genuine emotions.",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "SARAH JOHNSON",
      role: "VIDEO SPECIALIST",
      description: "Cinematic wedding videographer creating beautiful films that tell your unique love story.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-brand-darkGreen to-brand-darkestGreen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-aboreto font-light text-center text-brand-cream tracking-wider mb-16">
          OUR TEAM
        </h2>
        
        <div className="space-y-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative bg-brand-cream/10 rounded-lg p-8 shadow-2xl backdrop-blur-sm border border-brand-cream/20">
                {/* Portrait - positioned to extend outside the box as a cutout */}
                <div className="absolute -top-16 -left-12 w-40 h-40 rounded-full overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-300 border-4 border-brand-bronze bg-brand-cream">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content - positioned to the right of portrait */}
                <div className="ml-32 pt-8">
                  <h3 className="text-2xl font-aboreto text-brand-cream tracking-wider mb-2">
                    {member.name}
                  </h3>
                  <p className="text-brand-bronze tracking-widest text-sm mb-4 font-semibold">
                    {member.role}
                  </p>
                  <p className="text-brand-cream/80 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
