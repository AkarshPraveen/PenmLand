export type Service = {
  id: string;
  num: string;
  category: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  icon: string;
  showOnHome: boolean;
  mobileOnlyHome: boolean;
};

export const servicesData: Service[] = [
  {
    id: 'construction',
    num: '01',
    category: 'Core Development',
    title: 'Precision Construction',
    shortDescription: 'Professional building solutions tailored to specific project requirements.',
    description: 'Our construction division sets the industry standard for structural integrity and technical precision. We leverage advanced building technologies and rigorous quality control to deliver enduring landmarks that exceed modern engineering expectations.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2Yk_aqc5l51J6kQ6lsInhddJpN1utkIPRfFMObPVVa1yR1axVdJxHWXuDBYoxhUCyYXkDJkIkFypcKtsL3NZ2rJiGNdFUiwCgapSc2Uw_9LMtnZ3h4RYFCCMokMeX2LvuUaY1AYKW1e9IjI3bK-C8pyW2SHraSCkM6XyaGSE7kbM3K8x9_bCaNOP0LNQ4qweRJ5aOUr3TwVNQi1-5DR513gvEHOg5qydi27uh4T5iA00G0IzGWkdNJA0WEdlhOYrhAuBXHeqvHcL3',
    icon: 'construction',
    showOnHome: true,
    mobileOnlyHome: false
  },
  {
    id: 'interior',
    num: '02',
    category: 'Aesthetic Finishes',
    title: 'Bespoke Interior Design',
    shortDescription: 'Curated indoor aesthetics that blend functionality with premium materials.',
    description: 'Transforming interior spaces into curated experiences. Our designers blend ergonomics with high-end materials to create functional masterpieces that reflect personal identity and modern luxury, from residential penthouses to corporate headquarters.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHgxJ-BMnep4PesJG0gYdrsVXPNAsjNvMhD-o6CWCy_iUllcSvaSGqsynyTrr8bOMTeT3x1qY771WTOjOnbiw0LMZj5GPeCyAtLdAt5tCYInT83XbT5pe2J4rIG7p2AtZB3HJD8kD95vRtGxzQtivMHzPlnBQrEAH59u_P0QN_YdP40sI7RWSIntAtERzcLRj_k0D7hyk6EI30CQZ8DYR0O7JjfT9dvtfxlP3pXFAq8RY32kQy64eOEU0fMLAp7qY9PqaK1eC4x4sK',
    icon: 'weekend',
    showOnHome: true,
    mobileOnlyHome: false
  },
  {
    id: 'exterior',
    num: '03',
    category: 'Facade Engineering',
    title: 'Architectural Exteriors',
    shortDescription: 'Elevating building facades with durable and iconic architectural elements.',
    description: 'The face of a building defines its character. We specialize in advanced facade systems, utilizing climate-responsive materials and iconic geometric forms to ensure your property makes a powerful and lasting visual statement.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGkAW7ezUck6g-CX_NcTgNRgmsoJ2KeDDOiEvBI6F2trCWfIYMrrpZ_TJuaG50qYP0TNpr0alim3us2-Vd5WDNt9dsuPZ6AgeYF-zJZFTUe6yzEa4pMCQTNBOUghaU3MtVlGMgYvikiHUgu6Kpc7jKXBbkl4BqBohosD58Nnev6Y1b1w3yDfTjFohQH-0gZ2F5QUrppUiEEHNL1FjHJZLlOnuLkn8aLIxIoHRRGkjesAAy9YKsTHyJMdcfoTCSJNyScH7RO2NVdd3j',
    icon: 'domain',
    showOnHome: true,
    mobileOnlyHome: false
  },
  {
    id: 'landscape',
    num: '04',
    category: 'Natural Integration',
    title: 'Landscape Architecture',
    shortDescription: 'Harmonious outdoor environments that connect structures with nature.',
    description: 'Merging built environments with the natural world. Our landscape architects design sustainable ecosystems, private gardens, and urban green spaces that enhance biodiversity while providing serene retreats from the city.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmg5SjA0cpb5Bwb9Bgl7ZT4U59YY5IDz2fnUIQ-CUKBDRnucMVcNJFARmNXw_bQey-I6y0Zc-38FxT4w-Z8tokKOtGdtPtmULtjtyh6e-T2o_yzaxajswCq2vRyF04uRNpqtdhtrkbbTjmOQQq8aPtARjVcVjIoT-yU7aqsvrBAMDFToQcqxhCe09wp7xztv9JX9336UCUwZOLEmdztsSJiDD2lclG38kCT0s6qhhOaSpdTKOHoz76M40DMqeEf_FDDBYQcClNk5dG',
    icon: 'park',
    showOnHome: true,
    mobileOnlyHome: false
  },
  {
    id: '3d-design',
    num: '05',
    category: 'Visual Prototyping',
    title: '3D Design & Rendering',
    shortDescription: 'Hyper-realistic 3D walkthroughs and photostatic renders of spatial flows.',
    description: "See the future before it's built. Our visualization studio creates hyper-realistic 3D walkthroughs and photostatic renders, allowing clients to experience spatial flows, lighting conditions, and material textures with absolute clarity.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrd8qzsKXvkpKzHmU58Zg91CNaFDL2i_FmHKZr37oO_LKAI-M5Ch72jV2Gqw4LcmfYo0N2UnpcguHOK9BSRqXqrb3FIDMpTpOtE3W90umRBxazZisV8SZgTSIXJZ-nfTL0m-MB8rlnx8CN8Lfa9fRCbF5WH335ZYWIU58qbQVuqwOo-ar-D-79PZhrpWpZmqxyGXsgT8yD8ibDGMFDDcER431xgycERK34QakRZtKKud75t68s4vedqmIn-GXR4WwcUJBzdBlNG2Hc',
    icon: '3d_rotation',
    showOnHome: false,
    mobileOnlyHome: false
  },
  {
    id: 'renovation',
    num: '06',
    category: 'Heritage & Modernization',
    title: 'Strategic Renovation',
    shortDescription: 'Expert structural updates and modernizations for legacy properties.',
    description: 'Breathing new life into existing structures. We specialize in adaptive reuse and high-end restorations, upgrading heritage buildings with modern amenities and structural enhancements while preserving their unique historical character.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCg6UtXvJiOd8llhTgKNOxxa80JMtxz0mk-bx0suavgPIsvZyZQ5tw7ORv-QQy3ZPO3aBcD74MoTPJVnYudG8hb8kWizwmITTXkrwnsWucqJXpRECoAqqsaztb1A2wB9Cxl7Utqkyb7pHav2we6skXPqD0IWDHw3Q3hahxOV3ET40Fv4q53sUX1iRiJ1aH1b_AYeaD1r2EaRVEqP2rnW8yINq3FRSIQcYQBjTjBxA79B4zdIKFS1K7RJ8u-XzSEUDuRknu8RuicGw2E',
    icon: 'mop',
    showOnHome: true,
    mobileOnlyHome: true
  },
  {
    id: 'real-estate',
    num: '07',
    category: 'Market Excellence',
    title: 'Real Estate Services',
    shortDescription: 'Navigating the premium property market with expert precision.',
    description: 'Navigating the premium property market with expert precision. Our real estate division offers exclusive access to high-yield investment opportunities, luxury residential acquisitions, and strategic asset management for global investors.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwRHlFqpQAqfCR3AoIk_TDufWOzFmEyKf-KzIOzS5iO96GvDa8lXxNWZaFYyXqTgGUITADQL-qMn1hPJqxoccjQ-P-A01YsWn9C2tM9VRrOgBUPB4fB_UAEiSGABzg6qrtsPVzd8tPyxINgveek16Wie7Jcmyatw8ImbelkX1Am7sn04ja-4RiTrhDvBbTWq5Tgpl50tLxPyscx3GfmcMCt6UR-tjE12b13UuEuFIiAIKPRiw9c8crc4rAzUZDBcaO2qDx_oEvd3Y3',
    icon: 'real_estate_agent',
    showOnHome: false,
    mobileOnlyHome: false
  },
  {
    id: 'legal',
    num: '08',
    category: 'Security & Compliance',
    title: 'Legal Documentation',
    shortDescription: 'Seamless handling of permits, land rights, and architectural compliance.',
    description: 'Ensuring your investments are protected through rigorous legal oversight. We handle complex zoning permits, land titles, and compliance documentation, providing a seamless and secure administrative path for every development project.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhtUXJj225vr1vkd8yI4vDFx-5f94uPeQLLpCmPN-Wd2YLmUH2a4LWqoyxV1_ddnHf4Ht9rhGGsx-olTaCYsQmh03V5cpu-THUWQC9eONjU96H6ZzjM6CFfuq81tJBHKf2QM1Wnf9cKO-LJ-mez_5vAvzgGM_WzX5IQLQlVnMYTN3UXap8jbdIMVJf_mEaolRINnms1kCxf557C_2oz5-3y5AadGkcEOr0OgNvSfqOsCwvzhCRUAxKUbyqSAL_OLRMNRPfP3KyFtqQ',
    icon: 'gavel',
    showOnHome: true,
    mobileOnlyHome: true
  }
];
