import { Award, Smile, PhoneCall } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section 
      id="home" 
      className="relative pt-12 pb-16 md:pt-16 md:pb-24 px-4 md:px-10 overflow-hidden bg-white shrink-0"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Copy Panel */}
        <div className="lg:col-span-6 z-10 space-y-6 md:space-y-8 text-left animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-[54px] font-bold text-slate-900 leading-tight tracking-tight font-display">
            Your Perfect Smile <br />
            <span className="text-brand-teal">Starts Here</span>
          </h1>
          
          <p className="text-sm md:text-[17px] leading-relaxed text-slate-500 max-w-xl font-normal">
            Advanced Dental Care with Modern Technology & Compassionate Treatment. 
            Experience dentistry redefined in a pristine, relaxing environment designed for your comfort and absolute surgical precision.
          </p>

          <div className="flex flex-wrap gap-4 pt-1">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center bg-brand-teal hover:bg-brand-teal-dark text-white text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full shadow-lg transition-all duration-200 hover:scale-105"
            >
              Book Appointment
            </button>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              referrerPolicy="no-referrer"
              className="inline-flex items-center justify-center border-2 border-slate-900 text-slate-950 text-xs font-bold uppercase tracking-wider px-7 py-3.5 rounded-full hover:bg-slate-50 transition-colors duration-200"
            >
              <PhoneCall className="w-4 h-4 mr-2 text-brand-teal shrink-0 fill-brand-teal/10" />
              WhatsApp Consultation
            </a>
          </div>

          {/* Social Proof Benchmarks */}
          <div className="flex flex-wrap gap-8 items-center pt-6 border-t border-slate-100">
            <div className="flex items-center text-left">
              <div className="bg-slate-100 text-slate-800 p-2.5 rounded-full mr-3.5 flex items-center justify-center shrink-0 border border-slate-200">
                <Award className="w-5 h-5 text-brand-teal" />
              </div>
              <div>
                <p className="text-xl font-bold text-slate-900 leading-none">10+</p>
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mt-1">
                  Years Experience
                </p>
              </div>
            </div>

            <div className="flex items-center text-left">
              <div className="bg-slate-100 text-slate-800 p-2.5 rounded-full mr-3.5 flex items-center justify-center shrink-0 border border-slate-200">
                <Smile className="w-5 h-5 text-brand-teal" />
              </div>
              <div>
                <p className="text-xl font-bold text-slate-900 leading-none">5000+</p>
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mt-1">
                  Happy Smiles
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Gallery Graphic Panel */}
        <div className="lg:col-span-6 relative mt-10 lg:mt-0 flex justify-center">
          <div className="relative w-full max-w-md sm:max-w-lg aspect-square rounded-2xl overflow-hidden shadow-2xl bg-slate-50 hover:shadow-cyan-100 transition-all duration-300">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-egDk2zzEvIRATtXZCllgSXdczR2-Ca1rTUWyO1vig5LGa5mkDgXIqnJpswqYdpSOUv7-IGiZ_QvkWcO3Un12cMqKESVtf7ePLtU22ZastKTfeNqJno4mjiTasqoW1zvWvG9leTvLhyM5wqBEpqdY4BTZkwn3dbVMAdPIIbp5GpwbY7bluJKTopNXUY4IcrREfgLmoAosZiMYFAJSJcyRoWlkMrxHr6xL-ERzvci0cY7Pky9F4lEcPYWqFJ5f6UP3oWYVZ8XQmJA"
              alt="Patient smiling in modern dental clinic chair during consultation"
              referrerPolicy="no-referrer"
              className="object-cover w-full h-full scale-102 hover:scale-105 transition-transform duration-700"
            />
            {/* Visual ambient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Abstract soft backgrounds */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-teal-light rounded-full mix-blend-multiply filter blur-2xl opacity-40 -z-10 pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-slate-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 -z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
