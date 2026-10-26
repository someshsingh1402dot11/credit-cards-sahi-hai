import React, { Suspense } from 'react';
import ComparisonTable from '@/components/ComparisonTable';
import { getAllCards } from '@/lib/cards';
import { Sparkles, SlidersHorizontal } from 'lucide-react';

export const metadata = {
  title: 'Compare Credit Cards — Bank & Category Filters | Credit Cards Sahi Hai',
  description:
    'Side-by-side credit card comparison table across American Express, Axis Bank, and HDFC Bank. Filter by Bank and Category to find optimal usage tips.',
};

export default function ComparePage() {
  const cards = getAllCards();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8">
      {/* Page Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary text-xs font-semibold mb-3">
          <SlidersHorizontal className="w-3.5 h-3.5" />
          <span>Interactive Comparison</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Credit Card Comparison Table
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
          Weigh cards directly against each other. Filter by bank or category to find concrete day-specific booking discounts and compare fee structures side-by-side.
        </p>
      </div>

      {/* Comparison Component wrapped in Suspense for useSearchParams */}
      <Suspense
        fallback={
          <div className="p-12 text-center text-slate-500 bg-white rounded-2xl border border-slate-200">
            Loading card comparison...
          </div>
        }
      >
        <ComparisonTable initialCards={cards} />
      </Suspense>
    </div>
  );
}
