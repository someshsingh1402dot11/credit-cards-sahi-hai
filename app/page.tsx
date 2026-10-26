import React from 'react';
import Link from 'next/link';
import {
  CreditCard,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Layers,
  Search,
  ExternalLink,
  ChevronRight,
  Zap,
} from 'lucide-react';
import CardTile from '@/components/CardTile';
import Newsletter from '@/components/Newsletter';
import { getTopPicks, BANKS, WEEK_AT_A_GLANCE } from '@/lib/cards';

export default function HomePage() {
  const topPicks = getTopPicks();

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 bg-gradient-to-b from-blue-50/60 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-primary text-xs sm:text-sm font-semibold mb-6 shadow-xs animate-in fade-in duration-300">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Customer First Credit Card Guidance</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
            Smart Spending,{' '}
            <span className="text-primary underline decoration-blue-200 underline-offset-8">
              Maximum Rewards
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Stop guessing which card to swipe. Concrete, day-by-day reward tips for Indian credit cards across <strong className="text-slate-900 font-semibold">Amex, Axis, and HDFC</strong> — zero points math required.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#bank-selector"
              className="touch-target w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-white font-bold text-base shadow-md hover:bg-blue-700 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Explore Cards by Bank</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/compare"
              className="touch-target w-full sm:w-auto px-8 py-4 rounded-xl bg-white border border-slate-300 text-slate-700 font-bold text-base hover:bg-slate-50 hover:text-slate-900 transition-all flex items-center justify-center gap-2"
            >
              <span>Compare All Cards</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>
          </div>

          {/* Trust Highlights */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-500 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Actionable Day/Spend Tips</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Unbiased & Independent Advice</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Zero Accounts or Calculators</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Bank Selector Section */}
      <section id="bank-selector" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
            Start With Who You Bank With
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Explore Cards by Issuing Bank
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Select your primary bank to see top cards and high-yield flight & shopping promotions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* HDFC Bank Card */}
          <Link
            href="/banks/hdfc"
            className="group relative bg-white rounded-2xl border-2 border-slate-200 hover:border-primary p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-primary text-primary group-hover:text-white flex items-center justify-center transition-colors mb-5 shadow-xs">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors flex items-center justify-between">
                <span>HDFC Bank</span>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 group-hover:text-primary transition-all" />
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {BANKS.hdfc.description}
              </p>
              <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                  Lead MakeMyTrip Tip
                </span>
                <span className="text-xs font-semibold text-slate-900 mt-0.5 block">
                  All days: Up to 12% off on domestic flights
                </span>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-primary">
              <span>View 4 Curated Cards</span>
              <span>→</span>
            </div>
          </Link>

          {/* Axis Bank Card */}
          <Link
            href="/banks/axis"
            className="group relative bg-white rounded-2xl border-2 border-slate-200 hover:border-primary p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-primary text-primary group-hover:text-white flex items-center justify-center transition-colors mb-5 shadow-xs">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors flex items-center justify-between">
                <span>Axis Bank</span>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 group-hover:text-primary transition-all" />
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {BANKS.axis.description}
              </p>
              <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                  Lead MakeMyTrip Tip
                </span>
                <span className="text-xs font-semibold text-slate-900 mt-0.5 block">
                  Tue & Wed: 8%–20% off business & economy flights
                </span>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-primary">
              <span>View 4 Curated Cards</span>
              <span>→</span>
            </div>
          </Link>

          {/* American Express Card */}
          <Link
            href="/banks/amex"
            className="group relative bg-white rounded-2xl border-2 border-slate-200 hover:border-primary p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-primary text-primary group-hover:text-white flex items-center justify-center transition-colors mb-5 shadow-xs">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors flex items-center justify-between">
                <span>American Express</span>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 group-hover:text-primary transition-all" />
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {BANKS.amex.description}
              </p>
              <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                  Lead MakeMyTrip Tip
                </span>
                <span className="text-xs font-semibold text-slate-900 mt-0.5 block">
                  Saturdays: Flat 12% off on min. ₹5,000 spend
                </span>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-primary">
              <span>View 4 Curated Cards</span>
              <span>→</span>
            </div>
          </Link>
        </div>
      </section>

      {/* 3. Top Picks Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
              Curated Highlights
            </div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Top Travel Card Picks
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              The highest-yield travel cards paired with day-specific booking discounts.
            </p>
          </div>
          <Link
            href="/compare?category=travel"
            className="touch-target inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-blue-700"
          >
            <span>Compare all travel cards</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {topPicks.map((card) => (
            <CardTile key={card.id} card={card} showBankBadge />
          ))}
        </div>
      </section>

      {/* 4. Week-at-a-Glance Cheat Sheet (PRD Appendix A.3) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl overflow-hidden relative">
          <div className="max-w-2xl mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold mb-3">
              <Calendar className="w-3.5 h-3.5" />
              <span>Appendix A.3 Reference</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Week-at-a-Glance Flight Booking Cheat Sheet
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Know exactly which card to use each day for flight bookings on MakeMyTrip without doing the math.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
            {WEEK_AT_A_GLANCE.map((item) => (
              <div
                key={item.day}
                className={`p-4 rounded-xl border flex flex-col justify-between ${
                  item.day === 'Saturday' || item.day === 'Tuesday' || item.day === 'Wednesday'
                    ? 'bg-blue-950/80 border-blue-500/50 shadow-inner'
                    : 'bg-slate-800/60 border-slate-700/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-2">
                    <span className="font-bold text-sm text-white">{item.day}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded font-semibold ${
                        item.tag.includes('Top')
                          ? 'bg-blue-500 text-white'
                          : 'bg-slate-700 text-slate-300'
                      }`}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <div className="text-sm font-extrabold text-blue-300 mb-1">
                    {item.recommendation}
                  </div>
                </div>
                <p className="text-[11px] text-slate-300 leading-snug mt-2 pt-2 border-t border-slate-700/50">
                  {item.note}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 text-xs text-slate-400 text-center sm:text-right">
            <span>*Verified as of Oct 2026. Terms and minimum spends apply. Always verify with bank.</span>
          </div>
        </div>
      </section>

      {/* 5. How It Works (3-step flow) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
            Simple 3-Step Flow
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            How Credit Cards Sahi Hai Works
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Built for everyday cardholders. No complex transfer ratio charts or points calculations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm text-center relative">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-primary font-black text-lg mx-auto flex items-center justify-center mb-5">
              1
            </div>
            <h3 className="text-xl font-bold text-slate-900">Pick Your Bank</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Start with where your money already lives: Amex, Axis, or HDFC. No need to research obscure issuers.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm text-center relative">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-primary font-black text-lg mx-auto flex items-center justify-center mb-5">
              2
            </div>
            <h3 className="text-xl font-bold text-slate-900">Compare Cards</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Filter side-by-side by annual fee, base reward rate, and category (Travel, Cashback, Dining).
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm text-center relative">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-primary font-black text-lg mx-auto flex items-center justify-center mb-5">
              3
            </div>
            <h3 className="text-xl font-bold text-slate-900">Learn Usage Tips</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Get plain instructions: &ldquo;Swipe on Tuesdays for 8% off flights&rdquo; instead of calculating points per rupee.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Newsletter Signup Below Fold */}
      <Newsletter />
    </div>
  );
}
