import React from 'react';
import { Card } from '@/lib/cards';
import { ExternalLink, Calendar, Tag, ShieldAlert, Sparkles, CheckCircle2, Clock } from 'lucide-react';

interface CardTileProps {
  card: Card;
  showBankBadge?: boolean;
}

export default function CardTile({ card, showBankBadge = false }: CardTileProps) {
  const isComingSoon = card.usageDay.toLowerCase().includes('coming soon');

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden">
      {/* Top Banner / Category & Bank */}
      <div className="p-5 sm:p-6 pb-4">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 flex-wrap">
            {showBankBadge && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200">
                {card.bank}
              </span>
            )}
            <span
              className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-semibold ${
                card.category === 'Travel'
                  ? 'bg-blue-50 text-primary border border-blue-200'
                  : card.category === 'Cashback'
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  : 'bg-amber-50 text-amber-700 border border-amber-200'
              }`}
            >
              <Tag className="w-3 h-3" />
              {card.category}
            </span>
          </div>

          <div className="text-right">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
              Annual Fee
            </span>
            <span className="text-sm font-bold text-slate-900">{card.annualFee}</span>
          </div>
        </div>

        {/* Card Title & Best For */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
          {card.name}
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-slate-600 line-clamp-2">
          <strong className="text-slate-800">Best for:</strong> {card.bestFor}
        </p>

        {/* Key Reward Rate Stat Box */}
        <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-100">
          <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
            Key Reward Rate
          </div>
          <div className="text-base font-extrabold text-primary mt-0.5">
            {card.rewardRate}
          </div>
        </div>

        {/* Key Benefits snippet */}
        <div className="mt-3">
          <p className="text-xs text-slate-500 leading-relaxed">
            {card.keyBenefits}
          </p>
        </div>
      </div>

      {/* Prominent "When to Use" Tip Box (Core PRD Differentiator) */}
      <div className="px-5 sm:px-6 py-4 bg-blue-50/60 border-t border-b border-blue-100 flex-grow">
        <div className="flex items-center justify-between mb-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            Optimal Usage Tip
          </span>
          <span className="text-[11px] text-slate-500 flex items-center gap-1">
            <Clock className="w-3 h-3 text-slate-400" />
            Verified {card.lastVerified}
          </span>
        </div>

        {isComingSoon ? (
          <div className="p-3 bg-white/80 rounded-lg border border-blue-200/60 text-xs text-slate-600">
            <span className="inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800 rounded mr-2">
              Coming Soon
            </span>
            {card.usageOffer}
          </div>
        ) : (
          <div className="p-3 bg-white rounded-lg border border-blue-200 shadow-xs">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-700 mb-1">
              <Calendar className="w-3.5 h-3.5 text-primary" />
              <span>
                {card.usageDay} · {card.usagePlatform}
              </span>
            </div>
            <p className="text-xs sm:text-sm font-medium text-slate-900 leading-relaxed">
              &ldquo;{card.usageOffer}&rdquo;
            </p>
          </div>
        )}

        <div className="mt-2 flex items-start gap-1.5 text-[11px] text-slate-500">
          <ShieldAlert className="w-3 h-3 text-slate-400 mt-0.5 shrink-0" />
          <span>{card.eligibilityNote}</span>
        </div>
      </div>

      {/* Footer CTA & Bank Link */}
      <div className="p-5 sm:p-6 pt-4 bg-white flex flex-col gap-2">
        <a
          href={card.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="touch-target w-full bg-primary hover:bg-blue-700 text-white rounded-xl font-semibold text-sm shadow-sm transition-colors flex items-center justify-center gap-2 focus:ring-2 focus:ring-primary/20"
        >
          <span>See Affiliate Link</span>
          <ExternalLink className="w-4 h-4" />
        </a>
        <div className="text-center">
          <span className="text-[11px] text-slate-400">
            Official bank application portal
          </span>
        </div>
      </div>
    </div>
  );
}
