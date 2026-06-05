import React, { useState } from 'react';
import { Star, MessageSquarePlus, BadgeCheck, X, ThumbsUp } from 'lucide-react';
import { PatientReview } from '../types';

interface ReviewsSectionProps {
  reviews: PatientReview[];
  onAddReview: (review: PatientReview) => void;
}

export default function ReviewsSection({ reviews, onAddReview }: ReviewsSectionProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [name, setName] = useState('');
  const [rating, setRating] = useState<number>(5);
  const [comment, setComment] = useState('');
  const [treatment, setTreatment] = useState('Smile Makeover');
  const [likedReviews, setLikedReviews] = useState<Record<string, boolean>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !comment) return;

    const newReview: PatientReview = {
      id: `review-${Math.random().toString(36).substr(2, 9)}`,
      name,
      rating,
      comment,
      treatment,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      verified: true
    };

    onAddReview(newReview);
    
    // reset form
    setName('');
    setRating(5);
    setComment('');
    setTreatment('Smile Makeover');
    setIsFormOpen(false);
  };

  const toggleLike = (id: string) => {
    setLikedReviews(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const averageRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <section 
      id="reviews" 
      className="py-16 md:py-24 px-4 md:px-10 bg-slate-50 border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto space-y-12 text-left">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="max-w-xl">
            <p className="text-[10px] font-bold text-brand-teal uppercase tracking-widest">User Sentiment</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight font-display mt-1">
              Patient Testimonials
            </h2>
            <p className="text-sm text-slate-505 leading-relaxed mt-2.5">
              Read transparent feedback from individuals who have undergone cosmetic bonding, full makeovers, and premium treatments at our clinic.
            </p>
          </div>

          <div className="flex items-center gap-5 shrink-0 bg-white p-4 rounded-2xl border border-slate-200">
            <div className="text-center justify-center shrink-0">
              <span className="text-2xl font-bold text-slate-950 font-display block leading-none">{averageRating}</span>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1 block">Rating score</span>
            </div>
            <div className="h-8 w-px bg-slate-150" />
            <div className="space-y-1.5">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">
                Based on {reviews.length} Patient Reviews
              </p>
            </div>
          </div>
        </div>

        {/* Action Write Button */}
        <div className="flex justify-end pt-1">
          <button
            onClick={() => setIsFormOpen(true)}
            className="inline-flex items-center bg-black hover:bg-slate-900 text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full shadow-md transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <MessageSquarePlus className="w-4 h-4 mr-2" /> Write a Review
          </button>
        </div>

        {/* Testimonials Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Rating & Badge */}
                <div className="flex justify-between items-center">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, idx) => (
                      <Star 
                        key={idx} 
                        className={`w-3.5 h-3.5 ${idx < review.rating ? 'fill-current' : 'text-slate-200'}`} 
                      />
                    ))}
                  </div>
                  {review.verified && (
                    <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                      <BadgeCheck className="w-3 h-3" /> Verified Case
                    </span>
                  )}
                </div>

                {/* Comment Text */}
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed italic font-normal">
                  " {review.comment} "
                </p>
              </div>

              {/* Bottom Metadata Block */}
              <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-bold text-slate-900 tracking-tight font-display">
                    {review.name}
                  </h4>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">
                    For {review.treatment} — {review.date}
                  </p>
                </div>
                
                {/* Helper like button */}
                <button
                  onClick={() => toggleLike(review.id)}
                  className={`flex items-center gap-1 font-semibold px-2.5 py-1 rounded-md transition-colors ${
                    likedReviews[review.id]
                      ? 'text-brand-teal bg-brand-teal/5'
                      : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  <ThumbsUp className="w-3 h-3" />
                  <span className="text-[10px]">{likedReviews[review.id] ? 'Helpful (1)' : 'Helpful'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add Review Dialog form popup */}
        {isFormOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div 
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs" 
              onClick={() => setIsFormOpen(false)} 
            />
            <div className="relative bg-white rounded-2xl w-full max-w-md shadow-2xl border border-slate-150 overflow-hidden z-10 animate-fade-in text-left">
              <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50 shrink-0">
                <div>
                  <h4 className="text-base font-bold text-slate-950 font-display">Share Your Experience</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Your dental reviews help others choose quality care with confidence.</p>
                </div>
                <button 
                  onClick={() => setIsFormOpen(false)}
                  className="p-1 px-2 hover:bg-slate-200 text-slate-400 hover:text-slate-700 transition-colors rounded-full"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {/* Patient Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={30}
                    placeholder="Jane D."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-slate-250 focus:outline-none focus:border-brand-teal text-slate-800 text-sm focus:ring-1 focus:ring-brand-teal transition-colors"
                  />
                </div>

                {/* Rating Star Selection */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                    Rating Score
                  </label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((starVal) => (
                      <button
                        key={starVal}
                        type="button"
                        onClick={() => setRating(starVal)}
                        className="p-1 hover:scale-110 duration-100 transition-transform text-amber-400"
                      >
                        <Star className={`w-6 h-6 ${starVal <= rating ? 'fill-current' : 'text-slate-200'}`} />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Treatment Selector */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Treatment Received
                  </label>
                  <select
                    value={treatment}
                    onChange={(e) => setTreatment(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-slate-250 focus:outline-none focus:border-brand-teal text-slate-800 text-sm bg-white focus:ring-1 focus:ring-brand-teal transition-colors"
                  >
                    <option value="Smile Makeover">Smile Makeover</option>
                    <option value="Root Canal">Root Canal</option>
                    <option value="Teeth Whitening">Teeth Whitening</option>
                    <option value="Dental Implants">Dental Implants</option>
                    <option value="Orthodontics">Orthodontics</option>
                    <option value="General Checkup">General Checkup</option>
                  </select>
                </div>

                {/* Message comments */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Your Review
                  </label>
                  <textarea
                    required
                    maxLength={200}
                    placeholder="My Smile Makeover therapy was absolutely fantastic. Painless, modern sedation was wonderful, Dr. Thorne was gentle..."
                    rows={4}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-slate-250 focus:outline-none focus:border-brand-teal text-slate-800 text-sm focus:ring-1 focus:ring-brand-teal transition-colors resize-none"
                  />
                  <p className="text-[10px] text-right text-slate-400">Max 200 characters</p>
                </div>

                {/* Submitting buttons */}
                <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    className="px-4 py-2 border border-slate-350 bg-white text-slate-650 hover:bg-slate-50 rounded-lg text-xs font-semibold transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-brand-teal hover:bg-brand-teal-dark font-semibold text-white px-5 py-2.5 rounded-lg text-xs tracking-wider uppercase shadow-xs transition-colors"
                  >
                    Post Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
