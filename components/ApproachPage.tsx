  // components/ApproachPage.tsx
  "use client";

  import Icon_Helper from "@/helper/icon_helper";
  import { useReveal } from "@/hooks/useReveal";
  import { useState, useEffect, useRef } from "react";

  export default function ApproachPage() {
    useReveal();
    const [activeStep, setActiveStep] = useState<number | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => observer.disconnect();
    }, []);

    const steps = [
      { 
        num: "01", 
        title: "Assess & Understand", 
        desc: "We begin with a personalized assessment to understand each student's background, goals, and challenges — ensuring the journey is tailored from day one.",
        icon: Icon_Helper.hero.shield,
        duration: "Week 1-2"
      },
      { 
        num: "02", 
        title: "Expert-Led Learning", 
        desc: "Courses delivered by certified professionals combining live sessions, recorded modules, case studies, and hands-on practice to build genuine competence.",
        icon: Icon_Helper.hero.Instructors,
        duration: "Week 3-8"
      },
      { 
        num: "03", 
        title: "Practice & Apply", 
        desc: "Real-world exercises, role-plays, and scenario-based training ensure students can apply what they learn beyond the classroom setting.",
      icon: Icon_Helper.hero.target,
        duration: "Week 9-12"
      },
      { 
        num: "04", 
        title: "Certify & Continue", 
        desc: "Students receive industry-recognized certification and lifelong access to the MINDLINK alumni support network and updated materials.",
      icon: Icon_Helper.hero.cap,
        duration: "Week 13-14"
      },
    ];

    const pillars = [
  { icon: Icon_Helper.hero.medal, title: "Knowledge-First", desc: "Deep understanding before practice — we never skip the 'why'", color: "from-red-500 to-orange-500" },
  { icon: Icon_Helper.hero.target, title: "Skill-Based Training", desc: "Practical drills, simulations, and real applications every session", color: "from-red-600 to-red-500" },
  { icon: Icon_Helper.hero.handshake, title: "Community Support", desc: "Peer learning, group sessions, and mentorship throughout", color: "from-rose-500 to-red-500" },
  { icon: Icon_Helper.hero.shield, title: "Progress Tracking", desc: "Regular assessments and feedback for consistent growth", color: "from-red-400 to-rose-500" },
  { icon: Icon_Helper.hero.cup, title: "Outcome-Focused", desc: "Every course is designed around measurable, life-changing results", color: "from-orange-500 to-red-500" },
];

    const stats = [
  { num: "94%", label: "Completion Rate", icon: Icon_Helper.hero.goal, trend: "+12%" },
  { num: "4.9", label: "Avg. Rating", icon: Icon_Helper.hero.stars, trend: "Excellent" },
  { num: "87%", label: "Career Impact", icon: Icon_Helper.hero.handshake, trend: "+23%" },
  { num: "100%", label: "Recommend", icon: Icon_Helper.hero.heart, trend: "Guaranteed" },
];

    return (
      <div className="min-h-screen pt-28 pb-20 bg-gradient-to-b from-white via-gray-50 to-white">
        <section ref={sectionRef} className="px-6">
          <div className="max-w-7xl mx-auto">
            
            {/* Hero Header Section */}
            <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-block mb-4">
                <div className="bg-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-wider">
                  OUR METHODOLOGY
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
                Our{" "}
                <span className="text-red-600">Comprehensive</span>
                <br />
                Approach to Excellence
              </h1>
              <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Every MindLink program follows a proven 4-stage model designed to ensure lasting impact,
                real-world application, and genuine personal transformation.
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 mt-8">
              
              {/* Left Column - Journey Timeline */}
              <div className="relative">
                {/* Vertical Connector Line */}
                <div className="absolute left-7 top-8 bottom-8 w-0.5 bg-gradient-to-b from-red-600 via-red-400 to-transparent hidden md:block"></div>
                
                <div className="space-y-8">
    {steps.map((step, idx) => {
      const Icon = step.icon;

      return (
        <div
          key={step.num}
          className={`group relative transition-all duration-700 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
          style={{ transitionDelay: `${idx * 150}ms` }}
          onMouseEnter={() => setActiveStep(idx)}
          onMouseLeave={() => setActiveStep(null)}
        >
          <div className="flex gap-6 items-start">
            {/* Step Number Circle */}
            <div className="relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                {step.num}
              </div>
              {/* Pulse Effect */}
              <div className="absolute inset-0 bg-red-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
            </div>

            <div className="flex-1 bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-red-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                  {step.title}
                </h3>
                <span className="text-xs font-mono text-red-600 bg-red-50 px-2 py-1 rounded">
                  {step.duration}
                </span>
              </div>

              <p className="text-gray-500 text-sm leading-relaxed mb-3">
                {step.desc}
              </p>

              <div className="flex items-center gap-2 text-xs text-gray-400">
              
                  <Icon size={20} className="w-4 h-4 text-red-500" />
             
                <span>Phase {step.num}</span>
              </div>

              {/* Expandable Detail */}
              <div
                className={`mt-3 overflow-hidden transition-all duration-300 ${
                  activeStep === idx ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pt-3 text-xs text-red-600 font-semibold flex items-center gap-2">
                  <Icon_Helper.hero.stars size={20}/>
                  Learn more about {step.title.toLowerCase()}
                  <span>→</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </div>
              </div>

              {/* Right Column - Pillars & Stats */}
              <div className="space-y-6">
                {/* Core Pillars Card */}
                <div className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all duration-700 hover:shadow-xl ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '200ms' }}>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-red-600 text-xs font-bold tracking-wider mb-2 flex items-center gap-2">
                        <div className="w-8 h-px bg-red-600"></div>
                        CORE PILLARS
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        What Makes Us <span className="text-red-600">Different</span>
                      </h3>
                    </div>
                    <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-2xl">
                      <Icon_Helper.testimonial.office/>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                  {pillars.map((pillar, idx) => {
  const Icon = pillar.icon;

  return (
    <div
      key={pillar.title}
      className="group bg-gradient-to-r from-gray-50 to-white rounded-xl p-4 flex gap-4 items-center border border-gray-100 transition-all duration-300 hover:border-red-200 hover:translate-x-1 hover:shadow-md cursor-pointer"
    >
      <div className={`w-12 h-12 bg-gradient-to-br ${pillar.color} rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-md`}>
        <Icon className="w-5 h-5 text-white" />
      </div>

      <div className="flex-1">
        <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors">
          {pillar.title}
        </h4>
        <p className="text-gray-500 text-xs">
          {pillar.desc}
        </p>
      </div>

      <div className="text-gray-300 group-hover:text-red-600 transition-colors">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
})}
                  </div>
                </div>

                {/* Stats Card - Redesign */}
                <div className={`bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-2xl p-8 transition-all duration-700 hover:shadow-2xl hover:scale-[1.02] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '400ms' }}>
                  <div className="text-center mb-6">
                    <div className="text-white/80 text-xs font-bold tracking-wider uppercase">Our Impact</div>
                    <div className="text-white text-2xl font-bold mt-1">By The Numbers</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
      {stats.map((stat, idx) => {
  const Icon = stat.icon;

  return (
    <div key={stat.label} className="text-center group cursor-pointer">
      
      <div className="mb-1 transform group-hover:scale-110 transition-transform duration-300">
        <Icon size={20} className="w-6 h-6 text-white mx-auto" />
      </div>

      <div className="font-black text-3xl md:text-4xl text-white mb-1 group-hover:scale-110 transition-transform duration-300">
        {stat.num}
      </div>

      <div className="text-red-200 text-xs uppercase tracking-wide font-semibold">
        {stat.label}
      </div>

      <div className="text-red-300 text-[10px] mt-1">
        {stat.trend}
      </div>

    </div>
  );
})}
                  </div>

                  {/* Divider */}
                  <div className="border-t border-white/20 my-6"></div>
                  
                  {/* Mini CTA */}
                  <div className="text-center">
                    <p className="text-white text-xs mb-3">
                      Join thousands of successful graduates
                    </p>
                    <button className="bg-white text-red-600 px-6 py-2 rounded-full text-sm font-bold hover:shadow-lg transition-all duration-300 hover:scale-105">
                      Start Your Journey →
                    </button>
                  </div>
                </div>

                {/* Trust Badge */}
                <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '600ms' }}>
                  <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-red-600 border-2 border-white flex items-center justify-center text-white text-xs">P</div>
                      <div className="w-6 h-6 rounded-full bg-red-500 border-2 border-white flex items-center justify-center text-white text-xs">R</div>
                      <div className="w-6 h-6 rounded-full bg-red-400 border-2 border-white flex items-center justify-center text-white text-xs">S</div>
                    </div>
                    <span className="text-xs text-gray-600 flex items-center gap-1"><Icon_Helper.testimonial.star className="text-red"/> 3,200+ successful graduates</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA Banner */}
            <div className={`mt-16 bg-slate-200 from-red-50 to-white rounded-2xl p-8 text-center border border-red-100 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '700ms' }}>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Ready to Transform Your Career?
              </h3>
              <p className="text-gray-600 mb-4">
                Join our next batch starting May 15, 2026
              </p>
              <div className="flex gap-4 justify-center">
                <button className="bg-red-600 text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-all duration-300 hover:shadow-lg">
                  Apply Now
                </button>
                <button className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-full font-bold hover:bg-red-600 hover:text-white transition-all duration-300">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }