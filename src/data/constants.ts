export interface NavLink {
  label: string;
  href: string;
  badge?: string;
}

export interface Stat {
  value: string;
  label: string;
  description?: string;
  electric?: boolean;
}

export interface ProductItem {
  title: string;
  tag: string;
  image?: string;
  capacity: string;
  voltage: string;
  description: string;
  specs: string[];
}

export interface SolutionItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  transformerSpec: string;
  highlights: string[];
  icon: string;
}

export interface UnitDetail {
  id: string;
  name: string;
  image?: string;
  location: string;
  role: string;
  landArea: string;
  plantArea: string;
  manpower: string;
  capacity: string;
  range: string;
  testingRange: string;
  features: string[];
}

export interface TimelineEvent {
  year: string;
  milestone: string;
  description: string;
}

export interface CpriTestReport {
  rating: string;
  winding: "Al" | "Cu";
  application: string;
  lab: string;
  status: string;
}

export interface CsrProject {
  title: string;
  partner: string;
  description: string;
  motto?: string;
  impact: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Products", href: "#products" },
  { label: "Solutions", href: "#solutions" },
  { label: "Proof & Scale", href: "#proof" },
  { label: "Manufacturing", href: "#manufacturing" },
  { label: "CPRI Validation", href: "#validation" },
  { label: "Culture & CSR", href: "#culture" },
];

export const HERO = {
  tagline: "INDUSTRIAL INFRASTRUCTURE STABILITY",
  headline: "Engineering the Core Winding of India's 132kV Grid",
  description: "",
  ctaPrimary: { label: "Request Technical Specification", href: "#contact" },
  ctaSecondary: { label: "Explore Core Systems", href: "#products" },
  stats: [
    {
      value: "13,000 MVA",
      label: "Annual Grid Capacity",
      description: "Across Unit I & II",
      electric: true,
    },
    {
      value: "9.5+ GW",
      label: "Solar & Wind Portfolio",
      description: "Target by March 2025",
      electric: true,
    },
    {
      value: "Zero Fail",
      label: "Site Operational Record",
      description: "Dielectric reliability",
      electric: true,
    },
  ] as Stat[],
};

export const TRACTION = {
  tagline: "PROOF OF INFRASTRUCTURE TRACTION",
  headline: "Capital Strength & Uncompromised Grid Deployment",
  description:
    "Engineering theory must be backed by financial liquidity and raw field performance. As a debt-free, positive cash-flow enterprise, we reinvest 100% of our profits into advanced manufacturing facilities, securing high-voltage supply chains for major national developers.",
  financials: {
    title: "Projected Sales Growth (INR)",
    years: [
      { label: "FY 2023-24 (Actual)", value: "225.59 Cr" },
      { label: "FY 2024-25 (Current)", value: "450 Cr" },
      { label: "FY 2025-26 (Target)", value: "1000 Cr" },
    ],
    growthDescription:
      "Expanding production capabilities to cross a ₹2,000 Crore operational scale by 2030.",
  },
  khavda: {
    title: "Adani Khavda Project Leadership",
    stats: [
      { value: "1,000+ MVA", label: "Active Solar Grid Load" },
      { value: "80 Units", label: "10/12.5 MVA Inverter-Duty Systems" },
      { value: "29 Units", label: "5.6 MVA Wind Turbine Generators" },
    ],
    description:
      "Ornet is the premier supplier of high-capacity inverter-duty and wind turbine transformers at Adani's historic 30 GW renewable energy park in Khavda, Gujarat.",
  },
};

