import React from 'react';
import { Factory, ShieldCheck, Sun, HardHat, FileText } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-12 bg-stone-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-emerald-950 mb-6">Why Saudi Contractors Choose Ghosh Group</h2>
        <p className="text-center text-base md:text-lg text-stone-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          As a specialised sandwich panel supplier to Saudi Arabia, we serve the Kingdom’s Vision 2030 projects from our UAE base, combining certified quality with reliable logistics so your projects stay on schedule and within specification.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-white p-6 rounded shadow-sm border border-stone-200">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-4">
               <Factory size={24} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-emerald-900 mb-3">Direct manufacturer for KSA</h3>
            <p className="text-base text-stone-600 leading-relaxed">Panels are produced in our ISO 9001:2015 facility and supplied straight to projects across Saudi Arabia, avoiding middle‑man delays and extra cost.</p>
          </div>

          <div className="bg-white p-6 rounded shadow-sm border border-stone-200">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-4">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-emerald-900 mb-3">Civil Defence compliant solutions</h3>
            <p className="text-base text-stone-600 leading-relaxed">PUR, PIR and Rockwool sandwich panels are tested and approved to meet fire and safety requirements used in Saudi and GCC projects.</p>
          </div>

          <div className="bg-white p-6 rounded shadow-sm border border-stone-200">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-4">
               <Sun size={24} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-emerald-900 mb-3">Designed for Saudi climate</h3>
            <p className="text-base text-stone-600 leading-relaxed">Panel systems are engineered for high temperatures, sand and coastal humidity, making them suitable for locations such as Riyadh, Jeddah, Dammam and Al Khobar.</p>
          </div>

          <div className="bg-white p-6 rounded shadow-sm border border-stone-200">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-4">
               <HardHat size={24} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-emerald-900 mb-3">Experience with mega‑projects</h3>
            <p className="text-base text-stone-600 leading-relaxed">Ghosh Group regularly supports large industrial facilities, warehouses, logistics hubs and KSA Vision 2030‑driven developments across the Kingdom.</p>
          </div>

          <div className="bg-white p-6 rounded shadow-sm border border-stone-200">
             <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-4">
               <FileText size={24} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-emerald-900 mb-3">End‑to‑end technical support</h3>
            <p className="text-base text-stone-600 leading-relaxed">The technical team assists with panel selection, thickness, spans and accessories so drawings are completed faster and in line with project requirements.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;