/* Rahma Collective — collection rendering
 *
 * Renders the data collections (window.RAHMA.*) into containers marked with
 * data-render attributes. Templates live here so the markup stays consistent
 * everywhere a collection appears — and so a CMS can later replace the data
 * files without touching a single page.
 */
(function () {
  "use strict";

  var data = window.RAHMA || {};

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  /* ---------- programs ---------- */

  function programCard(program, useHomeCopy) {
    var title = useHomeCopy && program.homeTitle ? program.homeTitle : program.title;
    var desc = useHomeCopy && program.homeDesc ? program.homeDesc : program.desc;
    var cta = (useHomeCopy && program.homeCta) || program.cta;
    return (
      '<article class="card program-card reveal" id="' +
      escapeHtml(program.slug) +
      '">' +
      "<h3>" +
      escapeHtml(title) +
      "</h3>" +
      "<p>" +
      escapeHtml(desc) +
      "</p>" +
      '<a class="link-arrow" href="' +
      escapeHtml(cta.href) +
      '">' +
      escapeHtml(cta.label) +
      "</a>" +
      "</article>"
    );
  }

  function renderPrograms() {
    document.querySelectorAll('[data-render="programs"]').forEach(function (container) {
      var mode = container.getAttribute("data-mode") || "all";
      var programs = (data.programs || []).filter(function (p) {
        if (mode === "home") return p.home;
        return !p.spotlight;
      });
      container.innerHTML = programs
        .map(function (p) {
          return programCard(p, mode === "home");
        })
        .join("");
    });
  }

  /* ---------- events ---------- */

  var AUDIENCE_LABELS = {
    everyone: "Everyone",
    women: "Women",
    men: "Men",
    youth: "Youth & teens",
    families: "Families",
  };

  function eventCard(event) {
    var audience = AUDIENCE_LABELS[event.audience] || event.audience;
    return (
      '<article class="card event-card reveal" data-type="' +
      escapeHtml(event.type) +
      '" data-audience="' +
      escapeHtml(event.audience) +
      '">' +
      '<span class="card__date"><time datetime="' +
      escapeHtml(event.dateISO) +
      '">' +
      escapeHtml(event.displayDate) +
      "</time> · " +
      escapeHtml(event.time) +
      "</span>" +
      "<h3>" +
      escapeHtml(event.title) +
      "</h3>" +
      '<div class="card__meta">' +
      '<span class="pill pill--outline">' +
      escapeHtml(event.location) +
      "</span>" +
      '<span class="pill">' +
      escapeHtml(audience) +
      "</span>" +
      "</div>" +
      "<p>" +
      escapeHtml(event.description) +
      "</p>" +
      '<a class="link-arrow" href="' +
      escapeHtml(event.rsvp) +
      '">Reserve a seat</a>' +
      "</article>"
    );
  }

  function renderEvents() {
    document.querySelectorAll('[data-render="events"]').forEach(function (section) {
      var list = section.querySelector("[data-events-list]");
      var empty = section.querySelector("[data-events-empty]");
      var filters = section.querySelector("[data-filters]");
      var limit = parseInt(section.getAttribute("data-limit") || "0", 10);
      var events = data.events || [];
      if (limit > 0) events = events.slice(0, limit);

      var active = { type: "all", audience: "all" };

      function apply() {
        var visible = events.filter(function (event) {
          var typeOk = active.type === "all" || event.type === active.type;
          var audienceOk = active.audience === "all" || event.audience === active.audience;
          return typeOk && audienceOk;
        });
        if (list) {
          list.innerHTML = visible.map(eventCard).join("");
          list.hidden = visible.length === 0;
        }
        if (empty) empty.hidden = visible.length !== 0;
        if (typeof window.RAHMA_REFRESH_REVEALS === "function") {
          window.RAHMA_REFRESH_REVEALS();
        }
      }

      if (filters) {
        if (events.length === 0) {
          filters.hidden = true;
        } else {
          filters.querySelectorAll(".filter-pill").forEach(function (pill) {
            pill.addEventListener("click", function () {
              var group = pill.getAttribute("data-group");
              active[group] = pill.getAttribute("data-value");
              filters
                .querySelectorAll('.filter-pill[data-group="' + group + '"]')
                .forEach(function (peer) {
                  var isActive = peer === pill;
                  peer.classList.toggle("is-active", isActive);
                  peer.setAttribute("aria-pressed", String(isActive));
                });
              apply();
            });
          });
        }
      }

      apply();
    });
  }

  /* ---------- board ---------- */

  function boardCard(member) {
    if (member.placeholder) {
      return (
        '<article class="card profile-card reveal" aria-label="Board member — details coming soon">' +
        '<span class="profile-card__ring" aria-hidden="true"></span>' +
        "<h3>Board member</h3>" +
        '<p class="meta">Name, role, bio &amp; photo — coming soon</p>' +
        "</article>"
      );
    }
    var photo = member.photo
      ? '<img class="profile-card__ring" src="' + escapeHtml(member.photo) + '" alt="" loading="lazy">'
      : '<span class="profile-card__ring" aria-hidden="true">' +
        escapeHtml(member.name.charAt(0)) +
        "</span>";
    return (
      '<article class="card profile-card reveal">' +
      photo +
      "<h3>" +
      escapeHtml(member.name) +
      "</h3>" +
      '<p class="meta">' +
      escapeHtml(member.role + (member.area ? " · " + member.area : "")) +
      "</p>" +
      (member.bio ? "<p>" + escapeHtml(member.bio) + "</p>" : "") +
      "</article>"
    );
  }

  function renderBoard() {
    document.querySelectorAll('[data-render="board"]').forEach(function (container) {
      container.innerHTML = (data.board || []).map(boardCard).join("");
    });
  }

  /* ---------- stories ---------- */

  function storyCard(story) {
    return (
      '<article class="card story-card reveal">' +
      "<blockquote>&ldquo;" +
      escapeHtml(story.quote) +
      "&rdquo;</blockquote>" +
      '<p class="meta">' +
      escapeHtml(story.name + (story.context ? " · " + story.context : "")) +
      "</p>" +
      "</article>"
    );
  }

  function renderStories() {
    document.querySelectorAll('[data-render="stories"]').forEach(function (container) {
      var stories = data.stories || [];
      if (stories.length > 0) {
        container.innerHTML = stories.map(storyCard).join("");
      }
      // When empty, the static, clearly-labeled placeholder cards in the
      // page markup remain visible instead.
    });
  }

  renderPrograms();
  renderEvents();
  renderBoard();
  renderStories();
})();
