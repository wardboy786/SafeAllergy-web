'use client';

import React from 'react';
import { Heart, Users, ShieldCheck, Sparkles } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
         <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>
         <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
              Making the world <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">safe to eat.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              We are on a mission to empower the 250 million people worldwide living with food allergies to dine, travel, and live without fear.
            </p>
         </div>
      </section>

      {/* Story / Mission Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
         <div className="grid md:grid-cols-2 gap-8">
            
            <div className="bg-white p-10 rounded-[3rem] shadow-lg border border-slate-100 flex flex-col justify-center">
               <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center text-red-500 mb-6">
                  <Heart className="w-7 h-7 fill-current" />
               </div>
               <h3 className="text-3xl font-bold mb-4">Born from Necessity</h3>
               <p className="text-slate-600 leading-relaxed">
                 SafeAllergy started when our founder, who has a severe peanut allergy, struggled to order food while traveling abroad. We realized that language barriers and complex ingredient lists shouldn't stand in the way of a safe meal.
               </p>
            </div>

            <div className="bg-slate-900 p-10 rounded-[3rem] shadow-2xl relative overflow-hidden text-white flex flex-col justify-center">
               <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-blue-900"></div>
               <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-blue-300 mb-6 backdrop-blur-sm border border-white/10">
                     <Sparkles className="w-7 h-7" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Powered by AI</h3>
                  <p className="text-slate-300 leading-relaxed">
                    We leverage cutting-edge Computer Vision and Large Language Models to analyze food labels with 99.8% accuracy. Our technology learns continuously, constantly expanding its database of global ingredients.
                  </p>
               </div>
            </div>

         </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-black mb-4">Our Core Values</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-12 text-center">
               <div>
                  <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6">
                     <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Safety First</h4>
                  <p className="text-slate-500">We never compromise on accuracy. If we aren't sure, we tell you to avoid.</p>
               </div>
               <div>
                  <div className="w-16 h-16 mx-auto bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-6">
                     <Users className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Accessibility</h4>
                  <p className="text-slate-500">Everyone deserves safe food, regardless of language or location.</p>
               </div>
               <div>
                  <div className="w-16 h-16 mx-auto bg-purple-50 rounded-full flex items-center justify-center text-purple-600 mb-6">
                     <Heart className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Empathy</h4>
                  <p className="text-slate-500">We build for the anxiety and needs of the allergy community because we are part of it.</p>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
}