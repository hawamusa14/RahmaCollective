/* Rahma Collective — gatherings
   Upcoming vs. past is computed from dateISO at render time,
   so events roll over automatically as days pass.

   Event shape: {
     title: "Eid Picnic at Harbor Island",
     displayDate: "Sat · Mar 28",   // human-readable date
     dateISO: "2026-03-28",         // YYYY-MM-DD — drives past/upcoming
     time: "3–8 PM",                // optional; omitted from card if absent
     location: "Harbor Island, San Diego",
     type: "gatherings",            // gatherings | book-club | service | workshops | outreach | open-house
     audience: "everyone",          // everyone | women | youth | families | volunteers
     description: "One or two honest sentences.",
     rsvp: "get-involved.html"      // upcoming only; past gatherings render without a link
   }
*/
window.RAHMA = window.RAHMA || {};
window.RAHMA.events = [
  {
    title: "Shaah & Caano — Book Club, Beach Day & Seashell Mirror Craft",
    displayDate: "Sat · Aug 15",
    dateISO: "2026-08-15",
    time: "4–8 PM",
    location: "La Jolla Beach",
    type: "book-club",
    audience: "women",
    description:
      "The circle opens Women Around the Messenger by Muhammad 'Ali Qutb on the sand at La Jolla — book discussion, a beach afternoon, and a hands-on craft: handheld seashell mirrors. Food, snacks, drinks, and tea are provided, as always. New readers welcome.",
    rsvp: "get-involved.html?interest=shaah-caano#form",
  },
  {
    title: "Shaah & Caano — Completing The Barakah Effect",
    displayDate: "Sat · Jul 18",
    dateISO: "2026-07-18",
    time: "4–7 PM",
    location: "La Mesa",
    type: "book-club",
    audience: "women",
    description:
      "The circle closes The Barakah Effect by Mohammed A. Faris — final reflections on the chapters, and on what the book changed in our weeks.",
  },
  {
    title: "Shaah & Caano — The Barakah Effect",
    displayDate: "Sat · Jun 20",
    dateISO: "2026-06-20",
    time: "4–7 PM",
    location: "La Mesa",
    type: "book-club",
    audience: "women",
    description:
      "An afternoon with The Barakah Effect — unhurried discussion, tea, and the kind of questions that follow you home.",
  },
  {
    title: "Shaah & Caano — Book Club & Picnic",
    displayDate: "Sat · Jun 6",
    dateISO: "2026-06-06",
    time: "4–8 PM",
    location: "La Jolla",
    type: "book-club",
    audience: "women",
    description:
      "The circle takes the conversation outdoors — an evening by the water in La Jolla, with The Barakah Effect, shared food, and a longer table.",
  },
  {
    title: "Shaah & Caano — The Barakah Effect",
    displayDate: "Sat · May 23",
    dateISO: "2026-05-23",
    time: "4–7 PM",
    location: "La Mesa",
    type: "book-club",
    audience: "women",
    description:
      "The circle continues through The Barakah Effect — tea, discussion, and time that isn't rushed.",
  },
  {
    title: "Shaah & Caano — The Barakah Effect",
    displayDate: "Sat · May 9",
    dateISO: "2026-05-09",
    time: "4–7 PM",
    location: "San Diego",
    type: "book-club",
    audience: "women",
    description:
      "An afternoon with The Barakah Effect — reading together, reflecting together, and making room for every voice in the circle.",
  },
  {
    title: "Shaah & Caano — The Barakah Effect",
    displayDate: "Sat · Apr 25",
    dateISO: "2026-04-25",
    time: "4–7 PM",
    location: "La Mesa",
    type: "book-club",
    audience: "women",
    description:
      "The circle settles into The Barakah Effect — chapter by chapter, cup by cup.",
  },
  {
    title: "Shaah & Caano — Beginning The Barakah Effect",
    displayDate: "Sat · Apr 11",
    dateISO: "2026-04-11",
    time: "3–6 PM",
    location: "Zenith Wellness, San Diego",
    type: "book-club",
    audience: "women",
    description:
      "The circle opens The Barakah Effect by Mohammed A. Faris — first impressions, intentions, and a warm room at Zenith Wellness.",
  },
  {
    title: "Eid Picnic at Harbor Island",
    displayDate: "Sat · Mar 28",
    dateISO: "2026-03-28",
    time: "3–8 PM",
    location: "Harbor Island, San Diego",
    type: "gatherings",
    audience: "everyone",
    description:
      "Rahma Collective's first community gathering — an Eid picnic by the water at Harbor Island, with food, games, and an open invitation to the whole community.",
  },
];
