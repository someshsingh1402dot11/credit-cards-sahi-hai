'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    // Simulate instantaneous client-side capture without account creation
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 400);
  };

  return (
    <section className="bg-gradient-to-b from-blue-50/50 to-white py-14 border-y border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
          <Mail className="w-3.5 h-3.5" />
          <span>Reward Alerts</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Never miss a high-multiplier card day
        </h2>
        <p className="mt-3 text-base text-slate-600 max-w-xl mx-auto">
          Get weekly curated offer alerts and new bank tips (Amex, Axis, HDFC) delivered straight to your inbox. No spam, no login required.
        </p>

        <div className="mt-8 max-w-md mx-auto">
          {status === 'success' ? (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-center justify-center gap-3 animate-in fade-in duration-300">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
              <div className="text-sm text-left">
                <p className="font-semibold">You&apos;re on the list!</p>
                <p className="text-emerald-700 text-xs">
                  We&apos;ll notify you when new bank offers and category tips drop.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base min-h-[48px]"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="touch-target px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm sm:text-base shadow-sm hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-primary/20 shrink-0 flex items-center justify-center gap-2"
              >
                <span>{status === 'loading' ? 'Joining...' : 'Subscribe'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {status === 'error' && (
            <p className="mt-2 text-xs text-rose-600 font-medium">{errorMessage}</p>
          )}

          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
            <span>Zero login or accounts · 100% free · Unsubscribe anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}
