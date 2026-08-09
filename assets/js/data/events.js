/* Rahma Collective — events collection
 *
 * Add an event by appending an object to this array. The Events page and the
 * homepage "Gather with us" section render from this data automatically.
 *
 * Shape:
 * {
 *   title: "Community Dinner",
 *   displayDate: "Sat · Sep 12",        // shown on the card eyebrow
 *   dateISO: "2026-09-12",              // machine date, used for <time>
 *   time: "6:30 PM",
 *   location: "Venue, Neighborhood",
 *   type: "gatherings",                 // gatherings | book-club | workshops | youth | outings | service
 *   audience: "everyone",               // everyone | women | men | youth | families
 *   description: "One or two sentences.",
 *   rsvp: "mailto:hello@rahmacollective.org"   // or a registration URL
 * }
 *
 * When a CMS is adopted, this file is replaced by its API response.
 */
window.RAHMA = window.RAHMA || {};
window.RAHMA.events = [];
