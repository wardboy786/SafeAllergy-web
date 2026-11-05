'use client';

import React from 'react';
import {
  FileText,
  AlertTriangle,
  CheckCircle2,
  Gavel,
  DollarSign,
  Ban,
  ShieldCheck,
  MessageCircle,
  Scale,
  Mail,
  HeartPulse,
  Building2,
  RefreshCw,
  Globe,
  Copyright,
  Info
} from 'lucide-react';

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20 font-sans text-slate-800">

      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-4">
          <FileText className="w-3 h-3" />
          Terms of Service
        </div>

        <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 tracking-tight">
          Terms of Use
        </h1>

        <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
          Please read these terms carefully. They contain important information regarding your legal rights, remedies, and obligations when using SafeAllergy.
        </p>

        <p className="text-sm font-bold text-slate-400 mt-4 uppercase tracking-widest">
          Last Modified: November 5, 2026
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 space-y-12">

        {/* Critical Medical Disclaimer */}
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
                <strong>SAFEALLERGY IS NOT A MEDICAL DEVICE.</strong> The services, content, information, and analysis provided by SafeAllergy are for general informational and educational purposes only. The application uses Artificial Intelligence (AI), Optical Character Recognition (OCR), databases, and third-party information sources, which may produce errors, omissions, or inaccuracies.
              </p>

              <p>
                <strong>YOU MUST NOT RELY SOLELY ON THIS APP FOR MEDICAL SAFETY.</strong> Always verify ingredients manually on product packaging. Always communicate your allergies directly to restaurant staff. Always carry your prescribed emergency medication, including an Epinephrine Auto-Injector if prescribed by your healthcare professional.
              </p>

              <p>
                SafeAllergy cannot guarantee that any food, product, ingredient, or restaurant meal is completely free from allergens or cross-contamination. Ingredients, manufacturing processes, and food preparation practices may change without notice.
              </p>

              <p>
                SafeAllergy does not provide medical diagnosis, treatment, or professional medical advice. In case of an allergic reaction or medical emergency, seek immediate medical assistance.
              </p>

              <p>
                By using this application, you acknowledge that you remain responsible for your own health, safety, and medical decisions.
              </p>

            </div>
          </div>
        </div>

        {/* Main Terms */}
        <div className="bg-white p-8 md:p-16 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100 space-y-12">

          {/* 1. Acceptance */}
          <section>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              1. Acceptance of Terms
            </h3>

            <p className="text-slate-600 leading-relaxed">
              By downloading, installing, creating an account, accessing, or using SafeAllergy, you agree to these Terms of Use and our Privacy Policy. If you do not agree with these Terms, you must discontinue using the Service.
            </p>

            <p className="text-slate-600 leading-relaxed mt-4">
              If you use the Service on behalf of an organization, you represent that you have the authority to accept these Terms on behalf of that organization.
            </p>
          </section>

          <div className="h-px w-full bg-slate-100"></div>

          {/* 2. Service Provider */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                <Building2 className="w-5 h-5" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                2. Service Provider & Trader Information
              </h3>
            </div>

            <p className="text-slate-600 leading-relaxed mb-5">
              SafeAllergy is developed, operated, and provided by DreamyDesk, a sole proprietorship business established in India.
            </p>

            <div className="bg-slate-50 rounded-2xl p-6 space-y-3 text-slate-600">

              <p>
                <strong>Business / Trading Name:</strong> DreamyDesk
              </p>

              <p>
                <strong>Business Structure:</strong> Sole Proprietorship
              </p>

              <p>
                <strong>Country of Establishment:</strong> India
              </p>

              <p>
                <strong>Customer Support:</strong>{' '}
                <a
                  href="mailto:support@safeallergy.app"
                  className="text-blue-600 hover:underline"
                >
                  support@safeallergy.app
                </a>
              </p>

              <p>
                <strong>Website:</strong>{' '}
                <a
                  href="https://safeallergy.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  safeallergy.app
                </a>
              </p>

            </div>

            <p className="text-slate-600 leading-relaxed mt-5">
              Users may contact us through the support email provided above for questions, complaints, requests, or concerns relating to SafeAllergy and its services.
            </p>
          </section>

          <div className="h-px w-full bg-slate-100"></div>

          {/* 3. Description of Services */}
          <section>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              3. Description of Services
            </h3>

            <p className="text-slate-600 leading-relaxed mb-4">
              SafeAllergy is an AI-powered allergen information and safety assistance application designed to help users identify potential allergens and understand food and environmental allergy-related information.
            </p>

            <p className="text-slate-600 leading-relaxed mb-4">
              The Service may include the following features:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>AI-powered food and product ingredient scanning.</li>
              <li>Allergen identification and ingredient analysis.</li>
              <li>Restaurant menu and menu-card scanning.</li>
              <li>Personalized allergen profiles and preferences.</li>
              <li>Allergen history and saved scan results.</li>
              <li>Pollen information and forecasts.</li>
              <li>Air Quality Index (AQI) information.</li>
              <li>Allergy identification cards and related information.</li>
              <li>Premium features and subscription-based services.</li>
            </ul>

            <p className="text-slate-600 leading-relaxed mt-4">
              Features may be updated, modified, introduced, or discontinued from time to time, subject to applicable laws and contractual obligations.
            </p>
          </section>

          <div className="h-px w-full bg-slate-100"></div>

          {/* 4. Eligibility */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                <CheckCircle2 className="w-5 h-5" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                4. Eligibility & Account Security
              </h3>
            </div>

            <p className="text-slate-600 leading-relaxed mb-4">
              You must be at least 13 years old to use the Service. If you are below the age of majority in your jurisdiction, you must obtain permission from your parent or legal guardian where required by applicable law.
            </p>

            <p className="text-slate-600 leading-relaxed">
              You are responsible for maintaining the confidentiality of your account credentials and for activities conducted through your account. You agree to provide accurate information and notify us promptly if you suspect unauthorized access.
            </p>
          </section>

          <div className="h-px w-full bg-slate-100"></div>

          {/* 5. AI Accuracy */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                <HeartPulse className="w-5 h-5" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                5. AI Technology & Information Accuracy
              </h3>
            </div>

            <div className="space-y-4 text-slate-600 leading-relaxed">

              <p>
                SafeAllergy uses AI, OCR, automated processing, and external information sources to analyze ingredients, food labels, product information, and restaurant menus.
              </p>

              <p>
                AI-generated results are estimates and may fail to recognize certain ingredients, allergens, spelling variations, hidden ingredients, or relevant warnings.
              </p>

              <p>
                Information from third-party sources, including pollen forecasts and air quality providers, may be delayed, unavailable, incomplete, or inaccurate.
              </p>

              <p>
                We do not guarantee the accuracy, completeness, reliability, or availability of information provided through the Service.
              </p>

              <p>
                You are responsible for independently verifying important information before making food, product, health, or safety-related decisions.
              </p>

            </div>
          </section>

          <div className="h-px w-full bg-slate-100"></div>

          {/* 6. Subscriptions */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                <DollarSign className="w-5 h-5" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                6. Subscriptions, Payments & Billing
              </h3>
            </div>

            <div className="space-y-4 text-slate-600 leading-relaxed">

              <p>
                <strong>Premium Features:</strong> Certain features and services may require an active paid subscription. Available subscription plans, pricing, billing periods, and included features will be displayed within the application or the applicable app store before purchase.
              </p>

              <p>
                <strong>Free Trials:</strong> We may offer free trials or promotional subscription periods. If a trial automatically converts into a paid subscription, the applicable price and renewal conditions will be disclosed before purchase. You must cancel before the trial expires to avoid the next charge.
              </p>

              <p>
                <strong>Billing:</strong> Subscription payments are processed through the applicable platform, such as Google Play or Apple App Store. Subscriptions may automatically renew unless cancelled before the applicable renewal date.
              </p>

              <p>
                <strong>Cancellation:</strong> You may cancel your subscription through your Google Play or Apple App Store account settings, depending on where you purchased it. Uninstalling the application does not automatically cancel a subscription.
              </p>

              <p>
                <strong>Access After Cancellation:</strong> Unless otherwise required by applicable law or platform policy, cancellation prevents future renewals but does not immediately terminate access to paid features. Access generally continues until the end of the current paid subscription period.
              </p>

              <p>
                <strong>Refunds:</strong> Refund requests are handled in accordance with applicable app store policies and mandatory consumer protection laws. Payments are generally non-refundable except where a refund is required by law or approved under the applicable platform's refund policy.
              </p>

              <p>
                <strong>Price Changes:</strong> Subscription prices, plans, and features may change. Any applicable changes to existing subscriptions will be communicated or handled in accordance with platform requirements and applicable laws.
              </p>

            </div>
          </section>

          <div className="h-px w-full bg-slate-100"></div>

          {/* 7. User Responsibilities */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-red-100 text-red-600 rounded-lg">
                <Ban className="w-5 h-5" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                7. User Responsibilities & Prohibited Conduct
              </h3>
            </div>

            <p className="text-slate-600 mb-4">
              You agree to use SafeAllergy responsibly and not to:
            </p>

            <ul className="list-disc pl-6 space-y-3 text-slate-600 leading-relaxed">

              <li>Use the Service for any unlawful purpose or in violation of applicable laws.</li>

              <li>Attempt to reverse engineer, decompile, modify, or disassemble any part of the Service, except where permitted by applicable law.</li>

              <li>Interfere with or disrupt the security, functionality, or operation of the application.</li>

              <li>Upload malicious software, harmful files, or misleading information.</li>

              <li>Attempt to gain unauthorized access to other users' accounts, systems, or data.</li>

              <li>Use the application in a manner that could compromise the safety or privacy of others.</li>

              <li>Abuse, exploit, or attempt to circumvent subscription restrictions or payment mechanisms.</li>

              <li>Use the Service to distribute fraudulent, harmful, or unlawful content.</li>

            </ul>
          </section>

          <div className="h-px w-full bg-slate-100"></div>

          {/* 8. Privacy */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                <ShieldCheck className="w-5 h-5" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                8. Privacy & Personal Information
              </h3>
            </div>

            <p className="text-slate-600 leading-relaxed mb-4">
              Your privacy is important to us. Our collection, use, processing, storage, and disclosure of personal information are governed by our Privacy Policy.
            </p>

            <p className="text-slate-600 leading-relaxed">
              Certain information may be processed to provide application functionality, maintain your account, perform AI analysis, process subscriptions, maintain security, and improve our services.
            </p>

            <p className="text-slate-600 leading-relaxed mt-4">
              Please review our Privacy Policy to understand what information we collect, how it is used, and what rights may be available to you under applicable data protection laws.
            </p>

          </section>

          <div className="h-px w-full bg-slate-100"></div>

          {/* 9. Third Party Services */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
                <Globe className="w-5 h-5" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                9. Third-Party Services & Advertisements
              </h3>
            </div>

            <p className="text-slate-600 leading-relaxed mb-4">
              SafeAllergy may integrate third-party services, including payment processors, analytics providers, advertising networks, AI service providers, cloud infrastructure, and external information sources.
            </p>

            <p className="text-slate-600 leading-relaxed mb-4">
              These third-party services may operate under their own terms, privacy policies, and practices. Their availability and operation may be outside our control.
            </p>

            <p className="text-slate-600 leading-relaxed">
              Advertisements may appear in the free version of the application. Premium subscriptions may provide an advertising-free experience where specified in the applicable subscription description.
            </p>
          </section>

          <div className="h-px w-full bg-slate-100"></div>

          {/* 10. Intellectual Property */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-slate-100 text-slate-600 rounded-lg">
                <Copyright className="w-5 h-5" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                10. Intellectual Property Rights
              </h3>
            </div>

            <p className="text-slate-600 leading-relaxed">
              All rights, titles, and interests in SafeAllergy, including its software, design, branding, logos, graphics, text, and original content, belong to their respective owners and are protected by applicable intellectual property laws.
            </p>

            <p className="text-slate-600 leading-relaxed mt-4">
              You may use the application for personal and lawful purposes only. You may not copy, distribute, reproduce, commercially exploit, or create derivative works from protected materials without prior written authorization, except where permitted by applicable law.
            </p>
          </section>

          <div className="h-px w-full bg-slate-100"></div>

          {/* 11. Limitation of Liability */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-slate-100 text-slate-600 rounded-lg">
                <Gavel className="w-5 h-5" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                11. Limitation of Liability
              </h3>
            </div>

            <p className="text-slate-600 leading-relaxed uppercase font-medium text-sm tracking-wide">
             TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, SAFEALLERGY SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, REVENUE, DATA, GOODWILL, OR OTHER INTANGIBLE LOSSES ARISING FROM YOUR ACCESS TO OR USE OF, OR INABILITY TO ACCESS OR USE, THE SERVICE.
            </p>

            <p className="text-slate-600 leading-relaxed mt-4">
              This includes, without limitation, reliance on inaccurate AI-generated results, incorrect ingredient recognition, incomplete allergen information, outdated third-party data, or service interruptions.
            </p>

            <p className="text-slate-600 leading-relaxed mt-4">
              Nothing in these Terms excludes or limits liability where such exclusion or limitation is prohibited by applicable law, including mandatory consumer rights and protections.
            </p>
          </section>

          <div className="h-px w-full bg-slate-100"></div>

          {/* 12. Service Availability */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-cyan-100 text-cyan-600 rounded-lg">
                <RefreshCw className="w-5 h-5" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                12. Service Availability & Modifications
              </h3>
            </div>

            <p className="text-slate-600 leading-relaxed">
              We aim to maintain reliable access to SafeAllergy but do not guarantee uninterrupted or error-free operation. The Service may occasionally be unavailable due to maintenance, technical issues, updates, or circumstances beyond our reasonable control.
            </p>

            <p className="text-slate-600 leading-relaxed mt-4">
              We reserve the right to update, modify, suspend, or discontinue features or parts of the Service, subject to applicable laws and contractual obligations.
            </p>
          </section>

          <div className="h-px w-full bg-slate-100"></div>

          {/* 13. Complaints */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-amber-100 text-amber-600 rounded-lg">
                <MessageCircle className="w-5 h-5" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                13. Complaints & Customer Support
              </h3>
            </div>

            <p className="text-slate-600 leading-relaxed mb-4">
              If you experience an issue with SafeAllergy, have a complaint, or wish to request assistance, you may contact our customer support team.
            </p>

            <div className="bg-slate-50 rounded-2xl p-6">
              <div className="flex items-center gap-3 text-slate-800 font-bold mb-2">
                <Mail className="w-5 h-5 text-blue-600" />
                Customer Support
              </div>

              <a
                href="mailto:support@safeallergy.app"
                className="text-blue-600 font-semibold hover:underline"
              >
                support@safeallergy.app
              </a>
            </div>

            <p className="text-slate-600 leading-relaxed mt-4">
              Please provide sufficient details about your concern so that we can investigate and respond appropriately. We will make reasonable efforts to review and address complaints within a reasonable timeframe.
            </p>
          </section>

          <div className="h-px w-full bg-slate-100"></div>

          {/* 14. Consumer Rights */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                <Scale className="w-5 h-5" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                14. Consumer Rights & Legal Protections
              </h3>
            </div>

            <p className="text-slate-600 leading-relaxed">
              Nothing in these Terms is intended to exclude, restrict, or limit any mandatory consumer rights or legal protections available to users under applicable laws.
            </p>

            <p className="text-slate-600 leading-relaxed mt-4">
              Where mandatory consumer protection laws apply, those rights and protections shall prevail over any conflicting provision of these Terms.
            </p>

            <p className="text-slate-600 leading-relaxed mt-4">
              Users located in India, the European Economic Area, the United Kingdom, and other jurisdictions may have additional statutory rights under their respective consumer protection and digital services laws.
            </p>
          </section>

          <div className="h-px w-full bg-slate-100"></div>

          {/* 15. Termination */}
          <section>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              15. Termination
            </h3>

            <p className="text-slate-600 leading-relaxed">
              You may stop using SafeAllergy at any time. We may suspend or terminate access to the Service if you materially violate these Terms, engage in unlawful activities, or misuse the application.
            </p>

            <p className="text-slate-600 leading-relaxed mt-4">
              Where reasonably practicable and legally required, we will provide notice before taking such action.
            </p>

            <p className="text-slate-600 leading-relaxed mt-4">
              Termination does not affect rights or obligations that arose before termination or provisions that are intended to survive termination.
            </p>
          </section>

          <div className="h-px w-full bg-slate-100"></div>

          {/* 16. Changes */}
          <section>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              16. Changes to These Terms
            </h3>

            <p className="text-slate-600 leading-relaxed">
              We may update these Terms periodically to reflect changes in our services, technology, business practices, or applicable legal requirements.
            </p>

            <p className="text-slate-600 leading-relaxed mt-4">
              Updated Terms will be published on this page with a revised Last Modified date. Where required by law, we will provide additional notice or obtain consent before material changes take effect.
            </p>
          </section>

          <div className="h-px w-full bg-slate-100"></div>

          {/* 17. Governing Law */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-slate-100 text-slate-600 rounded-lg">
                <Gavel className="w-5 h-5" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                17. Governing Law & Dispute Resolution
              </h3>
            </div>

            <p className="text-slate-600 leading-relaxed">
              These Terms shall be governed by the laws of India, without prejudice to any mandatory consumer protection laws that may apply in the user's jurisdiction.
            </p>

            <p className="text-slate-600 leading-relaxed mt-4">
              Any dispute arising from the use of SafeAllergy shall first be addressed through good-faith discussions between the parties. If the dispute cannot be resolved informally, it may be referred to the competent courts or dispute resolution mechanisms having jurisdiction under applicable law.
            </p>

            <p className="text-slate-600 leading-relaxed mt-4">
              Nothing in this section limits any statutory right a consumer may have to bring proceedings in their country or place of residence where such rights are provided by applicable law.
            </p>
          </section>

          <div className="h-px w-full bg-slate-100"></div>

          {/* 18. Severability */}
          <section>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              18. Severability
            </h3>

            <p className="text-slate-600 leading-relaxed">
              If any provision of these Terms is found to be invalid, unlawful, or unenforceable under applicable law, the remaining provisions shall continue in full force and effect to the extent permitted by law.
            </p>
          </section>

          <div className="h-px w-full bg-slate-100"></div>

          {/* 19. Entire Agreement */}
          <section>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              19. Entire Agreement
            </h3>

            <p className="text-slate-600 leading-relaxed">
              These Terms, together with our Privacy Policy and any additional terms applicable to specific features or services, constitute the agreement governing your use of SafeAllergy, subject to mandatory rights and protections under applicable law.
            </p>
          </section>

          <div className="h-px w-full bg-slate-100"></div>

          {/* 20. Contact */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                <Mail className="w-5 h-5" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                20. Contact Information
              </h3>
            </div>

            <p className="text-slate-600 leading-relaxed mb-5">
              For questions, feedback, legal inquiries, complaints, or assistance relating to these Terms or SafeAllergy, please contact us:
            </p>

            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 space-y-3">

              <div className="flex items-center gap-3">
                <Building2 className="w-5 h-5 text-slate-500" />
                <span className="font-bold text-slate-800">
                  DreamyDesk
                </span>
              </div>

              <p className="text-slate-600">
                Sole Proprietorship Business
              </p>

              <p className="text-slate-600">
                India
              </p>

              <div className="flex items-center gap-3 pt-2">
                <Mail className="w-5 h-5 text-blue-600" />

                <a
                  href="mailto:support@safeallergy.app"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  support@safeallergy.app
                </a>
              </div>

              <p className="text-slate-600">
                Website: https://safeallergy.app
              </p>

            </div>
          </section>

        </div>

        {/* Footer Contact */}
        <div className="text-center text-slate-400 text-sm space-y-2">
          <p className="font-bold text-slate-500">
            SafeAllergy
          </p>

          <p>
            Operated by DreamyDesk
          </p>

          <p>
            Contact: support@safeallergy.app
          </p>

          <p className="text-xs pt-3">
            © {new Date().getFullYear()} DreamyDesk. All rights reserved.
          </p>
        </div>

      </div>
    </div>
  );
}
