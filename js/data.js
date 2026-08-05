/*
 * ============================================================
 *  KRISHNA JAYANTHI — SITE DATA
 * ============================================================
 *  This is the ONLY file you need to edit to update the site.
 *
 *  - event      : titles, dates, timings, venue for the invite & header
 *  - days[]     : one entry per day of the utsavam
 *      - date         : "YYYY-MM-DD" (used to auto-highlight today)
 *      - utsavam      : name of the day's celebration
 *      - youtubeId    : YouTube VIDEO id for that day's recital
 *                       (the part after watch?v= in the URL), or null
 *      - playlistId   : optional YouTube PLAYLIST id (after list=)
 *      - songs[]      : songs recited that day
 *          - title / composer / raga (optional) / lyrics
 *          - lyrics is an array of stanzas; each stanza is an
 *            array of lines.
 *
 *  NOTE: Dates below are PROVISIONAL for 2026 — confirm against
 *  the panchangam and update. Sample songs are traditional,
 *  public-domain chants as placeholders until we extract the
 *  actual song list from the YouTube playlist.
 * ============================================================
 */

const SITE_DATA = {
  event: {
    title: "Krishna Jayanthi",
    year: 2026,
    tagline: "Kalakshepam — Daily Chants & Recitals",
    dateRange: "Aug 28 – Sep 06", // shown on invite & home page
    dailyPooja: "Daily Pooja starts @ 7:00 pm",
    dinnerPrasad: "Dinner Prasad @ 8:30 pm",
    venue: {
      name: "Venue",
      address: "8727 Fredericksburg Rd, Apt 807",
      city: "San Antonio, TX",
      // Leave gateCode as "" to hide it on the public site;
      // it will still show on the printable invite page.
      gateCode: "9275"
    },
    // Master playlist for the whole utsavam (optional)
    playlistUrl: ""
  },

  days: [
    {
      date: "2026-08-28",
      utsavam: "Vrindhavana Pravesham",
      youtubeId: null,
      playlistId: null,
      songs: [
        {
          title: "Hare Krishna Maha Mantra",
          composer: "Traditional",
          lyrics: [
            [
              "Hare Krishna Hare Krishna",
              "Krishna Krishna Hare Hare",
              "Hare Rama Hare Rama",
              "Rama Rama Hare Hare"
            ]
          ]
        }
      ]
    },
    {
      date: "2026-08-29",
      utsavam: "Radha Shyamsundar",
      youtubeId: null,
      playlistId: null,
      songs: [
        {
          title: "Madhurashtakam",
          composer: "Sri Vallabhacharya",
          lyrics: [
            [
              "Adharam madhuram vadanam madhuram",
              "Nayanam madhuram hasitam madhuram",
              "Hridayam madhuram gamanam madhuram",
              "Madhuraadhipater akhilam madhuram"
            ],
            [
              "Vachanam madhuram charitam madhuram",
              "Vasanam madhuram valitam madhuram",
              "Chalitam madhuram bhramitam madhuram",
              "Madhuraadhipater akhilam madhuram"
            ]
          ]
        }
      ]
    },
    {
      date: "2026-08-30",
      utsavam: "Radha Damodar",
      youtubeId: null,
      playlistId: null,
      songs: []
    },
    {
      date: "2026-08-31",
      utsavam: "Banke Bihari",
      youtubeId: null,
      playlistId: null,
      songs: []
    },
    {
      date: "2026-09-01",
      utsavam: "Radha Raman",
      youtubeId: null,
      playlistId: null,
      songs: []
    },
    {
      date: "2026-09-02",
      utsavam: "Radha Madan Mohan",
      youtubeId: null,
      playlistId: null,
      songs: []
    },
    {
      date: "2026-09-03",
      utsavam: "Radha Govind Dev",
      youtubeId: null,
      playlistId: null,
      songs: []
    },
    {
      date: "2026-09-04",
      utsavam: "Janmastami",
      youtubeId: null,
      playlistId: null,
      songs: [
        {
          title: "Achyutashtakam",
          composer: "Sri Adi Shankaracharya",
          lyrics: [
            [
              "Achyutam Keshavam Rama Narayanam",
              "Krishna Damodaram Vasudevam Harim",
              "Shridharam Madhavam Gopika Vallabham",
              "Janaki Nayakam Ramachandram Bhaje"
            ]
          ]
        }
      ]
    },
    {
      date: "2026-09-05",
      utsavam: "Nandha Utsav",
      youtubeId: null,
      playlistId: null,
      songs: []
    },
    {
      date: "2026-09-06",
      utsavam: "Radhe Kalyanam",
      youtubeId: null,
      playlistId: null,
      songs: []
    }
  ]
};
