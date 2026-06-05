import { Doctor, Treatment, PatientReview, GalleryItem } from './types';

export const INITIAL_DOCTORS: Doctor[] = [
  {
    id: 'dr-elias-thorne',
    name: 'Dr. Elias Thorne',
    role: 'Principal Dentist',
    experience: '15 Years Experience',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTOTninZBblW_cmuhloSSOF3OJFi33nVXtUZ-jLZGAIr-rJ53cFuRmOI2puXE_ZHH2_ak2dRz_aSQgp5e8oVXHdB5fWEaIv3QrReUAnw92YEQ8_L9p30UXeH9MN1b0ggwORqgaEex2Ik-HWnrFjMrOPZb1LwDUgFrpYpIiCoWi4qSpsZMn8lKpwV0h-UhULL4zkaosSz07SfMawoWCw62CaDR6URgm65XGULJnAmKjGQ6SF-yIbWgF7PMt4Xt3b_ZZtN6u-gTiG_E',
    description: 'Dr. Elias Thorne is the founding surgeon of TOOTH 33 Dental Care. He graduated with first-class honors from Columbia University College of Dental Medicine. He holds advanced specialization certificates in oral reconstructive surgery, laser-assisted micro-dentistry, and biometric smile aesthetics.',
    specialties: ['Oral Reconstructions', 'Biometric Smiles', 'Sedation Dentistry', 'Master Implantology']
  },
  {
    id: 'dr-sarah-chen',
    name: 'Dr. Sarah Chen',
    role: 'Orthodontist',
    experience: '12 Years Experience',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVT1pH1fz3TtObiFDzfFBJSk-aO5sf5OZH9akUMjJ9F3pfVdfk75R5kzAukjsH9EVBLf7lFLPvsBvHm_iVTx0stWMYEyzA2_k7wyhwEKIPK9Kalr4Mwt-_WMASjDXbwbeiqnphSEbX8oj_gpslcbOwEu9oJQjakkn8u7gmBPEG5NVZSCOSyDP7D4vlCJm3ieLjBdVR47CQnNgHJaQWNknEfyB_L0AVhhVY_Eqqu7b2VYUEgSObrwA9iFAxC8J4YckONGJC7GjZhxY',
    description: 'Dr. Sarah Chen specializes in pediatric and adult interceptive orthodontics. Known for her ultra-gentle demeanor, she completed her master dental orthopedic training at Penn State and is a board-certified member of the American Association of Orthodontists as well as an expert counselor in aligner technology.',
    specialties: ['Invisalign Preferred VIP', 'Orthopedics', 'Braces', 'Early Interception']
  }
];

export const INITIAL_TREATMENTS: Treatment[] = [
  {
    id: 'smile-makeover',
    name: 'Smile Makeover',
    description: 'A customized treatment plan combining multiple cosmetic procedures to achieve your dream smile. We analyze your facial aesthetics to design a smile that complements your unique features.',
    longDescription: 'Our signature Smile Makeover is a comprehensive aesthetic rehabilitation. It blends ceramic veneers, modern crowns, discrete composite bonding, and digital smile design mapping to craft a harmonious, highly customized smile line aligned with your natural facial proportions.',
    iconName: 'Smile',
    featured: true,
    duration: '2 – 3 Sessions',
    costRange: 'Bespoke / Multi-Phase'
  },
  {
    id: 'root-canal',
    name: 'Root Canal',
    description: 'Painless endodontic therapy to save infected teeth.',
    longDescription: 'Advanced clinical micro-endodontic therapy designed to completely clear pulpal infection. Utilizing motorized file rotations and local biocompatible sealers, we execute root fillings with absolutely zero patient discomfort.',
    iconName: 'Shield',
    featured: false,
    duration: '1 – 2 Sessions',
    costRange: '$800 - $1,400'
  },
  {
    id: 'teeth-whitening',
    name: 'Teeth Whitening',
    description: 'Professional brightening for a dazzling smile.',
    longDescription: 'Hospital-grade laser-activated whitening that lifts organic dental staining from coffee, red wines, and natural age wearing. Achieves up to 8 shades lighter in less than 45 minutes.',
    iconName: 'Sparkles',
    featured: false,
    duration: '45 Minute Clinic Session',
    costRange: '$350 - $600'
  },
  {
    id: 'dental-implants',
    name: 'Dental Implants',
    description: 'Permanent solutions for missing teeth.',
    longDescription: 'Pure titanium or high-grade biocompatible zirconia anchors surgically structured directly into the alveolar bone, complete with custom milled solid crowns. Restores 100% natural masticating force and dental symmetry.',
    iconName: 'Activity',
    featured: false,
    duration: '2 – 4 Months Healing Span',
    costRange: '$2,500 - $4,200/unit'
  },
  {
    id: 'orthodontics',
    name: 'Orthodontics',
    description: 'Braces and clear aligners for perfect alignment.',
    longDescription: 'Discrete luxury cosmetic alignment utilizing advanced Invisalign clear aligners or highly efficient customized ceramic braces, monitored directly by Dr. Chen to rectify dental crowding, gaps, and malocclusions.',
    iconName: 'Smile2',
    featured: false,
    duration: '6 – 18 Months Path',
    costRange: '$3,500 - $5,800'
  }
];

export const INITIAL_REVIEWS: PatientReview[] = [
  {
    id: 'review-1',
    name: 'Evelyn P.',
    rating: 5,
    comment: 'The Smile Makeover completed by Dr. Thorne has completely transformed my confidence. The process was entirely painless and the lounge felt like a five-star hotel boutique.',
    date: 'May 12, 2026',
    treatment: 'Smile Makeover',
    verified: true
  },
  {
    id: 'review-2',
    name: 'Marcus K.',
    rating: 5,
    comment: 'I was terrifically anxious about my root canal, but the sedative guidance and precise care were marvelous. Outstanding micro-dentistry!',
    date: 'April 28, 2026',
    treatment: 'Root Canal',
    verified: true
  },
  {
    id: 'review-3',
    name: 'Serena L.',
    rating: 5,
    comment: 'Fast teeth whitening in under an hour! Incredible shading differences, and I suffered absolutely zero post-treatment dentin sensitivity.',
    date: 'June 01, 2026',
    treatment: 'Teeth Whitening',
    verified: true
  }
];

export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: 'gal-1',
    category: 'makeovers',
    title: 'Comprehensive Smile Rehab',
    subtitle: 'Full aesthetic rehabilitation with custom composite veneers for tooth gaps.',
    beforeUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=600', // Dental wear representation
    afterUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=600' // Happy smile results
  },
  {
    id: 'gal-2',
    category: 'whitening',
    title: 'Laser Teeth Brightening',
    subtitle: 'Removal of vintage organic nicotine and enamel espresso staining.',
    beforeUrl: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600',
    afterUrl: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'gal-3',
    category: 'ortho',
    title: 'Advanced Invisalign Aligner Path',
    subtitle: 'Orthodontic correction of dental severe bicuspid crowding within 9 months.',
    beforeUrl: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=600',
    afterUrl: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'gal-4',
    category: 'clinic',
    title: 'Surgical Treatment Suite',
    subtitle: 'Equipped with 3D CBCT digital diagnostics and clinical comfortable lighting.',
    afterUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'gal-5',
    category: 'clinic',
    title: 'Patient Lounge & Consultation Area',
    subtitle: 'Where surgical consultation sheets and clinical relaxation blend.',
    afterUrl: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=600'
  }
];
