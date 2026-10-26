'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Card } from '@/lib/cards';
import { Filter, RotateCcw, ExternalLink, Calendar, Sparkles, Tag, ChevronDown, Check } from 'lucide-react';

interface ComparisonTableProps {
  initialCards: Card[];
}

export default function ComparisonTable({ initialCards }: ComparisonTableProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [selectedBank, setSelectedBank] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Read URL query params on mount or param change
  useEffect(() => {
    const bankParam = searchParams.get('bank');
    const categoryParam = searchParams.get('category');

    if (bankParam && ['hdfc', 'axis', 'amex', 'all'].includes(bankParam.toLowerCase())) {
      setSelectedBank(bankParam.toLowerCase());
    }
    if (categoryParam && ['travel', 'cashback', 'dining', 'all'].includes(categoryParam.toLowerCase())) {
      setSelectedCategory(categoryParam.toLowerCase());
    }
  }, [searchParams]);

  // Update URL search params when filters change
  const updateFilters = (newBank: string, newCategory: string) => {
    setSelectedBank(newBank);
    setSelectedCategory(newCategory);

    const params = new URLSearchParams();
    if (newBank !== 'all') params.set('bank', newBank);
    if (newCategory !== 'all') params.set('category', newCategory);

    const query = params.toString() ? `?${params.toString()}` : '';
    router.replace(`/compare${query}`, { scroll: false });
  };

  const resetFilters = () => {
    updateFilters('all', 'all');
  };

  // Filter cards based on selections
  const filteredCards = useMemo(() => {
    return initialCards.filter((card) => {
      const bankMatch = selectedBank === 'all' || card.bankSlug === selectedBank;
      const categoryMatch =
        selectedCategory === 'all' || card.category.toLowerCase() === selectedCategory;
      return bankMatch && categoryMatch;
    });
  }, [initialCards, selectedBank, selectedCategory]);

  const bankOptions = [
    { label: 'All Banks', value: 'all' },
    { label: 'HDFC Bank', value: 'hdfc' },
    { label: 'Axis Bank', value: 'axis' },
    { label: 'American Express', value: 'amex' },
  ];

  const categoryOptions = [
    { label: 'All Categories', value: 'all' },
    { label: 'Travel', value: 'travel' },
    { label: 'Cashback', value: 'cashback' },
    { label: 'Dining', value: 'dining' },
  ];

  return (
    <div className="space-y-6">
      {/* Interactive Filter Control Panel */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-primary flex items-center justify-center">
              <Filter className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-slate-900">
                Filter Comparison Table
              </h2>
              <p className="text-xs text-slate-500">
                Filter instantly by issuing bank and reward category
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg">
              Showing <strong className="text-slate-900">{filteredCards.length}</strong> of {initialCards.length} cards
            </span>
            {(selectedBank !== 'all' || selectedCategory !== 'all') && (
              <button
                type="button"
                onClick={resetFilters}
                className="touch-target inline-flex items-center gap-1.5 text-xs font-semibold text-rose-600 hover:text-rose-700 hover:bg-rose-50 px-3 py-1.5 rounded-lg transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Filter Pills / Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {/* Bank Filter */}
          <div>
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
              Issuing Bank
            </label>
            <div className="flex flex-wrap gap-2">
              {bankOptions.map((bank) => {
                const active = selectedBank === bank.value;
                return (
                  <button
                    key={bank.value}
                    type="button"
                    onClick={() => updateFilters(bank.value, selectedCategory)}
                    className={`touch-target px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                      active
                        ? 'bg-primary text-white shadow-sm ring-2 ring-primary/20'
                        : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {active && <Check className="w-3.5 h-3.5 mr-1 inline-block" />}
                    {bank.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
              Reward Category
            </label>
            <div className="flex flex-wrap gap-2">
              {categoryOptions.map((cat) => {
                const active = selectedCategory === cat.value;
                return (
                  <button
                    key={cat.value}
                    type="button"
                    onClick={() => updateFilters(selectedBank, cat.value)}
                    className={`touch-target px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                      active
                        ? 'bg-primary text-white shadow-sm ring-2 ring-primary/20'
                        : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {active && <Check className="w-3.5 h-3.5 mr-1 inline-block" />}
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Empty State when 0 cards match */}
      {filteredCards.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center shadow-sm">
          <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 mx-auto flex items-center justify-center mb-3">
            <Filter className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">No matching credit cards found</h3>
          <p className="mt-1 text-sm text-slate-600 max-w-md mx-auto">
            We currently don&apos;t have cards matching this bank and category combination. Try selecting &ldquo;All Banks&rdquo; or clearing your category filter.
          </p>
          <div className="mt-5">
            <button
              type="button"
              onClick={resetFilters}
              className="touch-target px-5 py-2.5 rounded-xl bg-primary text-white font-semibold text-sm shadow-sm hover:bg-blue-700 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Desktop Table View (md and above) */}
          <div className="hidden lg:block bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider">
                    <th className="py-4 px-5">Card Name & Category</th>
                    <th className="py-4 px-4">Bank</th>
                    <th className="py-4 px-4 whitespace-nowrap">Annual Fee</th>
                    <th className="py-4 px-4">Key Reward Rate</th>
                    <th className="py-4 px-4">Best For</th>
                    <th className="py-4 px-5 min-w-[280px]">Optimal Usage Tip</th>
                    <th className="py-4 px-5 text-right whitespace-nowrap">Affiliate CTA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredCards.map((card) => {
                    const isComingSoon = card.usageDay.toLowerCase().includes('coming soon');
                    return (
                      <tr
                        key={card.id}
                        className="hover:bg-blue-50/30 transition-colors duration-150"
                      >
                        {/* Card Name & Category */}
                        <td className="py-4 px-5 align-top">
                          <div className="font-bold text-slate-900 text-base">{card.name}</div>
                          <span
                            className={`inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded text-[11px] font-semibold ${
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
                        </td>

                        {/* Bank */}
                        <td className="py-4 px-4 align-top whitespace-nowrap font-semibold text-slate-700">
                          {card.bank}
                        </td>

                        {/* Annual Fee */}
                        <td className="py-4 px-4 align-top font-bold text-slate-900 whitespace-nowrap">
                          {card.annualFee}
                        </td>

                        {/* Reward Rate */}
                        <td className="py-4 px-4 align-top text-primary font-bold">
                          {card.rewardRate}
                        </td>

                        {/* Best For */}
                        <td className="py-4 px-4 align-top text-slate-600 text-xs leading-relaxed max-w-[200px]">
                          {card.bestFor}
                        </td>

                        {/* Optimal Usage Tip */}
                        <td className="py-4 px-5 align-top">
                          <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-100 text-xs">
                            {isComingSoon ? (
                              <div>
                                <span className="inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800 rounded mb-1">
                                  Coming Soon
                                </span>
                                <p className="text-slate-600">{card.usageOffer}</p>
                              </div>
                            ) : (
                              <div>
                                <div className="flex items-center gap-1.5 font-bold text-blue-900 mb-1">
                                  <Calendar className="w-3 h-3 text-primary" />
                                  <span>
                                    {card.usageDay} · {card.usagePlatform}
                                  </span>
                                </div>
                                <p className="text-slate-800 font-medium leading-relaxed">
                                  &ldquo;{card.usageOffer}&rdquo;
                                </p>
                              </div>
                            )}
                            <div className="mt-1.5 text-[10px] text-slate-400">
                              Verified {card.lastVerified}
                            </div>
                          </div>
                        </td>

                        {/* Affiliate CTA */}
                        <td className="py-4 px-5 align-top text-right">
                          <a
                            href={card.affiliateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="touch-target inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-blue-700 transition-colors shadow-sm focus:ring-2 focus:ring-primary/20 whitespace-nowrap"
                          >
                            <span>See Affiliate Link</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                          <span className="block text-[10px] text-slate-400 mt-1">
                            Official Bank Page
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile & Tablet Card-Stack View (Responsive degradation with ≥48px touch targets) */}
          <div className="lg:hidden space-y-4">
            {filteredCards.map((card) => {
              const isComingSoon = card.usageDay.toLowerCase().includes('coming soon');
              return (
                <div
                  key={card.id}
                  className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold text-slate-500">{card.bank}</span>
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold ${
                            card.category === 'Travel'
                              ? 'bg-blue-50 text-primary border border-blue-200'
                              : card.category === 'Cashback'
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : 'bg-amber-50 text-amber-700 border border-amber-200'
                          }`}
                        >
                          {card.category}
                        </span>
                      </div>
                      <h3 className="font-bold text-slate-900 text-lg">{card.name}</h3>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
                        Fee
                      </span>
                      <span className="text-sm font-bold text-slate-900">{card.annualFee}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <div>
                      <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
                        Key Reward Rate
                      </span>
                      <span className="font-bold text-primary mt-0.5 block">{card.rewardRate}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
                        Best For
                      </span>
                      <span className="text-slate-700 mt-0.5 block line-clamp-2">{card.bestFor}</span>
                    </div>
                  </div>

                  {/* Usage Tip */}
                  <div className="p-3.5 bg-blue-50/70 rounded-xl border border-blue-100 text-xs">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="inline-flex items-center gap-1 font-bold text-blue-900 text-xs">
                        <Sparkles className="w-3.5 h-3.5 text-primary" />
                        Optimal Usage Tip
                      </span>
                      <span className="text-[10px] text-slate-400">Verified {card.lastVerified}</span>
                    </div>
                    {isComingSoon ? (
                      <div>
                        <span className="inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800 rounded mb-1">
                          Coming Soon
                        </span>
                        <p className="text-slate-600">{card.usageOffer}</p>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-center gap-1 font-semibold text-blue-700 mb-1">
                          <Calendar className="w-3 h-3 text-primary" />
                          <span>
                            {card.usageDay} · {card.usagePlatform}
                          </span>
                        </div>
                        <p className="text-slate-900 font-medium leading-relaxed">
                          &ldquo;{card.usageOffer}&rdquo;
                        </p>
                      </div>
                    )}
                  </div>

                  {/* CTA with 48px touch target */}
                  <a
                    href={card.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="touch-target w-full rounded-xl bg-primary hover:bg-blue-700 text-white font-semibold text-sm shadow-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <span>See Affiliate Link</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
