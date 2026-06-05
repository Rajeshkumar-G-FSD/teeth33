import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, CalendarDays, Check, CornerDownRight } from 'lucide-react';

export default function ContactSection() {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName || !inquiryEmail || !inquiryMessage) return;
    
    // Simulate inquiry submission
    setSubmitted(true);
    setTimeout(() => {
      setInquiryName('');
      setInquiryEmail('');
      setInquiryMessage('');
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section 
      id="contact" 
      className="py-16 md:py-24 px-4 md:px-10 bg-white border-b border-slate-105"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
        
        {/* Left Side Coordinate block */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <p className="text-[10px] font-bold text-brand-teal uppercase tracking-widest">Connect With Us</p>
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-slate-900 tracking-tight leading-tight font-display">
              Reach Out Online Or <br />
              Visit Our Surgical Suite
            </h2>
            <p className="text-sm text-slate-505 leading-relaxed font-normal">
              Located within the premium Medical District, TOOTH 33 caters to domestic and overseas cosmetic patients with designated valet access and luxury lounges.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            <div className="flex items-start">
              <div className="w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center border border-teal-100 shrink-0 mr-4">
                <MapPin className="w-5 h-5 text-brand-teal" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-slate-900 uppercase tracking-wider">Clinical Location</p>
                <p className="text-slate-500 mt-1 font-normal">
                  123 Dental Street, Medical District, City, 10001
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center border border-teal-100 shrink-0 mr-4">
                <Phone className="w-5 h-5 text-brand-teal" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-slate-900 uppercase tracking-wider">Inquiry lines</p>
                <p className="text-slate-500 mt-1 font-normal">
                  +1 (234) 567-890 — General Support <br />
                  +1 (234) 567-891 — Surgical Coordination
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center border border-teal-100 shrink-0 mr-4">
                <Mail className="w-5 h-5 text-brand-teal" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-slate-900 uppercase tracking-wider">Emergency Inbox</p>
                <p className="text-slate-500 mt-1 font-normal">
                  hello@tooth33.com <br />
                  aesthetic@tooth33.com
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center border border-teal-100 shrink-0 mr-4">
                <Clock className="w-5 h-5 text-brand-teal" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-slate-900 uppercase tracking-wider">Operation Times</p>
                <p className="text-slate-500 mt-1 font-normal">
                  Monday to Saturday: 9:00 AM – 8:00 PM <br />
                  Sundays: Emergency Surgery Call Duty Only
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side inquiry/Map grid */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-[#faf9f9] border border-slate-200/60 p-6 sm:p-8 rounded-2xl">
            <h3 className="text-lg font-bold text-slate-950 font-display flex items-center gap-1.5 mb-4">
              <CalendarDays className="w-5 h-5 text-brand-teal" /> Dispatch An Inquiry
            </h3>

            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900 font-display">Inquiry Transmitted Successfully</h4>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Our clinical care representative will call you back within 15 minutes to address your query.
                </p>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-semibold text-slate-400 uppercase tracking-wider">Full name</label>
                    <input
                      type="text"
                      required
                      placeholder="John Smith"
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-250 bg-white text-slate-800 text-xs focus:ring-1 focus:ring-brand-teal"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-semibold text-slate-400 uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={inquiryEmail}
                      onChange={(e) => setInquiryEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-250 bg-white text-slate-800 text-xs focus:ring-1 focus:ring-brand-teal"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-400 uppercase tracking-wider">Your Message</label>
                  <textarea
                    required
                    placeholder="Hello, I would like to inquire about the estimated completion duration for dental implants. Please get back to me..."
                    rows={4}
                    value={inquiryMessage}
                    onChange={(e) => setInquiryMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-250 bg-white text-slate-800 text-xs focus:ring-1 focus:ring-brand-teal resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="bg-brand-teal hover:bg-brand-teal-dark font-semibold text-white px-6 py-3 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 cursor-pointer shadow-sm shadow-cyan-100"
                  >
                    Submit Case Sheet <CornerDownRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Premium visual micro-map layout placeholder */}
          <div className="rounded-2xl border border-slate-205 overflow-hidden h-44 bg-slate-100 shadow-sm relative">
            {/* Styled vector placeholder mapping */}
            <div className="absolute inset-0 bg-[#f4f3f3] flex flex-col justify-center items-center p-6 text-center">
              {/* Fake grid lines represent street map drafting */}
              <div className="absolute inset-0 opacity-15" style={{
                backgroundImage: 'radial-gradient(circle, #2c6480 1px, transparent 1px)',
                backgroundSize: '24px 24px'
              }} />
              <div className="z-10 space-y-2">
                <MapPin className="w-6 h-6 text-brand-teal shrink-0 animate-bounce mx-auto" />
                <p className="text-[11px] font-bold text-slate-900 uppercase tracking-wider font-display">TOOTH 33 CLINIC SUITE</p>
                <p className="text-[10px] text-slate-400 max-w-xs font-normal">
                  Surgical Pavilion Unit 3, Medical Heights Avenue, NYC
                </p>
                <a 
                  href="https://google.com/maps" 
                  target="_blank" 
                  referrerPolicy="no-referrer"
                  className="inline-block text-[10px] font-bold text-brand-teal hover:underline leading-none pt-1"
                >
                  Retrieve Travel Directions →
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
