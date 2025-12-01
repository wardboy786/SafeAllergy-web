'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  ScanLine, 
  Utensils, 
  Leaf, 
  ChevronRight, 
  Star, 
  Smartphone, 
  CheckCircle2, 
  ArrowRight,
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Download
} from 'lucide-react';

const SafeAllergyLandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll Listener for Navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* --- BACKGROUND AMBIENCE --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         {/* Aurora Blobs */}
         <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-500/10 rounded-full blur-[120px] animate-blob"></div>
         <div className="absolute top-[40%] right-[-10%] w-[40vw] h-[40vw] bg-emerald-500/10 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
         <div className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] bg-purple-500/10 rounded-full blur-[120px] animate-blob animation-delay-4000"></div>
         {/* Noise Texture */}
         <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] contrast-150 brightness-100"></div>
      </div>

      {/* --- NAVBAR --- */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
         <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
               <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                 🐘
               </div>
               <span className="text-xl font-black tracking-tight text-slate-900">SafeAllergy</span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600">
               <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
               <a href="#how-it-works" className="hover:text-blue-600 transition-colors">How it Works</a>
               <a href="#testimonials" className="hover:text-blue-600 transition-colors">Reviews</a>
               <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
               <DownloadButton small />
            </div>

            {/* Mobile Menu Toggle */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-slate-600">
               {mobileMenuOpen ? <X /> : <Menu />}
            </button>
         </div>

         {/* Mobile Menu Dropdown */}
         {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl p-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
               <a href="#features" className="text-lg font-bold text-slate-700" onClick={() => setMobileMenuOpen(false)}>Features</a>
               <a href="#how-it-works" className="text-lg font-bold text-slate-700" onClick={() => setMobileMenuOpen(false)}>How it Works</a>
               <a href="#testimonials" className="text-lg font-bold text-slate-700" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
               <DownloadButton />
            </div>
         )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 pt-32 pb-20 md:pt-48 md:pb-32 px-6">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            
            {/* Left Content */}
            <div className="flex-1 text-center md:text-left">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6 animate-fade-in-up">
                  <SparkleIcon /> #1 AI Allergy Scanner
               </div>
               
               <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 mb-6 leading-[1.1] animate-fade-in-up animation-delay-100">
                 Eat Safe.<br/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500">Live Free.</span>
               </h1>
               
               <p className="text-lg md:text-xl text-slate-500 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0 animate-fade-in-up animation-delay-200">
                 Your personal AI food guardian. Scan ingredients, menus, and cosmetics to instantly detect hidden allergens based on your unique profile.
               </p>
               
               <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start animate-fade-in-up animation-delay-300">
                  <DownloadButton />
               </div>

            </div>

            {/* Right Visual (3D Mockup) */}
            <div className="flex-1 relative animate-float">
               <div className="relative z-10 w-72 md:w-80 mx-auto">
                  {/* Phone Frame */}
                  <div className="bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden aspect-[9/19] relative">
                     {/* Screen Content Mockup */}
                     <div className="absolute inset-0 bg-white flex flex-col">
                        {/* Fake App Header */}
                        <div className="h-24 bg-blue-600 rounded-b-3xl relative">
                           <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-3xl border-4 border-white">🐘</div>
                        </div>
                        {/* Fake Scan Result */}
                        <div className="p-6 mt-8 text-center space-y-4">
                           <div className="w-20 h-20 bg-emerald-100 rounded-full mx-auto flex items-center justify-center text-emerald-600 mb-2">
                              <ShieldCheck className="w-10 h-10" />
                           </div>
                           <h3 className="font-bold text-xl text-slate-800">Safe to Consume</h3>
                           <p className="text-xs text-slate-400">No allergens found for your profile.</p>
                           <div className="space-y-2 mt-4">
                              <div className="h-10 w-full bg-slate-50 rounded-xl"></div>
                              <div className="h-10 w-full bg-slate-50 rounded-xl"></div>
                           </div>
                        </div>
                        {/* Floating Scan Button */}
                        <div className="mt-auto m-6 h-14 bg-slate-900 rounded-full flex items-center justify-center text-white shadow-xl">
                           <ScanLine className="w-6 h-6 animate-pulse" />
                        </div>
                     </div>
                  </div>
               </div>
               
               {/* Decorative Elements behind phone */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-[60px] -z-10"></div>
            </div>

         </div>
      </section>

      {/* --- HOW IT WORKS (3 STEPS) --- */}
      <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
               <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Simple. Fast. Lifesaving.</h2>
               <p className="text-slate-500 text-lg">Three steps to complete peace of mind.</p>
            </div>

            {/* Step 1: Profile */}
            <div className="flex flex-col md:flex-row items-center gap-16 mb-24">
               <div className="flex-1 order-2 md:order-1">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                     <span className="text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">Create Your Profile</h3>
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    Select from common allergens like Peanuts, Dairy, or Gluten, or add custom ones (like "Strawberry" or "Aspirin"). Our AI adapts to <strong>YOU</strong>.
                  </p>
                  <ul className="space-y-3">
                     <ListItem>Food & Environmental Triggers</ListItem>
                     <ListItem>Custom Allergen Support</ListItem>
                     <ListItem>Emergency Contact Storage</ListItem>
                  </ul>
               </div>
               <div className="flex-1 order-1 md:order-2 flex justify-center">
                  <div className="relative w-full max-w-md aspect-video bg-slate-50 rounded-3xl border border-slate-100 shadow-xl overflow-hidden p-6 flex flex-col justify-center gap-4">
                     {/* Mock UI Elements */}
                     <div className="flex gap-3">
                        <div className="flex-1 p-4 rounded-xl bg-white shadow-sm border border-slate-200 flex items-center gap-3">
                           <div className="w-8 h-8 rounded-full bg-red-100"></div>
                           <div className="h-2 w-20 bg-slate-200 rounded-full"></div>
                        </div>
                        <div className="flex-1 p-4 rounded-xl bg-blue-50 border border-blue-200 flex items-center gap-3">
                           <CheckCircle2 className="w-5 h-5 text-blue-500" />
                           <div className="h-2 w-20 bg-blue-200 rounded-full"></div>
                        </div>
                     </div>
                     <div className="flex gap-3">
                        <div className="flex-1 p-4 rounded-xl bg-white shadow-sm border border-slate-200 flex items-center gap-3">
                           <div className="w-8 h-8 rounded-full bg-amber-100"></div>
                           <div className="h-2 w-20 bg-slate-200 rounded-full"></div>
                        </div>
                        <div className="flex-1 p-4 rounded-xl bg-white shadow-sm border border-slate-200 flex items-center gap-3">
                           <div className="w-8 h-8 rounded-full bg-green-100"></div>
                           <div className="h-2 w-20 bg-slate-200 rounded-full"></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Step 2: Scan */}
            <div className="flex flex-col md:flex-row items-center gap-16 mb-24">
               <div className="flex-1 flex justify-center">
                  <div className="relative w-full max-w-md aspect-square bg-slate-900 rounded-[3rem] shadow-2xl overflow-hidden flex items-center justify-center group">
                     {/* Camera Viewfinder UI */}
                     <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop')] bg-cover opacity-60"></div>
                     <div className="absolute inset-8 border-2 border-white/30 rounded-3xl">
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-emerald-400 rounded-tl-xl"></div>
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-emerald-400 rounded-tr-xl"></div>
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-emerald-400 rounded-bl-xl"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-emerald-400 rounded-br-xl"></div>
                     </div>
                     <div className="absolute top-1/2 left-0 w-full h-1 bg-emerald-400/50 blur-sm animate-scan-line"></div>
                     <div className="relative z-10 bg-black/60 backdrop-blur-md px-6 py-3 rounded-full text-white font-mono text-sm border border-white/10 flex items-center gap-2">
                        <ScanLine className="w-4 h-4 text-emerald-400" /> Scanning...
                     </div>
                  </div>
               </div>
               <div className="flex-1">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                     <span className="text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">Point & Scan</h3>
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    Simply point your camera at any <strong>Barcode</strong>, <strong>Ingredient List</strong>, or <strong>Product</strong>. Our AI reads text, recognizes objects, and cross-references your profile in milliseconds.
                  </p>
                  <ul className="space-y-3">
                     <ListItem>Works on Packaged Food</ListItem>
                     <ListItem>Identifies Cosmetics & Plants</ListItem>
                     <ListItem>Instant Risk Assessment</ListItem>
                  </ul>
               </div>
            </div>

            {/* Step 3: Menu */}
            <div className="flex flex-col md:flex-row items-center gap-16">
               <div className="flex-1 order-2 md:order-1">
                  <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                     <span className="text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">Menu Analysis</h3>
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    Travel and dine out without fear. Scan any restaurant menu to instantly see which dishes are safe and which to avoid.
                  </p>
                  <ul className="space-y-3">
                     <ListItem>Highlights Safe Options (Green)</ListItem>
                     <ListItem>Flags Risky Ingredients (Red)</ListItem>
                     <ListItem>Works Offline & Globally</ListItem>
                  </ul>
               </div>
               <div className="flex-1 order-1 md:order-2 flex justify-center">
                  <div className="relative w-full max-w-md aspect-[4/3] bg-white rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 p-6 overflow-hidden">
                     {/* Menu Mockup */}
                     <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 rounded-xl bg-emerald-50 border border-emerald-100">
                           <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg bg-emerald-200"></div>
                              <div>
                                 <div className="h-3 w-24 bg-slate-800 rounded mb-1"></div>
                                 <div className="h-2 w-16 bg-slate-400 rounded"></div>
                              </div>
                           </div>
                           <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                        </div>
                        <div className="flex justify-between items-center p-3 rounded-xl bg-slate-50 border border-slate-100 opacity-50">
                           <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg bg-slate-200"></div>
                              <div>
                                 <div className="h-3 w-24 bg-slate-300 rounded mb-1"></div>
                                 <div className="h-2 w-16 bg-slate-200 rounded"></div>
                              </div>
                           </div>
                        </div>
                        <div className="flex justify-between items-center p-3 rounded-xl bg-red-50 border border-red-100">
                           <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg bg-red-200"></div>
                              <div>
                                 <div className="h-3 w-24 bg-slate-800 rounded mb-1"></div>
                                 <div className="h-2 w-16 bg-slate-400 rounded"></div>
                              </div>
                           </div>
                           <span className="text-xs font-bold text-red-500 bg-white px-2 py-1 rounded-md">CONTAINS NUTS</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </section>

      {/* --- FEATURES GRID --- */}
      <section id="features" className="py-24 bg-slate-900 text-white relative overflow-hidden">
         {/* Background Glows */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"></div>
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]"></div>

         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-black mb-4">Complete Protection</h2>
               <p className="text-slate-400 text-lg">Everything you need to navigate the world safely.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               <FeatureCard 
                 icon={ScanLine} 
                 title="Barcode Scanner" 
                 desc="Access a global database of over 2 million products instantly." 
               />
               <FeatureCard 
                 icon={Utensils} 
                 title="Smart Menu Reader" 
                 desc="AI reads menus in any language and highlights safe choices." 
               />
               <FeatureCard 
                 icon={Leaf} 
                 title="Plant & Cosmetic ID" 
                 desc="Identify poisonous plants and chemical allergens in beauty products." 
               />
               <FeatureCard 
                 icon={Smartphone} 
                 title="Emergency Mode" 
                 desc="One-tap access to your emergency contacts and medical ID card." 
               />
               <FeatureCard 
                 icon={ShieldCheck} 
                 title="Regional Alerts" 
                 desc="Real-time air quality, pollen, and weather alerts for your location." 
               />
               <FeatureCard 
                 icon={Star} 
                 title="Premium Insights" 
                 desc="Detailed breakdown of why an item is safe or risky." 
               />
            </div>
         </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section id="testimonials" className="py-24 bg-slate-50">
         <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12">Loved by Thousands</h2>
            <div className="grid md:grid-cols-2 gap-6">
               <TestimonialCard 
                 quote="This app literally saved me at a restaurant in Thailand. I scanned the menu and found it had peanuts hidden in the sauce. A lifesaver!"
                 author="Sarah Jenkins"
                 role="Travel Blogger"
               />
               <TestimonialCard 
                 quote="As a mom of a child with Celiac disease, grocery shopping used to be a nightmare. SafeAllergy makes it 10x faster and safer."
                 author="David Chen"
                 role="Parent"
               />
            </div>
         </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-20 px-6">
         <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
            
            <div className="relative z-10 flex flex-col items-center">
               <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to live worry-free?</h2>
               <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
                 Join thousands of users who trust SafeAllergy for their daily safety. Download now and get your first 5 scans free.
               </p>
               <DownloadButton large />
               <p className="text-xs text-blue-200/60 mt-6 uppercase tracking-widest font-bold">Available on Android & iOS</p>
            </div>
         </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contact" className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
            
            {/* Brand */}
            <div className="col-span-2">
               <div className="flex items-center gap-2 mb-4 text-white">
                  <span className="text-2xl">🐘</span>
                  <span className="text-xl font-bold">SafeAllergy</span>
               </div>
               <p className="text-sm leading-relaxed max-w-xs mb-6">
                 Empowering you to explore the world safely with advanced AI detection technology. Your health is our priority.
               </p>
               <div className="flex gap-4">
                  <SocialIcon Icon={Twitter} />
                  <SocialIcon Icon={Facebook} />
                  <SocialIcon Icon={Instagram} />
                  <SocialIcon Icon={Linkedin} />
               </div>
            </div>

            {/* Quick Links */}
            <div>
               <h4 className="text-white font-bold mb-4">Company</h4>
               <ul className="space-y-2 text-sm">
                  <li><Link href="/about-us" className="hover:text-white transition-colors">About Us</Link></li>
                  <li><Link href="/contact-us" className="hover:text-white transition-colors">Contact</Link></li>
               </ul>
            </div>

            {/* Legal */}
            <div>
               <h4 className="text-white font-bold mb-4">Legal</h4>
               <ul className="space-y-2 text-sm">
                  <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/terms-of-use" className="hover:text-white transition-colors">Terms of Service</Link></li>
                  <li><a href="#" className="hover:text-white transition-colors">Disclaimer</a></li>
               </ul>
            </div>
         </div>
         <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-800 text-center text-xs">
            © 2024 SafeAllergy Inc. All rights reserved.
         </div>
      </footer>

      {/* --- STYLES --- */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animation-delay-100 { animation-delay: 0.1s; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        
        @keyframes scan-line {
          0% { top: 0%; }
          100% { top: 100%; }
        }
        .animate-scan-line {
          animation: scan-line 2s linear infinite;
        }
      `}</style>

    </div>
  );
};

// --- SUB-COMPONENTS ---

const DownloadButton = ({ small, large }: {small?: boolean, large?: boolean}) => (
  <button 
    className={`
      flex items-center gap-3 bg-slate-900 text-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all border border-slate-700
      ${small ? 'px-4 py-2 text-sm' : large ? 'px-8 py-4 text-lg' : 'px-6 py-3'}
    `}
  >
    <div className="w-6 h-6">
       {/* Play Store SVG */}
       <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.36,13.08L18.92,12.25L15.39,13.7L17.66,15.97L20.36,14.41C20.75,14.19 21,13.77 21,13.31C21,13.23 21,13.15 20.97,13.08M14.54,11.15L6.05,2.66L16.81,8.88L14.54,11.15Z" /></svg>
    </div>
    <div className="flex flex-col items-start leading-none">
       <span className="text-[10px] uppercase font-medium text-slate-400">Get it on</span>
       <span className="font-bold">Google Play</span>
    </div>
  </button>
);

const FeatureCard = ({ icon: Icon, title, desc }: { icon: React.ElementType, title: string, desc: string }) => (
  <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700/50 hover:bg-slate-800 transition-colors">
     <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20">
        <Icon className="w-6 h-6 text-white" />
     </div>
     <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
     <p className="text-slate-400 leading-relaxed text-sm">{desc}</p>
  </div>
);

const TestimonialCard = ({ quote, author, role }: { quote: string, author: string, role: string }) => (
  <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 text-left">
     <div className="flex text-amber-400 mb-4">★★★★★</div>
     <p className="text-slate-700 text-lg font-medium italic mb-6">"{quote}"</p>
     <div>
        <p className="text-slate-900 font-bold">{author}</p>
        <p className="text-slate-500 text-sm">{role}</p>
     </div>
  </div>
);

const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-center gap-3 text-slate-700 font-medium">
     <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
     {children}
  </li>
);

const SocialIcon = ({ Icon }: { Icon: React.ElementType }) => (
  <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
     <Icon className="w-5 h-5" />
  </a>
);

const SparkleIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M9,2L7.17,5.5L3.69,7.17L7.17,8.83L9,12.31L10.83,8.83L14.31,7.17L10.83,5.5L9,2M19,9L17.34,12.17L14.17,13.83L17.34,15.5L19,18.69L20.66,15.5L23.83,13.83L20.66,12.17L19,9M9,16L7.63,18.5L5.13,19.84L7.63,21.19L9,23.69L10.34,21.19L12.84,19.84L10.34,18.5L9,16Z" /></svg>
);

export default SafeAllergyLandingPage;
