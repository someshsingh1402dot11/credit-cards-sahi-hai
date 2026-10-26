import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CreditCard, Sparkles, ArrowRight, ShieldCheck, Check, Calendar, ExternalLink } from 'lucide-react';
import CardTile from '@/components/CardTile';
import { BANKS, getCardsByBank, BankInfo } from '@/lib/cards';

interface BankPageProps {
  params: {
    bankId: string;
  };
}

export function generateStaticParams() {
  return [
    { bankId: 'hdfc' },
    { bankId: 'axis' },
    { bankId: 'amex' },
  ];
}

export default function BankDetailPage({ params }: BankPageProps) {
  const bankId = params.bankId.toLowerCase() as 'hdfc' | 'axis' | 'amex';
  const bankInfo: BankInfo | undefined = BANKS[bankId];

  if (!bankInfo) {
    notFound();
  }

  const cards = getCardsByBank(bankId);

  const bankTabs = [
    { id: 'hdfc', name: 'HDFC Bank' },
    { id: 'axis', name: 'Axis Bank' },
    { id: 'amex', name: 'American Express' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Navigation Breadcrumb & Bank Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <nav className="text-xs font-semibold text-slate-500 flex items-center gap-2 mb-2">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/banks" className="hover:text-primary transition-colors">
              Bank Overview
            </Link>
            <span>/</span>
            <span className="text-slate-900">{bankInfo.name}</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {bankInfo.name} Credit Cards
          </h1>
        </div>

        {/* Bank Switcher Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
          {bankTabs.map((tab) => {
            const isActive = tab.id === bankId;
            return (
              <Link
                key={tab.id}
                href={`/banks/${tab.id}`}
                className={`touch-target px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-white text-primary shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.name}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Issuer Overview Hero Card */}
      <div className="bg-gradient-to-br from-blue-50/80 via-white to-slate-50 rounded-3xl border border-blue-200/80 p-6 sm:p-10 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-primary text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{bankInfo.loyaltyProgram}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Optimal Usage Strategy for {bankInfo.name}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {bankInfo.description}
            </p>

            <div className="pt-2">
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Key Strategic Highlights
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                {bankInfo.keyHighlights.map((hl, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Callout Box */}
          <div className="bg-white rounded-2xl border border-blue-200 p-6 shadow-sm flex flex-col justify-between space-y-4">
            <div>
              <span className="text-[11px] font-bold text-primary uppercase tracking-wider block">
                Lead Flight Tip (Appendix A)
              </span>
              <p className="mt-1 text-sm font-semibold text-slate-900 leading-snug">
                {bankInfo.primaryUsageSummary}
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Verified MakeMyTrip promo</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-2">
              <Link
                href={`/compare?bank=${bankId}`}
                className="touch-target w-full rounded-xl bg-primary hover:bg-blue-700 text-white font-semibold text-sm shadow-sm transition-colors flex items-center justify-center gap-2"
              >
                <span>Compare {bankInfo.shortName} in Table</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="block text-[11px] text-slate-400 text-center">
                Pre-filtered to {bankInfo.name}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Featured {bankInfo.name} Cards ({cards.length})
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Curated by return value, annual fee, and concrete &ldquo;When to Use&rdquo; booking triggers.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <CardTile key={card.id} card={card} />
          ))}
        </div>
      </div>

      {/* Bottom CTA to Comparison Table */}
      <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-bold text-slate-900 text-base sm:text-lg">
            Want to see how {bankInfo.shortName} stacks up against other banks?
          </h4>
          <p className="text-xs sm:text-sm text-slate-600">
            Open the side-by-side comparison table with Bank and Category filters.
          </p>
        </div>
        <Link
          href={`/compare?bank=${bankId}`}
          className="touch-target px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-blue-700 transition-colors shadow-sm shrink-0 flex items-center gap-2"
        >
          <span>Open Comparison Table</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
