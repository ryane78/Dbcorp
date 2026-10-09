/* =====================================================================
   DBCorp construction cost calculator: RATES
   ---------------------------------------------------------------------
   This is the only file you need to edit to keep the calculator current.
   Change a number, save, upload this file next to
   construction-cost-calculator.html. Nothing else needs touching.

   Rules for editing:
   - Numbers only, no commas inside numbers (write 1450, not 1,450).
   - Keep the commas at the end of each line.
   - After editing, open the calculator and check one house you know.

   STATUS: every number below is a PLACEHOLDER (October 2026) until it has
   been checked against DBCorp project costs. Set verified to true after
   that review to hide the "Draft rates" badge.
   ===================================================================== */
window.RATES = {
  updated: 'October 2026',   // shown on the page as "Rates last reviewed ..."
  verified: false,

  /* ---- 1. MATERIAL PRICES: update monthly ----------------------------
     price   = what we pay, delivered to site (PKR)
     perSqft = how much one sq ft of covered area uses. Work this out
               from finished projects: total used ÷ covered area.
               It rarely changes. */
  materials: {
    cement: { name: 'Cement',        unit: 'bag',  price: 1450, perSqft: 0.42 },
    steel:  { name: 'Steel (grade 60)', unit: 'kg',  price: 255,  perSqft: 4 },
    brick:  { name: 'Bricks',        unit: 'brick', price: 19,  perSqft: 21 },
    sand:   { name: 'Sand',          unit: 'cft',  price: 95,   perSqft: 1.8 },
    crush:  { name: 'Crush (bajri)', unit: 'cft',  price: 135,  perSqft: 1.3 },
  },
  greyOtherMaterials: 0.12,  // shuttering, DPC, pipes, conduits, water etc. as a share of the materials above
  greyLabour: 650,           // PKR per sq ft, grey structure labour

  /* ---- 2. FINISHING: update every 3 months ----------------------------
     PKR per sq ft of covered area, material + labour. Covers flooring,
     doors and windows, electrical, plumbing, paint, woodwork, elevation,
     bathrooms and kitchen. Work it out from finished projects:
     total finishing cost ÷ covered area. */
  finish: {
    economy:  { name: 'Economy',  rate: 2100,  spec: 'Local tiles and fittings, basic doors, distemper paint' },
    standard: { name: 'Standard', rate: 3500,  spec: 'Porcelain tiles, good local brands, solid doors, emulsion' },
    premium:  { name: 'Premium',  rate: 7000,  spec: 'Local marble, branded fittings, uPVC or aluminium windows' },
    luxury:   { name: 'Luxury',   rate: 13500, spec: 'Imported stone, designer fittings, solid wood, smart lighting' },
  },

  overhead: 0.10,            // DBCorp overhead and profit, added on top of grey + finishing

  /* ---- 3. LOCATIONS: update when society rules change -----------------
     cost  = price factor against Islamabad (1 = same, 1.05 = 5% dearer)
     marla = sq ft in one marla there */
  locations: {
    dha:     { name: 'DHA Islamabad',                     cost: 1,    marla: 225 },
    bahria:  { name: 'Bahria Town Islamabad / Rawalpindi', cost: 1,   marla: 225 },
    cda:     { name: 'CDA sectors (D, E, F, G, I)',        cost: 1.03, marla: 272.25 },
    gulberg: { name: 'Gulberg Greens / Residencia',       cost: 1,    marla: 225 },
    b17:     { name: 'B-17 Multi Gardens',                cost: 0.98, marla: 225 },
    isb:     { name: 'Other Islamabad society',           cost: 1,    marla: 225 },
    rwp:     { name: 'Rawalpindi',                        cost: 0.95, marla: 225 },
    lhr:     { name: 'Lahore',                            cost: 0.96, marla: 225 },
    khi:     { name: 'Karachi',                           cost: 1.02, marla: 225 },
  },

  /* ---- 4. HOUSE SHAPE: check once a year ------------------------------ */
  // Ground floor built on this share of the plot, by plot size (sq ft up to)
  coverage: [ [1500, 0.75], [2500, 0.70], [5000, 0.65], [Infinity, 0.60] ],
  firstFloor: 0.95,          // first floor as a share of the ground floor
  secondFloor: 0.60,         // second floor as a share of the ground floor
  mumty: 250,                // roof stair room, sq ft
  mumtyLarge: 350,           // roof stair room on plots over 4,000 sq ft
  basement: {
    partial: 0.5,            // partial basement as a share of the ground floor
    greyFactor: 1.6,         // basement structure costs this many times a normal floor
    finishFactor: 0.7,       // basement finishing costs this share of a normal floor
  },

  /* ---- 5. ACCURACY: tighten as you compare estimates with final costs - */
  range: { low: 0.92, high: 1.12 },   // shown range: 8% under to 12% over
};
