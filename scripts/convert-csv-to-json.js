const fs = require('fs');
const path = require('path');

function parseCSV(text) {
  const lines = [];
  let currentRow = [];
  let currentCell = '';
  let insideQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i + 1];

    if (char === '"') {
      if (insideQuotes && nextChar === '"') {
        currentCell += '"';
        i++; // skip escaped quote
      } else {
        insideQuotes = !insideQuotes;
      }
    } else if (char === ',' && !insideQuotes) {
      currentRow.push(currentCell.trim());
      currentCell = '';
    } else if ((char === '\r' || char === '\n') && !insideQuotes) {
      if (char === '\r' && nextChar === '\n') {
        i++;
      }
      currentRow.push(currentCell.trim());
      if (currentRow.length > 1 || currentRow[0] !== '') {
        lines.push(currentRow);
      }
      currentRow = [];
      currentCell = '';
    } else {
      currentCell += char;
    }
  }

  if (currentCell !== '' || currentRow.length > 0) {
    currentRow.push(currentCell.trim());
    lines.push(currentRow);
  }

  const [headerRow, ...dataRows] = lines;
  const headers = headerRow.map(h => h.trim());

  return dataRows.map(row => {
    const obj = {};
    headers.forEach((header, index) => {
      let val = row[index] !== undefined ? row[index] : '';
      if (val === 'true') val = true;
      else if (val === 'false') val = false;
      obj[header] = val;
    });
    return obj;
  });
}

function run() {
  const csvPath = path.join(__dirname, '..', 'data', 'cards.csv');
  const jsonPath = path.join(__dirname, '..', 'data', 'cards.json');
  const offersJsonPath = path.join(__dirname, '..', 'data', 'offers.json');

  console.log(`Reading CSV from: ${csvPath}`);
  const csvContent = fs.readFileSync(csvPath, 'utf-8');
  const cards = parseCSV(csvContent);

  console.log(`Parsed ${cards.length} cards from CSV.`);

  // Write cards.json
  fs.writeFileSync(jsonPath, JSON.stringify(cards, null, 2), 'utf-8');
  console.log(`Saved cards JSON to: ${jsonPath}`);

  // Appendix A bank-level offers
  const bankOffers = [
    {
      id: "axis-offer-1",
      bank: "Axis Bank",
      bankSlug: "axis",
      days: ["Tuesday", "Wednesday"],
      displayDays: "Tuesday, Wednesday",
      platform: "MakeMyTrip",
      offer: "Flat 8% off up to ₹2,500 on domestic business-class flights",
      offerType: "Domestic Business Class",
      category: "Travel",
      lastVerified: "2026-10-20",
      notes: "Applies to Axis credit cards. Confirm your card eligibility on MakeMyTrip checkout."
    },
    {
      id: "axis-offer-2",
      bank: "Axis Bank",
      bankSlug: "axis",
      days: ["Tuesday", "Wednesday"],
      displayDays: "Tuesday, Wednesday",
      platform: "MakeMyTrip",
      offer: "Flat 20% off up to ₹12,500 on international business-class flights",
      offerType: "International Business Class",
      category: "Travel",
      lastVerified: "2026-10-20",
      notes: "Ideal for Mr X (premium travelers). High savings on long-haul flights."
    },
    {
      id: "axis-offer-3",
      bank: "Axis Bank",
      bankSlug: "axis",
      days: ["Wednesday"],
      displayDays: "Wednesday",
      platform: "MakeMyTrip",
      offer: "Flat 8% instant discount (up to ₹7,500) on international economy tickets",
      offerType: "International Economy",
      category: "Travel",
      lastVerified: "2026-10-20",
      notes: "Great everyday offer for Mr Y booking international family vacations."
    },
    {
      id: "hdfc-offer-1",
      bank: "HDFC Bank",
      bankSlug: "hdfc",
      days: ["All days"],
      displayDays: "All days",
      platform: "MakeMyTrip",
      offer: "Up to 12% off on domestic flights; max discount ₹2,000 on EMI",
      offerType: "Domestic Flights",
      category: "Travel",
      lastVerified: "2026-10-15",
      notes: "Valid every day of the week. Discount cap of ₹2,000 applies to EMI transactions."
    },
    {
      id: "amex-offer-1",
      bank: "American Express",
      bankSlug: "amex",
      days: ["Saturday"],
      displayDays: "Saturday",
      platform: "MakeMyTrip",
      offer: "Flat 12% instant discount (up to ₹1,800) on a minimum transaction value of ₹5,000",
      offerType: "Weekend Flights",
      category: "Travel",
      lastVerified: "2026-10-24",
      notes: "Saturday specific promo. Requires min. booking amount of ₹5,000."
    }
  ];

  fs.writeFileSync(offersJsonPath, JSON.stringify(bankOffers, null, 2), 'utf-8');
  console.log(`Saved bank offers JSON to: ${offersJsonPath}`);
}

run();
