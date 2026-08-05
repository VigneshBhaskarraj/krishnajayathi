/* ============================================================
   Krishna Jayanthi — rendering logic
   Reads everything from SITE_DATA (js/data.js).
   Works when opened directly from disk or hosted anywhere.
   ============================================================ */

(function () {
  "use strict";

  const ev = SITE_DATA.event;
  const days = SITE_DATA.days;

  /* ---------- helpers ---------- */

  function parseLocalDate(iso) {
    if (!iso) return null;
    const [y, m, d] = iso.split("-").map(Number);
    return new Date(y, m - 1, d);
  }

  function fmtShort(iso) {
    const d = parseLocalDate(iso);
    if (!d) return "TBD";
    return d.toLocaleDateString("en-US", { month: "short", day: "2-digit" });
  }

  function fmtLong(iso) {
    const d = parseLocalDate(iso);
    if (!d) return "Date to be announced";
    return d.toLocaleDateString("en-US", {
      weekday: "long", month: "long", day: "numeric", year: "numeric"
    });
  }

  function dow(iso) {
    const d = parseLocalDate(iso);
    if (!d) return "";
    return d.toLocaleDateString("en-US", { weekday: "short" });
  }

  function isToday(iso) {
    const d = parseLocalDate(iso);
    if (!d) return false;
    const now = new Date();
    return d.getFullYear() === now.getFullYear() &&
      d.getMonth() === now.getMonth() &&
      d.getDate() === now.getDate();
  }

  function el(tag, cls, text) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  /* ---------- shared header bits ---------- */

  function fillEventHeader() {
    document.querySelectorAll("[data-ev]").forEach(function (node) {
      const key = node.getAttribute("data-ev");
      switch (key) {
        case "title": node.textContent = ev.title + " — " + ev.year; break;
        case "dates": node.textContent = ev.dateRange; break;
        case "tagline": node.textContent = ev.tagline; break;
        case "pooja": node.textContent = ev.dailyPooja; break;
        case "prasad": node.textContent = ev.dinnerPrasad; break;
        case "venue-address": node.textContent = ev.venue.address; break;
        case "venue-city": node.textContent = ev.venue.city; break;
      }
    });
    document.title = ev.title + " " + ev.year;
  }

  /* ---------- home page: schedule ---------- */

  function renderSchedule(container) {
    days.forEach(function (day, i) {
      const card = el("a", "day-card");
      card.href = "day.html?day=" + (i + 1);

      const date = el("div", "date");
      date.appendChild(el("span", "dow", dow(day.date)));
      date.appendChild(document.createTextNode(fmtShort(day.date)));
      card.appendChild(date);

      const body = el("div");
      body.appendChild(el("div", "utsavam", day.utsavam));
      const nSongs = day.songs.length;
      const meta = nSongs
        ? nSongs + (nSongs === 1 ? " song" : " songs") + " · lyrics available"
        : "Song list coming soon";
      body.appendChild(el("div", "meta", meta));
      card.appendChild(body);

      if (isToday(day.date)) {
        card.classList.add("today");
        card.appendChild(el("span", "badge-today", "Today"));
      }

      container.appendChild(card);
    });
  }

  /* ---------- day page ---------- */

  function renderDayPage(root) {
    const params = new URLSearchParams(location.search);
    let idx = parseInt(params.get("day"), 10);
    if (!(idx >= 1 && idx <= days.length)) idx = 1;
    const day = days[idx - 1];

    // hero
    const hero = el("section", "day-hero");
    hero.appendChild(el("div", "day-number", "Day " + idx + " of " + days.length));
    hero.appendChild(el("h2", null, day.utsavam));
    hero.appendChild(el("div", "date-line", fmtLong(day.date)));
    root.appendChild(hero);

    // video
    const frame = el("div", "video-frame");
    if (day.youtubeId || day.playlistId) {
      const iframe = document.createElement("iframe");
      iframe.src = day.youtubeId
        ? "https://www.youtube.com/embed/" + day.youtubeId
        : "https://www.youtube.com/embed/videoseries?list=" + day.playlistId;
      iframe.title = day.utsavam + " — recital video";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      frame.appendChild(iframe);
    } else {
      const ph = el("div", "video-placeholder");
      ph.appendChild(el("div", "om", "ॐ"));
      ph.appendChild(el("div", null, "Recital video will appear here"));
      ph.appendChild(el("small", null, "Check back on " + fmtShort(day.date)));
      frame.appendChild(ph);
    }
    root.appendChild(frame);

    // songs
    root.appendChild(el("h3", "section-title", "Songs & Lyrics"));
    if (!day.songs.length) {
      root.appendChild(el("p", "empty-note",
        "The song list for this day will be added soon."));
    } else {
      day.songs.forEach(function (song, sIdx) {
        const details = el("details", "song");
        if (sIdx === 0) details.open = true;

        const summary = el("summary");
        summary.appendChild(el("span", "song-title", song.title));
        if (song.composer) summary.appendChild(el("span", "song-composer", song.composer));
        details.appendChild(summary);

        const lyr = el("div", "lyrics");
        (song.lyrics || []).forEach(function (stanza) {
          const s = el("div", "stanza");
          stanza.forEach(function (line) { s.appendChild(el("p", null, line)); });
          lyr.appendChild(s);
        });
        if (!song.lyrics || !song.lyrics.length) {
          lyr.appendChild(el("p", "empty-note", "Lyrics coming soon."));
        }
        details.appendChild(lyr);
        root.appendChild(details);
      });
    }

    // pager
    const pager = el("nav", "pager");
    if (idx > 1) {
      const prev = el("a", null, "← " + days[idx - 2].utsavam);
      prev.href = "day.html?day=" + (idx - 1);
      pager.appendChild(prev);
    }
    pager.appendChild(el("span", "spacer"));
    if (idx < days.length) {
      const next = el("a", null, days[idx].utsavam + " →");
      next.href = "day.html?day=" + (idx + 1);
      pager.appendChild(next);
    }
    root.appendChild(pager);
  }

  /* ---------- invite page ---------- */

  function renderInviteSchedule(tbody) {
    days.forEach(function (day) {
      const tr = document.createElement("tr");
      const td1 = el("td", "d", fmtShort(day.date));
      const td2 = el("td", "u", day.utsavam);
      tr.appendChild(td1);
      tr.appendChild(td2);
      tbody.appendChild(tr);
    });
  }

  function fillGateCode() {
    const node = document.querySelector("[data-gate]");
    if (!node) return;
    if (ev.venue.gateCode) {
      node.textContent = "Gate Code : # " + ev.venue.gateCode;
    } else {
      node.remove();
    }
  }

  /* ---------- boot ---------- */

  document.addEventListener("DOMContentLoaded", function () {
    fillEventHeader();
    fillGateCode();

    const schedule = document.getElementById("schedule");
    if (schedule) renderSchedule(schedule);

    const dayRoot = document.getElementById("day-root");
    if (dayRoot) renderDayPage(dayRoot);

    const inviteRows = document.getElementById("invite-rows");
    if (inviteRows) renderInviteSchedule(inviteRows);
  });
})();
