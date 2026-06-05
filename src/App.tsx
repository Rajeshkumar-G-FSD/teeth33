import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import Treatments from './components/Treatments';
import Doctors from './components/Doctors';
import GallerySection from './components/GallerySection';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import AdminModal from './components/AdminModal';

import { 
  INITIAL_DOCTORS, 
  INITIAL_TREATMENTS, 
  INITIAL_REVIEWS, 
  INITIAL_GALLERY 
} from './data';
import { Booking, PatientReview } from './types';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [prefilledDoctorId, setPrefilledDoctorId] = useState('');
  const [prefilledTreatmentId, setPrefilledTreatmentId] = useState('');
  const [reviews, setReviews] = useState<PatientReview[]>(INITIAL_REVIEWS);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [activeSection, setActiveSection] = useState('home');

  // Trigger appointment bookings
  const handleOpenBooking = (docId = '', treatId = '') => {
    setPrefilledDoctorId(docId);
    setPrefilledTreatmentId(treatId);
    setIsBookingOpen(true);
  };

  const handleBookingSuccess = (booking: Booking) => {
    console.log('Successfully recorded appointment reservation:', booking);
    setBookings((prev) => [booking, ...prev]);
  };

  const handleAddReview = (newReview: PatientReview) => {
    setReviews((prev) => [newReview, ...prev]);
  };

  const handleDeleteBooking = (id: string) => {
    setBookings((prev) => prev.filter((b) => b.id !== id));
  };

  const handleDeleteReview = (id: string) => {
    setReviews((prev) => prev.filter((r) => r.id !== id));
  };

  // Section Tracking Scroll Observer
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'treatments', 'doctors', 'gallery', 'reviews', 'contact'];
      const scrollPos = window.scrollY + 120; // safe top margin

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-clinical-bg w-full overflow-x-hidden antialiased">
      {/* Header and Top coordinates */}
      <Header 
        onOpenBooking={() => handleOpenBooking('', '')} 
        onOpenAdmin={() => setIsAdminOpen(true)}
        activeSection={activeSection} 
      />

      {/* Main Clinical sections */}
      <main className="flex-grow w-full">
        <Hero onOpenBooking={() => handleOpenBooking('', '')} />
        
        <AboutSection />
        
        <Treatments 
          treatments={INITIAL_TREATMENTS} 
          onBookTreatment={(tId) => handleOpenBooking('', tId)} 
        />
        
        <Doctors 
          doctors={INITIAL_DOCTORS} 
          onBookWithDoctor={(docId) => handleOpenBooking(docId, '')} 
        />
        
        <GallerySection galleryItems={INITIAL_GALLERY} />
        
        <ReviewsSection 
          reviews={reviews} 
          onAddReview={handleAddReview} 
        />
        
        <ContactSection />
      </main>

      {/* Footer Column mappings */}
      <Footer onOpenAdmin={() => setIsAdminOpen(true)} />

      {/* Interactive scheduling drawer */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        doctors={INITIAL_DOCTORS}
        treatments={INITIAL_TREATMENTS}
        selectedDoctorId={prefilledDoctorId}
        selectedTreatmentId={prefilledTreatmentId}
        onBookingSuccess={handleBookingSuccess}
      />

      {/* Premium Clinical Admin Desk */}
      <AdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        bookings={bookings}
        reviews={reviews}
        doctors={INITIAL_DOCTORS}
        treatments={INITIAL_TREATMENTS}
        onDeleteBooking={handleDeleteBooking}
        onDeleteReview={handleDeleteReview}
      />
    </div>
  );
}
