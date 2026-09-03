// src/data.js
import { PenTool, Plane, Cpu, BarChart, Layers, Gift, Wrench } from 'lucide-react';

const PUBLIC = process.env.PUBLIC_URL || "";

// =================================================================================
// 1. GENERAL TEAM INFO
// =================================================================================
export const TEAM_INFO = {
  name: "Assailing Falcons",
  smalllogo: `${PUBLIC}/images/falconslogobird.png`,
  logo: `${PUBLIC}/images/falconslogo.png`,
  gif: `${PUBLIC}/images/loading.gif`,
  shortName: "Falcons",
  email: "assailingfalcons@vit.ac.in",
  phone: "+91 87927 29316",
  address: `Vellore Institute of Technology
Vellore, Tamil Nadu, India
632014`,
  socialLinks: {
    Youtube: "https://www.youtube.com/@assailingfalcons_vit",
    linkedin: "https://www.linkedin.com/company/assailing-falcons/",
    instagram: "https://www.instagram.com/assailingfalcons/",
  }
};

// =================================================================================
// 2. HOME PAGE DATA
// =================================================================================
export const HERO_DATA = {
  posterImage: `${PUBLIC}/images/Hero-Image.jpeg`,
  titleStart: "PUSHING THE LIMITS OF",
  titleHighlight: "FLIGHT",
  subtitle: "Designing, building, and flying the next generation of UAVs.",
  brochureLink: `${PUBLIC}/AssailingFalcons25-Brochure.pdf`,
  buttonText: "Support Us",
  teamPhoto: `${PUBLIC}/images/all/Indra-Team.jpeg`
};

export const ABOUT_DATA = {
  teamTitle: "Our Team",
  teamText: "Team Assailing Falcons is VIT’s premier aeromodelling team, specializing in the design, fabrication, and testing of autonomous unmanned aerial vehicles (UAVs). Founded in 2010, we have grown into a 50+ member multidisciplinary team that consistently pushes the boundaries of innovation. Ranked #1 in the Asia-Pacific, we excel in national and international competitions while providing a hands-on environment that transforms students into industry-ready engineers. Through teamwork, technical excellence, and continuous experimentation, we strive to build solutions that redefine the possibilities of autonomous flight.",
  missionTitle: "Our Mission",
  missionText: "Our mission is to advance UAV innovation, inspire excellence in aerospace engineering, and empower students through hands-on experience in designing, building, and testing autonomous aerial systems. Through research, innovation, and real-world problem-solving, we equip students with the technical expertise, creativity, and leadership skills needed to tackle complex engineering challenges. By fostering a culture of collaboration and excellence, we aim to develop the engineers and leaders who will shape the future of flight. We envision a future where our innovations redefine autonomous aviation and inspire the next generation of aerospace engineers."
};

export const DEPARTMENTS_DATA = [
  { icon: PenTool, title: "Design", desc: "The Design Department forms the foundation of every Falcons aircraft, transforming ideas into efficient and mission-ready aerial systems. Through conceptual design, aerodynamic analysis, MDO, CFD simulations, airfoil optimization, and performance evaluation, the team develops aircraft that balance innovation, efficiency, and reliability. By exploring and refining fixed-wing VTOL configurations, Design ensures every platform is engineered with precision, purpose, and a commitment to delivering high-performance solutions for every mission." },
  { icon: Plane, title: "Structures", desc: "The Structures Department transforms design concepts into flight-worthy RC aircraft through precision CAD modelling, structural analysis, and weight optimization. The team develops lightweight, efficient, and reliable airframes by combining analytical calculations, simulations, and engineering validation. Beyond design, the department oversees aircraft manufacturing and assembly, including in-house composite fabrication, and conducts physical testing to validate structural integrity and ensure safe, reliable operation under real-world conditions." },
  { icon: Cpu, title: "Avionics", desc: "The Avionics Department integrates sensors, payloads, power systems, and flight-control architecture to enable intelligent and autonomous operation. The team develops and validates systems for autonomous flight, payload operation, navigation, and real-time decision-making. The department also developed AVGP, a vision-guided autonomous rover that navigates through visual inputs and responds to its surroundings, demonstrating the team’s expertise in computer vision, embedded systems, and autonomous technologies." },
  { icon: BarChart, title: "Management", desc: "The Management Department connects people, opportunities, and ideas to drive Falcons forward. Through strategic partnerships, sponsorships, outreach, and seamless coordination, the team creates the foundation that enables innovation to thrive. Their efforts extend beyond administration, shaping the team’s identity, expanding its impact, and strengthening its pursuit of excellence. By fostering collaboration, building meaningful relationships, and aligning vision with execution, Management ensures every Falcons initiative reaches its fullest potential." }
];

