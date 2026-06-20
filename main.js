(function () {
  "use strict";

  const ledgerBody = document.getElementById("ledger-body");

  function storeIcon(kind) {
    if (kind === "playstore") {
      // Simple play-style triangle, reads clearly at small sizes.
      return '<svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true"><path fill="currentColor" d="M6 3.5c0-.9 1-1.5 1.8-1l12 8.5c.7.5.7 1.5 0 2l-12 8.5c-.8.5-1.8-.1-1.8-1V3.5z"/></svg>';
    }
    // Minimal apple silhouette.
    return '<svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true"><path fill="currentColor" d="M17.5 12.4c0-2.1 1.7-3.2 1.8-3.2-1-1.5-2.6-1.7-3.1-1.7-1.3-.1-2.5.8-3.2.8-.7 0-1.7-.8-2.9-.8-1.5 0-2.9.9-3.6 2.2-1.6 2.7-.4 6.9 1.1 9.1.7 1.1 1.6 2.3 2.8 2.2 1.1 0 1.5-.7 2.8-.7s1.7.7 2.8.7c1.2 0 2-1.1 2.7-2.2.5-.8.9-1.6 1.1-2.5-.1 0-2.3-.9-2.3-3.9zM14.8 5.6c.6-.7 1-1.7.9-2.6-.8.1-1.8.6-2.4 1.3-.5.6-1 1.6-.8 2.5.9.1 1.8-.4 2.3-1.2z"/></svg>';
  }

  function renderProject(project, index) {
    const num = String(index + 1).padStart(2, "0");

    const linkButtons = Object.entries(project.links)
      .map(([kind, url]) => {
        const label = kind === "playstore" ? "Play Store" : "App Store";
        return `<a href="${url}" target="_blank" rel="noopener" class="store-link store-link--${kind}">${storeIcon(
          kind
        )}<span>${label}</span></a>`;
      })
      .join("");

    const stackTags = project.stack
      .map((s) => `<span class="stack-tag">${s}</span>`)
      .join("");

    const contributions = project.contributions
      .map((c) => `<li>${c}</li>`)
      .join("");

    const row = document.createElement("div");
    row.className = "ledger-row";
    row.setAttribute("role", "row");
    row.innerHTML = `
      <button class="ledger-toggle" aria-expanded="false" aria-controls="detail-${project.id}">
        <span class="col-entry">
          <span class="entry-num">${num}</span>
          <span class="entry-name">
            ${project.name}
            <span class="entry-tag">${project.tag}</span>
          </span>
        </span>
        <span class="col-detail">${project.description}</span>
        <span class="col-stack">${stackTags}</span>
        <span class="col-status">
          <span class="status-dot" aria-hidden="true"></span>
          <span class="status-text">Live</span>
          <span class="chevron" aria-hidden="true">＋</span>
        </span>
      </button>
      <div class="ledger-detail" id="detail-${project.id}" hidden>
        <div class="ledger-detail-inner">
          <div class="detail-block">
            <h4>What I built</h4>
            <ul>${contributions}</ul>
          </div>
          <div class="detail-block detail-block--links">
            <h4>Get the app</h4>
            <div class="store-links">${linkButtons}</div>
          </div>
        </div>
      </div>
    `;

    const toggle = row.querySelector(".ledger-toggle");
    const detail = row.querySelector(".ledger-detail");

    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      // close any other open row
      document
        .querySelectorAll(".ledger-toggle[aria-expanded='true']")
        .forEach((t) => {
          if (t !== toggle) {
            t.setAttribute("aria-expanded", "false");
            const id = t.getAttribute("aria-controls");
            const d = document.getElementById(id);
            if (d) d.hidden = true;
            t.closest(".ledger-row").classList.remove("is-open");
          }
        });
      toggle.setAttribute("aria-expanded", String(!isOpen));
      detail.hidden = isOpen;
      row.classList.toggle("is-open", !isOpen);
    });

    return row;
  }

  function init() {
    if (!ledgerBody || typeof PROJECTS === "undefined") return;
    PROJECTS.forEach((project, i) => {
      ledgerBody.appendChild(renderProject(project, i));
    });
  }

  document.addEventListener("DOMContentLoaded", init);

  // Header shadow on scroll
  const header = document.querySelector(".site-header");
  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > 8) {
        header.classList.add("is-scrolled");
      } else {
        header.classList.remove("is-scrolled");
      }
    },
    { passive: true }
  );

  // Smooth scroll for in-page nav (respects reduced motion via CSS scroll-behavior fallback)
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href").slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
})();