export const PRODUCTS: {
  tagline: string;
  headline: string;
  items: ProductItem[];
} = {
  tagline: "HEAVY-DUTY TRANSFORMER SYSTEMS",
  headline: "Purpose-Built Core Families for Grid Stability",
  items: [
    {
      title: "Power Transformers",
      tag: "Substation Class",
      image: "/ornet.github.io/images/Testing/power-transformer.jpg",
      capacity: "Up to 60 MVA",
      voltage: "132 kV Class",
      description:
        "Designed for continuous high-load operations in transmission networks. Engineered with robust ONAN/ONAF cooling configurations to prevent dielectric fatigue.",
      specs: [
        "Capacity: Up to 60MVA, 132kV Class",
        "Winding Geometry: Copper or Aluminum (Disc/Layer/Spiral)",
        "On-Load Tap Changer (OLTC) / Off-Circuit Tap Changer (OCTC)",
        "Fully tested for impulse withstand voltages up to 15MVA, 66kV",
      ],
    },
    {
      title: "Solar Inverter-Duty Transformers",
      tag: "Renewable Generation",
      image: "/ornet.github.io/images/Testing/solar-transformer.jpg",
      capacity: "Up to 16.8 MVA",
      voltage: "33 kV Class",
      description:
        "Multi-winding step-up transformers optimized for the volatile load profiles of utility-scale solar arrays. Proven under extreme desert ambient temperatures.",
      specs: [
        "Ratings: 5MVA, 6.25MVA, 12.5MVA, and 16.8MVA",
        "Special multi-winding configurations (dual, three, or four LV inputs)",
        "Low-loss CRGO lamination to prevent harmonic overheating",
        "Short-circuit validated at CPRI Bengaluru on Aluminum & Copper windings",
      ],
    },
    {
      title: "Distribution Transformers",
      tag: "Utility & Heavy Industry",
      image: "/ornet.github.io/images/Testing/distribution-transformer.jpg",
      capacity: "25 kVA to 5 MVA",
      voltage: "33 kV Class",
      description:
        "Conventional and hermetically sealed distribution systems for urban, rural, and chemical grids. Engineered to withstand high ambient moisture.",
      specs: [
        "Ratings: 63kVA to 5000kVA, Level 3 Loss efficiency",
        "Ester fluid options (Natural/Synthetic) for green urban areas",
        "Conventional conservator or hermetically sealed corrugated tanks",
        "BIS accreditation under IS 1180, IS 2026, and IEC 60076 standards",
      ],
    },
    {
      title: "Compact Substations (CSS)",
      tag: "Integrated Infrastructure",
      image: "/ornet.github.io/images/Testing/substation.jpg",
      capacity: "Up to 3.1 MVA",
      voltage: "33 kV Class",
      description:
        "Prefabricated, modular electrical centers containing high-voltage switchgear, distribution transformer, and low-voltage metering panel in a single footprint.",
      specs: [
        "Enclosure: GI/CRC robust structure, IP54 weatherproof compliance",
        "Transformer compartment: IP21/23 safety ventilation",
        "Equipped with Vacuum Circuit Breakers (VCB) or Ring Main Units (RMU)",
        "Fully compliant with IEC 62271-202 specifications",
      ],
    },
  ],
};

