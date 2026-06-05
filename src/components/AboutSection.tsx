import { Layers, Flame, Milestone, Sparkles } from 'lucide-react';

export default function AboutSection() {
  const points = [
    {
      icon: <Layers className="w-5 h-5 text-brand-teal" />,
      title: 'Digital Dentistry Ecosystem',
      desc: 'We utilize advanced digital mock mapping, CBCT 3D clinical imaging, and intraoral cameras for micro-accuracy before any surgical placement.',
    },
    {
      icon: <Flame className="w-5 h-5 text-brand-teal" />,
      title: 'Relaxing Painless Sedation',
      desc: 'Experience luxury healthcare. We host personalized pain-reduction workflows, specialized audio treatment guides, and customized mild sedation.',
    },
    {
      icon: <Milestone className="w-5 h-5 text-brand-teal" />,
      title: 'Ultra-Sterile Operations',
      desc: 'Patient hygiene is our absolute ceiling. We adhere strictly to CDC sterilizing protocols with verified mechanical filtration and pristine standards.',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-brand-teal" />,
      title: 'Master Ceramic Aesthetics',
      desc: 'Collaborating directly with prime master ceramists, each composite veneer is custom-molded to match your unique optical dental line.',
    },
  ];

  return (
    <section 
      id="about" 
      className="py-16 md:py-24 px-4 md:px-10 bg-white border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16 text-left">
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <p className="text-[10px] font-bold text-brand-teal uppercase tracking-widest bg-slate-100 px-3 py-1.5 rounded-full inline-block border border-slate-250/30">
              Elite Dental Care
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight font-display">
              Uncompromising Standards <br />
              Of Clinical Performance
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-sm md:text-base text-slate-500 leading-relaxed font-normal">
              At TOOTH 33, we view dental procedures not as simple repairs, but as professional artistic and physical reconstructions. 
              By merging modern dental science with cozy boutique environments, our specialists can execute complex, painless smile reconstructions in a setting that values you completely.
            </p>
          </div>
        </div>

        {/* Feature Grid illustration */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {points.map((pt, idx) => (
            <div 
              key={idx}
              className="bg-[#faf9f9] border border-slate-200/50 rounded-2xl p-6 transition-all duration-300 hover:border-brand-teal/30 hover:bg-white hover:shadow-lg space-y-4"
            >
              <div className="w-10 h-10 bg-white shadow-xs rounded-xl flex items-center justify-center border border-slate-100 shrink-0">
                {pt.icon}
              </div>
              <div className="space-y-1.5">
                <h3 className="text-sm font-bold text-slate-950 font-display">
                  {pt.title}
                </h3>
                <p className="text-xs text-slate-450 leading-relaxed font-normal">
                  {pt.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
