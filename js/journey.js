/* ============================================================
   Krishna's Footprints — journey map
   Draws a winding SVG path through the 10 utsavam days, with
   golden footprints walking between temple stops. Past days are
   marked visited, today glows, future days wait ahead.
   Reads everything from SITE_DATA (js/data.js).
   ============================================================ */

(function () {
  "use strict";

  const NS = "http://www.w3.org/2000/svg";
  const days = SITE_DATA.days;

  const W = 420;          // viewBox width
  const STEP = 168;       // vertical distance between stops
  const TOP = 110;        // y of first stop
  const H = TOP + (days.length - 1) * STEP + 110;

  /* East–west position of each stop, loosely following the real
     geography of Vrindavan: the Yamuna runs along the EAST (right
     edge), Radha Raman & Radha Damodar sit near the river, Banke
     Bihari in the middle of the old town, Madan Mohan & Govind Dev
     to the west. The journey enters Vraj from the river ghats. */
  const STOP_X = [318, 248, 282, 165, 305, 118, 150, 205, 262, 210];

  function svgEl(tag, attrs) {
    const n = document.createElementNS(NS, tag);
    for (const k in attrs) n.setAttribute(k, attrs[k]);
    return n;
  }

  function localDate(iso) {
    if (!iso) return null;
    const p = iso.split("-").map(Number);
    return new Date(p[0], p[1] - 1, p[2]);
  }

  function dayStatus(iso) {
    const d = localDate(iso);
    if (!d) return "future";
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    if (d.getTime() === today.getTime()) return "today";
    return d < today ? "visited" : "future";
  }

  function fmtShort(iso) {
    const d = localDate(iso);
    if (!d) return "TBD";
    return d.toLocaleDateString("en-US", { month: "short", day: "2-digit" });
  }

  /* cubic bezier point + tangent angle at t */
  function bez(p0, c0, c1, p1, t) {
    const u = 1 - t;
    const x = u * u * u * p0.x + 3 * u * u * t * c0.x + 3 * u * t * t * c1.x + t * t * t * p1.x;
    const y = u * u * u * p0.y + 3 * u * u * t * c0.y + 3 * u * t * t * c1.y + t * t * t * p1.y;
    const dx = 3 * u * u * (c0.x - p0.x) + 6 * u * t * (c1.x - c0.x) + 3 * t * t * (p1.x - c1.x);
    const dy = 3 * u * u * (c0.y - p0.y) + 6 * u * t * (c1.y - c0.y) + 3 * t * t * (p1.y - c1.y);
    return { x: x, y: y, angle: Math.atan2(dy, dx) * 180 / Math.PI };
  }

  function footprint(pt, side) {
    // a tiny foot: sole + toe pad, rotated to walking direction
    const g = svgEl("g", {
      class: "footprint",
      transform: "translate(" + pt.x.toFixed(1) + "," + pt.y.toFixed(1) + ") " +
        "rotate(" + (pt.angle + 90).toFixed(1) + ") translate(" + (side * 7) + ",0)"
    });
    g.appendChild(svgEl("ellipse", { cx: 0, cy: 2.2, rx: 3.1, ry: 5.2 }));
    g.appendChild(svgEl("circle", { cx: 0, cy: -5.2, r: 2 }));
    return g;
  }

  function build() {
    const host = document.getElementById("journey");
    if (!host) return;

    const svg = svgEl("svg", {
      viewBox: "0 0 " + W + " " + H,
      role: "img",
      "aria-label": "Journey map of the ten utsavam days"
    });

    /* Yamuna river — gentle wave along the EAST (right) edge,
       matching Vrindavan's real geography */
    const riverD = (function () {
      let d = "M 394 -20";
      for (let y = -20; y < H + 40; y += 120) {
        d += " q 16 30 0 60 q -16 30 0 60";
      }
      return d;
    })();
    svg.appendChild(svgEl("path", { class: "river river-outer", d: riverD }));
    svg.appendChild(svgEl("path", { class: "river river-inner", d: riverD }));
    const riverLabel = svgEl("text", {
      class: "river-label", x: 380, y: TOP + STEP * 1.5,
      transform: "rotate(90 380 " + (TOP + STEP * 1.5) + ")",
      "text-anchor": "middle"
    });
    riverLabel.textContent = "Y A M U N A";
    svg.appendChild(riverLabel);

    /* stop coordinates from the geography-inspired x positions */
    const pts = days.map(function (_, i) {
      return { x: STOP_X[i] || 210, y: TOP + i * STEP };
    });

    /* the winding trail */
    let d = "M " + pts[0].x + " " + pts[0].y;
    const segs = [];
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i], p1 = pts[i + 1];
      const c0 = { x: p0.x, y: p0.y + STEP * 0.55 };
      const c1 = { x: p1.x, y: p1.y - STEP * 0.55 };
      segs.push([p0, c0, c1, p1]);
      d += " C " + c0.x + " " + c0.y + " " + c1.x + " " + c1.y + " " + p1.x + " " + p1.y;
    }
    svg.appendChild(svgEl("path", { class: "trail", d: d }));

    /* footprints along each segment, alternating feet */
    segs.forEach(function (s, i) {
      [0.2, 0.42, 0.62, 0.82].forEach(function (t, j) {
        const pt = bez(s[0], s[1], s[2], s[3], t);
        svg.appendChild(footprint(pt, (i * 4 + j) % 2 === 0 ? -1 : 1));
      });
    });

    /* temple stops */
    days.forEach(function (day, i) {
      const p = pts[i];
      const status = dayStatus(day.date);
      const onLeft = p.x <= 210;

      const a = document.createElementNS(NS, "a");
      a.setAttribute("href", "day.html?day=" + (i + 1));
      a.setAttribute("class", "stop stop-" + status);

      if (status === "today") {
        a.appendChild(svgEl("circle", { class: "halo", cx: p.x, cy: p.y, r: 19 }));
      }
      a.appendChild(svgEl("circle", { class: "stop-dot", cx: p.x, cy: p.y, r: 17 }));

      const num = svgEl("text", { class: "stop-num", x: p.x, y: p.y + 5, "text-anchor": "middle" });
      num.textContent = status === "visited" ? "✓" : String(i + 1);
      a.appendChild(num);

      const tx = onLeft ? p.x + 30 : p.x - 30;
      const anchor = onLeft ? "start" : "end";

      const name = svgEl("text", { class: "stop-name", x: tx, y: p.y, "text-anchor": anchor });
      name.textContent = day.utsavam;
      a.appendChild(name);

      const date = svgEl("text", { class: "stop-date", x: tx, y: p.y + 18, "text-anchor": anchor });
      date.textContent = "Day " + (i + 1) + " · " + fmtShort(day.date);
      a.appendChild(date);

      svg.appendChild(a);
    });

    /* start & end flourishes */
    const start = svgEl("text", { class: "journey-mark", x: pts[0].x, y: pts[0].y - 38, "text-anchor": "middle" });
    start.textContent = "🪈";
    svg.appendChild(start);
    const last = pts[pts.length - 1];
    const end = svgEl("text", { class: "journey-mark", x: last.x, y: last.y + 52, "text-anchor": "middle" });
    end.textContent = "🌸";
    svg.appendChild(end);

    host.appendChild(svg);
  }

  document.addEventListener("DOMContentLoaded", build);
})();