export const STATS_DATA = [
  { label: "Founding Year", value: "2010" },
  { label: "Aircraft Built", value: "20+" },
  { label: `Asia Rank`, value: "#1"},
  { label: "World Rank", value: "#6" }
];

// src/data.js (SPONSORS_LOGOS)
export const SPONSORS_LOGOS = [
  { logoUrl: `${PUBLIC}/images/sponsors/aeroatoms.png`, websiteUrl: "https://aeroatoms.com/" },
  { logoUrl: `${PUBLIC}/images/sponsors/ansys.png`, websiteUrl: "https://ansys.synopsys.com/" },
  { logoUrl: `${PUBLIC}/images/sponsors/cadfem.png`, websiteUrl: "https://www.cadfem.net/en/home.html" },
  { logoUrl: `${PUBLIC}/images/sponsors/drkstore.png`, websiteUrl: "https://www.drkstore.in/" },
  { logoUrl: `${PUBLIC}/images/sponsors/emax.png`, websiteUrl: "https://www.emax-usa.com/" },
  { logoUrl: `${PUBLIC}/images/sponsors/gemfan.png`, websiteUrl: "https://www.gemfanhobby.com/" },
  { logoUrl: `${PUBLIC}/images/sponsors/gensace.png`, websiteUrl: "https://genstattu.com/" },
  { logoUrl: `${PUBLIC}/images/sponsors/kenesto.png`, websiteUrl: "https://www.kenesto.com/" },
  { logoUrl: `${PUBLIC}/images/sponsors/landmark.png`, websiteUrl: "https://landmarklanding.com/" },
  { logoUrl: `${PUBLIC}/images/sponsors/onshape.png`, websiteUrl: "https://www.onshape.com/en/" },
  { logoUrl: `${PUBLIC}/images/sponsors/protocase.png`, websiteUrl: "https://www.protocase.com/" },
  { logoUrl: `${PUBLIC}/images/sponsors/solidworks.png`, websiteUrl: "https://www.solidworks.com/" },
  { logoUrl: `${PUBLIC}/images/sponsors/tattu.png`, websiteUrl: "https://www.tattuworld.com/" },
];

