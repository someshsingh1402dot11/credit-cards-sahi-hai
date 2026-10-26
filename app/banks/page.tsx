import React from 'react';
import Link from 'next/link';
import { CreditCard, Sparkles, Zap, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import CardTile from '@/components/CardTile';
import { BANKS, getCardsByBank, getAllCards } from '@/lib/cards';

export default function BanksPage() {
  const hdfcCards = getCardsByBank('hdfc');
  const axisCards = getCardsByBank('axis');
  const amexCards = getCardsByBank('amex');

  const bankSections = [
    { info: BANKS.hdfc, cards: hdfcCards, color: 'blue' },
    { info: BANKS.axis, cards: axisCards, color: 'indigo' },
    { info: BANKS.amex, cards: amexCards, color: 'cyan' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Page Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary text-xs font-semibold mb-3">
          <CreditCard className="w-3.5 h-3.5" />
          <span>Issuer Overviews</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Explore Credit Cards by Bank
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
          Detailed breakdown of top credit cards across India&apos;s leading issuers: American Express, Axis Bank, and HDFC Bank. Discover day-specific booking discounts and when to swipe each card.
        </p>

        {/* Bank Quick Jump Tabs */}
        <div className="mt-6 flex flex-wrap gap-2.5">
          <Link
            href="/banks/hdfc"
            className="touch-target px-4 py-2 rounded-xl bg-white border border-slate-300 hover:border-primary text-slate-700 hover:text-primary font-semibold text-sm transition-all"
          >
            HDFC Bank ({hdfcCards.length} Cards)
          </Link>
          <Link
            href="/banks/axis"
            className="touch-target px-4 py-2 rounded-xl bg-white border border-slate-300 hover:border-primary text-slate-700 hover:text-primary font-semibold text-sm transition-all"
          >
            Axis Bank ({axisCards.length} Cards)
          </Link>
          <Link
            href="/banks/amex"
            className="touch-target px-4 py-2 rounded-xl bg-white border border-slate-300 hover:border-primary text-slate-700 hover:text-primary font-semibold text-sm transition-all"
          >
            American Express ({amexCards.length} Cards)
          </Link>
          <Link
            href="/compare"
            className="touch-target px-4 py-2 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-blue-700 transition-all shadow-sm flex items-center gap-1.5"
          >
            <span>Compare All Side-by-Side</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Render Bank Grids */}
      {bankSections.map(({ info, cards }) => (
        <section
          key={info.id}
          id={info.id}
          className="border-t border-slate-200 pt-12 space-y-6"
        >
          {/* Bank Info Header */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  {info.loyaltyProgram}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {info.name}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                {info.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {info.keyHighlights.map((hl, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-lg border border-slate-200 text-xs font-medium text-slate-700"
                  >
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{hl}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                href={`/banks/${info.id}`}
                className="touch-target px-5 py-3 rounded-xl bg-white border border-slate-300 hover:border-primary text-slate-800 font-semibold text-sm transition-all text-center"
              >
                View {info.shortName} Focus Page
              </Link>
              <Link
                href={`/compare?bank=${info.id}`}
                className="touch-target px-5 py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-blue-700 transition-all shadow-sm text-center flex items-center justify-center gap-1.5"
              >
                <span>Compare {info.shortName} Cards</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Cards Grid (3-4 cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card) => (
              <CardTile key={card.id} card={card} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
