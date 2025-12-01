'use client';

import React from 'react';
import { Mail, MapPin, Phone, MessageSquare, Send } from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20 font-sans text-slate-800">
      
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16">
           <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Get in touch</h1>
           <p className="text-slate-500 text-lg">We'd love to hear from you. Our team is here to help.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
           
           {/* Contact Info */}
           <div className="space-y-8">
              
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                 <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                    <MessageSquare className="w-6 h-6" />
                 </div>
                 <h3 className="text-xl font-bold mb-2">Chat with Support</h3>
                 <p className="text-slate-500 mb-4">Speak to our team via live chat.</p>
                 <a href="#" className="font-bold text-blue-600 hover:underline">Start a live chat &rarr;</a>
              </div>

              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                 <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-4">
                    <Mail className="w-6 h-6" />
                 </div>
                 <h3 className="text-xl font-bold mb-2">Email Us</h3>
                 <p className="text-slate-500 mb-4">For general inquiries and partnership.</p>
                 <a href="mailto:hello@safeallergy.com" className="font-bold text-emerald-600 hover:underline">hello@safeallergy.com</a>
              </div>

              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                 <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-4">
                    <MapPin className="w-6 h-6" />
                 </div>
                 <h3 className="text-xl font-bold mb-2">Office</h3>
                 <p className="text-slate-500">
                   123 Innovation Drive<br/>
                   Tech Park, Suite 400<br/>
                   San Francisco, CA 94103
                 </p>
              </div>

           </div>

           {/* Contact Form */}
           <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-slate-100 h-fit">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              <form className="space-y-6">
                 
                 <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-sm font-bold text-slate-700 ml-1">First Name</label>
                       <input type="text" placeholder="Jane" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-bold text-slate-700 ml-1">Last Name</label>
                       <input type="text" placeholder="Doe" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
                    </div>
                 </div>

                 <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Email</label>
                    <input type="email" placeholder="jane@example.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
                 </div>

                 <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                    <textarea rows="4" placeholder="How can we help you?" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"></textarea>
                 </div>

                 <button type="button" className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-900/20">
                    Send Message <Send className="w-4 h-4" />
                 </button>

              </form>
           </div>

        </div>
      </div>
    </div>
  );
}