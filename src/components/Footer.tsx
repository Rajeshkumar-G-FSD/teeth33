import { MapPin, Phone, Mail, Share2, Facebook, Twitter, Instagram, ArrowUp, ShieldAlert } from 'lucide-react';

interface FooterProps {
  onOpenAdmin: () => void;
}

export default function Footer({ onOpenAdmin }: FooterProps) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'TOOTH 33 Dental Care',
        text: 'Premium, Modern Dentistry Reconstructed in a Pristine Environment.',
        url: window.location.href
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Application link copied to clipboard!');
    }
  };

  return (
    <footer className="bg-black text-slate-300 border-t border-slate-900 shrink-0 select-none">
      
      {/* Top Banner section */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-start text-left">
        
        {/* Brand visual & descriptive tagline */}
        <div className="md:col-span-4 space-y-5">
          <a 
            href="#home" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:opacity-90 duration-200 transition-opacity flex items-center gap-2.5 cursor-pointer"
          >
            <img 
              src="https://i.postimg.cc/FKFLgvNR/tooth33.jpg" 
              alt="TOOTH 33 Dental Care Logo" 
              referrerPolicy="no-referrer"
              className="h-10 w-10 md:h-12 md:w-12 object-cover rounded-full border border-slate-850 shadow-sm" 
            />
            <span className="font-bold text-base tracking-tight text-white uppercase font-display mt-0.5">
              Tooth <span className="text-brand-teal">33</span>
            </span>
          </a>
          <p className="text-xs leading-relaxed text-slate-400 font-normal pr-4 max-w-sm">
            Elevating dental care through precision, technology, and compassionate service in a premium, sterilized boutique environment. Experience the gold standard of cosmetic health.
          </p>
          
          <div className="flex space-x-3 pt-2">
            <button 
              onClick={handleShare}
              title="Share Website"
              className="w-8 h-8 rounded-full bg-slate-900 hover:bg-brand-teal text-slate-300 hover:text-white flex items-center justify-center transition-colors shadow-xs hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
            </button>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              referrerPolicy="no-referrer"
              className="w-8 h-8 rounded-full bg-slate-900 hover:bg-brand-teal text-slate-300 hover:text-white flex items-center justify-center transition-colors shadow-xs hover:scale-105 active:scale-95 cursor-pointer animate-fade-in"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              referrerPolicy="no-referrer"
              className="w-8 h-8 rounded-full bg-slate-900 hover:bg-brand-teal text-slate-300 hover:text-white flex items-center justify-center transition-colors shadow-xs hover:scale-105 active:scale-95 cursor-pointer animate-fade-in"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              referrerPolicy="no-referrer"
              className="w-8 h-8 rounded-full bg-slate-900 hover:bg-brand-teal text-slate-300 hover:text-white flex items-center justify-center transition-colors shadow-xs hover:scale-105 active:scale-95 cursor-pointer animate-fade-in"
            >
              <Twitter className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Clinic navigation link mappings */}
        <div className="md:col-span-2.5 space-y-4">
          <h3 className="text-[10px] font-bold tracking-widest text-white uppercase text-left">Clinic</h3>
          <ul className="space-y-2 text-xs">
            <li>
              <a href="#about" className="text-slate-400 hover:text-brand-teal hover:underline underline-offset-4 transition-all">
                About Us
              </a>
            </li>
            <li>
              <a href="#doctors" className="text-slate-400 hover:text-brand-teal hover:underline underline-offset-4 transition-all">
                Our Doctors
              </a>
            </li>
            <li>
              <a href="#gallery" className="text-slate-400 hover:text-brand-teal hover:underline underline-offset-4 transition-all">
                Smile Gallery
              </a>
            </li>
            <li>
              <a href="#reviews" className="text-slate-400 hover:text-brand-teal hover:underline underline-offset-4 transition-all">
                Patient Reviews
              </a>
            </li>
          </ul>
        </div>

        {/* Legal & Help options */}
        <div className="md:col-span-2.5 space-y-4">
          <h3 className="text-[10px] font-bold tracking-widest text-white uppercase text-left">Legal & Help</h3>
          <ul className="space-y-2 text-xs">
            <li>
              <a href="#privacy" className="text-slate-400 hover:text-brand-teal hover:underline underline-offset-4 transition-all" onClick={(e) => e.preventDefault()}>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#terms" className="text-slate-400 hover:text-brand-teal hover:underline underline-offset-4 transition-all" onClick={(e) => e.preventDefault()}>
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#about" className="text-slate-400 hover:text-brand-teal hover:underline underline-offset-4 transition-all">
                Emergency Care
              </a>
            </li>
            <li>
              <a href="#contact" className="text-slate-400 hover:text-brand-teal hover:underline underline-offset-4 transition-all">
                Sitemap
              </a>
            </li>
            <li className="pt-1.5 border-t border-slate-900">
              <button 
                onClick={onOpenAdmin}
                className="text-brand-teal hover:text-brand-teal-light hover:underline underline-offset-4 transition-all uppercase text-[9px] font-bold tracking-widest flex items-center gap-1 cursor-pointer text-left"
              >
                <ShieldAlert className="w-3.5 h-3.5 shrink-0" /> Admin Portal
              </button>
            </li>
          </ul>
        </div>

        {/* Direct coordinate listing */}
        <div className="md:col-span-3 space-y-4">
          <h3 className="text-[10px] font-bold tracking-widest text-white uppercase text-left">Contact</h3>
          <ul className="space-y-3.5 text-xs">
            <li className="flex items-start">
              <MapPin className="w-4 h-4 text-brand-teal shrink-0 mr-2.5 mt-0.5" />
              <span className="text-slate-400 font-normal">
                123 Dental Street, Medical District, City, 10001
              </span>
            </li>
            <li className="flex items-center">
              <Phone className="w-4 h-4 text-brand-teal shrink-0 mr-2.5" />
              <span className="text-slate-400 font-normal">+1 (234) 567-890</span>
            </li>
            <li className="flex items-center">
              <Mail className="w-4 h-4 text-brand-teal shrink-0 mr-2.5" />
              <span className="text-slate-400 font-normal">hello@tooth33.com</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Legal bar */}
      <div className="border-t border-slate-900 bg-black py-8 px-4 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p className="text-slate-500 font-normal">
            © 2026 TOOTH 33 Dental Care. All rights reserved. Registered medical surgical clinic NY-90812.
          </p>
          <button
            onClick={handleScrollToTop}
            className="p-2 px-3 rounded-lg bg-slate-950 hover:bg-slate-900 text-slate-400 hover:text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors border border-slate-850/60 shadow-xs"
          >
            Back to Top <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