// =================================================================================
// 3. FLAGSHIPS (AIRCRAFT) PAGE
// =================================================================================
// NOTE: IDs are assigned sequentially. Change IDs if you rely on them elsewhere.
export const AIRCRAFT_DATA = [
  {
    id: 1,
    name: "Indra",
    year: "2026",
    mission: "Autonomous Tiltrotor VTOL",
    rank: ["1st Flight Demonstration Readiness Review", "2nd Design Report", "3rd Aero Design MathWorks Simulation Award", "3rd Onshape Award", "6th Overall"],
    coverImage: `${PUBLIC}/images/all/Indra-Hero.jpeg`,
    description: "INDRA is an electric VTOL tricopter developed for precision payload delivery and retrieval missions. Combining vertical mobility with efficient forward flight, the platform delivers exceptional operational flexibility across a wide range of mission environments. Its lightweight airframe, optimized propulsion system, and integrated payload mechanism are engineered to maximize efficiency, reliability, and performance. Proven through extensive testing and iterative refinement under varied flight conditions, INDRA reflects a design philosophy centered on robustness, adaptability, and mission success.",
    gallery: [
      "https://www.youtube.com/watch?v=Jn-6389OB2Y",
      "https://www.youtube.com/watch?v=g9xQ22439-I",
      `${PUBLIC}/images/all/Indra-1.jpg`,
      `${PUBLIC}/images/all/Indra-2.jpg`,
      `${PUBLIC}/images/all/Indra-4.jpg`,
      `${PUBLIC}/images/all/Indra-5.jpg`,
      `${PUBLIC}/images/all/Indra-6.jpg`,
      `${PUBLIC}/images/all/Indra-Comp1.jpg`,
      `${PUBLIC}/images/all/Indra-Comp3.jpg`,
      `${PUBLIC}/images/all/Indra-Comp4.jpg`,
      `${PUBLIC}/images/all/Indra-Flight1.jpg`,
      `${PUBLIC}/images/all/Indra-Flight2.jpg`,
      `${PUBLIC}/images/all/Indra-Flight3.jpg`,
      `${PUBLIC}/images/all/Indra-Flight4.png`,
      `${PUBLIC}/images/all/Indra-Flight5.png`,
      `${PUBLIC}/images/all/Indra-Team.jpeg`
    ]
  },
  {
    id: 2,
    name: "Vidhyut",
    year: "2025",
    mission: "Autonomous Tiltrotor VTOL",
    rank: ["1st Design Report", "3rd Flight Demonstration Readiness Review", "4th Flight Performance", "3rd Overall"],
    coverImage: `${PUBLIC}/images/all/Vidhyut-Hero.jpg`,
    description: "Vidhyut, our 2025 flagship, is an advanced autonomous tiltrotor VTOL aircraft engineered for high-performance payload missions in constrained environments. Its refined tiltrotor architecture enables seamless transitions between vertical takeoff/landing and efficient forward flight, delivering exceptional agility and extended operational range. Equipped with cutting-edge avionics and a robust, precision-engineered structure, Vidhyut offers unmatched reliability and mission capability. Its design excellence and performance have secured a #3 global ranking, reflecting the team’s unwavering drive to push the frontiers of UAV innovation.",
    gallery: [
      "https://www.youtube.com/watch?v=NPTmgh9uSSY",
      "https://www.youtube.com/watch?v=oS2buLNerUo",
      `${PUBLIC}/images/all/Vidhyut-Hero.jpg`,
      `${PUBLIC}/images/all/Vidhyut-2.jpg`,
      `${PUBLIC}/images/all/Vidhyut-3.jpg`,
      `${PUBLIC}/images/all/Vidhyut-4.jpg`,
      `${PUBLIC}/images/all/Vidhyut-Comp.jpg`,
      `${PUBLIC}/images/all/Vidhyut-Comp2.jpg`,
      `${PUBLIC}/images/all/Vidhyut-Comp-Flight.jpg`,
      `${PUBLIC}/images/all/Vidhyut-Awards.jpg`,
      `${PUBLIC}/images/all/Vidhyut-Flight.jpg`,
      `${PUBLIC}/images/all/Vidhyut-Flight2.jpg`,
      `${PUBLIC}/images/all/Vidhyut-Flight3.jpg`,
      `${PUBLIC}/images/all/Vidhyut-Flight-Comp.jpg`,
      `${PUBLIC}/images/all/Vidhyut-General.jpg`,
      `${PUBLIC}/images/all/Vidhyut-Team-Comp.jpg`,
      `${PUBLIC}/images/all/Team-Photo.jpg`
    ]
  },
  {
    id: 3,
    name: "Marut",
    year: "2024",
    mission: "High payload, mid-air delivery",
    rank: ["6th Design Report", "13th Flight Demonstration Readiness Review", "2nd (tied) Flight Performance", "9th Overall"],
    coverImage: `${PUBLIC}/images/all/Marut-Hero.jpg`,
    description: "Marut, our 2024 flagship, is a high-performance blended-wing aircraft that earned the title of #1 in Asia. With a commanding 10-ft wingspan and the ability to carry 13 lbs of water, Marut is purpose-built for wildfire-oriented firefighting missions. Engineered for precision and reliability, it features a specialized deployment system capable of releasing an autonomous powered delta-wing vehicle mid-air to extend mission reach and responsiveness. Marut stands as a testament to our commitment to pioneering bold, mission-driven UAV solutions.",
    gallery: [
      "https://www.youtube.com/watch?v=61DIDIHwqJc",
      `${PUBLIC}/images/all/Marut-Hero.jpg`,
      `${PUBLIC}/images/all/Marut-1.jpg`,
      `${PUBLIC}/images/all/Marut-2.jpg`,
      `${PUBLIC}/images/all/Marut-3.jpg`,
      `${PUBLIC}/images/all/Marut-Comp.jpg`,
      `${PUBLIC}/images/all/Marut-Comp-Flight.jpg`,
      `${PUBLIC}/images/all/Marut-Comp-Team3.jpg`,
      `${PUBLIC}/images/all/Marut-General.jpg`
    ]
  },
  {
    id: 4,
    name: "Aquarius",
    year: "2023",
    mission: "Water payload delivery & PADA deployment",
    rank: ["3rd Design Report", "3rd Technical Presentation", "5th (tied) Flight Performance", "7th Overall"],
    coverImage: `${PUBLIC}/images/all/Aquarius-Hero.jpeg`,
    description: "Aquarius, our 2023 flagship, was named after the water-bearing constellation — a testament to its design delivering an 11 lb water payload to achieve mission performance. This semi-tapered mid-wing aircraft cruises at 42 ft/s. The Powered Autonomous Delivery Aircraft (PADA) deployed from the primary aircraft provides parts for a fully autonomous Ground Transport Vehicle.",
    gallery: [
      "https://www.youtube.com/watch?v=0VigeycA704",
      "https://www.youtube.com/watch?v=K5NKdVxcRgg",
      `${PUBLIC}/images/all/Aquarius-Hero.jpeg`,
      `${PUBLIC}/images/all/Aquarius-1.jpg`,
      `${PUBLIC}/images/all/Aquarius-2.jpg`,
      `${PUBLIC}/images/all/Aquarius-3.jpg`,
      `${PUBLIC}/images/all/Aquarius-4.jpg`,
      `${PUBLIC}/images/all/Aquarius-Award.png`,
      `${PUBLIC}/images/all/Aquarius-Flight-Team.jpg`
    ]
  },
  {
    id: 5,
    name: "Trident",
    year: "2022",
    mission: "Autonomous mid-air deployment & GTV support",
    rank: ["1st Design Report", "1st Technical Presentation", "3rd (tied) Flight Performance", "3rd Overall"],
    coverImage: `${PUBLIC}/images/all/Trident-Hero.jpg`,
    description: "Trident, the 2022 flagship, is an electric mid-wing aircraft with a single motor. It can carry 40 lbs at a cruise speed of 43 ft/s. Its advanced avionics allow for autonomous mid-air deployment of a secondary aircraft equipped with lidar-operated Ground Terrain Vehicle (GTV). The GTV provides ground-level assistance to firefighters. Trident achieved a global ranking of 3rd place.",
    gallery: [
      "https://www.youtube.com/watch?v=MCQTYmoWkpg",
      `${PUBLIC}/images/all/Trident-Hero.jpg`,
      `${PUBLIC}/images/all/Trident-Team2.jpg`,
      `${PUBLIC}/images/all/Trident-2.jpg`,
      `${PUBLIC}/images/all/Trident-3.jpg`,
      `${PUBLIC}/images/all/Trident-4.jpg`,
      `${PUBLIC}/images/all/Trident-5.jpg`,
      `${PUBLIC}/images/all/Trident-Team.jpg`,
      `${PUBLIC}/images/all/Trident-Awards.jpg`,
      `${PUBLIC}/images/all/Trident-Awards-2.jpeg`,
    ]
  },
  {
    id: 6,
    name: "Vulcan",
    year: "2021",
    mission: "Creative design — competition-focused",
    rank: ["1st Design Report", "16th Technical Presentation"],
    coverImage: `${PUBLIC}/images/all/Vulcan-Hero.jpg`,
    description: "Vulcan is our 2021 flagship designed with a combination of hard work and creativity. Vulcan enabled the team to achieve 1st position in all of Asia as well as a top technical design report ranking. Globally it is ranked 5th, despite the challenges that year due to the COVID-19 pandemic.",
    gallery: [
      `${PUBLIC}/images/all/Vulcan-Hero.jpg`,
      `${PUBLIC}/images/all/Vulcan-2.jpg`
    ]
  },
  {
    id: 7,
    name: "Airavat",
    year: "2020",
    mission: "High-lift electric, multi-deployment",
    rank: ["7th Design Report", "1st Technical Presentation", "3rd Flight Performance", "3rd Overall"],
    coverImage: `${PUBLIC}/images/all/Airavat-Hero.jpeg`,
    description: "Airavat is the 2020 flagship — an electric motor-propelled, high-wing aircraft with tricycle landing gear, capable of lifting 38 pounds at a cruise velocity of 43 ft/s. The aircraft can autonomously release two colonist delivery aircraft along with multiple supply payloads. It is ranked 3rd globally.",
    gallery: [
      "https://www.youtube.com/watch?v=URvE0RfHwP4",
      `${PUBLIC}/images/all/Airavat-Hero.jpeg`,
      `${PUBLIC}/images/all/Airavat-Flight.jpg`,
      `${PUBLIC}/images/all/Airavat-Comp.jpg`,
      `${PUBLIC}/images/all/Airavat-Comp-2.jpg`,
      `${PUBLIC}/images/all/Airavat-Render.png`,
      `${PUBLIC}/images/all/Airavat-Team.jpg`
    ]
  },
  {
    id: 8,
    name: "Redbird",
    year: "2019",
    mission: "Mars colonization simulation & increased aerodynamics",
    rank: ["1st Design Report", "1st Technical Presentation", "10th (tied) Flight Performance", "4th Overall"],
    coverImage: `${PUBLIC}/images/all/Redbird-1.jpg`,
    description: "Redbird is the 2019 flagship designed to simulate the colonization of Mars. Hoerner wingtips and a lifting-body fuselage increased the aircraft's aerodynamics and payload lifting capacity, leading the team to a worldwide 4th position and defending 1st position in the Asia-Pacific in the Advanced Class category of SAE Aero Design.",
    gallery: [
      "https://www.youtube.com/watch?v=_QFCf2j-ffY",
      "https://www.youtube.com/watch?v=jPY-tGPpjbk",
      `${PUBLIC}/images/all/Redbird-1.jpg`,
      `${PUBLIC}/images/all/Redbird-Flight-Comp.jpeg`,
      `${PUBLIC}/images/all/Redbird-Award.jpg`,
      `${PUBLIC}/images/all/Redbird-Team.jpg`
    ]
  },
  {
    id: 9,
    name: "Zephyrus",
    year: "2018",
    mission: "Advanced lift & payload drop",
    rank: ["8th Design Report", "6th Technical Presentation", "6th Flight Performance", "6th Overall"],
    coverImage: `${PUBLIC}/images/all/Zephyrus-Hero.png`,
    description: "Zephyrus is indeed the majestic advanced class aircraft that definitely lives up to its name - The Greek god of winds. Its improved lift and payload dropping capacity of aircraft helped the team secure worldwide 6th position at the SAE Aero Design East Competition 2018 — the best position in the Asia/Pacific region at the time.",
    gallery: [
      `${PUBLIC}/images/all/Zephyrus-Hero.png`,
      `${PUBLIC}/images/all/Zephyrus-2.jpg`,
      `${PUBLIC}/images/all/Zephyrus-Team.jpg`
    ]
  },
  {
    id: 10,
    name: "Jetaayu",
    year: "2017",
    mission: "Weather analysis & thermal imaging (modifiable)",
    rank: ["4th Design Report", "6th Technical Presentation", "7th Flight Performance", "7th Overall"],
    coverImage: `${PUBLIC}/images/all/Jetaayu-Hero.jpeg`,
    description: "Jetaayu is the 2017 flagship of Team Assailing Falcons. The aircraft can be modified for weather analysis and thermal imaging. In SAE EAST Aero Design Competition, Jetaayu secured an overall world ranking of 7. It also helped the team secure an overall 3rd ranking in the Indian Space Conclave 2017 competition held by SEDS VIT.",
    gallery: [
      `${PUBLIC}/images/all/Jetaayu-Hero.jpeg`,
      `${PUBLIC}/images/all/Jetaayu-2.jpg`,
      `${PUBLIC}/images/all/Jetaayu-Team.jpg`,
      `${PUBLIC}/images/all/Jetaayu-Flight.jpg`
    ]
  }
];