export const SOLUTIONS: {
  tagline: string;
  headline: string;
  items: SolutionItem[];
} = {
  tagline: "TAILORED APPLICATION ENGINEERING",
  headline: "Connecting Renewable Generation to Transmission Corridors",
  items: [
    {
      id: "solar",
      title: "Solar Generation IPPs",
      tagline: "Enduring Solar Fluctuation",
      description:
        "Engineered step-up interfaces designed to handle high harmonic contents and rapid thermal cycling common in utility-scale solar fields.",
      transformerSpec: "Solar Inverter-Duty Transformers up to 16.8 MVA, 33kV",
      highlights: [
        "Electrostatic copper shields between HV/LV windings to arrest transients",
        "Enhanced structural bracing to withstand repetitive fault stresses",
        "Optimized oil flow paths for superior natural cooling (ONAN)",
      ],
      icon: "Sun",
    },
    {
      id: "wind",
      title: "Wind Turbine Generators",
      tagline: "Resisting Mechanical Vibrations",
      description:
        "WTG Step-up systems specifically structurally reinforced to be installed directly within wind towers, handling intense mechanical vibrations and damp environments.",
      transformerSpec: "Wind/WTG Transformers up to 5.6 MVA, 33kV",
      highlights: [
        "First in India to clear 5.6 MVA Al-wound short-circuit test at CPRI",
        "Compact footprint to fit narrow nacelle or platform spaces",
        "Ester fluid compatibility for ultimate fire safety and eco-preservation",
      ],
      icon: "Wind",
    },
    {
      id: "utilities",
      title: "Utilities & DISCOMs",
      tagline: "Stabilizing Distribution Grids",
      description:
        "High-voltage distribution networks built to supply steady step-down voltage to municipal grids, reducing core losses and maximizing power quality.",
      transformerSpec: "Power & Distribution Transformers up to 60 MVA, 132kV",
      highlights: [
        "Fully type-tested designs with proven low losses (Level 3)",
        "OLTC options with automated voltage controllers (RTCC)",
        "Approved make status with major DISCOMs like Torrent Power",
      ],
      icon: "Grid",
    },
    {
      id: "industrial",
      title: "Continuous Process Industry",
      tagline: "Heavy Metal & Chemical Resiliency",
      description:
        "Ruggedized transformer units built to withstand severe harmonic currents and continuous heavy load fluctuations in furnace, steel, and cement operations.",
      transformerSpec: "Special Furnace & Distribution Systems",
      highlights: [
        "Thick-gauge windings designed for high structural load profiles",
        "Corrosion-resistant epoxy paint systems for chemical atmospheres",
        "Advanced gas monitoring (DGA) for predictive diagnostic tracking",
      ],
      icon: "Factory",
    },
  ],
};

export const MANUFACTURING: {
  tagline: string;
  headline: string;
  units: UnitDetail[];
} = {
  tagline: "THE INDUSTRIAL FORGE",
  headline: "540,000 Sq. Ft. of Heavy Winding Capability",
  units: [
    {
      id: "unit-1",
      name: "Manufacturing Unit I",
      image: "/ornet.github.io/images/Testing/factory.jpg",
      location: "Medha Village, Kadi, Mehsana, Gujarat",
      role: "Established production core focusing on power & mid-range distribution systems.",
      landArea: "100,000 Sq. Ft.",
      plantArea: "30,000 Sq. Ft.",
      manpower: "150+ Heavy Technicians",
      capacity: "4,000 MVA per annum",
      range: "63 kVA, 11 kV - 20 MVA, 66 kV",
      testingRange: "Up to 20 MVA, 66 kV Systems",
      features: [
        "Fully automatic 800mm foil winding machines in dust-controlled cleanrooms",
        "5 overhead cranes up to 25 Ton capacity for active core handling",
        "2 dedicated active-part Vacuum Drying Ovens (170 kW capacity)",
        "SAP B1 enterprise operational control system integration",
      ],
    },
    {
      id: "unit-2",
      name: "Manufacturing Unit II",
      location: "Borisana, Kadi Thol Highway, Mehsana, Gujarat",
      role: "State-of-the-art flagship plant doubling overall manufacturing capability.",
      landArea: "280,000 Sq. Ft.",
      plantArea: "100,000 Sq. Ft.",
      manpower: "250+ Engineers & Operators",
      capacity: "9,000 MVA per annum",
      range: "1 MVA, 11 kV - 60 MVA, 132 kV",
      testingRange: "Up to 60 MVA, 132 kV Systems",
      features: [
        "Dual automatic 1400mm & 1200mm foil winding machines in air-conditioned cleanrooms",
        "9 overhead cranes including heavy 50 Ton synchronizers",
        "Flagship 1000 kV, 100 kJ Impulse Voltage Generator",
        "4 Vacuum Change Drying (VCD) ovens (300 kW capacity) for dielectric insulation",
      ],
    },
    {
      id: "unit-3",
      name: "Winding Tank Forge (Unit III)",
      location: "Jetpur Karsanpura Road, Borisana, Gujarat",
      role: "Backward integration hub securing tank fabrication autonomy.",
      landArea: "160,000 Sq. Ft.",
      plantArea: "60,000 Sq. Ft.",
      manpower: "150+ Fabricators",
      capacity: "400 Tonnes per annum",
      range: "Tanks up to 60 MVA capability",
      testingRange: "Dielectric pressure testing & chemical resistance tests",
      features: [
        "Completes backward integration for rapid structural tank assembly by March 2025",
        "Advanced automatic grit-blasting & high-durability chemical painting booths",
        "Ensures total control over physical enclosure dimensions and heat-radiator fins",
        "Prevents supply-chain delays for fast transformer dispatches",
      ],
    },
  ],
};

