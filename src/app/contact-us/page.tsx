'use client';

import React from 'react';
import { Mail, Send, Copy, ArrowRight, Shield, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function ContactUs() {
  const [copied, setCopied] = useState(false);
  const email = "ecoliwears@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20 font-sans text-slate-800 flex flex-col justify-center relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px]"></div>
         <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px]"></div>
         <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      <div className="max-w-2xl mx-auto px-6 w-full relative z-10">
        
        <div className="text-center mb-12">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/50 text-slate-600 text-xs font-bold uppercase tracking-wider mb-6">
              <Shield className="w-3 h-3" /> 24/7 Support
           </div>
           <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
             Get in touch.
           </h1>
           <p className="text-slate-500 text-lg leading-relaxed max-w-md mx-auto">
             Whether you have a question about features, trials, pricing, or just want to say hello, our team is ready to answer all your questions.
           </p>
        </div>

        {/* PREMIUM EMAIL CARD */}
        <div className="relative group">
           
           {/* Glow Effect behind card */}
           <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
           
           <div className="relative bg-white p-10 md:p-14 rounded-[2.5rem] shadow-2xl flex flex-col items-center text-center overflow-hidden">
              
              {/* Decorative Background inside card */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-slate-50 rounded-full z-0"></div>

              <div className="relative z-10">
                 <div className="w-24 h-24 bg-blue-50 rounded-3xl flex items-center justify-center text-blue-600 mb-8 mx-auto shadow-sm group-hover:scale-110 transition-transform duration-500">
                    <Mail className="w-10 h-10" />
                 </div>
                 
                 <h3 className="text-2xl font-bold text-slate-900 mb-2">Direct Email Support</h3>
                 <p className="text-slate-500 mb-10 max-w-xs mx-auto">
                   Drop us a line directly. We typically respond within 2-4 hours.
                 </p>

                 {/* The Email Action Area */}
                 <div className="flex flex-col gap-4 w-full max-w-sm mx-auto">
                    
                    {/* Primary Button: Mailto */}
                    <a 
                      href={`mailto:${email}`} 
                      className="flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-600 transition-all shadow-xl shadow-slate-900/20 active:scale-[0.98] group/btn"
                    >
                      <span>Send Email</span>
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </a>

                    {/* Secondary Button: Copy */}
                    <button 
                      onClick={handleCopy}
                      className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-colors border border-transparent hover:border-slate-200"
                    >
                       {copied ? (
                         <>
                           <CheckCircle2 className="w-4 h-4 text-green-500" />
                           <span className="text-green-600">Copied to clipboard</span>
                         </>
                       ) : (
                         <>
                           <Copy className="w-4 h-4" />
                           <span>{email}</span>
                         </>
                       )}
                    </button>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}