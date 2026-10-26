**PRODUCT REQUIREMENTS DOCUMENT**

**Credit Cards Sahi Hai — Bank-First Comparison MVP**

*"Explore Cards by Bank" CTA — Simple, day/spend-specific usage guidance across Amex, Axis, and HDFC*

| Author: [Your name] | Status: Draft v2 (this format) | Date: 25 Oct 2026 | Domain: creditcardssahihi.com |
| --- | --- | --- | --- |

**1. What Problem**

Indian credit card users currently have no mass-market place to get simple, actionable guidance on which card to use and when. Existing sites (PointsMax, CardExpress, Perkpilot) are built for "card geeks" — deep transfer-partner guides, ratio tables, and net-value calculators aimed at travelers who already understand the points ecosystem.

Research (30+ traveler interviews) found this leaves the majority of users underserved: over 80% of travelers take only 2–3 trips a year, aren't loyal to any airline or hotel program, and want instant discounts or cashback rather than point-accumulation math. Most users concentrate spending in just 2–3 categories (travel, dining, utilities) and simply want to know *which card to use, when* — without doing the calculation themselves.

As a result, users either wade through jargon-heavy enthusiast content and give up, or default to using whatever card is in hand with no real strategy, leaving both cashback and points value unclaimed.

The business impact is a missed opportunity: no player currently owns the "one place, simple guidance, for everyone" position in a still-growing Indian credit card market, and every unclaimed opportunity to guide a user's spend is also an unclaimed affiliate/ad revenue opportunity.

**2. For Whom**

**Primary segment: **Credit card spenders (medium and high) across three major issuers — Amex, Axis, HDFC — with household income roughly ₹3L–1Cr+, based in Tier 1–3 Indian cities.

**Primary persona: **Mr Y, the average user — moderate spend across groceries, dining, and occasional travel, no loyalty tier with any airline/hotel. Wants a plain instruction like "use this card on Mondays for 2x on groceries" with zero cognitive load, rather than a calculation.

**Secondary persona (also in scope): **Mr X, the card geek — ₹1L+/month spend, wants to maximize point value for premium travel. Benefits from the same simple "when to use" framing, plus a comparison view to weigh optimization-relevant details (fees, reward rates) across cards directly.

**Not the focus of this PRD: **The business-user / tax-payment spend use case identified in early research, and any card-detail depth beyond what fits the Bank Overview grid and Comparison table (see Non-Goals) — both are potential separate initiatives, not part of this MVP.

**3. What We Are Building**

A 4-page, informational-only comparison site — Homepage, Bank Overview (one per bank), Comparison, and About — covering Amex, Axis, and HDFC. The core differentiator is that every card is paired with a concrete, day- or spend-specific usage tip (e.g., "Use on Wednesdays for 6x on IRCTC") instead of leaving the user to work out the best use case themselves. The business model is affiliate partnerships and Google Ads, layered in once engagement is validated — the MVP itself carries no payments, accounts, or calculators.

**Usage Tip data now in hand (travel only):** Day-wise, platform-specific offers for Mr Y have been compiled for flight bookings on MakeMyTrip (and one on Cleartrip) — see Appendix A. This covers the **Travel** category only; Cashback and Dining tips are still to be sourced.

This scope reflects a deliberate narrowing from an earlier draft: three banks instead of four (ICICI deferred), and depth concentrated in the Bank Overview/Comparison pages rather than a separate "Why Credit Card" module or per-card detail pages.

**4. How It Behaves**

**4.1 Homepage entry point**

- Hero section with the tagline "Smart Spending, Maximum Rewards," a short value proposition, and a primary CTA: "Explore Cards by Bank."
- A "Top Picks" section surfaces curated highlights (e.g., "Best Travel Cards").
- A "How It Works" section explains the 3-step flow: Pick Bank → Compare → Learn Usage.
- A newsletter signup (email only) sits below the fold.
- Trust strip: SSL badge and the disclaimer "Views are author's own; verify with bank."

**4.2 Bank Overview page (Amex / Axis / HDFC)**

