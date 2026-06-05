import React, { useState } from 'react';
import { X, Calendar, MessageSquare, ShieldAlert, BarChart3, Trash2, CheckCircle2, User, Clock, Star, Users } from 'lucide-react';
import { Booking, PatientReview, Doctor, Treatment } from '../types';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookings: Booking[];
  reviews: PatientReview[];
  doctors: Doctor[];
  treatments: Treatment[];
  onDeleteBooking: (id: string) => void;
  onDeleteReview: (id: string) => void;
}

export default function AdminModal({
  isOpen,
  onClose,
  bookings,
  reviews,
  doctors,
  treatments,
  onDeleteBooking,
  onDeleteReview
}: AdminModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'bookings' | 'reviews'>('overview');

  if (!isOpen) return null;

  // Analytical stats calculation
  const totalBookings = bookings.length;
  const totalReviews = reviews.length;
  const averageRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / (reviews.length || 1)).toFixed(1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 border border-slate-100 flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-100 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-black text-white rounded-full flex items-center justify-center">
              <ShieldAlert className="w-5 h-5 text-brand-teal-light" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight font-display">
                TOOTH 33 Admin Portal
              </h3>
              <p className="text-[11px] text-slate-500 font-medium">
                Live Clinical Resource & Patient Scheduling Console
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1 px-2.5 rounded-full hover:bg-slate-205 text-slate-400 hover:text-slate-755 transition-colors text-xs font-semibold"
          >
            Exit
          </button>
        </div>

        {/* Tab switcher */}
        <div className="bg-slate-100/50 px-6 py-2.5 border-b border-slate-100 flex gap-1.5 shrink-0">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 ${
              activeTab === 'overview'
                ? 'bg-black text-white shadow-xs'
                : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" /> Overview
          </button>
          
          <button
            onClick={() => setActiveTab('bookings')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 relative ${
              activeTab === 'bookings'
                ? 'bg-black text-white shadow-xs'
                : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" /> Bookings
            {totalBookings > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand-teal text-white w-4 h-4 rounded-full text-[9px] flex items-center justify-center font-bold">
                {totalBookings}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('reviews')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 ${
              activeTab === 'reviews'
                ? 'bg-black text-white shadow-xs'
                : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" /> Reviews
          </button>
        </div>

        {/* Content Box */}
        <div className="p-6 overflow-y-auto flex-grow bg-[#faf9f9]">
          
          {/* TAB 1: OVERVIEW METRICS */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              
              {/* Performance Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-xl border border-slate-200/50 shadow-xs space-y-2">
                  <div className="flex justify-between items-start text-slate-400">
                    <span className="text-[10px] font-bold uppercase tracking-wider">Session Bookings</span>
                    <Calendar className="w-5 h-5 text-brand-teal" />
                  </div>
                  <h4 className="text-3xl font-display font-bold text-slate-900">{totalBookings}</h4>
                  <p className="text-[10px] text-slate-400">Recorded appointment intents</p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-slate-200/50 shadow-xs space-y-2">
                  <div className="flex justify-between items-start text-slate-400">
                    <span className="text-[10px] font-bold uppercase tracking-wider">Total Feedback</span>
                    <MessageSquare className="w-5 h-5 text-brand-teal" />
                  </div>
                  <h4 className="text-3xl font-display font-bold text-slate-900">{totalReviews}</h4>
                  <p className="text-[10px] text-slate-400">Interactive patient cases</p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-slate-200/50 shadow-xs space-y-2">
                  <div className="flex justify-between items-start text-slate-400">
                    <span className="text-[10px] font-bold uppercase tracking-wider">Trust Level</span>
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  </div>
                  <h4 className="text-3xl font-display font-bold text-slate-900">{averageRating} / 5</h4>
                  <p className="text-[10px] text-slate-400">Average review sentiment score</p>
                </div>
              </div>

              {/* Quick Checklist Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Active Doctors status */}
                <div className="bg-white p-5 rounded-xl border border-slate-200/50 text-left space-y-3.5">
                  <h5 className="text-xs font-bold text-slate-900 uppercase tracking-widest flex items-center gap-1">
                    <Users className="w-4 h-4 text-brand-teal" /> Specialist Availability
                  </h5>
                  <div className="space-y-2.5">
                    {doctors.map(doc => (
                      <div key={doc.id} className="flex justify-between items-center text-xs">
                        <div className="flex items-center gap-2">
                          <img src={doc.image} alt="" className="w-7 h-7 rounded-full object-cover border border-slate-200" referrerPolicy="no-referrer" />
                          <div>
                            <p className="font-semibold text-slate-800">{doc.name}</p>
                            <p className="text-[9px] text-slate-400">{doc.role}</p>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded-full text-[9px] bg-emerald-50 text-emerald-600 font-bold border border-emerald-100">
                          Duty On
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Available Treatments bracket */}
                <div className="bg-white p-5 rounded-xl border border-slate-200/50 text-left space-y-3.5">
                  <h5 className="text-xs font-bold text-slate-900 uppercase tracking-widest flex items-center gap-1.2">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal" /> Treatments Catalog ({treatments.length})
                  </h5>
                  <div className="space-y-2 text-xs">
                    {treatments.slice(0, 3).map(t => (
                      <div key={t.id} className="flex justify-between items-center border-b border-slate-50 pb-1.5 last:border-0 last:pb-0">
                        <span className="font-semibold text-slate-705 pr-2">{t.name}</span>
                        <span className="text-[10px] text-brand-teal font-medium uppercase shrink-0">{t.costRange || 'Custom'}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: ACTIVE BOOKINGS LIST */}
          {activeTab === 'bookings' && (
            <div className="space-y-4 text-left">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Session Appointment Records ({bookings.length})
              </h4>

              {bookings.length === 0 ? (
                <div className="bg-white p-8 rounded-xl border border-dashed border-slate-200 text-center space-y-2">
                  <Calendar className="w-10 h-10 text-slate-300 mx-auto" />
                  <p className="text-sm font-semibold text-slate-700">No appointments booked yet</p>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto font-normal">
                    Reservations created using the "Book Appointment" flow will show up here immediately in real-time.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {bookings.map((booking) => (
                    <div 
                      key={booking.id} 
                      className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200/60 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div className="space-y-2 text-xs">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                          <h5 className="font-bold text-slate-900 text-sm">{booking.patientName}</h5>
                          <span className="font-mono text-[9px] bg-slate-50 border border-slate-100 text-slate-400 px-1.5 py-0.5 rounded uppercase">
                            {booking.id}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-slate-505">
                          <p className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-brand-teal" /> {booking.date} at {booking.time}
                          </p>
                          <p className="flex items-center gap-1.5">
                            <User className="w-3.5 h-3.5 text-brand-teal" /> {booking.doctorName}
                          </p>
                          <p className="col-span-2 text-slate-400 font-normal">
                             Treatment: <span className="text-slate-800 font-semibold">{booking.treatmentName}</span> — Connect: <a href={`tel:${booking.patientPhone}`} className="underline text-brand-teal font-medium">{booking.patientPhone}</a>
                          </p>
                        </div>
                        {booking.notes && (
                          <p className="text-[11px] bg-slate-50 p-2 rounded text-slate-500 font-normal">
                            Note: "{booking.notes}"
                          </p>
                        )}
                      </div>

                      <div className="flex sm:flex-col items-end gap-2 shrink-0 justify-end pt-2 sm:pt-0">
                        <button
                          onClick={() => onDeleteBooking(booking.id)}
                          className="bg-red-50 hover:bg-red-100 text-red-650 p-2.5 rounded-full border border-red-100 hover:border-red-200 transition-colors flex items-center justify-center gap-1.5 text-xs font-bold"
                          title="Cancel Reservation"
                        >
                          <Trash2 className="w-4 h-4 text-red-500" />
                          <span className="sm:hidden">Cancel Slot</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: REVIEW STREAM MANAGEMENT */}
          {activeTab === 'reviews' && (
            <div className="space-y-4 text-left">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Patient Feedback Moderation ({reviews.length})
              </h4>

              <div className="space-y-3">
                {reviews.map((review) => (
                  <div 
                    key={review.id} 
                    className="bg-white p-4 rounded-xl border border-slate-205/60 shadow-xs flex justify-between items-start gap-4"
                  >
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center gap-2">
                        <h5 className="font-bold text-slate-900">{review.name}</h5>
                        <div className="flex text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-3 h-3 ${i < review.rating ? 'fill-current' : 'text-slate-100'}`} />
                          ))}
                        </div>
                        <span className="text-[9px] bg-teal-50 text-brand-teal px-2 py-0.5 rounded border border-teal-100 uppercase tracking-widest font-bold font-display">
                          {review.treatment}
                        </span>
                      </div>
                      <p className="text-slate-500 leading-relaxed italic font-normal">
                        "{review.comment}"
                      </p>
                      <p className="text-[10px] text-slate-400">{review.date}</p>
                    </div>

                    <button
                      onClick={() => onDeleteReview(review.id)}
                      className="text-slate-450 hover:text-red-600 p-2 rounded-full hover:bg-slate-50 transition-colors shrink-0"
                      title="Discard Feedback"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
