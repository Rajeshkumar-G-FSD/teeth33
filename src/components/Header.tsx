import { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, MessageSquare, Menu, X, ShieldAlert } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
  onOpenAdmin: () => void;
  activeSection: string;
}

export default function Header({ onOpenBooking, onOpenAdmin, activeSection }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Treatments', href: '#treatments', id: 'treatments' },
    { label: 'Doctors', href: '#doctors', id: 'doctors' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Reviews', href: '#reviews', id: 'reviews' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-black text-white text-xs py-2 bg-primary px-4 md:px-10 hidden md:block select-none shrink-0 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center font-medium">
              <MapPin className="w-3.5 h-3.5 mr-1.5 text-brand-teal-light fill-brand-teal/80" />
              Amman Towers, Thindal, Erode
            </span>
            <span className="flex items-center font-medium">
              <Clock className="w-3.5 h-3.5 mr-1.5 text-brand-teal-light" />
              Mon-Sat: 9:30 AM - 9:00 PM | Sun: 10:00 AM - 9:00 PM
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a 
              href="tel:09944578366" 
              className="flex items-center hover:text-brand-teal-light font-medium transition-colors cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-brand-teal-light fill-brand-teal-light" />
              099445 78366
            </a>
            <a 
              href="#contact" 
              className="flex items-center hover:text-brand-teal-light font-medium transition-colors cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 mr-1.5 text-brand-teal-light" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Header / Navigation */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 w-full ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-md py-3' 
            : 'bg-white/80 backdrop-blur-sm shadow-sm py-4 md:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-10 flex justify-between items-center">
          {/* Brand Logo */}
          <a 
            href="#home" 
            className="hover:opacity-90 duration-200 transition-opacity flex items-center gap-2 cursor-pointer"
          >
            <img 
              src="https://i.postimg.cc/FKFLgvNR/tooth33.jpg" 
              alt="TOOTH 33 Dental Care Logo" 
              referrerPolicy="no-referrer"
              className="h-10 w-10 md:h-12 md:w-12 object-cover rounded-full border border-slate-200 shadow-sm" 
            />
            <span className="hidden leading-none xs:block font-bold mt-1 text-[13px] tracking-tight text-slate-800 uppercase font-display">
              Tooth <span className="text-brand-teal">33</span>
            </span>
          </a>

          {/* Navigation Items (Desktop) */}
          <nav className="hidden md:flex space-x-8 lg:space-x-10 items-center">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`text-[13px] font-bold tracking-wider uppercase transition-all duration-200 hover:text-brand-teal pb-1 ${
                  activeSection === link.id
                    ? 'border-b-2 border-brand-teal text-brand-teal'
                    : 'text-slate-500'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="flex items-center space-x-2">
            <button
              onClick={onOpenAdmin}
              className="p-2 text-slate-500 hover:text-black hover:bg-slate-100 rounded-full transition-all duration-250 cursor-pointer flex items-center justify-center shrink-0"
              title="Admin Portal"
            >
              <ShieldAlert className="w-[18px] h-[18px]" />
            </button>

            <button
              onClick={onOpenBooking}
              className="hidden md:inline-flex items-center justify-center bg-brand-teal hover:bg-brand-teal-dark font-display text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:scale-105 duration-200 transition-all shadow-md"
            >
              Book Appointment
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-800 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown Panel */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-100 absolute top-full left-0 w-full shadow-lg py-5 px-6 space-y-4">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-[13px] font-bold tracking-widest uppercase py-1.5 border-b border-slate-50 ${
                    activeSection === link.id
                      ? 'text-brand-teal pl-2 border-l-2 border-brand-teal font-extrabold'
                      : 'text-slate-600'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="pt-2 space-y-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-brand-teal hover:bg-brand-teal-dark text-white py-3 rounded-full text-xs font-bold uppercase tracking-widest text-center block shadow-md cursor-pointer"
              >
                Book Appointment
              </button>
              
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenAdmin();
                }}
                className="w-full bg-slate-900 text-slate-100 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-center flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
              >
                <ShieldAlert className="w-4 h-4 text-brand-teal-light" /> Admin Portal
              </button>
            </div>
            {/* Short contacts inside mobile header */}
            <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-2 text-[10px] text-slate-400">
              <div>
                <p className="font-semibold text-slate-500 uppercase">Emergency Call</p>
                <p className="text-slate-800 font-bold mt-0.5">099445 78366</p>
              </div>
              <div>
                <p className="font-semibold text-slate-500 uppercase">Working Hours</p>
                <p className="text-slate-800 font-bold mt-0.5">Daily: 9:30 AM - 9:00 PM</p>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
