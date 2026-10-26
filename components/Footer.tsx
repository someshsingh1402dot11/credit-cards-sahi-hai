import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, ExternalLink, AlertCircle, Info, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-20">
      {/* Trust & SSL Strip */}
      <div className="border-b border-slate-200/80 bg-white py-4 sm:py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* SSL Badge */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-sm">
                <Lock className="w-3.5 h-3.5 text-emerald-600" />
                <span>256-Bit SSL Encrypted</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>Verified Bank Offers</span>
              </div>
            </div>

            {/* Disclaimer pill */}
            <div className="flex items-center gap-2 text-xs text-slate-600 bg-amber-50/80 border border-amber-200/80 px-3 py-1.5 rounded-lg text-center sm:text-left">
              <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>
                <strong>Confirm details with bank:</strong> Offer terms, spend criteria, and fees are subject to bank changes. Verify before applying.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center font-bold text-sm shadow">
                CC
              </div>
              <span className="font-extrabold text-lg text-slate-900 tracking-tight">
                Credit Cards <span className="text-primary">Sahi Hai</span>
              </span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed max-w-md">
              Demystifying credit card rewards for everyday Indians. Concrete, day-and-spend specific guidance for American Express, Axis Bank, and HDFC Bank cards without jargon or calculations.
            </p>
            <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-100 flex items-start gap-2.5 max-w-md">
              <Info className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <p className="text-xs text-slate-700 leading-relaxed">
                <strong>Editorial Independence:</strong> Affiliate links do not influence our recommendations. Our rankings and day-specific usage tips are curated strictly based on verified consumer value.
              </p>
            </div>
          </div>

          {/* Quick Bank Links */}
          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Explore by Bank
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/banks/hdfc"
                  className="text-slate-600 hover:text-primary transition-colors inline-flex items-center gap-1 py-1"
                >
                  HDFC Bank Cards
                </Link>
              </li>
              <li>
                <Link
                  href="/banks/axis"
                  className="text-slate-600 hover:text-primary transition-colors inline-flex items-center gap-1 py-1"
                >
                  Axis Bank Cards
                </Link>
              </li>
              <li>
                <Link
                  href="/banks/amex"
                  className="text-slate-600 hover:text-primary transition-colors inline-flex items-center gap-1 py-1"
                >
                  American Express Cards
                </Link>
              </li>
              <li>
                <Link
                  href="/compare"
                  className="text-slate-600 hover:text-primary transition-colors inline-flex items-center gap-1 py-1"
                >
                  Side-by-Side Comparison
                </Link>
              </li>
            </ul>
          </div>

          {/* Site & Transparency */}
          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Company & Transparency
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-slate-600 hover:text-primary transition-colors inline-flex items-center gap-1 py-1"
                >
                  About Our Mission
                </Link>
              </li>
              <li>
                <Link
                  href="/about#transparency"
                  className="text-slate-600 hover:text-primary transition-colors inline-flex items-center gap-1 py-1"
                >
                  Affiliate Disclosure
                </Link>
              </li>
              <li>
                <Link
                  href="/about#contact"
                  className="text-slate-600 hover:text-primary transition-colors inline-flex items-center gap-1 py-1"
                >
                  Contact & Feedback
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Mandatory Disclaimer */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="text-xs text-slate-500 leading-relaxed space-y-2 text-center md:text-left">
            <p>
              <strong>Disclaimer:</strong> Views expressed on Credit Cards Sahi Hai are the author&apos;s own. Credit card features, welcome gifts, reward multiplier ratios, partner transfer alliances, and promotional booking discounts on platforms like MakeMyTrip are subject to periodic revision by the issuing banks (HDFC Bank Ltd., Axis Bank Ltd., and American Express Banking Corp.). Always confirm final details and eligibility criteria on the respective bank&apos;s official website prior to applying.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-between pt-4 gap-2">
              <p>© {new Date().getFullYear()} Credit Cards Sahi Hai. All rights reserved. Informational comparison portal.</p>
              <p className="text-slate-400">Strictly no login · No payments · No calculators required</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
