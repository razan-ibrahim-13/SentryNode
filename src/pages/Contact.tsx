
import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    fianceName: '',
    email: '',
    phone: '',
    weddingDate: '',
    weddingLocation: '',
    plannerName: '',
    howDidYouHear: '',
    whyWorkWithUs: '',
    projectVision: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-darkGreen to-brand-darkestGreen">
      {/* Header */}
      <div className="bg-brand-darkGreen/90 backdrop-blur-sm py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a 
              href="/" 
              className="flex items-center space-x-2 text-brand-cream hover:text-brand-bronze transition-colors"
            >
              <ChevronLeft size={24} />
              <span className="font-light tracking-wide">Back to Home</span>
            </a>
            
            <div className="text-center">
              <h1 className="text-2xl font-light text-brand-cream tracking-wider">SoulScript</h1>
              <p className="text-xs text-brand-bronze tracking-widest">WEDDINGS</p>
            </div>
            
            <div className="w-24"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Text */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-aboreto font-light text-brand-cream tracking-wider mb-6">
              WANT TO MAKE <em className="text-brand-bronze">us</em> A PART <em className="text-brand-bronze">OF your</em> CELEBRATION?
            </h1>
            <p className="text-lg text-brand-cream/80 max-w-4xl mx-auto leading-relaxed">
              Fill the form below with your details and we will get back to you as soon as we can. Please provide as much details as you can like - dates, venues, ceremonies, wedding theme and a few lines about your story.
            </p>
          </div>

          {/* Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left side - Image */}
            <div className="relative">
              <div className="w-full h-[600px] bg-brand-darkGreen rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                  alt="Wedding Celebration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right side - Form */}
            <div className="bg-brand-darkGreen/30 p-8 rounded-lg backdrop-blur-sm border border-brand-cream/10">
              <h3 className="text-2xl font-aboreto font-light text-brand-cream tracking-wider mb-6">
                Help us learn more about your project by filling out the form below.
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name (and Fiancé's Name if applicable) *"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-brand-cream/30 text-brand-cream placeholder-brand-cream/50 py-3 focus:border-brand-bronze focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="E-mail *"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-brand-cream/30 text-brand-cream placeholder-brand-cream/50 py-3 focus:border-brand-bronze focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-brand-cream/30 text-brand-cream placeholder-brand-cream/50 py-3 focus:border-brand-bronze focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="date"
                      name="weddingDate"
                      placeholder="Wedding / Shoot Date"
                      value={formData.weddingDate}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-brand-cream/30 text-brand-cream placeholder-brand-cream/50 py-3 focus:border-brand-bronze focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    name="weddingLocation"
                    placeholder="Wedding / Shoot Location"
                    value={formData.weddingLocation}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-brand-cream/30 text-brand-cream placeholder-brand-cream/50 py-3 focus:border-brand-bronze focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="plannerName"
                    placeholder="Name of Planner (if Applicable)"
                    value={formData.plannerName}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-brand-cream/30 text-brand-cream placeholder-brand-cream/50 py-3 focus:border-brand-bronze focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <textarea
                    name="howDidYouHear"
                    placeholder="How did you hear about me?"
                    value={formData.howDidYouHear}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full bg-transparent border-b border-brand-cream/30 text-brand-cream placeholder-brand-cream/50 py-3 focus:border-brand-bronze focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div>
                  <textarea
                    name="whyWorkWithUs"
                    placeholder="Why would you like to work with KT Merry?"
                    value={formData.whyWorkWithUs}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full bg-transparent border-b border-brand-cream/30 text-brand-cream placeholder-brand-cream/50 py-3 focus:border-brand-bronze focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div>
                  <textarea
                    name="projectVision"
                    placeholder="Tell us about your vision / project"
                    value={formData.projectVision}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full bg-transparent border-b border-brand-cream/30 text-brand-cream placeholder-brand-cream/50 py-3 focus:border-brand-bronze focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full bg-brand-bronze text-white py-4 rounded-full hover:bg-brand-bronze/90 transition-colors font-light tracking-wide text-lg"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