// =================================================================================
// 4. GALLERY PAGE 
// =================================================================================
export const GALLERY_CATEGORIES = [
  {
    name: "Up in Flight",
    coverImage: `${PUBLIC}/images/all/Indra-Flight4.png`,
    photos: [
      `${PUBLIC}/images/all/Indra-Flight1.jpg`,
      `${PUBLIC}/images/all/Indra-Flight2.jpg`,
      `${PUBLIC}/images/all/Indra-Flight3.jpg`,
      `${PUBLIC}/images/all/Vidhyut-Flight.jpg`,
      `${PUBLIC}/images/all/Vidhyut-Flight2.jpg`,
      `${PUBLIC}/images/all/Vidhyut-Flight3.jpg`,
      `${PUBLIC}/images/all/Vidhyut-Flight-Comp.jpg`,
      `${PUBLIC}/images/all/Marut-Comp-Flight.jpg`,
      `${PUBLIC}/images/all/Airavat-Flight.jpg`,
      `${PUBLIC}/images/all/Redbird-Flight-Comp.jpeg`,
      `${PUBLIC}/images/all/Jetaayu-Flight.jpg`
    ]
  },
  {
    name: "Competition Moments",
    coverImage: `${PUBLIC}/images/all/Airavat-Comp.jpg`,
    photos: [
      `${PUBLIC}/images/all/Indra-Comp1.jpg`,
      `${PUBLIC}/images/all/Indra-Comp4.jpg`,
      `${PUBLIC}/images/all/Indra-Comp3.jpg`,
      `${PUBLIC}/images/all/Vidhyut-Comp.jpg`,
      `${PUBLIC}/images/all/Vidhyut-Comp2.jpg`,
      `${PUBLIC}/images/all/Vidhyut-Comp-Flight.jpg`,
      `${PUBLIC}/images/all/Vidhyut-Team-Comp.jpg`,
      `${PUBLIC}/images/all/Marut-Comp.jpg`,
      `${PUBLIC}/images/all/Marut-Comp-Flight.jpg`,
      `${PUBLIC}/images/all/Marut-Comp-Team3.jpg`,
      `${PUBLIC}/images/all/Airavat-Comp.jpg`,
      `${PUBLIC}/images/all/Airavat-Comp-2.jpg`,
      `${PUBLIC}/images/all/Redbird-Flight-Comp.jpeg`,
      `${PUBLIC}/images/all/Comp-1.jpg`,
      `${PUBLIC}/images/all/Comp-2.jpg`
    ]
  },
  {
    name: "Outreach & Engagements",
    coverImage: `${PUBLIC}/images/all/Events.jpg`,
    photos: [
      `${PUBLIC}/images/all/Events.jpg`,
      `${PUBLIC}/images/all/Events-2.jpg`,
      `${PUBLIC}/images/all/Events-3.jpg`,
      `${PUBLIC}/images/all/Trident-Team-Events.jpg`,
      `${PUBLIC}/images/all/Events-AC25-1.jpg`,
      `${PUBLIC}/images/all/Events-AC25-2.jpg`,
      `${PUBLIC}/images/all/Events-AC24.jpg`,
      `${PUBLIC}/images/all/Events-ID.jpg`
    ]
  },
  {
    name: "Meet the Team",
    coverImage: `${PUBLIC}/images/all/Team-India.jpg`,
    photos: [
      `${PUBLIC}/images/all/Indra-Team.jpeg`,
      `${PUBLIC}/images/all/Team-Photo.jpg`,
      `${PUBLIC}/images/all/Marut-Comp-Team3.jpg`,
      `${PUBLIC}/images/all/Aquarius-Team.jpg`,
      `${PUBLIC}/images/all/Trident-Team2.jpg`,
      `${PUBLIC}/images/all/Airavat-Team.jpg`,
      `${PUBLIC}/images/all/Redbird-Team.jpg`,
      `${PUBLIC}/images/all/Zephyrus-Team.jpg`,
      `${PUBLIC}/images/all/Jetaayu-Team.jpg`,
      `${PUBLIC}/images/all/Nautilus-Hero-Team.jpg`,
      `${PUBLIC}/images/all/Carvao-Team.jpg`,
      `${PUBLIC}/images/all/Team-India.jpg`
    ]

  },
  {
    name: "Watch Us Fly",
    coverImage: `${PUBLIC}/images/all/General2.jpg`,
    photos: [
      "https://www.youtube.com/watch?v=Jn-6389OB2Y",
      "https://www.youtube.com/watch?v=g9xQ22439-I",
      "https://www.youtube.com/watch?v=NPTmgh9uSSY",
      "https://www.youtube.com/watch?v=oS2buLNerUo",
      "https://www.youtube.com/watch?v=61DIDIHwqJc",
      "https://www.youtube.com/watch?v=0VigeycA704",
      "https://www.youtube.com/watch?v=K5NKdVxcRgg",
      "https://www.youtube.com/watch?v=MCQTYmoWkpg",
      "https://www.youtube.com/watch?v=URvE0RfHwP4",
      "https://www.youtube.com/watch?v=_QFCf2j-ffY",
      "https://www.youtube.com/watch?v=jPY-tGPpjbk"
    ]
  },
  {
    name: "Awards & Milestones",
    coverImage: `${PUBLIC}/images/all/Vidhyut-Awards.jpg`,
    photos: [
      `${PUBLIC}/images/all/Vidhyut-Awards.jpg`,
      `${PUBLIC}/images/all/Trident-Awards.jpg`,
      `${PUBLIC}/images/all/Trident-Awards-2.jpeg`,
      `${PUBLIC}/images/all/Redbird-Award.jpg`,
      `${PUBLIC}/images/all/Aquarius-Award.png`
    ]
  }
];

