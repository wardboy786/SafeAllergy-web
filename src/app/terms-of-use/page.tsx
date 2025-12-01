'use client';

import React from 'react';
import { FileText, AlertTriangle, CheckCircle2, Gavel, DollarSign, Ban } from 'lucide-react';

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20 font-sans text-slate-800">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-4">
          <FileText className="w-3 h-3" /> Terms of Service
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 tracking-tight">Terms of Use</h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
          Please read these terms carefully. They contain important information regarding your legal rights, remedies, and obligations.
        </p>
        <p className="text-sm font-bold text-slate-400 mt-4 uppercase tracking-widest">Last Modified: December 1, 2025</p>
      </div>

      <div className="max-w-4xl mx-auto px-6 space-y-12">
        
        {/* CRITICAL MEDICAL DISCLAIMER - HIGHLIGHTED */}
        <div className="bg-red-50 border-2 border-red-100 p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-red-500/5 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-6 opacity-[0.08] pointer-events-none">
              <AlertTriangle className="w-48 h-48 text-red-600" />
           </div>
           <div className="relative z-10">
               <h2 className="text-2xl font-black text-red-700 mb-4 flex items-center gap-3">
                 <AlertTriangle className="w-8 h-8 fill-red-100" /> 
                 CRITICAL MEDICAL DISCLAIMER
               </h2>
               <div className="prose prose-red max-w-none text-red-900/80 font-medium leading-relaxed space-y-4">
                 <p>
                   <strong>SAFEALLERGY IS NOT A MEDICAL DEVICE.</strong> The services, content, and analysis provided by SafeAllergy are for informational purposes only. The application relies on Artificial Intelligence (AI) and Optical Character Recognition (OCR) which may produce errors, omissions, or inaccuracies.
                 </p>
                 <p>
                   <strong>YOU MUST NOT RELY SOLELY ON THIS APP FOR MEDICAL SAFETY.</strong> Always verify ingredients manually on product packaging. Always communicate your allergies directly to restaurant staff. Always carry your prescribed emergency medication (e.g., Epinephrine Auto-Injector).
                 </p>
                 <p>
                   SafeAllergy assumes no liability for any allergic reactions, health complications, or medical emergencies arising from the use of this application. By using this app, you acknowledge that you are responsible for your own health and safety decisions.
                 </p>
               </div>
           </div>
        </div>

        {/* Standard Terms Content */}
        <div className="bg-white p-8 md:p-16 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100 space-y-12">
           
           <section>
             <h3 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h3>
             <p className="text-slate-600 leading-relaxed">
               By creating an account, downloading, or accessing SafeAllergy, you agree to be bound by these Terms. If you are using the Service on behalf of an organization, you are agreeing to these Terms for that organization and promising that you have the authority to bind that organization to these terms.
             </p>
           </section>

           <div className="h-px w-full bg-slate-100"></div>

           <section>
             <div className="flex items-center gap-3 mb-4">
               <div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><CheckCircle2 className="w-5 h-5" /></div>
               <h3 className="text-2xl font-bold text-slate-900">2. Eligibility & Account Security</h3>
             </div>
             <p className="text-slate-600 leading-relaxed mb-4">
               You must be at least 13 years old to use the Service. You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.
             </p>
           </section>

           <div className="h-px w-full bg-slate-100"></div>

           <section>
             <div className="flex items-center gap-3 mb-4">
               <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg"><DollarSign className="w-5 h-5" /></div>
               <h3 className="text-2xl font-bold text-slate-900">3. Subscriptions & Payments</h3>
             </div>
             <div className="space-y-4 text-slate-600">
               <p><strong>Free Trial:</strong> We may offer a free trial period. You will be charged automatically at the end of the trial unless you cancel 24 hours prior.</p>
               <p><strong>Billing:</strong> Subscription fees are billed annually or monthly. Fees are non-refundable except as required by law.</p>
               <p><strong>Cancellation:</strong> You may cancel your subscription at any time via your App Store or Play Store settings. The cancellation will take effect the day after the last day of the current subscription period.</p>
             </div>
           </section>

           <div className="h-px w-full bg-slate-100"></div>

           <section>
             <div className="flex items-center gap-3 mb-4">
               <div className="p-2 bg-red-100 text-red-600 rounded-lg"><Ban className="w-5 h-5" /></div>
               <h3 className="text-2xl font-bold text-slate-900">4. Prohibited Conduct</h3>
             </div>
             <p className="text-slate-600 mb-3">You agree not to:</p>
             <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>Use the service for any illegal purpose or in violation of any local, state, national, or international law.</li>
                <li>Attempt to reverse engineer, decompile, or disassemble any aspect of the Service.</li>
                <li>Input false or misleading allergen information that could compromise the accuracy of our AI models.</li>
             </ul>
           </section>

           <div className="h-px w-full bg-slate-100"></div>

           <section>
             <div className="flex items-center gap-3 mb-4">
               <div className="p-2 bg-slate-100 text-slate-600 rounded-lg"><Gavel className="w-5 h-5" /></div>
               <h3 className="text-2xl font-bold text-slate-900">5. Limitation of Liability</h3>
             </div>
             <p className="text-slate-600 leading-relaxed uppercase font-medium text-sm tracking-wide">
               TO THE MAXIMUM EXTENT PERMITTED BY LAW, SAFEALLERGY SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (A) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE; (B) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICE.
             </p>
           </section>

           <div className="h-px w-full bg-slate-100"></div>

           <section>
             <h3 className="text-2xl font-bold text-slate-900 mb-4">6. Dispute Resolution</h3>
             <p className="text-slate-600 leading-relaxed">
               Any dispute arising from these Terms shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. You agree to waive your right to a trial by jury or to participate in a class action lawsuit.
             </p>
           </section>

        </div>

        {/* Footer Contact */}
        <div className="text-center text-slate-400 text-sm">
           <p>SafeAllergy Inc. • 123 Tech Park, San Francisco, CA</p>
           <p>Contact Legal: legal@safeallergy.com</p>
        </div>

      </div>
    </div>
  );
}