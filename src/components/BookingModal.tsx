import React, { useState } from 'react';
import { X, Calendar as CalendarIcon, Clock, Check, ChevronRight, User, Phone, Mail, FileText } from 'lucide-react';
import { Doctor, Treatment, Booking } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  doctors: Doctor[];
  treatments: Treatment[];
  selectedDoctorId?: string;
  selectedTreatmentId?: string;
  onBookingSuccess: (booking: Booking) => void;
}

const AVAILABLE_TIMES = [
  '09:00 AM', '10:00 AM', '11:00 AM',
  '01:00 PM', '02:00 PM', '03:00 PM',
  '04:00 PM', '05:00 PM', '06:00 PM'
];

export default function BookingModal({
  isOpen,
  onClose,
  doctors,
  treatments,
  selectedDoctorId = '',
  selectedTreatmentId = '',
  onBookingSuccess
}: BookingModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [doctorId, setDoctorId] = useState(selectedDoctorId || (doctors[0]?.id || ''));
  const [treatmentId, setTreatmentId] = useState(selectedTreatmentId || (treatments[0]?.id || ''));
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');
  const [createdBooking, setCreatedBooking] = useState<Booking | null>(null);

  if (!isOpen) return null;

  const handleSubmitDetails = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !email || !doctorId || !treatmentId) return;
    setStep(2);
  };

  const handleCompleteBooking = () => {
    if (!date || !time) return;

    const selectedDoctor = doctors.find(d => d.id === doctorId);
    const selectedTreatment = treatments.find(t => t.id === treatmentId);

    const booking: Booking = {
      id: `booking-${Math.random().toString(36).substr(2, 9)}`,
      patientName: name,
      patientPhone: phone,
      patientEmail: email,
      doctorId,
      doctorName: selectedDoctor ? selectedDoctor.name : 'Clinical Specialist',
      treatmentId,
      treatmentName: selectedTreatment ? selectedTreatment.name : 'General Care',
      date,
      time,
      notes,
      createdAt: new Date().toISOString()
    };

    setCreatedBooking(booking);
    onBookingSuccess(booking);
    setStep(3);
  };

  const resetForm = () => {
    setName('');
    setPhone('');
    setEmail('');
    setDoctorId(doctors[0]?.id || '');
    setTreatmentId(treatments[0]?.id || '');
    setDate('');
    setTime('');
    setNotes('');
    setStep(1);
    setCreatedBooking(null);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={handleClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 border border-slate-100 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-100 flex justify-between items-center shrink-0">
          <div>
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              {step === 3 ? 'Appointment Scheduled' : 'Book Dental Appointment'}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              {step === 1 && 'Step 1 of 2: Patient & Care Details'}
              {step === 2 && 'Step 2 of 2: Select Date & Time'}
              {step === 3 && 'Your digital appointment reservation slip'}
            </p>
          </div>
          <button 
            onClick={handleClose}
            className="p-1 px-2 rounded-full hover:bg-slate-200 text-slate-400 hover:text-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Steps indicator */}
        {step !== 3 && (
          <div className="w-full bg-slate-150 h-1 shrink-0 flex">
            <div className={`h-full bg-brand-teal transition-all duration-300 ${step === 1 ? 'w-1/2' : 'w-full'}`} />
          </div>
        )}

        {/* Content Area */}
        <div className="p-6 overflow-y-auto flex-grow">
          {step === 1 && (
            <form onSubmit={handleSubmitDetails} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Patient Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-250 focus:outline-none focus:border-brand-teal text-slate-800 text-sm focus:ring-1 focus:ring-brand-teal transition-colors"
                    />
                  </div>
                </div>

                {/* Patient Phone */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 text-slate-400" />
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 019-2834"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-250 focus:outline-none focus:border-brand-teal text-slate-800 text-sm focus:ring-1 focus:ring-brand-teal transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Patient Email */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 text-slate-400" />
                  <input
                    type="email"
                    required
                    placeholder="janedoe@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-250 focus:outline-none focus:border-brand-teal text-slate-800 text-sm focus:ring-1 focus:ring-brand-teal transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Doctor Selection */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Select Doctor
                  </label>
                  <select
                    value={doctorId}
                    onChange={(e) => setDoctorId(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-250 focus:outline-none focus:border-brand-teal text-slate-800 text-sm bg-white focus:ring-1 focus:ring-brand-teal transition-colors"
                  >
                    {doctors.map(doc => (
                      <option key={doc.id} value={doc.id}>
                        {doc.name} — {doc.role}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Treatment Selection */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Select Treatment
                  </label>
                  <select
                    value={treatmentId}
                    onChange={(e) => setTreatmentId(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-250 focus:outline-none focus:border-brand-teal text-slate-800 text-sm bg-white focus:ring-1 focus:ring-brand-teal transition-colors"
                  >
                    {treatments.map(t => (
                      <option key={t.id} value={t.id}>
                        {t.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Patient Notes */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Additional Notes (Optional)
                </label>
                <div className="relative">
                  <FileText className="absolute left-3.5 top-3.5 w-4 text-slate-400" />
                  <textarea
                    placeholder="Please specify any dental pain, history, or special inquiries..."
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-250 focus:outline-none focus:border-brand-teal text-slate-800 text-sm focus:ring-1 focus:ring-brand-teal transition-colors resize-none"
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="bg-brand-teal hover:bg-brand-teal-dark text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wide flex items-center transition-all duration-200 shadow-md group hover:translate-x-1"
                >
                  Choose Date & Time
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </form>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Date Input */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                    <CalendarIcon className="w-4 h-4 text-brand-teal" /> Select Date
                  </label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-250 focus:outline-none focus:border-brand-teal text-slate-800 text-sm focus:ring-1 focus:ring-brand-teal transition-colors"
                  />
                  <p className="text-[11px] text-slate-400">
                    Clinic open Mon – Sat: 9:00 AM – 8:00 PM for premium dental services.
                  </p>
                </div>

                {/* Time Slots */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-brand-teal" /> Available Slots
                  </label>
                  {date ? (
                    <div className="grid grid-cols-3 gap-2">
                      {AVAILABLE_TIMES.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setTime(t)}
                          className={`py-2 text-xs font-medium rounded-lg border text-center transition-all duration-200 ${
                            time === t
                              ? 'bg-brand-teal border-brand-teal text-white shadow-sm ring-2 ring-brand-teal-light'
                              : 'bg-white border-slate-200 text-slate-700 hover:border-brand-teal hover:bg-slate-50'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="h-28 rounded-lg border border-dashed border-slate-200 bg-slate-50 flex items-center justify-center p-4 text-center">
                      <p className="text-xs text-slate-400">
                        Please select a valid date first to view the real-time available clinical slots.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Summary recap block */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-650 space-y-1">
                  <p className="font-semibold text-slate-800">Reservation Summary</p>
                  <p>
                    Patient: <span className="font-medium text-slate-900">{name}</span> ({phone})
                  </p>
                  <p>
                    With: <span className="font-medium text-slate-900">{doctors.find(d => d.id === doctorId)?.name}</span> for{' '}
                    <span className="font-medium text-slate-900">{treatments.find(t => t.id === treatmentId)?.name}</span>
                  </p>
                  {date && time && (
                    <p className="font-semibold text-brand-teal mt-1">
                      Target Schedule: {date} at {time}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex justify-between items-center pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-5 py-2.5 rounded-full border border-slate-350 text-slate-600 hover:bg-slate-50 text-xs font-semibold tracking-wide transition-colors"
                >
                  Back to Details
                </button>
                <button
                  type="button"
                  disabled={!date || !time}
                  onClick={handleCompleteBooking}
                  className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-white shadow-md transition-all duration-200 ${
                    date && time 
                      ? 'bg-brand-teal hover:bg-brand-teal-dark cursor-pointer' 
                      : 'bg-slate-300 cursor-not-allowed'
                  }`}
                >
                  Confirm Appointment
                </button>
              </div>
            </div>
          )}

          {step === 3 && createdBooking && (
            <div className="py-2 text-center text-slate-700">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <Check className="w-8 h-8 text-emerald-600" />
              </div>
              
              <h4 className="text-xl font-bold text-slate-900 tracking-tight">
                Appointment Successfully Booked!
              </h4>
              <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
                We've reserved your slot at TOOTH 33 Dental Care. An confirmation email & SMS receipt has been dispatched.
              </p>

              {/* Digital Pass Card representation */}
              <div className="mt-6 max-w-sm mx-auto border border-slate-200 bg-white rounded-2xl shadow-lg overflow-hidden text-left relative">
                {/* Aesthetic side notches for ticket visual */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-slate-50 rounded-l-full border-l border-y border-slate-200 z-10" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-slate-50 rounded-r-full border-r border-y border-slate-200 z-10" />

                <div className="p-5 bg-brand-teal text-white">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-100">Official Pass</p>
                  <h5 className="text-lg font-bold tracking-tight">TOOTH 33 CLINIC</h5>
                  <p className="text-xs text-brand-teal-light">Modern & Premium Aesthetic Care</p>
                </div>

                <div className="p-5 space-y-3 text-xs bg-slate-50 border-b border-dashed border-slate-205">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Patient</p>
                      <p className="font-semibold text-slate-800 truncate">{createdBooking.patientName}</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Pass ID</p>
                      <p className="font-mono text-slate-800 font-semibold uppercase">{createdBooking.id}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Specialist</p>
                      <p className="font-semibold text-slate-800 truncate">{createdBooking.doctorName}</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Treatment</p>
                      <p className="font-semibold text-slate-800 truncate">{createdBooking.treatmentName}</p>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-white grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Appointment Date</p>
                    <p className="font-bold text-brand-teal">{createdBooking.date}</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Treatment Hour</p>
                    <p className="font-bold text-brand-teal">{createdBooking.time}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  onClick={handleClose}
                  className="bg-slate-900 hover:bg-black text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 outline-none"
                >
                  Done & Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