export const TIMELINE: TimelineEvent[] = [
  {
    year: "2013",
    milestone: "Foundation Laid",
    description:
      "Acquisition of Kadi industrial land plots for Unit I construction.",
  },
  {
    year: "2014",
    milestone: "Commercial Launch",
    description:
      "Unit I starts production, securing ISO 9001:2015 certification.",
  },
  {
    year: "2016",
    milestone: "Adani Green Entry",
    description:
      "Successfully engineers first 5 MVA solar Inverter-Duty step-up unit.",
  },
  {
    year: "2017",
    milestone: "Fuji Silvertech Partnership",
    description:
      "Scored official approval to manufacture compact substations (CSS).",
  },
  {
    year: "2018",
    milestone: "Torrent Power Supply",
    description:
      "Becomes the premier supplier of highly efficient urban distribution networks.",
  },
  {
    year: "2021",
    milestone: "12.5 MVA Short Circuit Clearance",
    description:
      "Al-wound IDT clears dynamic short-circuit testing at CPRI Bengaluru.",
  },
  {
    year: "2022",
    milestone: "Wind Industry Milestone",
    description:
      "First in India to clear 5.6 MVA Al-wound WTG short-circuit test at CPRI.",
  },
  {
    year: "2023",
    milestone: "Unit II Expansion",
    description:
      "Laid foundation stone for 280,000 sq. ft. Unit II to triple heavy grid assembly.",
  },
  {
    year: "2024",
    milestone: "16.8 MVA Solar Milestone",
    description:
      "Al-wound IDT successfully passes short-circuit type tests at CPRI Bengaluru.",
  },
  {
    year: "2025",
    milestone: "Tank Autonomy Forge",
    description:
      "Unit III tank fabrication plant built, reaching 13,000 MVA aggregate capacity.",
  },
];

export const VALIDATION = {
  tagline: "HIGH-VOLTAGE DIELECTRIC SYSTEM INTEGRITY",
  headline: "Zero-Failure Engineering, Validated by CPRI",
  description:
    "We operate under the assumption that a transformer failure is catastrophic. Every transformer design is backed by rigorous short-circuit type tests at CPRI and impulse testing in our internal laboratories.",
  cpriReports: [
    {
      rating: "16.8 MVA",
      winding: "Al",
      application: "Solar IDT ONAN 33kV",
      lab: "CPRI Bengaluru",
      status: "Passed & Certified",
    },
    {
      rating: "12.5 MVA",
      winding: "Al",
      application: "Solar IDT ONAF 33kV",
      lab: "CPRI Bengaluru",
      status: "Passed & Certified",
    },
    {
      rating: "6.25 MVA",
      winding: "Al",
      application: "Solar IDT ONAN 33kV",
      lab: "CPRI Bengaluru",
      status: "Passed & Certified",
    },
    {
      rating: "6.25 MVA",
      winding: "Cu",
      application: "Solar IDT ONAN 33kV",
      lab: "CPRI Bhopal",
      status: "Passed & Certified",
    },
    {
      rating: "5.6 MVA",
      winding: "Al",
      application: "Wind Turbine Generator 33kV",
      lab: "CPRI Bengaluru",
      status: "Passed & Certified",
    },
  ] as CpriTestReport[],
  inHouseTesting: [
    {
      title: "Impulse Voltage Testing",
      desc: "1000 kV, 100 kJ Impulse Voltage Generator at Unit II to validate strike surge defense.",
    },
    {
      title: "Partial Discharge Measurement",
      desc: "Monitors insulation integrity under continuous electrical field stress, ensuring < 10pC.",
    },
    {
      title: "Turns Ratio & Resistance",
      desc: "Verifies precision magnetic turns to guarantee perfect voltage conversions.",
    },
    {
      title: "Vacuum Varnish Infusion",
      desc: "Vapor-phase drying (VPD) removes trace humidity down to 0.5% weight before hot oil filling.",
    },
  ],
  certifications: [
    {
      label: "Bureau Veritas",
      value: "ISO 9001:2015",
      desc: "Multi-site Design, Development, and Manufacturing certification.",
    },
    {
      label: "BIS Approved",
      value: "IS 1180 / IS 2026",
      desc: "Compliant and licensed for energy-saving industrial and utility supply grids.",
    },
    {
      label: "International Norms",
      value: "IEC 60076 / BS 171",
      desc: "Designs certified for global interconnections and substation safety.",
    },
  ],
};

