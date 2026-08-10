/* Mawwada Collective — programs collection
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
    homeDesc:
      "We believe sisterhood is built in the moments between the big ones\u2014over shared meals, long walks, laughter, and simply making time for one another. Our community gatherings create opportunities for Muslim women to step away from the routine, meet new sisters, strengthen friendships, and enjoy beautiful experiences together.\n\nFrom beach days, hikes, game nights, and community dinners to picnics, coffee and tea gatherings, nature outings, cultural celebrations, creative nights, potlucks, museum visits, volunteer days, wellness activities, and seasonal gatherings, there is always an invitation to come as you are, bring a friend, and be part of the community. Connection over formality.",
    desc: "Dinners, coffee and tea meetups, unhurried conversation. The easiest way in — come once, and you'll know someone.",
    cta: { label: "Gather with Us", href: "events.html" },
    homeCta: { label: "Gather with Us", href: "events.html" },
  },
  {
    slug: "shaah-caano",
    title: "Shaah & Caano",
    home: true,
    spotlight: true,
    homeDesc:
      "Shaah & Caano is a women\u2019s book club where we gather around good books, warm tea, and meaningful conversation. We read, reflect, laugh, ask questions, and explore the ideas that shape our faith, identities, relationships, and lives\u2014creating a space where sisters can connect, learn from one another, and simply enjoy being together. Beyond the pages, Shaah iyo Caano is about building friendships, sharing experiences, supporting one another, and making beautiful memories over a cup of tea.",
    desc: "A women's book club and gathering around a shared table — reading, reflection, conversation, tea, and sisterhood.",
    cta: { label: "Pull Up a Chair", href: "programs.html#shaah-caano" },
    homeCta: { label: "Pull Up a Chair", href: "programs.html#shaah-caano" },
  },
  {
    slug: "workshops",
    title: "Workshops",
    homeTitle: "Workshops & Learning",
    home: true,
    homeDesc:
      "Our workshops are designed for all women in our community to learn, explore, and build practical skills together. From technology and IT, financial literacy and career development to cooking, healthy eating, nutrition, creative arts, wellness, entrepreneurship, communication, and other everyday skills, our workshops create space to learn something new, ask questions, share knowledge, and grow alongside one another.",
    desc: "Practical and thoughtful: faith, personal development, wellness, relationships, career, financial literacy, parenting, mental and emotional wellbeing. Taught with care, open to questions.",
    cta: { label: "Learn with Us", href: "events.html" },
    homeCta: { label: "Learn with Us", href: "events.html" },
  },
  {
    slug: "mentorship",
    title: "Mentorship",
    home: true,
    homeDesc:
      "Across generations and professions \u2014 because nobody should have to figure it out alone.\n\nOur mentorship program connects women with a community of sisters who are willing to share their knowledge, experiences, and networks. Members have opportunities to build meaningful professional relationships, connect with women from different industries and career paths, seek guidance from those who have walked similar roads, and learn from one another.\n\nWhether you\u2019re exploring a career, navigating your first job, considering a career change, building a business, pursuing graduate school, or simply looking for someone who understands where you are headed, our community is a place to ask questions and find support. Through mentorship, networking events, professional introductions, peer guidance, skill-sharing, and conversations with women across different fields, we hope to make professional growth feel more connected, accessible, and collaborative.",
    desc: "Career guidance, youth mentorship, professional networking, peer support, faith-based mentoring, leadership development. Someone here has walked your road.",
    cta: { label: "Become a Mentor", href: "get-involved.html?interest=mentorship#form" },
    homeCta: { label: "Find a mentor", href: "get-involved.html?interest=mentorship#form" },
  },
  {
    slug: "youth",
    title: "Youth & Teen Programming",
    homeTitle: "Youth & Teens",
    home: true,
    homeDesc:
      "Friendship, leadership, identity, and honest questions \u2014 a place for the next generation.\n\nWe believe sisterhood starts early. Our youth and teen programs create a welcoming space for Muslim girls to build confidence, form meaningful friendships, explore their identities, strengthen their connection to their faith, and develop skills that prepare them for the future.\n\nThrough mentorship, workshops, creative activities, community outings, leadership opportunities, discussions, and service projects, we give young women the opportunity to ask questions, express themselves, discover their strengths, and learn from women who can help guide them. Our goal is to nurture confident, grounded, compassionate young women who know they have a community behind them.",
    desc: "Friendship, leadership, identity, confidence, and honest questions — with mentors who remember what it felt like. Service included; eye-rolls tolerated.",
    cta: { label: "For Parents & Young People", href: "contact.html?type=general#form" },
    homeCta: { label: "For young people", href: "programs.html#youth" },
  },
  {
    slug: "outings",
    title: "Community Outings",
    home: true,
    homeTitle: "Service & Outings",
    homeDesc:
      "Experiencing San Diego together \u2014 and giving back to it.\n\nService & Giving Back\n\nWe believe community is not only about what we receive from one another, but what we give. Through volunteer opportunities, community service projects, donation drives, mutual aid, fundraising initiatives, and partnerships with local organizations, we create meaningful ways for sisters to show up for others and make a difference.\n\nFrom supporting families in need and giving back to our local communities to organizing food and clothing drives, visiting those who may feel alone, volunteering with nonprofits, supporting small businesses, and responding to community needs, our service initiatives are rooted in compassion, generosity, and the belief that even small acts of kindness can create lasting impact.",
    desc: "Coastlines, trails, museums, service days — experiencing San Diego together, because community is built through shared experiences, not just shared rooms.",
    cta: { label: "Come Along", href: "events.html" },
    homeCta: { label: "Come Along", href: "events.html" },
  },
  {
    slug: "education",
    title: "Educational Programs",
    desc: "Learning spaces around Islam, culture, identity, and the issues shaping young people and families. Curiosity encouraged; judgment left at the door.",
    cta: { label: "Learn with Us", href: "events.html" },
  },
  {
    slug: "service",
    title: "Service & Community Engagement",
    desc: "Volunteer projects and partnerships that let us give back to San Diego — visibly, usefully, together.",
    cta: { label: "Serve with Us", href: "get-involved.html?interest=volunteering#form" },
  },
  {
    slug: "events",
    title: "Events",
    desc: "The living calendar: gatherings, talks, book club meetings, networking, youth events, outings, celebrations.",
    cta: { label: "Explore Events", href: "events.html" },
  },
];
