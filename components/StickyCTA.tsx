import React from 'react';
import { MessageCircle } from 'lucide-react';

const StickyCTA: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 md:bottom-8 md:right-8">
      <a 
        href="https://wa.me/971503034002" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle size={24} />
        <span className="hidden md:inline">WhatsApp KSA Desk</span>
        <span className="md:hidden">WhatsApp</span>
      </a>
    </div>
  );
};

export default StickyCTA;