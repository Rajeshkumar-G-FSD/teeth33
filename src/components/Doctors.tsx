import { useState } from 'react';
import { Calendar, Info, X, Star, Shield, Award } from 'lucide-react';
import { Doctor } from '../types';

interface DoctorsProps {
  doctors: Doctor[];
  onBookWithDoctor: (doctorId: string) => void;
}

export default function Doctors({ doctors, onBookWithDoctor }: DoctorsProps) {
  const [activeDoctor, setActiveDoctor] = useState<Doctor | null>(null);

  return (
    <section 
      id="doctors" 
      className="py-16 md:py-24 px-4 md:px-10 bg-slate-50 border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 text-left">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight font-display">
              Meet Our Experts
            </h2>
            <p className="text-sm md:text-base text-slate-505 leading-relaxed mt-3">
              Our team of highly qualified specialists is dedicated to providing personalized, 
              compassionate care using the latest dental advancements and cutting-edge biocompatible techniques.
            </p>
          </div>
        </div>

        {/* Doctor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:translate-y-[-4px] border border-slate-200/60 group transition-all duration-300"
            >
              {/* Image Frame */}
              <div className="aspect-[4/5] overflow-hidden bg-slate-100 relative">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
                
                {/* Float Badge Experience */}
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-brand-teal-dark text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-slate-100 shadow-xs">
                  {doctor.experience}
                </span>
              </div>

              {/* Doctor details */}
              <div className="p-6 text-center space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight font-display">
                    {doctor.name}
                  </h3>
                  <p className="text-xs md:text-sm text-brand-teal font-semibold mt-1">
                    {doctor.role}
                  </p>
                </div>

                {/* Specialties tag block */}
                <div className="flex flex-wrap gap-1.5 justify-center">
                  {doctor.specialties.slice(0, 3).map((spec, itemI) => (
                    <span 
                      key={itemI} 
                      className="text-[10px] bg-slate-50 border border-slate-100 text-slate-500 font-medium px-2.5 py-1 rounded-full"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Core Buttons */}
                <div className="flex justify-center space-x-3 pt-2">
                  <button
                    onClick={() => onBookWithDoctor(doctor.id)}
                    title="Book Appointment with doctor"
                    className="w-11 h-11 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-650 hover:bg-brand-teal hover:text-white hover:border-brand-teal transition-all duration-200 hover:scale-105 active:scale-95 shadow-xs"
                  >
                    <Calendar className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setActiveDoctor(doctor)}
                    title="View Bio and Credentials"
                    className="w-11 h-11 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-650 hover:bg-black hover:text-white hover:border-black transition-all duration-200 hover:scale-105 active:scale-95 shadow-xs"
                  >
                    <Info className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Biographic Information Modal */}
        {activeDoctor && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div 
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs" 
              onClick={() => setActiveDoctor(null)} 
            />
            <div className="relative bg-white rounded-2xl w-full max-w-lg shadow-2xl border border-slate-150 overflow-hidden z-10 animate-fade-in">
              <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <div className="flex items-center gap-3">
                  <img 
                    src={activeDoctor.image} 
                    alt={activeDoctor.name} 
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover border border-slate-200 shrink-0"
                  />
                  <div>
                    <h4 className="text-base font-bold text-slate-950 font-display">{activeDoctor.name}</h4>
                    <p className="text-xs text-brand-teal font-semibold">{activeDoctor.role}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setActiveDoctor(null)}
                  className="p-1 px-2 hover:bg-slate-250 text-slate-400 hover:text-slate-700 transition-colors rounded-full"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-6 space-y-5">
                <div className="space-y-1.5">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.1">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> Specialist Summary & Bio
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                    {activeDoctor.description}
                  </p>
                </div>

                <div className="space-y-2 border-t border-b border-slate-105 py-4 my-2">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5 text-brand-teal" /> Verified Clinical Domains
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {activeDoctor.specialties.map((spec, sI) => (
                      <span 
                        key={sI} 
                        className="text-[11px] bg-sky-50 text-brand-teal-dark border border-sky-100/60 font-semibold px-3 py-1 rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions inside bio */}
                <div className="flex items-center gap-2 pt-1.5 justify-end">
                  <button
                    onClick={() => setActiveDoctor(null)}
                    className="px-5 py-2.5 rounded-full text-xs font-semibold text-slate-650 hover:bg-slate-50 border border-slate-300 transition-colors"
                  >
                    Dismiss
                  </button>
                  <button
                    onClick={() => {
                      onBookWithDoctor(activeDoctor.id);
                      setActiveDoctor(null);
                    }}
                    className="bg-brand-teal hover:bg-brand-teal-dark text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-md"
                  >
                    <Award className="w-4 h-4 text-brand-teal-light" /> Book Consultant
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