export const CSR_DATA: {
  tagline: string;
  headline: string;
  projects: CsrProject[];
} = {
  tagline: "INDUSTRIAL CITIZENSHIP & RESPONSIBILITY",
  headline: "Reinvesting Profits into Human Lives & Tribal Education",
  projects: [
    {
      title: "Jaipur Foot Campaign Support",
      partner: "BMVSS (Bhagwan Mahaveer Viklang Sahayata Samiti)",
      description:
        "Partnering with the world's largest rehabilitation society for the disabled, supplying cost-free artificial limbs and calipers to tribal communities.",
      impact:
        "Rehabilitated thousands of disabled citizens back to working lives.",
    },
    {
      title: "Affordable Rural Healthcare",
      partner: "Rajasthan Hospital Network",
      description:
        "Co-funding regional rural hospitals to provide state-of-the-art technological diagnosis and operations under 'Cure with Care' values.",
      motto:
        "Catering total health care under one roof at most affordable costs",
      impact:
        "Securing modern emergency health safety for underprivileged workers.",
    },
    {
      title: "Friends of Tribals Society (FTS)",
      partner: "One Teacher Schools (Ekal Vidyalaya)",
      description:
        "Direct sponsorship of remote village schools in Gujarat's tribal belts, providing functional literacy, health, and solar-power setups.",
      impact:
        "Directly educating and powering tribal households across Mehsana & Kadi zones.",
    },
  ],
};

export const CONTACT = {
  headline: "Connect with High-Voltage Engineering",
  description:
    "Configure your mechanical and winding specifications to receive direct engineering layouts from our technical design office.",
  channels: [
    {
      title: "Industrial Winding Inquiries",
      value: "engineering@ornettransformers.com",
    },
    { title: "Direct Phone Unit I / II", value: "+91 98798 48856" },
    { title: "Direct Phone Unit III / Head Office", value: "+91 99786 00998" },
  ],
  addresses: [
    {
      name: "Unit 1 Plant",
      desc: "Survey No. 82/1/B & 82/2, Medha Chowkdi, Thol-Kadi Highway, Mehsana, Gujarat, India (382165)",
    },
    {
      name: "Unit 2 Plant",
      desc: "Survey No. 592, Kadi-Thol Highway, Village Borisana, Mehsana, Gujarat, India (382728)",
    },
    {
      name: "Unit 3 Plant",
      desc: "Survey No. 613/3, Jetpur Karsanpura Road, Village Borisana, Mehsana, Gujarat, India (382715)",
    },
  ],
  specBuilder: {
    applications: [
      "Solar Inverter-Duty",
      "Wind Turbine Generator",
      "Transmission Substation",
      "Heavy Manufacturing / Furnace",
      "CSS Integrated Substation",
    ],
    ratings: [
      "500 kVA - 2.5 MVA",
      "2.5 MVA - 6.25 MVA",
      "6.25 MVA - 12.5 MVA",
      "12.5 MVA - 20 MVA",
      "20 MVA - 60 MVA",
    ],
    windings: ["High-Grade Copper (Cu)", "Precision Winding Aluminum (Al)"],
    voltages: [
      "11 kV System",
      "22 kV System",
      "33 kV System",
      "66 kV System",
      "132 kV System",
    ],
  },
};