// =================================================================================
// 5. CONTACT US PAGE
// =================================================================================
export const CONTACT_CONFIG = {
  introText: "Interested in sponsoring or joining? Let us know."
};


// =================================================================================
// 6. SPONSOR US PAGE
// =================================================================================
export const PERKS = [
  { icon: Cpu, title: 'Technical Collaboration', desc: 'Component donations, dev boards, electronics and hardware.' },
  { icon: Layers, title: 'Software & Licenses', desc: 'Software licenses, compute credits, SDKs.' },
  { icon: Gift, title: 'Monetary Support', desc: 'Funding for projects, discounts on components and services.' },
  { icon: Wrench, title: 'Mentorship & Access', desc: 'Office hours, guest lectures, recruitment pipeline.' },
];

export const WHAT_WE_PROVIDE = [
  'Brand visibility across competitions, social and campus events',
  'Technical reports, demo day, post-campaign analytics',
  'Access to student talent for internships & recruitment',
  'Brand placement on banners, team apparel, website and social media'
];

export const WHAT_WE_EXPECT = [
  'Clear deliverables and timeline for in-kind donations',
  'Logo and brand assets (SVG, color guide) for marketing purposes',
  'Technical documentation for hardware/software donations',
  'Compliance with safety & export rules for restricted components'
];