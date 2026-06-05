import { useState } from 'react';
import { Smile, ShieldCheck, Sparkles, BriefcaseMedical, SmilePlus, ArrowRight, Eye, Calendar, Clock, DollarSign, X } from 'lucide-react';
import { Treatment } from '../types';

interface TreatmentsProps {
  treatments: Treatment[];
  onBookTreatment: (treatmentId: string) => void;
}

export default function Treatments({ treatments, onBookTreatment }: TreatmentsProps) {
  const [activeDetail, setActiveDetail] = useState<Treatment | null>(null);

  const getIcon = (iconName: Treatment['iconName']) => {
    switch (iconName) {
      case 'Smile':
        return <Smile className="w-8 h-8 text-brand-teal" />;
      case 'Shield':
        return <ShieldCheck className="w-6 h-6 text-brand-teal" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-brand-teal" />;
      case 'Activity':
        return <BriefcaseMedical className="w-6 h-6 text-brand-teal" />;
      case 'Smile2':
        return <SmilePlus className="w-6 h-6 text-brand-teal" />;
      default:
        return <Smile className="w-6 h-6 text-brand-teal" />;
    }
  };

  // Divide into Bento structures
  const smileMakeover = treatments.find(t => t.id === 'smile-makeover');
  const fallbackSmileMakeover: Treatment = {
    id: 'smile-makeover',
    name: 'Smile Makeover',
    description: 'A customized treatment plan combining multiple cosmetic procedures to achieve your dream smile. We analyze your facial aesthetics to design a smile that complements your unique features.',
    longDescription: 'Our signature Smile Makeover is a comprehensive aesthetic rehabilitation. It blends ceramic veneers, modern crowns, discrete composite bonding, and digital smile design mapping to craft a harmonious, highly customized smile line aligned with your natural facial proportions.',
    iconName: 'Smile',
    featured: true,
    duration: '2 - 3 Sessions',
    costRange: 'Premium / Bespoke'
  };

  const largeCard = smileMakeover || fallbackSmileMakeover;
  const regularCards = treatments.filter(t => t.id !== 'smile-makeover');

  return (
    <section 
      id="treatments" 
      className="py-16 md:py-24 px-4 md:px-10 bg-[#faf9f9] border-t border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight font-display">
            Comprehensive Treatments
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
            We offer a wide range of advanced dental procedures tailored to your unique needs, 
            ensuring optimal oral health and an outstanding, radiant smile.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* Main Large Card spanned multi-column */}
          <div 
            onClick={() => setActiveDetail(largeCard)}
            className="md:col-span-2 lg:row-span-2 bg-white rounded-2xl p-8 border border-slate-200/60 shadow-sm hover:shadow-xl hover:shadow-cyan-50/20 transition-all duration-300 group flex flex-col justify-between cursor-pointer relative overflow-hidden"
          >
            <div className="space-y-6">
              <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center border border-slate-100 group-hover:bg-brand-teal/10 group-hover:border-brand-teal/20 transition-all duration-300">
                {getIcon(largeCard.iconName)}
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-950 tracking-tight font-display">
                  {largeCard.name}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {largeCard.description}
                </p>
              </div>
            </div>

            <div className="pt-8 mt-auto flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal flex items-center group-hover:text-brand-teal-dark transition-colors">
                Learn more <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1.5 transition-transform" />
              </span>
              <span className="text-[10px] text-slate-400 font-bold bg-slate-50 px-2.5 py-1.5 rounded-full border border-slate-100 uppercase tracking-widest flex items-center gap-1">
                <Eye className="w-3 h-3 text-slate-400" /> Details
              </span>
            </div>
          </div>

          {/* Regular bento small cards */}
          {regularCards.map((treatment) => (
            <div
              key={treatment.id}
              onClick={() => setActiveDetail(treatment)}
              className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm hover:shadow-xl hover:shadow-cyan-50/20 transition-all duration-300 group flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-4">
                <div className="bg-slate-50 w-12 h-12 rounded-full flex items-center justify-center border border-slate-100 group-hover:bg-brand-teal/10 group-hover:border-brand-teal/20 transition-all duration-300 shrink-0">
                  {getIcon(treatment.iconName)}
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900 tracking-tight font-display">
                    {treatment.name}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed line-clamp-3">
                    {treatment.description}
                  </p>
                </div>
              </div>

              <div className="pt-5 mt-auto flex items-center justify-between border-t border-slate-50">
                <span className="text-[11px] font-semibold text-slate-400 hover:text-brand-teal transition-colors flex items-center">
                  Learn detail
                </span>
                <span className="w-7 h-7 rounded-full bg-slate-50 group-hover:bg-brand-teal/10 flex items-center justify-center transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-teal transition-colors group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
          ))}

        </div>

        {/* View all treatment button */}
        <div className="text-center mt-12">
          <button 
            onClick={() => setActiveDetail(treatments[0])}
            className="inline-flex items-center border-b-2 border-slate-900 text-slate-950 pb-1 font-bold text-xs uppercase tracking-wider hover:text-brand-teal hover:border-brand-teal transition-all cursor-pointer"
          >
            View All Services <ArrowRight className="w-4 h-4 ml-1.5" />
          </button>
        </div>

        {/* Treatment detail sliding modal / dialog */}
        {activeDetail && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div 
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs" 
              onClick={() => setActiveDetail(null)} 
            />
            <div className="relative bg-white rounded-2xl w-full max-w-lg shadow-2xl border border-slate-150 overflow-hidden z-10 animate-fade-in">
              <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-brand-teal/10 rounded-lg">
                    {getIcon(activeDetail.iconName)}
                  </div>
                  <h4 className="text-lg font-bold text-slate-950 font-display">{activeDetail.name}</h4>
                </div>
                <button 
                  onClick={() => setActiveDetail(null)}
                  className="p-1 px-2 hover:bg-slate-250 text-slate-400 hover:text-slate-700 transition-colors rounded-full"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-6 space-y-5">
                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-brand-teal uppercase tracking-widest">Medical Overview</p>
                  <p className="text-sm text-slate-500 leading-relaxed font-normal">
                    {activeDetail.longDescription || activeDetail.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 border-t border-b border-slate-105 py-4 my-2 text-xs">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-brand-teal" />
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Treatment Cycle</p>
                      <p className="font-semibold text-slate-800">{activeDetail.duration || '1 Session'}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-brand-teal" />
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Average Bracket</p>
                      <p className="font-semibold text-slate-800">{activeDetail.costRange || 'Functional Cost'}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    onClick={() => {
                      onBookTreatment(activeDetail.id);
                      setActiveDetail(null);
                    }}
                    className="flex-1 bg-brand-teal hover:bg-brand-teal-dark text-white py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:translate-y-[-1px] transition-all flex items-center justify-center gap-1.5"
                  >
                    <Calendar className="w-4 h-4" /> Book Placement Now
                  </button>
                  <button
                    onClick={() => setActiveDetail(null)}
                    className="px-5 py-3 border border-slate-300 hover:bg-slate-50 rounded-full text-xs font-bold uppercase tracking-wider text-slate-600 transition-colors"
                  >
                    Dismiss
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
