import cardsData from '@/data/cards.json';
import offersData from '@/data/offers.json';

export interface Card {
  id: string;
  name: string;
  bank: string;
  bankSlug: 'hdfc' | 'axis' | 'amex';
  category: 'Travel' | 'Cashback' | 'Dining';
  annualFee: string;
  rewardRate: string;
  bestFor: string;
  keyBenefits: string;
  usageDay: string;
  usagePlatform: string;
  usageOffer: string;
  lastVerified: string;
  needsRecheck: boolean;
  affiliateUrl: string;
  applyLabel: string;
  eligibilityNote: string;
}

export interface BankOffer {
  id: string;
  bank: string;
  bankSlug: 'hdfc' | 'axis' | 'amex';
  days: string[];
  displayDays: string;
  platform: string;
  offer: string;
  offerType: string;
  category: string;
  lastVerified: string;
  notes: string;
}

export interface BankInfo {
  id: 'hdfc' | 'axis' | 'amex';
  name: string;
  shortName: string;
  description: string;
  loyaltyProgram: string;
  keyHighlights: string[];
  primaryUsageSummary: string;
}

export const BANKS: Record<'hdfc' | 'axis' | 'amex', BankInfo> = {
  hdfc: {
    id: 'hdfc',
    name: 'HDFC Bank',
    shortName: 'HDFC',
    description: "India's largest private card issuer, renowned for high reward multiples on SmartBuy and 1:1 international airline mile transfers on premium cards like Infinia and Diners Club Black.",
    loyaltyProgram: 'HDFC Reward Points & SmartBuy Multipliers',
    keyHighlights: [
      '1:1 Transfer to Singapore KrisFlyer, Flying Blue, Qatar Airways, and Cathay Asia Miles',
      'Up to 10x reward points on flight and hotel bookings via HDFC SmartBuy',
      'All-day instant flight discounts on MakeMyTrip',
    ],
    primaryUsageSummary: 'All days on MakeMyTrip: Up to 12% off on domestic flights (max discount ₹2,000 on EMI).'
  },
  axis: {
    id: 'axis',
    name: 'Axis Bank',
    shortName: 'Axis',
    description: "The preferred issuer for air miles optimizers with the Atlas card featuring an industry-leading 1:2 transfer ratio across 15+ airline and hotel partners.",
    loyaltyProgram: 'Axis EDGE Miles / EDGE Rewards',
    keyHighlights: [
      'Axis Atlas 1:2 ratio unlocks Singapore KrisFlyer, Turkish, Etihad, Flying Blue, and Air India',
      'Deep business-class flight offers on MakeMyTrip (Tuesdays & Wednesdays)',
      'Flat 8% discount on international economy flights every Wednesday',
    ],
    primaryUsageSummary: 'Tuesdays & Wednesdays on MakeMyTrip: 8% to 20% off business-class flights; Wednesdays 8% off international economy.'
  },
  amex: {
    id: 'amex',
    name: 'American Express',
    shortName: 'Amex',
    description: "The benchmark in premium customer care, non-expiring Membership Rewards (MR) points, milestone rewards, and global airport lounge network access.",
    loyaltyProgram: 'American Express Membership Rewards (MR)',
    keyHighlights: [
      'MR points never expire and transfer 1:1 to Marriott Bonvoy and British Airways Avios',
      'Exceptional milestone returns (up to 8-9% on Platinum Travel on ₹4 Lakh annual spend)',
      'Saturday MakeMyTrip flight offer: flat 12% instant discount on min. ₹5,000 spend',
    ],
    primaryUsageSummary: 'Saturdays on MakeMyTrip: Flat 12% instant discount (up to ₹1,800) on a min. transaction of ₹5,000.'
  }
};

export const WEEK_AT_A_GLANCE = [
  { day: 'Monday', recommendation: 'HDFC Bank', note: 'Every-day offer: Up to 12% off on domestic flights via MakeMyTrip', tag: 'Every-day Base' },
  { day: 'Tuesday', recommendation: 'Axis Bank', note: 'Axis Day: Flat 8% to 20% off domestic & international business-class flights', tag: 'Top Travel Pick' },
  { day: 'Wednesday', recommendation: 'Axis Bank', note: 'Axis Day: Flat 8% off international economy flights (up to ₹7,500) + Business Class', tag: 'Top Travel Pick' },
  { day: 'Thursday', recommendation: 'HDFC Bank', note: 'Every-day offer: Up to 12% off on domestic flights via MakeMyTrip', tag: 'Every-day Base' },
  { day: 'Friday', recommendation: 'HDFC Bank', note: 'Every-day offer: Up to 12% off on domestic flights via MakeMyTrip', tag: 'Every-day Base' },
  { day: 'Saturday', recommendation: 'American Express', note: 'Amex Super Saturday: Flat 12% instant discount (up to ₹1,800) on min ₹5,000 spend', tag: 'Top Weekend Pick' },
  { day: 'Sunday', recommendation: 'HDFC Bank', note: 'Every-day offer: Up to 12% off on domestic flights via MakeMyTrip', tag: 'Every-day Base' },
];

export function getAllCards(): Card[] {
  return cardsData as Card[];
}

export function getCardsByBank(bankSlug: 'hdfc' | 'axis' | 'amex'): Card[] {
  return (cardsData as Card[]).filter((card) => card.bankSlug === bankSlug);
}

export function getCardById(id: string): Card | undefined {
  return (cardsData as Card[]).find((card) => card.id === id);
}

export function getTopPicks(): Card[] {
  // Curated picks representing top travel cards across all three banks
  return (cardsData as Card[]).filter((card) =>
    ['hdfc-infinia', 'axis-atlas', 'amex-plat-travel'].includes(card.id)
  );
}

export function getAllOffers(): BankOffer[] {
  return offersData as BankOffer[];
}
