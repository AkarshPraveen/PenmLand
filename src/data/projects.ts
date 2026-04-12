export interface ProjectData {
  id: number;
  title: string;
  location: string;
  image: string;
  badgeLabel: string | null;
  badgeType: "primary" | "secondary" | "accent" | null;
  tags: string[];
  category: string;
}

export const PROJECTS_DATA: ProjectData[] = [
  {
    id: 1,
    title: "The Obsidian Estate",
    location: "Cape Town, South Africa",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC-yrKrMN8U5Paii1dOG36cIYIVVXh-fCIH5SY-03Kzc3b_g4XuMwwYaB_jAguwqNlDltim96mSP_QTo2JylFpEUmcoqpi2ErAhrCYGP585Sly2Jho9cP65txjVfeIPRr7bAoYrsWRaGtZ0JbUjikD9f0aAJ8XqPywMDP-2VhCVkILx5LN6Bn69QyMmOAvAVkz6lD6bPN89KMJIuQpXlLqf84-jFljvtKqzyHRPodorVkNmnTyn-EDcT3RxT26KItcbQbaY5k-CQNcX",
    badgeLabel: "Award Winner",
    badgeType: "primary",
    tags: ["Concrete", "Glass"],
    category: "Residential",
  },
  {
    id: 2,
    title: "Veridian Nexus",
    location: "London, United Kingdom",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCK919V4Qe4xmwiXlshx_plsKEWNu9aaXBsCJ-0Fk0jw2b58ddrcgKO575h1t58S0yqMC7cwBIVZeDcWulyare-lMv3PtqQ-jRZwYfRtlrqoBpGIZfbUr3t95jiMSgyLfGZ-iOmoe13sX6GZ-jrd1bBvkDQAruJkD2Pe5iS3glsPXlcLpvw-DHb_LgaMcrxeJPXqBAaCEhe65HcwL0HoVwNkIVAmyDnxn7bIN1ItSCbNmF6KywF_tRjCgYtEhhfqpRrhGCnJHXFy_Fk",
    badgeLabel: "Eco-Certified",
    badgeType: "secondary",
    tags: ["Solar", "Net-Zero"],
    category: "Sustainable",
  },
  {
    id: 3,
    title: "Zenith Pavilion",
    location: "Dubai, UAE",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAupfpssFqTvNXKfOkSLFRiXtGp6qXEVOhtupwhCUHmFm8Um3KJI32DG0gzBQdrryjJRGQh-CWqpYw-p-qcJlz4sLp25xTPTAq0XaUFoPVw1oaKZrT3uaJSWEvVPSLUYg_zHmTQMR9pMCQxfJ92IrJLdzVXHXb4doRZqbEYHvJozBm-U0c4Vg0mqV7sdhXpyUBJEJSC_uywp9bumPMWT5gAyqxyCRE48IbgUFYhcHwxqqXucQkk4YL8cKY44rPxwziwKOTrZbtLrRAy",
    badgeLabel: null,
    badgeType: null,
    tags: ["Steel", "High-Rise"],
    category: "Commercial",
  },
  {
    id: 4,
    title: "Ether Loft",
    location: "New York, USA",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAH_E8vPrlq9DuD1b754KaiYf1BC4gk6XakhUwGdHN3yzVAFnk0txQbqYjk8UtmqC9nRfq62uMkum4_0_6_S3eXtCUs_aScrt_ecs6Wy1ZqOlFAy-xp36hAHaSlApbTxBJxwaFpJQEtDqy8uC2usjFn_NaIIDVmtOrdj9OMDeS6Vkyml5PXurft-oviIuWVThNM5GE4O0db402fR8gZ575nEcz7PMkkYJXxzhqavA6L2KhAcKVacxpi2tAOvwtqMBA_Xe46snJRi4E4",
    badgeLabel: null,
    badgeType: null,
    tags: ["Minimal", "Adaptive Reuse"],
    category: "Restoration",
  },
  {
    id: 5,
    title: "Tide & Stone",
    location: "Lisbon, Portugal",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDHsMDKsT0aPcroM62PBFjkKGDW4tbo5DgBEwAybYk9dbqgVcV9yHdOcdfUVdde0PLj1B1vlGL9cuKxX1HUY84i1rq9HTM22cfRmczcwB3X-MkHkkT0mldVdogTn-0Bwmkn__kqQn7DMfjaXxIBDUW1zgsrOTBeJCGqUGQFzjLs8GaKtwxaqhz8H_U3QdnGGl7rMC4e8ZyIrhbt8AVjwsGnAO8oGplvbRGutkoRxefFF_rk-YLMuXJ4r0IeQBZPO5MNY64BdHz0LfCa",
    badgeLabel: null,
    badgeType: null,
    tags: ["Brutalist", "Coast"],
    category: "Residential",
  },
  {
    id: 6,
    title: "Echo Gallery",
    location: "Tokyo, Japan",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD0ZP770g9yYBawLBfee3CKRvausatUUcUjBE0MMne602UmxEep2p_joKFrPo01NjmyoOJPtGJ4c2Gzwk_c7DFFEmku1WgqTrnuLG2YRlyRO4XNACBdJg1-vK1EqxncYb8WxoZhlwj2x1s7xQNaljKtQeu3C9kpyVHYqPbQkPjxSYGpheo8DDrPgnDhgFMsrEBEhDrFi5Y5DVmhg0rWA8Bi5vh6jDiEXWdSpT8Nbrbc4_rEsC0rohgfQ74EdKaMHpCVTKJSQ3mNleAt",
    badgeLabel: "Cultural Landmark",
    badgeType: "accent",
    tags: ["Parametric", "Culture"],
    category: "Commercial",
  },
  {
    id: 7,
    title: "Aurora Horizons",
    location: "Sydney, Australia",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCK919V4Qe4xmwiXlshx_plsKEWNu9aaXBsCJ-0Fk0jw2b58ddrcgKO575h1t58S0yqMC7cwBIVZeDcWulyare-lMv3PtqQ-jRZwYfRtlrqoBpGIZfbUr3t95jiMSgyLfGZ-iOmoe13sX6GZ-jrd1bBvkDQAruJkD2Pe5iS3glsPXlcLpvw-DHb_LgaMcrxeJPXqBAaCEhe65HcwL0HoVwNkIVAmyDnxn7bIN1ItSCbNmF6KywF_tRjCgYtEhhfqpRrhGCnJHXFy_Fk",
    badgeLabel: "Innovation Award",
    badgeType: "primary",
    tags: ["Steel", "Light"],
    category: "Infrastructure",
  },
  {
    id: 8,
    title: "Skyline Vertex",
    location: "Toronto, Canada",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAupfpssFqTvNXKfOkSLFRiXtGp6qXEVOhtupwhCUHmFm8Um3KJI32DG0gzBQdrryjJRGQh-CWqpYw-p-qcJlz4sLp25xTPTAq0XaUFoPVw1oaKZrT3uaJSWEvVPSLUYg_zHmTQMR9pMCQxfJ92IrJLdzVXHXb4doRZqbEYHvJozBm-U0c4Vg0mqV7sdhXpyUBJEJSC_uywp9bumPMWT5gAyqxyCRE48IbgUFYhcHwxqqXucQkk4YL8cKY44rPxwziwKOTrZbtLrRAy",
    badgeLabel: null,
    badgeType: null,
    tags: ["Modern", "Urban"],
    category: "Commercial",
  },
  {
    id: 9,
    title: "Lumina Park",
    location: "Berlin, Germany",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAH_E8vPrlq9DuD1b754KaiYf1BC4gk6XakhUwGdHN3yzVAFnk0txQbqYjk8UtmqC9nRfq62uMkum4_0_6_S3eXtCUs_aScrt_ecs6Wy1ZqOlFAy-xp36hAHaSlApbTxBJxwaFpJQEtDqy8uC2usjFn_NaIIDVmtOrdj9OMDeS6Vkyml5PXurft-oviIuWVThNM5GE4O0db402fR8gZ575nEcz7PMkkYJXxzhqavA6L2KhAcKVacxpi2tAOvwtqMBA_Xe46snJRi4E4",
    badgeLabel: "LEED Gold",
    badgeType: "secondary",
    tags: ["Heritage", "Adaptive Reuse"],
    category: "Restoration",
  },
  {
    id: 10,
    title: "Nova Tower",
    location: "Paris, France",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCK919V4Qe4xmwiXlshx_plsKEWNu9aaXBsCJ-0Fk0jw2b58ddrcgKO575h1t58S0yqMC7cwBIVZeDcWulyare-lMv3PtqQ-jRZwYfRtlrqoBpGIZfbUr3t95jiMSgyLfGZ-iOmoe13sX6GZ-jrd1bBvkDQAruJkD2Pe5iS3glsPXlcLpvw-DHb_LgaMcrxeJPXqBAaCEhe65HcwL0HoVwNkIVAmyDnxn7bIN1ItSCbNmF6KywF_tRjCgYtEhhfqpRrhGCnJHXFy_Fk",
    badgeLabel: null,
    badgeType: null,
    tags: ["Glass", "Modern"],
    category: "Commercial",
  },
  {
    id: 11,
    title: "Oasis Complex",
    location: "Miami, USA",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAupfpssFqTvNXKfOkSLFRiXtGp6qXEVOhtupwhCUHmFm8Um3KJI32DG0gzBQdrryjJRGQh-CWqpYw-p-qcJlz4sLp25xTPTAq0XaUFoPVw1oaKZrT3uaJSWEvVPSLUYg_zHmTQMR9pMCQxfJ92IrJLdzVXHXb4doRZqbEYHvJozBm-U0c4Vg0mqV7sdhXpyUBJEJSC_uywp9bumPMWT5gAyqxyCRE48IbgUFYhcHwxqqXucQkk4YL8cKY44rPxwziwKOTrZbtLrRAy",
    badgeLabel: "Award Winner",
    badgeType: "primary",
    tags: ["Resort", "Luxury"],
    category: "Residential",
  },
  {
    id: 12,
    title: "Crescent Mall",
    location: "Beijing, China",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAH_E8vPrlq9DuD1b754KaiYf1BC4gk6XakhUwGdHN3yzVAFnk0txQbqYjk8UtmqC9nRfq62uMkum4_0_6_S3eXtCUs_aScrt_ecs6Wy1ZqOlFAy-xp36hAHaSlApbTxBJxwaFpJQEtDqy8uC2usjFn_NaIIDVmtOrdj9OMDeS6Vkyml5PXurft-oviIuWVThNM5GE4O0db402fR8gZ575nEcz7PMkkYJXxzhqavA6L2KhAcKVacxpi2tAOvwtqMBA_Xe46snJRi4E4",
    badgeLabel: null,
    badgeType: null,
    tags: ["Retail", "Urban"],
    category: "Commercial",
  },
  {
    id: 13,
    title: "Pinnacle Arena",
    location: "Madrid, Spain",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-yrKrMN8U5Paii1dOG36cIYIVVXh-fCIH5SY-03Kzc3b_g4XuMwwYaB_jAguwqNlDltim96mSP_QTo2JylFpEUmcoqpi2ErAhrCYGP585Sly2Jho9cP65txjVfeIPRr7bAoYrsWRaGtZ0JbUjikD9f0aAJ8XqPywMDP-2VhCVkILx5LN6Bn69QyMmOAvAVkz6lD6bPN89KMJIuQpXlLqf84-jFljvtKqzyHRPodorVkNmnTyn-EDcT3RxT26KItcbQbaY5k-CQNcX",
    badgeLabel: "Top Venue",
    badgeType: "accent",
    tags: ["Sports", "Steel"],
    category: "Infrastructure",
  },
  {
    id: 14,
    title: "Harbor View",
    location: "Sydney, Australia",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHsMDKsT0aPcroM62PBFjkKGDW4tbo5DgBEwAybYk9dbqgVcV9yHdOcdfUVdde0PLj1B1vlGL9cuKxX1HUY84i1rq9HTM22cfRmczcwB3X-MkHkkT0mldVdogTn-0Bwmkn__kqQn7DMfjaXxIBDUW1zgsrOTBeJCGqUGQFzjLs8GaKtwxaqhz8H_U3QdnGGl7rMC4e8ZyIrhbt8AVjwsGnAO8oGplvbRGutkoRxefFF_rk-YLMuXJ4r0IeQBZPO5MNY64BdHz0LfCa",
    badgeLabel: null,
    badgeType: null,
    tags: ["Waterfront", "Premium"],
    category: "Residential",
  },
  {
    id: 15,
    title: "Eco Villa",
    location: "Bali, Indonesia",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0ZP770g9yYBawLBfee3CKRvausatUUcUjBE0MMne602UmxEep2p_joKFrPo01NjmyoOJPtGJ4c2Gzwk_c7DFFEmku1WgqTrnuLG2YRlyRO4XNACBdJg1-vK1EqxncYb8WxoZhlwj2x1s7xQNaljKtQeu3C9kpyVHYqPbQkPjxSYGpheo8DDrPgnDhgFMsrEBEhDrFi5Y5DVmhg0rWA8Bi5vh6jDiEXWdSpT8Nbrbc4_rEsC0rohgfQ74EdKaMHpCVTKJSQ3mNleAt",
    badgeLabel: "Eco-Certified",
    badgeType: "secondary",
    tags: ["Bamboo", "Nature"],
    category: "Sustainable",
  },
  {
    id: 16,
    title: "Tech Hub",
    location: "San Francisco, USA",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCK919V4Qe4xmwiXlshx_plsKEWNu9aaXBsCJ-0Fk0jw2b58ddrcgKO575h1t58S0yqMC7cwBIVZeDcWulyare-lMv3PtqQ-jRZwYfRtlrqoBpGIZfbUr3t95jiMSgyLfGZ-iOmoe13sX6GZ-jrd1bBvkDQAruJkD2Pe5iS3glsPXlcLpvw-DHb_LgaMcrxeJPXqBAaCEhe65HcwL0HoVwNkIVAmyDnxn7bIN1ItSCbNmF6KywF_tRjCgYtEhhfqpRrhGCnJHXFy_Fk",
    badgeLabel: null,
    badgeType: null,
    tags: ["Office", "Minimalist"],
    category: "Commercial",
  },
  {
    id: 17,
    title: "Grand Central",
    location: "London, UK",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAupfpssFqTvNXKfOkSLFRiXtGp6qXEVOhtupwhCUHmFm8Um3KJI32DG0gzBQdrryjJRGQh-CWqpYw-p-qcJlz4sLp25xTPTAq0XaUFoPVw1oaKZrT3uaJSWEvVPSLUYg_zHmTQMR9pMCQxfJ92IrJLdzVXHXb4doRZqbEYHvJozBm-U0c4Vg0mqV7sdhXpyUBJEJSC_uywp9bumPMWT5gAyqxyCRE48IbgUFYhcHwxqqXucQkk4YL8cKY44rPxwziwKOTrZbtLrRAy",
    badgeLabel: "Heritage Award",
    badgeType: "primary",
    tags: ["Restoration", "Classic"],
    category: "Restoration",
  },
  {
    id: 18,
    title: "Silver Plaza",
    location: "Mumbai, India",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAH_E8vPrlq9DuD1b754KaiYf1BC4gk6XakhUwGdHN3yzVAFnk0txQbqYjk8UtmqC9nRfq62uMkum4_0_6_S3eXtCUs_aScrt_ecs6Wy1ZqOlFAy-xp36hAHaSlApbTxBJxwaFpJQEtDqy8uC2usjFn_NaIIDVmtOrdj9OMDeS6Vkyml5PXurft-oviIuWVThNM5GE4O0db402fR8gZ575nEcz7PMkkYJXxzhqavA6L2KhAcKVacxpi2tAOvwtqMBA_Xe46snJRi4E4",
    badgeLabel: null,
    badgeType: null,
    tags: ["Shopping", "Modern"],
    category: "Commercial",
  },
  {
    id: 19,
    title: "Iron Bridge",
    location: "Melbourne, Australia",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-yrKrMN8U5Paii1dOG36cIYIVVXh-fCIH5SY-03Kzc3b_g4XuMwwYaB_jAguwqNlDltim96mSP_QTo2JylFpEUmcoqpi2ErAhrCYGP585Sly2Jho9cP65txjVfeIPRr7bAoYrsWRaGtZ0JbUjikD9f0aAJ8XqPywMDP-2VhCVkILx5LN6Bn69QyMmOAvAVkz6lD6bPN89KMJIuQpXlLqf84-jFljvtKqzyHRPodorVkNmnTyn-EDcT3RxT26KItcbQbaY5k-CQNcX",
    badgeLabel: "Engineering",
    badgeType: "accent",
    tags: ["Steel", "Civil"],
    category: "Infrastructure",
  }
];
