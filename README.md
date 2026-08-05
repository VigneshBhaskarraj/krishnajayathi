# Krishna Jayanthi — Kalakshepam Website & Invitation

A simple, phone-friendly static website for the annual Krishna Jayanthi
kalakshepam: a digital invitation plus a follow-along page for each day's
recital (YouTube video + song list + lyrics).

## Pages

| Page | Purpose |
|---|---|
| `index.html` | Home — event details and the 10-day utsavam schedule. Today's day is auto-highlighted. |
| `day.html` | Daily recital — embeds the day's YouTube video and shows songs with expandable lyrics. Opening it without a `?day=` parameter jumps to today's day automatically. |
| `invite.html` | Digital invitation styled like the printed flyer — screenshot it for WhatsApp or print to PDF. |

No build step, no dependencies — plain HTML/CSS/JS. Open `index.html`
directly in a browser, or host on GitHub Pages / Netlify as-is.

## Hosting

The site auto-deploys to **GitHub Pages** on every push
(`.github/workflows/pages.yml`):

> https://vigneshbhaskarraj.github.io/krishnajayathi/

If the first deploy fails, enable Pages once in the repo:
**Settings → Pages → Source: GitHub Actions**, then re-run the workflow.

Songs marked with a small **draft** tag on the site are traditional
placeholder chants — they show the look and feel until the real song list
is extracted from the kalakshepam playlist.

## How to update content

Everything editable lives in **`js/data.js`**:

- **Event details** (`event`): title, year, date range, pooja/prasad timings,
  venue. Set `venue.gateCode` to `""` if you don't want the gate code shown
  on a publicly hosted site.
- **Daily schedule** (`days[]`): one entry per day with:
  - `date` — `"YYYY-MM-DD"`, used to highlight today and auto-open the right day
  - `utsavam` — the day's celebration name
  - `youtubeId` — the video id from the day's YouTube URL
    (`https://www.youtube.com/watch?v=THIS_PART`)
  - `playlistId` — alternatively, a playlist id (`...&list=THIS_PART`)
  - `songs[]` — each with `title`, optional `composer`, and `lyrics`
    (an array of stanzas; each stanza is an array of lines)

### Still to fill in

- [ ] **Confirm 2026 dates** — the dates currently in `js/data.js`
      (Aug 28 – Sep 06, 2026, with Janmastami on Sep 04) are provisional;
      verify against the panchangam.
- [ ] **YouTube links** — add the video/playlist ids from the kalakshepam
      playlist for each day.
- [ ] **Song list & lyrics** — the current songs are traditional
      public-domain chants as placeholders; replace with the actual songs
      from the playlist.
- [ ] **Venue** — confirm the venue and decide whether the gate code should
      appear on the public site.
