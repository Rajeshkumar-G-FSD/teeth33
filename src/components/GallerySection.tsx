import React, { useState } from 'react';
import { Sparkles, Eye, ArrowLeftRight } from 'lucide-react';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  galleryItems: GalleryItem[];
}

export default function GallerySection({ galleryItems }: GallerySectionProps) {
  const [activeTab, setActiveTab] = useState<GalleryItem['category']>('all');
  const [previewItem, setPreviewItem] = useState<GalleryItem | null>(null);
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage for before/after comparison slider
  const [isSliding, setIsSliding] = useState<boolean>(false);

  // Tabs definitions
  const tabs: { label: string; value: GalleryItem['category'] }[] = [
    { label: 'All Results', value: 'all' },
    { label: 'Smile Makeovers', value: 'makeovers' },
    { label: 'Whitening', value: 'whitening' },
    { label: 'Orthodontics', value: 'ortho' },
    { label: 'Clinical Space', value: 'clinic' },
  ];

  const filteredItems = activeTab === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeTab);

  const handleSliderMove = (clientX: number, rectX: number, rectWidth: number) => {
    let position = ((clientX - rectX) / rectWidth) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setSliderPosition(position);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isSliding) return;
    const container = e.currentTarget.getBoundingClientRect();
    handleSliderMove(e.touches[0].clientX, container.left, container.width);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isSliding && e.buttons !== 1) return; // Only slide if clicking or actively dragging
    const container = e.currentTarget.getBoundingClientRect();
    handleSliderMove(e.clientX, container.left, container.width);
  };

  return (
    <section 
      id="gallery" 
      className="py-16 md:py-24 px-4 md:px-10 bg-white border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto space-y-12 text-left">
        {/* Section Title */}
        <div className="text-center space-y-4">
          <p className="text-[10px] font-bold text-brand-teal uppercase tracking-widest">Aesthetic Gallery</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight font-display">
            Our Smile Showcase
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Witness the real, life-altering outcome of luxury cosmetic procedures paired with precision orthodontic alignment designed at TOOTH 33.
          </p>
        </div>

        {/* Tab Selection Filter */}
        <div className="flex flex-wrap gap-2 justify-center max-w-2xl mx-auto border-b border-slate-105 pb-3">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 cursor-pointer ${
                activeTab === tab.value
                  ? 'bg-black text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Visual Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setPreviewItem(item)}
              className="bg-[#faf9f9] border border-slate-200/50 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-150 relative">
                <img
                  src={item.afterUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                />
                
                {/* Visual hover layer */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="bg-white/90 backdrop-blur-xs text-slate-950 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-all duration-350">
                    <Eye className="w-4 h-4 text-brand-teal" /> 
                    {item.beforeUrl ? 'Compare Before / After' : 'View Space'}
                  </span>
                </div>

                {/* Compare Float Sticker */}
                {item.beforeUrl && (
                  <span className="absolute bottom-4 right-4 bg-black/85 text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1.5 rounded-full flex items-center gap-1 shadow-sm">
                    <Sparkles className="w-3 h-3 text-brand-teal-light" /> Before & After
                  </span>
                )}
              </div>

              <div className="p-5 space-y-1 border-t border-slate-100 text-left bg-white">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  {item.category === 'makeovers' && 'Smile Makeover'}
                  {item.category === 'whitening' && 'Teeth Whitening'}
                  {item.category === 'ortho' && 'Orthodontics'}
                  {item.category === 'clinic' && 'Clinical Space'}
                </p>
                <h4 className="text-sm font-bold text-slate-900 tracking-tight font-display pr-4 group-hover:text-brand-teal transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-450 truncate">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Comparator Slider popup */}
        {previewItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div 
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs" 
              onClick={() => {
                setPreviewItem(null);
                setSliderPosition(50);
              }} 
            />
            
            <div className="relative bg-white rounded-2xl w-full max-w-xl shadow-2xl border border-slate-150 overflow-hidden z-10 animate-fade-in text-left">
              <div className="p-5 border-b border-slate-100 flex justify-between items-center sm:bg-slate-50 shrink-0">
                <div>
                  <h4 className="text-base font-bold text-slate-950 font-display">
                    {previewItem.title}
                  </h4>
                  <p className="text-xs text-slate-450 mt-0.5">
                    {previewItem.beforeUrl ? 'Drag center divider to compare clinical changes' : 'Interactive Gallery view'}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setPreviewItem(null);
                    setSliderPosition(50);
                  }}
                  className="p-1 px-2.5 hover:bg-slate-200 text-slate-400 hover:text-slate-700 transition-colors rounded-full"
                >
                  Close
                </button>
              </div>

              <div className="p-6">
                {previewItem.beforeUrl ? (
                  /* Interactive before/after split screen slider */
                  <div 
                    className="relative aspect-[4/3] w-full rounded-xl overflow-hidden select-none border border-slate-100 bg-slate-100"
                    onMouseMove={handleMouseMove}
                    onTouchMove={handleTouchMove}
                    onMouseDown={() => setIsSliding(true)}
                    onMouseUp={() => setIsSliding(false)}
                    onTouchStart={() => setIsSliding(true)}
                    onTouchEnd={() => setIsSliding(false)}
                    onMouseLeave={() => setIsSliding(false)}
                  >
                    {/* Before Image (Bottom) */}
                    <img 
                      src={previewItem.beforeUrl} 
                      alt="Before dental treatment" 
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    />
                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1.1 rounded-full pointer-events-none shadow-sm z-20">
                      Before Treatment
                    </div>

                    {/* After Image (Top, clipped dynamically based on selector slider position) */}
                    <div 
                      className="absolute inset-y-0 left-0 right-0 overflow-hidden pointer-events-none z-10"
                      style={{ width: `${sliderPosition}%` }}
                    >
                      <img 
                        src={previewItem.afterUrl} 
                        alt="After dental treatment" 
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
                        style={{ width: '100%', height: '100%', minWidth: '100%' }}
                      />
                    </div>
                    <div className="absolute top-4 right-4 bg-brand-teal/85 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1.1 rounded-full pointer-events-none shadow-sm z-20">
                      TOOTH 33 After
                    </div>

                    {/* Slider Line Divider */}
                    <div 
                      className="absolute inset-y-0 w-1 bg-white cursor-ew-resize z-30 shadow-md transform -translate-x-1/2 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
                      style={{ left: `${sliderPosition}%` }}
                    >
                      <div className="w-8 h-8 rounded-full bg-brand-teal text-white border-2 border-white shadow-lg flex items-center justify-center select-none pointer-events-none">
                        <ArrowLeftRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Static Image Frame */
                  <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                    <img 
                      src={previewItem.afterUrl} 
                      alt={previewItem.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="mt-5 space-y-1 text-slate-650 text-xs">
                  <p className="font-semibold text-slate-800">Therapy Detail</p>
                  <p className="font-normal text-slate-505 leading-relaxed">{previewItem.subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
