/* Mawwada Collective — content renderer
   Renders data collections (window.RAHMA.*) into [data-render] targets.
   Replace the data files with a CMS feed later and the templates stay unchanged. */
(function () {
  "use strict";

  var RAHMA = window.RAHMA || {};

  function escapeHtml(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* ---------- Templates ---------- */

  function programCardBody(desc) {
    var paragraphs = String(desc || "")
      .split(/\n\n+/)
      .map(function (p) {
        return p.trim();
      })
      .filter(Boolean);

    return paragraphs
      .map(function (p) {
        return "<p>" + escapeHtml(p) + "</p>";
      })
      .join("");
  }

  function programCard(program, mode) {
    var title =
      mode === "home" ? program.homeTitle || program.title : program.title;
    var desc =
      mode === "home" ? program.homeDesc || program.desc : program.desc;
    var cta = mode === "home" ? program.homeCta || program.cta : program.cta;

    return (
      '<article class="card program-card reveal">' +
      "<h3>" +
      escapeHtml(title) +
      "</h3>" +
      programCardBody(desc) +
      '<a class="link-arrow" href="' +
      escapeHtml(cta.href) +
      '">' +
      escapeHtml(cta.label) +
      "</a>" +
      "</article>"
    );
  }

  var AUDIENCE_LABELS = {
    everyone: "Everyone",
    women: "Women",
    men: "Men",
    youth: "Youth & Teens",
    families: "Families",
    volunteers: "Volunteers",
  };

  function eventCard(event, isPast) {
    var audience = AUDIENCE_LABELS[event.audience] || event.audience;
    var dateLine =
      '<time datetime="' +
      escapeHtml(event.dateISO) +
      '">' +
      escapeHtml(event.displayDate) +
      "</time>";
    if (event.time) dateLine += " · " + escapeHtml(event.time);
    return (
      '<article class="card event-card reveal">' +
      '<span class="card__date">' +
      dateLine +
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
      (isPast ? '<span class="pill pill--outline">Past Gathering</span>' : "") +
      "</div>" +
      "<p>" +
      escapeHtml(event.description) +
      "</p>" +
      (!isPast && event.rsvp
        ? '<a class="link-arrow" href="' + escapeHtml(event.rsvp) + '">Reserve a seat</a>'
        : "") +
      "</article>"
    );
  }

  function boardCard(member) {
    if (member.placeholder) {
      return (
        '<article class="card profile-card reveal">' +
        '<span class="profile-card__ring" aria-hidden="true">?</span>' +
        "<h3>Board member</h3>" +
        '<p class="meta">To be announced</p>' +
        "</article>"
      );
    }
    var ring = member.photo
      ? '<span class="profile-card__ring"><img src="' +
        escapeHtml(member.photo) +
        '" alt="' +
        escapeHtml(member.name) +
        '"></span>'
      : '<span class="profile-card__ring" aria-hidden="true">' +
        escapeHtml(member.name.charAt(0)) +
        "</span>";
    var roles = member.roles || [];
    if (!roles.length && member.role) roles = [member.role];
    if (member.area) roles = roles.concat([member.area]);
    var rolesHtml = roles.length
      ? '<p class="meta">' +
        roles.map(function (r) {
          return escapeHtml(r);
        }).join("<br>") +
        "</p>"
      : "";
    return (
      '<article class="card profile-card reveal">' +
      ring +
      "<h3>" +
      escapeHtml(member.name) +
      "</h3>" +
      rolesHtml +
      (member.bio ? "<p>" + escapeHtml(member.bio) + "</p>" : "") +
      "</article>"
    );
  }

  function storyCard(story) {
    return (
      '<article class="card story-card reveal">' +
      "<blockquote>&ldquo;" +
      escapeHtml(story.quote) +
      "&rdquo;</blockquote>" +
      '<p class="meta">— ' +
      escapeHtml(story.attribution) +
      "</p>" +
      "</article>"
    );
  }

  /* ---------- Programs ---------- */

  function renderPrograms() {
    document.querySelectorAll('[data-render="programs"]').forEach(function (el) {
      var mode = el.getAttribute("data-mode") || "all";
      var programs = (RAHMA.programs || []).filter(function (p) {
        if (mode === "home") return p.home;
        if (mode === "spotlight") return p.spotlight;
        return true;
      });
      el.innerHTML = programs.map(function (p) {
        return programCard(p, mode);
      }).join("");
    });
  }

  /* ---------- Events ---------- */

  function localDate(iso) {
    var parts = String(iso).split("-").map(Number);
    return new Date(parts[0], parts[1] - 1, parts[2]);
  }

  function splitEvents(events) {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    var upcoming = [];
    var past = [];
    (events || []).forEach(function (e) {
      (localDate(e.dateISO) >= today ? upcoming : past).push(e);
    });
    upcoming.sort(function (a, b) {
      return localDate(a.dateISO) - localDate(b.dateISO);
    });
    past.sort(function (a, b) {
      return localDate(b.dateISO) - localDate(a.dateISO);
    });
    return { upcoming: upcoming, past: past };
  }

  function renderEvents() {
    var sections = document.querySelectorAll('[data-render="events"]');
    var split = splitEvents(RAHMA.events);

    sections.forEach(function (section) {
      var list = section.querySelector("[data-events-list]");
      var empty = section.querySelector("[data-events-empty]");
      var filterWrap = section.querySelector("[data-filters]");
      var limit = parseInt(section.getAttribute("data-limit"), 10) || Infinity;
      var emptyTitle = empty ? empty.querySelector("h3") : null;
      var emptyText = empty ? empty.querySelector("p") : null;
      var origTitle = emptyTitle ? emptyTitle.innerHTML : "";
      var origText = emptyText ? emptyText.innerHTML : "";

      function activeValue(group) {
        var pill = section.querySelector('.filter-pill.is-active[data-group="' + group + '"]');
        return pill ? pill.getAttribute("data-value") : "all";
      }

      function apply() {
        var typeVal = activeValue("type");
        var audVal = activeValue("audience");

        var filtered = split.upcoming.filter(function (e) {
          var typeOk = typeVal === "all" || e.type === typeVal;
          var audOk =
            audVal === "all" || e.audience === audVal || e.audience === "everyone";
          return typeOk && audOk;
        });

        if (!split.upcoming.length) {
          if (list) {
            list.innerHTML = "";
            list.hidden = true;
          }
          if (filterWrap) filterWrap.hidden = true;
          if (empty) {
            if (emptyTitle) emptyTitle.innerHTML = origTitle;
            if (emptyText) emptyText.innerHTML = origText;
            empty.hidden = false;
          }
          return;
        }

        if (filterWrap) filterWrap.hidden = false;

        if (filtered.length) {
          if (empty) empty.hidden = true;
          if (list) {
            list.innerHTML = filtered
              .slice(0, limit)
              .map(function (e) {
                return eventCard(e, false);
              })
              .join("");
            list.hidden = false;
          }
        } else {
          if (list) {
            list.innerHTML = "";
            list.hidden = true;
          }
          if (empty) {
            if (emptyTitle) emptyTitle.textContent = "Nothing matches those filters";
            if (emptyText) emptyText.textContent = "Try widening the net.";
            empty.hidden = false;
          }
        }
      }

      if (filterWrap) {
        filterWrap.querySelectorAll(".filter-pill").forEach(function (btn) {
          btn.addEventListener("click", function () {
            var group = btn.getAttribute("data-group");
            filterWrap
              .querySelectorAll('.filter-pill[data-group="' + group + '"]')
              .forEach(function (b) {
                b.classList.remove("is-active");
                b.setAttribute("aria-pressed", "false");
              });
            btn.classList.add("is-active");
            btn.setAttribute("aria-pressed", "true");
            apply();
          });
        });
      }

      apply();
    });

    // Past gatherings (events page) — no filters, no RSVP links.
    var pastSection = document.querySelector("[data-events-past-section]");
    if (pastSection) {
      var pastList = pastSection.querySelector("[data-events-past]");
      if (split.past.length && pastList) {
        pastList.innerHTML = split.past
          .map(function (e) {
            return eventCard(e, true);
          })
          .join("");
        pastSection.hidden = false;
      } else {
        pastSection.hidden = true;
      }
    }

    // Real numbers where we have them: gatherings hosted to date.
    document.querySelectorAll('[data-stat="events-hosted"]').forEach(function (el) {
      if (split.past.length) el.textContent = split.past.length;
    });
  }

  /* ---------- Board ---------- */

  function renderBoard() {
    document.querySelectorAll('[data-render="board"]').forEach(function (el) {
      el.innerHTML = (RAHMA.board || []).map(boardCard).join("");
    });
  }

  /* ---------- Stories (static placeholders remain until real stories exist) ---------- */

  function renderStories() {
    var stories = RAHMA.stories || [];
    if (!stories.length) return;
    document.querySelectorAll('[data-render="stories"]').forEach(function (el) {
      el.innerHTML = stories.map(storyCard).join("");
    });
  }

  renderPrograms();
  renderEvents();
  renderBoard();
  renderStories();
})();
