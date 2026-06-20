// Project ledger data.
// Each entry mirrors a passbook line: what it is, what it does, what it's built with, where to find it.

const PROJECTS = [
  {
    id: "mykisel",
    name: "MyKisel",
    tag: "Digital Cooperative Super App",
    description:
      "A multi-service cooperative super app unifying marketplace, fintech, PPOB, transportation, investment, and cooperative financial services into a single ecosystem.",
    contributions: [
      "Implemented payment and banking-related transaction workflows",
      "Built scalable, modular Flutter UI architecture for multi-feature apps",
      "Integrated Firebase services and RESTful APIs",
      "Built complex business flows for marketplace and cooperative finance"
    ],
    stack: ["Flutter", "REST API", "Firebase", "Payments"],
    links: {
      playstore: "https://play.google.com/store/apps/details?id=com.kiselindonesia.MyKisel",
      appstore: "https://apps.apple.com/id/app/mykisel/id1613661432"
    }
  },
  {
    id: "coopin",
    name: "Coopin",
    tag: "Cooperative Digital Platform",
    description:
      "A cooperative platform supporting member marketplace transactions, PPOB services, inter-cooperative trading, and savings & loan management.",
    contributions: [
      "Marketplace between members",
      "Cooperative product sales",
      "PPOB integration",
      "Savings & loan features"
    ],
    stack: ["Flutter", "REST API"],
    links: {
      playstore: "https://play.google.com/store/apps/details?id=com.rakit.coopin"
    }
  },
  {
    id: "kiselbiz",
    name: "KiselBiz",
    tag: "Merchant Management Application",
    description:
      "A merchant-focused mobile app for managing products, day-to-day operations, and withdrawing balances directly to bank accounts.",
    contributions: [
      "Product management",
      "Inventory handling",
      "Bank transfer functionality",
      "Merchant operational dashboard"
    ],
    stack: ["Flutter", "REST API"],
    links: {
      playstore: "https://play.google.com/store/apps/details?id=com.kiselindonesia.MyKiselMerchant"
    }
  },
  {
    id: "ifmc",
    name: "iFMC",
    tag: "HRIS & Field Operations System",
    description:
      "An HRIS and field operations app handling attendance management and operational reporting for distributed teams.",
    contributions: [
      "Attendance, leave, overtime, payslip",
      "Operational expense submission",
      "CME, TE, MBP, generator fuel recording",
      "Geotagged photo documentation"
    ],
    stack: ["Flutter", "Firebase", "Geolocation"],
    links: {
      playstore: "https://play.google.com/store/apps/details?id=com.kiselindonesia.fmc",
      appstore: "https://apps.apple.com/us/app/ifmc/id6757739245"
    }
  },
  {
    id: "harmony",
    name: "Harmony",
    tag: "HRIS & Building Management System",
    description:
      "An HRIS application integrated with building management and transportation operational workflows.",
    contributions: [
      "Attendance & payroll features",
      "Building monitoring forms",
      "Driver operational management",
      "Pickup/drop-off location tracking",
      "Reimbursement reporting"
    ],
    stack: ["Flutter", "REST API", "Maps"],
    links: {
      playstore: "https://play.google.com/store/apps/details?id=com.kiselindonesia.harmony",
      appstore: "https://apps.apple.com/us/app/harmony-ksp/id6752973089"
    }
  },
  {
    id: "marissa",
    name: "Marissa",
    tag: "HRIS Application",
    description:
      "An HRIS application focused squarely on employee administration and attendance management.",
    contributions: [
      "Attendance management",
      "Leave & overtime management",
      "Payslip system"
    ],
    stack: ["Flutter", "REST API"],
    links: {
      playstore: "https://play.google.com/store/apps/details?id=com.kiselindonesia.marissa",
      appstore: "https://apps.apple.com/id/app/marissa/id6444144394"
    }
  },
  {
    id: "bayaraja",
    name: "Bayaraja",
    tag: "PPOB & Digital Payment Platform",
    description:
      "A PPOB application for everyday digital payments and utility transactions.",
    contributions: [
      "Mobile credit & data packages",
      "PLN & PDAM payments",
      "BPJS payment",
      "E-wallet top-up",
      "Postpaid bill payment",
      "PBB payment"
    ],
    stack: ["Flutter", "Payment Gateway"],
    links: {
      playstore: "https://play.google.com/store/apps/details?id=com.kiselindonesia.bayaraja",
      appstore: "https://apps.apple.com/us/app/bayaraja/id6526470064"
    }
  }
];
