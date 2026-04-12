export interface TestimonialData {
  rating: number;
  quote: string;
  authorName: string;
  authorTitle: string;
  authorImage: string;
  className?: string; // For layout specific translations e.g. translate-y
}

export const testimonialsData: TestimonialData[] = [
  {
    rating: 5,
    quote: "The level of intentionality in their design process is unparalleled. They crafted an environment that feels alive.",
    authorName: "Julian Thorne",
    authorTitle: "CEO, Thorne Ventures",
    authorImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkCyzgLBMlHqPfOHe-NIbzsLPH7WijZnzbKSv_zIHhJO0cng2BJCxHtJWzbtW_apner2j0m9nI1Mldb0eGAMZ29VlGiXe03XpXDFZd6M2BvuATva57l0bvHRHKAgzLkvAItUaquM-TEFw9Wj33TYYKoj7dqB0dlpoxy13N21fIkJHGsxKY01Ap-6h7Qv51PEV69L5TP4-L70p8QRfGnCihWUroEnfd0P5uxd6OjvGhfCMkB8ruHllapERmW6DR5PmrXgb1PWf-hG_M"
  },
  {
    rating: 5,
    quote: "Penm'Land Property delivers projects with the precision of a Swiss watch. The gold standard of the industry.",
    authorName: "Elena Rodriguez",
    authorTitle: "Urban Planning Lab",
    authorImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCS70OE06aVZQYT7FJqHcNi2elpjmxgjigqrEkaoyjeoA9pQX5XuR6E2YihKylrozhPJ0LU30aE9HBP-Ul0rxoQJY1v7B6ZiMLeT6DD9V3Oaa3CQ32Gyby-DIP5P1UlZBgsBYi83PO841I0ziaqqQaRQbvIA0pekP43mLv9lsTZ9TGZLTrbrEeKWRl1qv9Oj2J0ceFi96cUnT5gWoOdhunkkzzX3ZHRii5tB3TlylcRcB5COGn0XRUpIdhdK3EQG72J7jm5euD6eRcZ",
    className: "md:translate-y-8"
  },
  {
    rating: 5,
    quote: "A rare combination of technical engineering excellence and high-end artistic vision. Only builders we trust.",
    authorName: "Marcus Sterling",
    authorTitle: "Sterling Real Estate",
    authorImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAi9y4nmuIAXNXlABuwDCJOgMDiLeRlL4KpZia5w3_W0qPOLkVxOKDfkxXNp9FR48SUbQS-9sFx34lPkFpQZSGZPRfz31uQ5pVTzYb2PLhFZVHrX-1Y-QhvKNeWG3El0ptdHHvRx3BRNXK81VXQjPXgA-38frb0katMSZA641ZA393hZT496Ajgy64nsUAOS1OuZ5TSXn9oy0aVhonKoUXVjCP4dF5z7hzhhqRQ55lWzVCFComMWLEptiWUx6Jm_iKyyLfNSXajlUDa"
  }
];
