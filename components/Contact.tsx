import { courseList } from "@/helper/data_helper";
import Icon_Helper from "@/helper/icon_helper";
import { useState } from "react";

// Contact Section
export default function Contact (){
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">(
    "idle",
  );
  const handleSubmit = () => {
    setFormStatus("sending");
    setTimeout(() => {
      setFormStatus("sent");
      setTimeout(() => setFormStatus("idle"), 4000);
    }, 1500);
  };
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#fdf0f0] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 text-[#d42b2b] text-xs tracking-wider uppercase font-bold mb-3">
          <span className="w-6 h-0.5 bg-[#d42b2b]"></span> Get in Touch
        </div>
        <h2 className="font-['Playfair_Display'] text-3xl lg:text-4xl font-bold mb-3">
          Start Your <span className="text-[#d42b2b] italic">Journey</span>{" "}
          Today
        </h2>
        <div className="w-12 h-0.5 bg-[#d42b2b] mb-4"></div>
        <p className="text-gray-500 max-w-xl mb-12">
          Ready to transform your life? Reach out — we're here to guide you to
          the right program for your goals.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            {[
              {
                icon: <Icon_Helper.contact.map size={20} />,
                title: "Our Location",
                content:
                  "12 Empzon Boulevard, Knowledge Park\nChennai, Tamil Nadu 600001",
              },
              {
                icon: <Icon_Helper.contact.phone size={20} />,
                title: "Call Us",
                content: "+91 98765 43210\nMon–Sat, 9am – 7pm",
              },
              {
                icon: <Icon_Helper.contact.mail size={20} />,
                title: "Email Us",
                content: "info@empzon.com\nadmissions@empzon.com",
              },
              {
                icon: <Icon_Helper.contact.link size={20} />,
                title: "Follow Us",
                content: "@empzonofficial on Instagram, LinkedIn & YouTube",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 mb-6">
                <div className="w-12 h-12 bg-[#d42b2b] rounded-xl flex items-center justify-center text-white">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold">{item.title}</h4>
                  <p className="text-gray-500 text-sm whitespace-pre-line">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
            <div className="bg-gradient-to-br from-[#d42b2b] to-[#a81f1f] rounded-xl p-6 mt-6">
              <p className="text-[#ffcccc] text-[10px] tracking-wider uppercase mb-2">
                Next Batch Starts
              </p>
              <h3 className="font-['Playfair_Display'] text-3xl font-bold text-white">
                May 15, 2026
              </h3>
              <span className="text-[#ffcccc] text-sm">
                Limited seats — 15% early enrollment discount
              </span>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mt-4">
                {["HR", "Health", "Safety", "Biz", "FB", "Fam"].map(
                  (label, idx) => (
                    <div
                      key={idx}
                      className="bg-white/15 rounded-lg p-2 text-center"
                    >
                      <div className="font-['Playfair_Display'] text-xl font-bold text-white">
                        {["12", "8", "15", "10", "14", "9"][idx]}
                      </div>
                      <div className="text-[#ffcccc] text-[10px] uppercase">
                        {label}
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-[#f0d0d0] shadow-lg">
            <p className="font-['Playfair_Display'] text-xl font-bold mb-6">
              Enrollment Inquiry
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] text-gray-500 uppercase tracking-wider font-semibold mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full border border-[#e8d0d0] rounded-xl px-4 py-3 focus:outline-none focus:border-[#d42b2b] focus:ring-2 focus:ring-[#d42b2b]/20"
                  placeholder="Priya"
                />
              </div>
              <div>
                <label className="block text-[10px] text-gray-500 uppercase tracking-wider font-semibold mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full border border-[#e8d0d0] rounded-xl px-4 py-3 focus:outline-none focus:border-[#d42b2b]"
                  placeholder="Sharma"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-[10px] text-gray-500 uppercase tracking-wider font-semibold mb-1">
                Email Address
              </label>
              <input
                type="email"
                className="w-full border border-[#e8d0d0] rounded-xl px-4 py-3 focus:outline-none focus:border-[#d42b2b]"
                placeholder="you@email.com"
              />
            </div>
            <div className="mt-4">
              <label className="block text-[10px] text-gray-500 uppercase tracking-wider font-semibold mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full border border-[#e8d0d0] rounded-xl px-4 py-3 focus:outline-none focus:border-[#d42b2b]"
                placeholder="+91 98765 43210"
              />
            </div>
            <div className="mt-4">
              <label className="block text-[10px] text-gray-500 uppercase tracking-wider font-semibold mb-1">
                Course Interest
              </label>
              <select className="w-full border border-[#e8d0d0] rounded-xl px-4 py-3 focus:outline-none focus:border-[#d42b2b] bg-white">
                <option>Select a Course</option>
                {courseList.map((c) => (
                  <option key={c.slug}>{c.title}</option>
                ))}
              </select>
            </div>
            <div className="mt-4">
              <label className="block text-[10px] text-gray-500 uppercase tracking-wider font-semibold mb-1">
                Your Message
              </label>
              <textarea
                rows={3}
                className="w-full border border-[#e8d0d0] rounded-xl px-4 py-3 focus:outline-none focus:border-[#d42b2b]"
                placeholder="Tell us about yourself and your goals..."
              ></textarea>
            </div>
            <button
              onClick={handleSubmit}
              className="w-full mt-6 bg-gradient-to-r from-[#d42b2b] to-[#a81f1f] text-white py-4 rounded-xl font-bold uppercase tracking-wider text-sm hover:-translate-y-1 transition-all shadow-lg"
            >
              {formStatus === "sending"
                ? "Sending..."
                : formStatus === "sent"
                  ? "✓ Inquiry Sent!"
                  : "Send Inquiry →"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
