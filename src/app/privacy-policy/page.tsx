'use client';

import React from 'react';
import { Shield, Lock, Eye, Server, Globe, FileText, UserCheck } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20 font-sans text-slate-800">
      
      {/* Header */}
      <div className="max-w-5xl mx-auto px-6 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
          <Shield className="w-3 h-3" /> Legal Documentation
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 tracking-tight">Privacy Policy</h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
          Your trust is our priority. This document details how SafeAllergy collects, processes, and secures your sensitive health data in compliance with global standards.
        </p>
        <p className="text-sm font-bold text-slate-400 mt-4 uppercase tracking-widest">Effective Date: December 1, 2025</p>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[280px_1fr] gap-12">
        
        {/* Sidebar Navigation (Sticky) */}
        <aside className="hidden lg:block h-fit sticky top-32 space-y-4">
          <h3 className="font-black text-slate-900 mb-2 px-3 text-sm uppercase tracking-wider">Contents</h3>
          <nav className="flex flex-col gap-1 text-sm font-medium text-slate-500">
            {['Introduction', 'Data Collection', 'Health Data Usage', 'Data Sharing', 'User Rights', 'Data Security', 'Childrens Privacy', 'Contact Us'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="hover:text-blue-600 hover:bg-blue-50/80 px-4 py-2.5 rounded-xl transition-all border border-transparent hover:border-blue-100 block"
              >
                {item}
              </a>
            ))}
          </nav>
        </aside>

        {/* Content Area */}
        <div className="space-y-12 bg-white p-8 md:p-16 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100">
          
          <section id="introduction">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">1. Introduction</h2>
            <p className="text-lg leading-relaxed text-slate-600 mb-4">
              SafeAllergy Inc. ("we," "our," or "us") operates the SafeAllergy mobile application and website. We are committed to protecting your privacy, especially regarding the sensitive health information you entrust to us.
            </p>
            <p className="text-lg leading-relaxed text-slate-600">
              This Privacy Policy explains our practices regarding the collection, use, disclosure, and protection of information that is processed through our Service. By using SafeAllergy, you consent to the data practices described in this policy.
            </p>
          </section>

          <div className="h-px w-full bg-slate-100"></div>

          <section id="data-collection">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">2. Information We Collect</h2>
            </div>
            
            <div className="space-y-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-2">A. Personal Identification Information</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        We collect information that identifies you personally, including but not limited to: name, email address, profile photograph, and date of birth.
                    </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-2">B. Sensitive Health Data</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        To provide our core functionality, we process specific health details: specific food allergies, environmental triggers, medical conditions related to allergies, and emergency contact details. <strong>This data is stored encrypted at rest.</strong>
                    </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-2">C. Usage & Device Data</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        We automatically collect information about how you access the app, including IP address, device model, operating system version, unique device identifiers, and crash logs to improve app stability.
                    </p>
                </div>
            </div>
          </section>

          <div className="h-px w-full bg-slate-100"></div>

          <section id="health-data-usage">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">3. How We Use Your Data</h2>
            </div>
            <ul className="space-y-4 text-slate-600 leading-relaxed list-disc pl-6 marker:text-emerald-500">
                <li><strong>Core Functionality:</strong> To analyze scanned barcodes, menus, and products against your specific allergen profile using our AI algorithms.</li>
                <li><strong>Safety Alerts:</strong> To push real-time notifications regarding regional pollen counts or air quality index (AQI) hazards in your vicinity.</li>
                <li><strong>Service Improvement:</strong> To train our Optical Character Recognition (OCR) and allergen detection models. <em>Note: Data used for training is anonymized and stripped of personal identifiers.</em></li>
                <li><strong>Communication:</strong> To send you administrative information, such as updates to policies or subscription status.</li>
            </ul>
          </section>

          <div className="h-px w-full bg-slate-100"></div>

          <section id="data-sharing">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                <Globe className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">4. Data Sharing & Third Parties</h2>
            </div>
            <p className="text-slate-600 mb-4">We do <strong>not</strong> sell your personal health data. We share data only in the following circumstances:</p>
            <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-slate-200 rounded-xl p-4">
                    <h4 className="font-bold text-slate-900 text-sm mb-1">Service Providers</h4>
                    <p className="text-xs text-slate-500">Cloud hosting (AWS/Google Cloud), AI processing APIs, and payment processors (Stripe/Apple Pay). These parties are bound by strict confidentiality agreements.</p>
                </div>
                <div className="border border-slate-200 rounded-xl p-4">
                    <h4 className="font-bold text-slate-900 text-sm mb-1">Legal Compliance</h4>
                    <p className="text-xs text-slate-500">We may disclose information if required by law, such as to comply with a subpoena or similar legal process.</p>
                </div>
            </div>
          </section>

          <div className="h-px w-full bg-slate-100"></div>

          <section id="user-rights">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                <UserCheck className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">5. Your Rights (GDPR & CCPA)</h2>
            </div>
            <p className="text-slate-600 mb-4">Depending on your location, you have certain rights regarding your personal information:</p>
            <ul className="space-y-2 text-slate-600 list-disc pl-6 marker:text-amber-500">
                <li><strong>Right to Access:</strong> Request a copy of the personal data we hold about you.</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate data.</li>
                <li><strong>Right to Erasure ("Right to be Forgotten"):</strong> Request deletion of your account and all associated data.</li>
                <li><strong>Right to Data Portability:</strong> Request transfer of your data to another service.</li>
            </ul>
            <p className="text-sm text-slate-500 mt-4 bg-slate-50 p-4 rounded-xl">
                To exercise these rights, please contact our Data Protection Officer at <strong>privacy@safeallergy.com</strong>. We will respond within 30 days.
            </p>
          </section>

          <div className="h-px w-full bg-slate-100"></div>

          <section id="data-security">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 shrink-0">
                <Lock className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">6. Data Security</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              We implement robust security measures including <strong>AES-256 encryption</strong> for data at rest and <strong>TLS 1.3</strong> for data in transit. Access to personal data is restricted to authorized employees who need it to perform their job duties. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <div className="h-px w-full bg-slate-100"></div>

          <section id="contact-us" className="bg-slate-900 text-white p-8 md:p-10 rounded-3xl text-center">
            <h3 className="text-2xl font-bold mb-3">Questions or Concerns?</h3>
            <p className="text-slate-400 mb-6">
              If you have any questions about this Privacy Policy, please contact us.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4 text-sm font-medium">
                <span className="bg-white/10 px-4 py-2 rounded-lg">📧 privacy@safeallergy.com</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg">📍 123 Tech Park, San Francisco, CA</span>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}