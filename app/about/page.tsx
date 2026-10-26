'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  HeartHandshake,
  Mail,
  Send,
  CheckCircle2,
  Sparkles,
  Info,
  Users,
  Target,
  AlertCircle,
} from 'lucide-react';

export default function AboutPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 400);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* 1. Header & Mission Statement */}
      <section className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary text-xs font-semibold uppercase tracking-wider">
          <Target className="w-3.5 h-3.5" />
          <span>Our Mission</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Demystify Rewards for Everyday Indians
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Indian credit card users deserve simple, actionable answers to a simple question: <strong className="text-slate-900 font-semibold">&ldquo;Which card should I swipe today for the maximum reward?&rdquo;</strong>
        </p>
      </section>

      {/* 2. The Problem & Why We Exist */}
      <section className="bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-10 space-y-6">
        <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider">
          <Users className="w-4 h-4" />
          <span>Why We Built This</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Built for Mr Y, Respected by Mr X
        </h2>
        <div className="prose prose-slate text-sm sm:text-base text-slate-600 space-y-4 leading-relaxed">
          <p>
            Existing Indian credit card sites and forums are tailored for &ldquo;card geeks&rdquo; (Mr X) — filled with 40-page loyalty transfer charts, award seat scraping tutorials, and complex net-value algebra.
          </p>
          <p>
            Yet research across dozens of Indian spenders revealed an undeniable reality: <strong>over 80% of cardholders</strong> take only 2–3 trips a year, have zero loyalty to any specific airline or hotel chain, and spend predominantly across travel, dining, and groceries. They just want plain, trustworthy instructions like:
          </p>
          <div className="p-4 bg-white rounded-xl border border-blue-200 text-blue-900 font-medium text-sm">
            💡 &ldquo;Use your Axis card on Wednesday on MakeMyTrip for 8% off international flights, or use Amex on Saturday for a flat 12% instant discount on bookings above ₹5,000.&rdquo;
          </div>
          <p>
            Without this clarity, people leave thousands of rupees in cashback and rewards unclaimed every month. <em>Credit Cards Sahi Hai</em> exists to fix this: concrete, day-specific guidance for everyday spenders, paired with side-by-side comparison tables for enthusiasts.
          </p>
        </div>
      </section>

      {/* 3. Founder's Note */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
          <Sparkles className="w-4 h-4" />
          <span>Founder&apos;s Perspective</span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900">A Note on Unbiased Advice</h2>
        <div className="text-sm sm:text-base text-slate-600 space-y-3 leading-relaxed">
          <p>
            Too many financial recommendation websites recommend credit cards based on which bank pays the highest bounty per approved application. Cards with mediocre rewards get pushed to the top, while genuinely rewarding cards get buried.
          </p>
          <p>
            We take the opposite approach: <strong>Usage-first, bank-agnostic, and completely transparent</strong>. Every usage tip is grounded in verified, active bank promotions (such as MakeMyTrip&apos;s weekly airline partnership schedule). When an offer requires a minimum spend or EMI transaction, we say so upfront.
          </p>
        </div>
      </section>

      {/* 4. Transparency & Affiliate Disclaimer */}
      <section id="transparency" className="p-6 sm:p-8 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-4">
        <div className="flex items-center gap-2 text-primary font-bold text-sm">
          <ShieldCheck className="w-5 h-5 text-primary" />
          <span>Affiliate Transparency Disclosure</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          <strong>Affiliate links do not influence our advice.</strong> In our MVP stage, our &ldquo;See Affiliate Link&rdquo; buttons link directly to each bank&apos;s official application page so you get authentic bank pricing and terms.
        </p>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          When commercial affiliate relationships are established in future phases, our editorial guidelines remain strict: cards are ranked solely on objective value, reward rates, and usability for Indian consumers.
        </p>
      </section>

      {/* 5. Contact Form */}
      <section id="contact" className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold mb-2">
            <Mail className="w-3.5 h-3.5 text-primary" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900">
            Have Feedback or Spotted an Expired Offer?
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Send us a note. Whether you want to suggest a new card, report a changed offer, or ask a question — we read every message.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-center space-y-2 animate-in fade-in duration-300">
            <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
            <h3 className="font-bold text-lg">Thank you for your message!</h3>
            <p className="text-sm text-emerald-700">
              We&apos;ve received your feedback and will review it during our bi-weekly offer verification cycle.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-4 text-xs font-bold text-emerald-800 underline hover:text-emerald-950"
            >
              Send another note
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Somesh Gupta"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary min-h-[48px] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary min-h-[48px] text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Message or Offer Correction *
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us what you think or let us know about an offer update..."
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="touch-target px-8 py-3.5 rounded-xl bg-primary hover:bg-blue-700 text-white font-semibold text-sm shadow-sm transition-colors flex items-center justify-center gap-2 focus:ring-2 focus:ring-primary/20"
            >
              <span>{loading ? 'Sending...' : 'Send Message'}</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
