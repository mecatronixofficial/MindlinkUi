
import Icon_Helper from "@/helper/icon_helper";
import { useState } from "react";
import { PageType } from "@/helper/types";
import { courseList } from "@/helper/data_helper";

interface ContactProps {
  onNavigate?: (page: PageType) => void;
}

// Contact Section
export default function Contact({ onNavigate }: ContactProps) {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    course: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => {
      setFormStatus("sent");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        course: "",
        message: ""
      });
      setTimeout(() => setFormStatus("idle"), 4000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Icon_Helper.contact.map size={22} />,
      title: "Our Location",
      content: "12 MindLink Boulevard, Knowledge Park\nCoimbatore, Tamil Nadu 604014",
      detail: "Visit our campus for a tour"
    },
    {
      icon: <Icon_Helper.contact.phone size={22} />,
      title: "Call Us",
      content: "+91 9894012596\n+91 8056046856",
      detail: "Mon–Sat, 9am – 7pm"
    },
    {
      icon: <Icon_Helper.contact.mail size={22} />,
      title: "Email Us",
      content: "admin@mindlink.solutions\nacademy@mindlink.solutions",
      detail: "24/7 response within 4 hours"
    },
    {
      icon: <Icon_Helper.contact.link size={22} />,
      title: "Follow Us",
      content: "@mindlinkofficial",
      detail: "Instagram, LinkedIn, YouTube, Twitter"
    },
  ];

  const batchDetails = [
    { label: "HR", seats: "12", date: "May 15" },
    { label: "Health", seats: "8", date: "May 18" },
    { label: "Safety", seats: "15", date: "May 20" },
    { label: "Biz", seats: "10", date: "May 22" },
    { label: "FB", seats: "14", date: "May 25" },
    { label: "Fam", seats: "9", date: "May 28" },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="bg-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-wider">
              GET IN TOUCH
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Start Your{" "}
            <span className="text-red-600">Journey</span>{" "}
            Today
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Ready to transform your life? Reach out — we're here to guide you to the right program for your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Column - Contact Info */}
          <div>
            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, idx) => (
                <div 
                  key={item.title} 
                  className="group bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-x-1 border border-gray-100"
                >
                  <div className="flex gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white shadow-lg transition-all duration-300 group-hover:scale-110">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm whitespace-pre-line">
                        {item.content}
                      </p>
                      <p className="text-red-600 text-xs mt-1 font-medium">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Batch Info Card */}
            <div className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-2xl p-6 shadow-xl transition-all duration-300 hover:shadow-2xl">
              <div className="text-center mb-4">
                <div className="inline-block bg-white/20 rounded-full px-3 py-1 text-white text-xs font-bold mb-2">
                  🎯 NEXT BATCH STARTS
                </div>
                <h3 className="font-black text-3xl md:text-4xl text-white mb-2">
                  May 15, 2026
                </h3>
                <div className="w-16 h-0.5 bg-white/30 mx-auto mb-3"></div>
                <span className="text-red-100 text-sm font-semibold block mb-4">
                  ⚡ Limited seats — 15% early enrollment discount
                </span>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                {batchDetails.map((item, idx) => (
                  <div key={idx} className="bg-white/15 rounded-xl p-3 text-center hover:bg-white/25 transition-all duration-300 hover:scale-105">
                    <div className="font-black text-2xl text-white">
                      {item.seats}
                    </div>
                    <div className="text-red-200 text-xs font-bold uppercase mt-1">
                      {item.label}
                    </div>
                    <div className="text-white/60 text-[10px] mt-1">
                      {item.date}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 text-center">
                <div className="inline-flex items-center gap-2 text-red-100 text-xs">
                  <span>✨</span>
                  Apply before May 10 for early bird offer
                  <span>✨</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-1 bg-red-600 mx-auto mb-3 rounded-full"></div>
              <h3 className="text-2xl font-bold text-gray-900">Enrollment Inquiry</h3>
              <p className="text-gray-500 text-sm mt-1">Fill the form and we'll get back to you within 24 hours</p>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-wider font-semibold mb-2">
                    First Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all duration-300"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-wider font-semibold mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all duration-300"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div className="mt-4">
                <label className="block text-xs text-gray-500 uppercase tracking-wider font-semibold mb-2">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all duration-300"
                  placeholder="you@example.com"
                />
              </div>
              
              <div className="mt-4">
                <label className="block text-xs text-gray-500 uppercase tracking-wider font-semibold mb-2">
                  Phone Number <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all duration-300"
                  placeholder="+91 98765 43210"
                />
              </div>
              
              <div className="mt-4">
                <label className="block text-xs text-gray-500 uppercase tracking-wider font-semibold mb-2">
                  Course Interest <span className="text-red-600">*</span>
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all duration-300 bg-white"
                >
                  <option value="">Select a Course</option>
                  {courseList.map((c) => (
                    <option key={c.id} value={c.title}>{c.title}</option>
                  ))}
                </select>
              </div>
              
              <div className="mt-4">
                <label className="block text-xs text-gray-500 uppercase tracking-wider font-semibold mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all duration-300 resize-none"
                  placeholder="Tell us about yourself and your goals..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={formStatus === "sending"}
                className="w-full mt-6 bg-gradient-to-r from-red-600 to-red-700 text-white py-4 rounded-xl font-bold uppercase tracking-wider text-sm hover:from-red-700 hover:to-red-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === "sending" ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : formStatus === "sent" ? (
                  "✓ Inquiry Sent!"
                ) : (
                  "Send Inquiry →"
                )}
              </button>
              
              <p className="text-center text-gray-400 text-xs mt-4">
                We respect your privacy. No spam, ever.
              </p>
            </form>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mt-16 bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
          <div className="h-64 bg-gradient-to-br from-red-600/20 to-red-700/20 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-3">📍</div>
              <p className="text-gray-600">Interactive Map</p>
              <p className="text-sm text-gray-500">12 MindLink Boulevard, Knowledge Park, Chennai</p>
              <button className="mt-3 text-red-600 text-sm font-semibold hover:underline">
                Get Directions →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}