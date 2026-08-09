/* Rahma Collective — programs collection
 *
 * Home renders the six entries marked `home: true`; the Programs page renders
 * every entry except the one marked `spotlight: true` (Shaah & Caano gets its
 * own feature section). Add future programs by appending entries.
 */
window.RAHMA = window.RAHMA || {};
window.RAHMA.programs = [
  {
    slug: "gatherings",
    title: "Community Gatherings",
    home: true,
    homeDesc: "Dinners, coffee and tea, conversations that run long. Connection over formality.",
    desc: "Dinners, coffee and tea meetups, unhurried conversation. The easiest way in — come once, and you'll know someone.",
    cta: { label: "Gather with us", href: "events.html" },
    homeCta: { label: "Gather with us", href: "events.html" },
  },
  {
    slug: "shaah-caano",
    title: "Shaah & Caano",
    home: true,
    spotlight: true,
    homeDesc: "Our women's book club: books, tea, reflection, and sisterhood.",
    desc: "A women's book club and gathering around a shared table — reading, reflection, conversation, tea, and sisterhood.",
    cta: { label: "Pull up a chair", href: "programs.html#shaah-caano" },
    homeCta: { label: "Pull up a chair", href: "programs.html#shaah-caano" },
  },
  {
    slug: "workshops",
    title: "Workshops",
    homeTitle: "Workshops & Learning",
    home: true,
    homeDesc:
      "Our workshops are designed for all women in our community to learn, explore, and build practical skills together. From technology and IT, financial literacy and career development to cooking, healthy eating, nutrition, creative arts, wellness, entrepreneurship, communication, and other everyday skills, our workshops create space to learn something new, ask questions, share knowledge, and grow alongside one another.",
    desc: "Practical and thoughtful: faith, personal development, wellness, relationships, career, financial literacy, parenting, mental and emotional wellbeing. Taught with care, open to questions.",
    cta: { label: "Learn with us", href: "events.html" },
    homeCta: { label: "Learn with us", href: "events.html" },
  },
  {
    slug: "mentorship",
    title: "Mentorship",
    home: true,
    homeDesc: "Across generations and professions — because nobody should have to figure it out alone.",
    desc: "Career guidance, youth mentorship, professional networking, peer support, faith-based mentoring, leadership development. Someone here has walked your road.",
    cta: { label: "Become a mentor", href: "get-involved.html?interest=mentorship#form" },
    homeCta: { label: "Find a mentor", href: "get-involved.html?interest=mentorship#form" },
  },
  {
    slug: "youth",
    title: "Youth & Teen Programming",
    homeTitle: "Youth & Teens",
    home: true,
    homeDesc: "Friendship, leadership, identity, and honest questions — a place for the next generation.",
    desc: "Friendship, leadership, identity, confidence, and honest questions — with mentors who remember what it felt like. Service included; eye-rolls tolerated.",
    cta: { label: "For parents & young people", href: "contact.html?type=general#form" },
    homeCta: { label: "For young people", href: "programs.html#youth" },
  },
  {
    slug: "outings",
    title: "Community Outings",
    home: true,
    homeTitle: "Service & Outings",
    homeDesc: "Experiencing San Diego together — and giving back to it.",
    desc: "Coastlines, trails, museums, service days — experiencing San Diego together, because community is built through shared experiences, not just shared rooms.",
    cta: { label: "Come along", href: "events.html" },
    homeCta: { label: "Come along", href: "events.html" },
  },
  {
    slug: "education",
    title: "Educational Programs",
    desc: "Learning spaces around Islam, culture, identity, and the issues shaping young people and families. Curiosity encouraged; judgment left at the door.",
    cta: { label: "Learn with us", href: "events.html" },
  },
  {
    slug: "service",
    title: "Service & Community Engagement",
    desc: "Volunteer projects and partnerships that let us give back to San Diego — visibly, usefully, together.",
    cta: { label: "Serve with us", href: "get-involved.html?interest=volunteering#form" },
  },
  {
    slug: "events",
    title: "Events",
    desc: "The living calendar: gatherings, talks, book club meetings, networking, youth events, outings, celebrations.",
    cta: { label: "Explore events", href: "events.html" },
  },
];
