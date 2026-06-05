export interface Treatment {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  iconName: 'Smile' | 'Shield' | 'Sparkles' | 'Activity' | 'Smile2' | 'PlusSquare';
  featured: boolean;
  duration?: string;
  costRange?: string;
}

export interface Doctor {
  id: string;
  name: string;
  role: string;
  experience: string;
  image: string;
  description: string;
  specialties: string[];
}

export interface Booking {
  id: string;
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  doctorId: string;
  doctorName: string;
  treatmentId: string;
  treatmentName: string;
  date: string;
  time: string;
  notes?: string;
  createdAt: string;
}

export interface PatientReview {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  treatment: string;
  verified: boolean;
}

export interface GalleryItem {
  id: string;
  category: 'all' | 'makeovers' | 'whitening' | 'ortho' | 'clinic';
  title: string;
  subtitle: string;
  beforeUrl?: string;
  afterUrl: string;
}
