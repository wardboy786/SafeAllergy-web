'use client';

import React from 'react';
import { AlertTriangle, Activity, Database, UserCheck, ShieldAlert } from 'lucide-react';

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20 font-sans text-slate-800">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-wider mb-4">
          <AlertTriangle className="w-3 h-3" /> Important Notice
        </div>
        <h1 className="text-4xl md:text-5xl font-black mb-4 text-slate-900">Disclaimer</h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Understanding the limitations of SafeAllergy is critical for your safety.
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-6 space-y-8">
        
        {/* MEDICAL DISCLAIMER (Primary) */}
        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100 relative overflow-hidden">
           <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-rose-100 rounded-2xl flex items-center justify-center text-rose-600">
                 <Activity className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Not Medical Advice</h2>
           </div>
           <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
              <p>
                <strong>SafeAllergy is an informational tool, not a medical device.</strong> The content, analysis, and recommendations provided by this application are for general informational purposes only.
              </p>
              <p>
                This app is not designed to diagnose, treat, cure, or prevent any disease or health condition. Never disregard professional medical advice or delay in seeking it because of something you have read on the SafeAllergy app.
              </p>
              <p className="bg-rose-50 p-4 rounded-xl border border-rose-100 text-rose-800 font-medium text-sm">
                In the event of a medical emergency or anaphylactic reaction, call 911 or your local emergency services immediately.
              </p>
           </div>
        </div>

        {/* ACCURACY DISCLAIMER */}
        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100">
           <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                 <Database className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">AI & Data Accuracy</h2>
           </div>
           <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Our services rely on Artificial Intelligence (AI) and Optical Character Recognition (OCR) technology. While we strive for 99.8% accuracy, <strong>these technologies are not infallible.</strong>
              </p>
              <ul className="list-disc pl-5 space-y-2">
                 <li>AI may misinterpret blurry, damaged, or obscured text on labels.</li>
                 <li>Product formulations can change without notice, and our database may not reflect real-time manufacturing updates.</li>
                 <li>Cross-contamination risks in restaurants cannot be detected by scanning a menu.</li>
              </ul>
           </div>
        </div>

        {/* USER RESPONSIBILITY */}
        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100">
           <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600">
                 <UserCheck className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">User Responsibility</h2>
           </div>
           <p className="text-slate-600 leading-relaxed">
             You acknowledge that you are solely responsible for your health and safety decisions. By using SafeAllergy, you agree to:
           </p>
           <div className="grid gap-3 mt-4">
              <div className="flex items-start gap-3 bg-slate-50 p-3 rounded-xl">
                 <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                 <span className="text-sm text-slate-600">Always verify ingredients manually on the physical package.</span>
              </div>
              <div className="flex items-start gap-3 bg-slate-50 p-3 rounded-xl">
                 <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                 <span className="text-sm text-slate-600">Communicate your allergies clearly to restaurant staff.</span>
              </div>
              <div className="flex items-start gap-3 bg-slate-50 p-3 rounded-xl">
                 <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                 <span className="text-sm text-slate-600">Carry prescribed emergency medication (e.g., Epinephrine) at all times.</span>
              </div>
           </div>
        </div>

      </div>

      {/* Sticky Bottom Alert */}
      <div className="fixed bottom-0 left-0 w-full bg-slate-900 text-white p-4 z-50">
         <div className="max-w-4xl mx-auto flex items-center justify-center gap-3 text-center">
            <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0" />
            <p className="text-xs md:text-sm font-medium">
              If you suspect an allergic reaction, stop eating immediately and seek medical help.
            </p>
         </div>
      </div>

    </div>
  );
}

// Simple Check Icon for this file
const CheckCircle2 = ({ className }: {className?: string}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);