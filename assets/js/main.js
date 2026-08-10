/* Mawwada Collective — site behavior
 * Header state, mobile drawer, scroll reveals, forms, and small niceties.
 * No dependencies; everything degrades gracefully without JS.
 */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- footer year ---------- */

  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  /* ---------- sticky header state ---------- */

  var header = document.querySelector("[data-header]");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- mobile drawer ---------- */

  var toggle = document.querySelector(".nav-toggle");
  var drawer = document.getElementById("nav-drawer");
  var overlay = document.querySelector(".drawer-overlay");

  if (toggle && drawer && overlay) {
    var openDrawer = function () {
      drawer.hidden = false;
      overlay.hidden = false;
      requestAnimationFrame(function () {
        drawer.classList.add("is-open");
        overlay.classList.add("is-open");
      });
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Close menu");
      document.body.style.overflow = "hidden";
    };

    var closeDrawer = function (returnFocus) {
      drawer.classList.remove("is-open");
      overlay.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
      document.body.style.overflow = "";
      window.setTimeout(function () {
        if (!drawer.classList.contains("is-open")) {
          drawer.hidden = true;
          overlay.hidden = true;
        }
      }, 260);
      if (returnFocus) toggle.focus();
    };

    toggle.addEventListener("click", function () {
      if (drawer.classList.contains("is-open")) {
        closeDrawer(true);
      } else {
        openDrawer();
      }
    });

    overlay.addEventListener("click", function () {
      closeDrawer(false);
    });

    drawer.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        closeDrawer(false);
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && drawer.classList.contains("is-open")) {
        closeDrawer(true);
      }
    });
  }

  /* ---------- scroll reveals ---------- */

  var observer = null;
  if ("IntersectionObserver" in window && !reduceMotion) {
    observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
  }

  function observeReveals() {
    document.querySelectorAll(".reveal:not(.is-visible)").forEach(function (el) {
      if (observer) {
        observer.observe(el);
      } else {
        el.classList.add("is-visible");
      }
    });
  }

  // Gentle stagger for grouped cards
  document.querySelectorAll("[data-stagger]").forEach(function (group) {
    Array.prototype.forEach.call(group.children, function (child, index) {
      child.style.transitionDelay = Math.min(index * 60, 360) + "ms";
    });
  });

  window.RAHMA_REFRESH_REVEALS = observeReveals;
  observeReveals();

  /* ---------- forms ----------
   * Forms ship with action="#": submission is intercepted and a success
   * state is shown. To go live, set the form's action to your hosted
   * endpoint (Formspree, Netlify Forms, etc.) and remove data-form — the
   * form will then post natively.
   */

  document.querySelectorAll("form[data-form]").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      var success = form.parentElement.querySelector("[data-form-success]");
      form.hidden = true;
      if (success) {
        success.hidden = false;
        success.setAttribute("tabindex", "-1");
        success.focus();
      }
    });
  });

  /* ---------- inquiry preselect via query string ----------
   * e.g. get-involved.html?interest=volunteering#form preselects the
   * matching option so pathway CTAs land visitors on a ready-made form.
   */

  var params = new URLSearchParams(window.location.search);
  document.querySelectorAll("select[data-preselect]").forEach(function (select) {
    var value = params.get(select.getAttribute("data-preselect"));
    if (!value) return;
    var option = select.querySelector('option[value="' + value + '"]');
    if (option) select.value = value;
  });
})();
