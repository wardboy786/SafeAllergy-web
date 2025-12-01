'use client';

import React from 'react';
import { 
  Heart, Users, ShieldCheck, Sparkles, Brain, Globe, 
  Microscope, Award, Zap, CheckCircle2 
} from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-500/30">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden">
         {/* Background Effects */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
         <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

         <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in-up">
               <Sparkles className="w-3 h-3 text-amber-400" /> Our Mission
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 text-slate-900 animate-fade-in-up animation-delay-100">
              We are making the world <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">safe to eat.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              SafeAllergy isn't just an app. It's a movement to empower the 250 million people worldwide living with food allergies to dine, travel, and shop without fear.
            </p>
         </div>
      </section>

      {/* --- THE ORIGIN STORY --- */}
      <section className="py-24 bg-white border-y border-slate-100">
         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
               <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-[3rem] rotate-3 opacity-10"></div>
               <div className="relative bg-slate-50 rounded-[3rem] p-10 border border-slate-100 shadow-2xl overflow-hidden aspect-[4/3] flex items-center justify-center">
                  {/* Decorative Abstract UI */}
                  <div className="relative z-10 w-full max-w-sm">
                     <div className="bg-white p-6 rounded-2xl shadow-lg mb-4 flex items-center gap-4 animate-float">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-500"><Heart className="w-6 h-6 fill-current"/></div>
                        <div>
                           <div className="h-2 w-24 bg-slate-800 rounded mb-1"></div>
                           <div className="h-2 w-16 bg-slate-200 rounded"></div>
                        </div>
                     </div>
                     <div className="bg-white p-6 rounded-2xl shadow-lg ml-12 animate-float animation-delay-2000">
                        <div className="flex items-center gap-4 mb-3">
                           <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500"><Globe className="w-6 h-6"/></div>
                           <div className="h-2 w-32 bg-slate-800 rounded"></div>
                        </div>
                        <div className="h-2 w-full bg-slate-100 rounded mb-2"></div>
                        <div className="h-2 w-2/3 bg-slate-100 rounded"></div>
                     </div>
                  </div>
               </div>
            </div>
            
            <div>
               <h2 className="text-4xl font-black text-slate-900 mb-6">Born from Necessity</h2>
               <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>
                    The idea for SafeAllergy began in a small café in Tokyo. Our founder, living with a severe nut allergy, struggled to communicate their dietary needs across a language barrier. The anxiety of "what if" turned a simple meal into a stressful ordeal.
                  </p>
                  <p>
                    We realized that in a globalized world, safety shouldn't have a language barrier. Traditional translation cards were static and often ignored. We needed something smarter, faster, and more reliable.
                  </p>
                  <p>
                    So we built it. We combined advanced Computer Vision with a proprietary allergen database to create a tool that sees what you see—and detects what you can't.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* --- TECHNOLOGY DEEP DIVE --- */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"></div>
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]"></div>

         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
               <span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 block">Our Technology</span>
               <h2 className="text-4xl md:text-5xl font-black mb-6">Precision Engineering</h2>
               <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                 We don't just match keywords. Our multi-layer AI architecture understands context, chemistry, and composition.
               </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               <TechCard 
                 icon={Brain} 
                 title="Semantic Understanding" 
                 desc="Our LLMs understand that 'casein' implies milk and 'bulgur' implies wheat, catching hidden allergens that simple text search misses."
               />
               <TechCard 
                 icon={Microscope} 
                 title="Molecular Database" 
                 desc="We maintain a proprietary database of over 50,000 chemical compounds used in food and cosmetics to detect non-food allergens."
               />
               <TechCard 
                 icon={Zap} 
                 title="Real-Time OCR" 
                 desc="Our custom optical engine can read curved labels, crumpled packages, and low-contrast text in under 200 milliseconds."
               />
            </div>
         </div>
      </section>

      {/* --- CORE VALUES --- */}
      <section className="py-24 bg-slate-50">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-black text-slate-900 mb-4">Our Core Values</h2>
               <p className="text-slate-500">The principles that guide every line of code we write.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
               <ValueCard 
                  icon={ShieldCheck}
                  title="Safety Above All"
                  desc="We operate with a 'Fail-Safe' philosophy. If our AI isn't 100% sure about an ingredient, we advise caution. We never gamble with your health."
               />
               <ValueCard 
                  icon={Users}
                  title="Radical Inclusivity"
                  desc="Whether you have Celiac disease, a peanut allergy, or a rare sensitivity to specific chemicals, our platform is built to adapt to YOU."
               />
               <ValueCard 
                  icon={Award}
                  title="Transparency"
                  desc="We believe you have the right to know exactly what is in your products. We fight against vague labeling and hidden ingredients."
               />
            </div>
         </div>
      </section>

    </div>
  );
}

// --- SUB-COMPONENTS ---

const TechCard = ({ icon: Icon, title, desc }: { icon: React.ElementType, title: string, desc: string }) => (
  <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors">
     <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20">
        <Icon className="w-7 h-7 text-white" />
     </div>
     <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
     <p className="text-slate-400 leading-relaxed text-sm">{desc}</p>
  </div>
);

const ValueCard = ({ icon: Icon, title, desc }: { icon: React.ElementType, title: string, desc: string }) => (
  <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
     <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-6 text-slate-700">
        <Icon className="w-8 h-8" />
     </div>
     <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
     <p className="text-slate-500 leading-relaxed">{desc}</p>
  </div>
);

const StatItem = ({ number, label }: { number: string, label: string }) => (
  <div>
     <div className="text-5xl md:text-6xl font-black mb-2 tracking-tight">{number}</div>
     <div className="text-blue-200 font-bold uppercase tracking-widest text-xs">{label}</div>
  </div>
);