- Selecting a bank from the homepage opens a grid of 3–4 cards for that bank.
- Each card tile shows: Name, Fee, Key Reward Rate, and a critical "When to Use" tip.
- The "When to Use" tip is built from the Appendix A data as Day + Platform + Offer, e.g. "Use Axis cards on Tuesdays and Wednesdays on MakeMyTrip: flat 8% off (up to ₹2,500) on domestic business-class flights." Offers are bank-level, so the same tip may appear on several cards from one bank, with a prompt to confirm card eligibility with the bank.
- Each tile has a "See Affiliate Link" CTA (pointing to the bank's own application page until a real affiliate deal exists — see Risks).
- A "Compare" action on this page opens the Comparison page, pre-filtered to the current bank.

**4.3 Comparison page**

- A side-by-side table, filterable by Bank and by Category (Travel / Cashback / Dining).
- Columns: Card, Bank, Fee, Reward Rate, Best For, Optimal Usage Tip, Affiliate CTA.
- Switching a filter updates the table in place without leaving the page.

**4.4 About page**

- States the mission ("Demystify rewards for everyday Indians"), a founder's note on the motivation for accurate, unbiased information, a transparency disclaimer ("Affiliate links don't influence advice"), and a simple contact form.

**4.5 Cross-cutting behavior**

- Every page carries the SSL badge and a "Confirm details with bank" disclaimer.
- On mobile, navigation collapses into a hamburger menu (Home, Compare, About), content stacks vertically, and all touch targets are ≥48px.

**5. How We Will Know It Worked**

Goal: validate that bank-first, tip-driven guidance drives real engagement, before monetization (affiliate deals, ads) is switched on.

| **Metric Type** | **Metric** | **Definition** | **Why It Matters** |
| --- | --- | --- | --- |
| Key metric | CTA click-through rate | % of visitors who click "Explore Cards by Bank," "Compare," or "See Affiliate Link" | Direct signal that the value proposition lands and users take action on guidance, not just read passively |
| Secondary | Newsletter signup rate | % of visitors who submit their email | Signals durable interest beyond a single session, without requiring any account |
| Secondary | Comparison filter usage | % of Comparison page visitors who apply a Bank or Category filter | Shows whether the comparison tool itself is used, not just the bank-first path |
| Secondary | Return visit rate | % of visitors who return within 30 days | Proxy for whether usage tips are useful enough to bring people back before a purchase decision |
| Guardrail | Affiliate CTA clicks (pre-partnership) | % of "See Affiliate Link" clicks even though they currently land on the bank's own page | Not a v1 revenue goal, but tracked now as leverage to negotiate real affiliate deals later |

**6. What Could Go Wrong**

| **Assumption at Risk** | **Failure Mode** | **Impact** | **Likelihood** | **Mitigation** | **Detection Signal** |
| --- | --- | --- | --- | --- | --- |
| Users will trust an affiliate-funded site for unbiased advice | Visitors perceive usage tips and card picks as promotional rather than genuinely helpful, and disengage | High | Medium | Keep the SSL badge and "Confirm details with bank" / "Affiliate links don't influence advice" disclaimers visible on every page, not just the homepage; avoid manipulative CTA design | CTA click-through rate below expectation; high bounce on Bank Overview pages |
| Day/spend-specific Usage Tips can be sourced and kept current | Travel tips exist (Appendix A) but are time-limited bank/platform promotions that expire or change without notice, and Cashback/Dining tips don't exist yet, leaving most of the filter categories empty | High | High | Show a "last verified" date on every tip; re-verify every 2–3 weeks; launch with Travel as the lead category and label other categories "coming soon" | User reports of expired offers via the contact form; low engagement on Cashback/Dining filters; offers found stale during the 2–3 week review |
| Real bank affiliate partnerships will materialize | "See Affiliate Link" points to the bank's own page indefinitely, with no revenue, past the MVP validation window | High | Medium | Treat v1 explicitly as pre-revenue validation; use CTA click volume as the evidence base when approaching banks for partnerships | Affiliate CTA click volume tracked with no corresponding deal signed after a defined period |
| Bank and card names/trademarks can be used freely for comparison | A bank objects to name or implied-endorsement usage in a commercial, affiliate-linked context | Medium | Low | Use card and bank names in plain text only; do not reproduce bank logos or marketing imagery; keep "informational only, not endorsed by any bank" framing clear | Legal/cease-and-desist contact (lagging indicator) |
| A no-developer, AI-assisted build can support live table filtering | The chosen build tool (Lovable) cannot reliably support the Comparison page's Bank/Category filtering interactivity | Medium | Medium | Validate filter interactivity early in the build; have a fallback of static per-category pages if live filtering proves unreliable | Build/QA failures on the Comparison page filters; filter-usage metric unable to be recorded |

**7. User Stories & Acceptance Criteria**

**Story 1 — Explore cards starting from my bank**

As a visitor who knows my bank but not every card name, I want to browse cards starting from my bank, so that I don't need prior knowledge of specific cards.

**Acceptance criteria:**

- Given the homepage, when I click "Explore Cards by Bank," then I can reach the Bank Overview page for Amex, Axis, or HDFC.
- Given I'm on a Bank Overview page, when I view the grid, then each card tile shows Name, Fee, Key Reward Rate, and a "When to Use" tip.
- Given I'm on a Bank Overview page, when I click "Compare," then I land on the Comparison page pre-filtered to that bank.

**Story 2 — Compare cards across banks and categories**

As a card geek, I want to filter a side-by-side comparison table by bank or category, so that I can weigh cards directly against each other.

**Acceptance criteria:**

- Given the Comparison page, when I apply a Bank filter, then only cards from that bank are shown.
- Given the Comparison page, when I apply a Category filter (Travel/Cashback/Dining), then only cards matching that category are shown, across banks.
- Given a filtered view, when I view a row, then Card, Bank, Fee, Reward Rate, Best For, Optimal Usage Tip, and an Affiliate CTA are all visible.

**Story 3 — Get a plain usage tip without doing the math**

As an average user, I want a specific "when to use this card" tip, so that I don't have to calculate the best use case myself.

**Acceptance criteria:**

- Given a card entry on either the Bank Overview or Comparison page, when I read it, then a concrete day- or spend-based usage tip is shown, not a generic category statement.
- Given a card with a researched tip, when I read it, then it states the day(s), the platform, and the offer value including any cap or minimum transaction (e.g. Amex: Saturdays, MakeMyTrip, flat 12% up to ₹1,800 on a minimum transaction of ₹5,000).
- Given a card whose usage tip hasn't been researched yet, when I view it, then a clearly labeled "coming soon" state is shown rather than a blank or misleading field.

**Story 4 — Trust the source before acting on a suggestion**

As any visitor, I want clear trust signals, so that I feel comfortable engaging despite the site's affiliate-funded model.

**Acceptance criteria:**

- Given any page on the site, when I reach the footer, then an SSL badge and a "Confirm details with bank" disclaimer are visible.
- Given the About page, when I read it, then the transparency statement "Affiliate links don't influence advice" appears alongside the mission and founder's note.

**Story 5 — Sign up for updates without creating an account**

As an interested visitor, I want to leave my email for updates, so that I'm notified about new banks and cards without setting up a login.

**Acceptance criteria:**

- Given the homepage newsletter section, when I submit a valid email, then I receive confirmation that my signup was captured, with no password or account required.
- Given I choose not to sign up, when I continue browsing, then no site functionality is gated behind signup.

**8. Edge Cases & Empty States**

- A card with no Usage Tip researched yet: show a clearly labeled placeholder rather than a blank or fabricated tip.
- A bank with fewer than 3–4 cards live at launch: the grid still renders cleanly without a broken or sparse-looking layout.
- A Comparison filter combination with zero matching cards (e.g., a Bank × Category pair with no cards yet): show an explicit empty-state message rather than a blank table.
- Bank-level offers shown on card tiles: the same offer can appear under multiple cards of one bank; add a short "confirm your card is eligible" note rather than implying every card qualifies.
- Offers with no specific day (HDFC: all days): show "Every day" instead of leaving the day field empty.
- Offers with caps or minimum spends (e.g. Amex's ₹5,000 minimum transaction): always display the cap/minimum next to the percentage so a headline "12% off" isn't misleading.
- An offer whose last-verified date is older than the review cadence (e.g. 3+ weeks): flag it visibly as "needs re-check" rather than presenting it as current.
- Category filter set to Cashback or Dining while no tips exist: show a "coming soon" state, not an empty table.
- A card without a live affiliate deal: "See Affiliate Link" points to the bank's own application page, clearly and honestly labeled — not disguised as an active partner offer.
- Mobile viewport: hamburger nav replaces the horizontal nav; the Comparison table degrades to a scrollable or stacked layout rather than an unreadable squeezed table.
- Slow connection or script failure: the newsletter form and filters should fail gracefully, without leaving the visitor with a blank page.

**9. Non-Goals**

- Not building login, user accounts, dashboards, payments, or document uploads.
- Not building rewards calculators, eligibility filters, or APR tools.
- Not building blogs, social feeds, dark mode, or language toggles.
- Not addressing the business-user / tax-payment spend use case identified in early research.
- Not shipping deep per-card detail pages in v1 — card depth lives entirely in the Bank Overview grid and Comparison table.
- Not expanding beyond Amex, Axis, and HDFC in this phase — additional banks (e.g., ICICI) are a future expansion, not v1 scope.

**10. Open Questions**

- Your tip data includes **HSBC and ICICI** rows, but v1 scope is Amex, Axis, HDFC only. Should those rows be held for a later expansion (current assumption), or should ICICI/HSBC be added to v1?
- Offers are **bank-level, not card-level**. Do you want to map each offer to specific cards (e.g. which Axis cards qualify), or show it as a bank-wide tip with an eligibility note?
- What is the **validity/expiry** of each offer? The data has no dates, so the "last verified" date and re-check process need an owner (you, every 2–3 weeks).
- The two Axis **business-class** offers are likely more relevant to Mr X than Mr Y. Should Mr Y's primary tip per bank lead with the more everyday offers (e.g. Axis international economy on Wednesday)?
- The HDFC row reads "Up to 12% off on Domestic Flights; Max discount - 2000 on EMI". Is the ₹2,000 cap for EMI transactions only, or for all bookings?
- Cashback and Dining tips are not yet sourced. Is launching with Travel as the only populated category acceptable, or should the Cashback/Dining filters be hidden until data exists?
- Is "creditcardssahihi.com" the final domain spelling, or a placeholder worth double-checking before public use?
- Are we comfortable launching "See Affiliate Link" pointing to each bank's own application page before real affiliate deals exist, or should that CTA be hidden until a deal is signed?
- Should the earlier deeper card-detail-page design be retained as a reference for a possible P1 addition, or retired?

**Appendix A — Usage Tip Data (Travel, as provided)**

*A.1 In-scope banks (Amex, Axis, HDFC) — feeds the Bank Overview and Comparison pages*

| Bank | Day | Platform | Offer |
| --- | --- | --- | --- |
| Axis | Tuesday, Wednesday | MakeMyTrip | Flat 8% off up to ₹2,500 on domestic business-class flights |
| Axis | Tuesday, Wednesday | MakeMyTrip | Flat 20% off up to ₹12,500 on international business-class flights |
| Axis | Wednesday | MakeMyTrip | Flat 8% instant discount (up to ₹7,500) on international economy tickets |
| HDFC | All days | MakeMyTrip | Up to 12% off on domestic flights; max discount ₹2,000 on EMI |
| Amex | Saturday | MakeMyTrip | Flat 12% instant discount (up to ₹1,800) on a minimum transaction value of ₹5,000 |

*A.2 Out-of-scope banks (HSBC, ICICI) — held for future expansion, not shown in v1*

| Bank | Day | Platform | Offer |
| --- | --- | --- | --- |
| HSBC | Thursday, Friday | MakeMyTrip | Flat 12% instant discount (up to ₹1,800) on domestic flights |
| HSBC | Thursday, Friday | MakeMyTrip | Flat 10% instant discount (up to ₹5,000) on international flights |
| HSBC | Friday | Cleartrip | Up to 12% off plus interest-free EMI on flights |
| ICICI | Monday | MakeMyTrip | Up to 10% off on domestic flights (up to ₹1,800) |

*A.3 Week-at-a-glance for in-scope banks (a possible "Top Picks" / homepage format)*

| Day | Best in-scope card to use (flights on MakeMyTrip) |
| --- | --- |
| Monday | No day-specific offer yet (HDFC every-day offer applies) |
| Tuesday | Axis (domestic and international business class) |
| Wednesday | Axis (business class, plus international economy) |
| Thursday | No day-specific offer yet (HDFC every-day offer applies) |
| Friday | No day-specific offer yet (HDFC every-day offer applies) |
| Saturday | Amex (min. transaction ₹5,000) |
| Sunday | No day-specific offer yet (HDFC every-day offer applies) |
