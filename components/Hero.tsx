import React, { useState } from 'react';
import { CITY_OPTIONS, PANEL_OPTIONS } from '../constants';
import { FormData } from '../types';

const Hero: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    companyName: '',
    email: '',
    mobile: '',
    projectCity: '',
    panelType: '',
    areaQuantity: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form Submitted to parimal@ghoshgroups.com', formData);
      setIsSubmitting(false);
      setSubmitted(true);
      // Reset form after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
            fullName: '',
            companyName: '',
            email: '',
            mobile: '',
            projectCity: '',
            panelType: '',
            areaQuantity: ''
        });
      }, 5000);
    }, 1500);
  };

  // Shared classes for floating label inputs
  const inputClasses = "block px-4 pb-2.5 pt-5 w-full text-base text-stone-900 bg-white rounded border border-stone-300 appearance-none focus:outline-none focus:ring-0 focus:border-emerald-600 peer placeholder-transparent focus:placeholder-stone-400 shadow-sm";
  const labelClasses = "absolute text-sm text-stone-500 duration-200 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-emerald-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 pointer-events-none";

  return (
    <section className="bg-white py-8 md:py-16 bg-gradient-to-b from-stone-50 to-stone-100 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left Side Copy */}
          <div className="lg:w-1/2 pt-4">
            <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-emerald-950 leading-tight mb-6">
              Sandwich Panel Supplier in Saudi Arabia for NEOM, Riyadh & Jeddah Projects
            </h1>
            
            <p className="text-lg md:text-xl text-stone-700 mb-6 leading-relaxed">
              Ghosh Group is a DCD‑approved manufacturer and sandwich panel supplier in Saudi Arabia, supporting contractors, consultants and project owners across NEOM, Riyadh, Jeddah, Dammam, Al Khobar, Mecca and Medina.
            </p>
            
            <p className="text-lg md:text-xl text-stone-700 mb-6 leading-relaxed">
              PUR, PIR and Rockwool roof and wall panels are produced in our ISO‑certified facility and shipped with reliable lead times for industrial, commercial and cold‑room projects in Saudi Arabia.
            </p>
            
            <div className="bg-emerald-50 border-l-4 border-emerald-700 p-6 mb-8">
              <p className="font-semibold text-emerald-900 text-base md:text-lg">
                Serving Saudi Arabia’s Vision projects from UAE – dedicated support for NEOM, Riyadh, Jeddah and other key cities.
              </p>
            </div>
            
            <p className="text-base text-stone-600 italic">
              Our dedicated KSA projects desk responds to Saudi enquiries from our UAE office within one business day.
            </p>
          </div>

          {/* Right Side Form */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white shadow-xl rounded-lg border border-stone-200 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-6">
                Get Best Price for Your Saudi Project
              </h2>
              
              {submitted ? (
                <div className="bg-green-50 text-green-800 p-6 rounded text-center border border-green-200">
                  <p className="font-bold text-lg mb-2">Thank you!</p>
                  <p className="text-base">Your enquiry has been sent to our KSA projects team. We will be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Full Name */}
                  <div className="relative">
                    <input 
                      type="text" 
                      id="fullName" 
                      name="fullName"
                      className={inputClasses}
                      placeholder="Mohammed Al-Otaibi"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="fullName" className={labelClasses}>
                      Full Name <span className="text-red-600">*</span>
                    </label>
                  </div>
                  
                  {/* Company Name */}
                  <div className="relative">
                    <input 
                      type="text" 
                      id="companyName" 
                      name="companyName"
                      className={inputClasses}
                      placeholder="Company name"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="companyName" className={labelClasses}>
                      Company Name <span className="text-red-600">*</span>
                    </label>
                  </div>
                  
                  {/* Email */}
                  <div className="relative">
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      className={inputClasses}
                      placeholder="your.email@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="email" className={labelClasses}>
                      Email <span className="text-red-600">*</span>
                    </label>
                  </div>
                  
                  {/* Mobile */}
                  <div className="relative">
                    <input 
                      type="text" 
                      id="mobile" 
                      name="mobile"
                      className={inputClasses}
                      placeholder="e.g. +9665XXXXXXXX or +9715XXXXXXXX"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="mobile" className={labelClasses}>
                      Mobile (with Country Code) <span className="text-red-600">*</span>
                    </label>
                  </div>
                  
                  {/* Project City (Static) */}
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">Project City in Saudi Arabia <span className="text-red-600">*</span></label>
                    <select 
                      required
                      name="projectCity"
                      value={formData.projectCity}
                      onChange={handleChange}
                      className="w-full rounded border-stone-300 shadow-sm focus:border-emerald-600 focus:ring-emerald-600 p-3 border bg-white text-stone-900 text-base"
                    >
                      <option value="">Select City</option>
                      {CITY_OPTIONS.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                  
                  {/* Panel Type (Static) */}
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">Panel Type <span className="text-red-600">*</span></label>
                    <select 
                      required
                      name="panelType"
                      value={formData.panelType}
                      onChange={handleChange}
                      className="w-full rounded border-stone-300 shadow-sm focus:border-emerald-600 focus:ring-emerald-600 p-3 border bg-white text-stone-900 text-base"
                    >
                      <option value="">Select Panel Type</option>
                      {PANEL_OPTIONS.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                  
                  {/* Area Quantity (Textarea - Floating) */}
                  <div className="relative">
                    <textarea 
                      id="areaQuantity"
                      name="areaQuantity"
                      value={formData.areaQuantity}
                      onChange={handleChange}
                      rows={3} 
                      className={inputClasses}
                      placeholder="e.g. 2,500 m² roof, 1,800 m² wall panels"
                    ></textarea>
                    <label htmlFor="areaQuantity" className={labelClasses}>
                      Approximate area / quantity
                    </label>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded font-bold text-white text-base md:text-lg transition-colors shadow-md ${isSubmitting ? 'bg-emerald-500 cursor-not-allowed' : 'bg-emerald-700 hover:bg-emerald-800'}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Get Project Quotation'}
                  </button>
                  
                  <p className="text-sm text-stone-500 text-center mt-3">
                    Your enquiry will be sent to our KSA projects team (parimal@ghoshgroups.com). A team member will reply within one business day.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;