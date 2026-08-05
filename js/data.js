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
 *          - lyrics is EITHER an array of stanzas (each stanza an
 *            array of lines), OR { tamil: [...], english: [...] }
 *            for dual-script lyrics with a toggle on the page.
 *          - a stanza may also be { label: "Pallavi", lines: [...] }
 *            to show a section heading.
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
      songs: [
        {
          title: "Rahasya Mantram (Radha Mantram)",
          composer: "Sri Krishna Premi Swamigal (Anna)",
          lyrics: {
            tamil: [
              {
                label: "Pallavi",
                lines: [
                  "ரஹஸ்ய மந்த்ரம்",
                  "ராதா₄ மந்த்ரம்"
                ]
              },
              {
                label: "Charanam 1",
                lines: [
                  "ரஸமய மந்த்ரம்",
                  "அஸமான மந்த்ரம்",
                  "— ரஹஸ்ய மந்த்ரம் —"
                ]
              },
              {
                label: "Charanam 2",
                lines: [
                  "ப்ரேமரஸப்ரத₃ மந்த்ரம்",
                  "அப்ரமேய க்ருஷ்ண வஶீகர மந்த்ரம்",
                  "— ரஹஸ்ய மந்த்ரம் —"
                ]
              },
              {
                label: "Charanam 3",
                lines: [
                  "ஶுகமுனி ஹ்ருத₃ய த்₄யான மந்த்ரம்",
                  "ஸுக₂ முரளீத₄ர ப்ராண மந்த்ரம்",
                  "— ரஹஸ்ய மந்த்ரம் —"
                ]
              }
            ],
            english: [
              {
                label: "Pallavi",
                lines: [
                  "rahasya mantram",
                  "rAdhA mantram || ra ||"
                ]
              },
              {
                label: "Charanam 1",
                lines: [
                  "rasamaya mantram",
                  "asamAna mantram || ra ||"
                ]
              },
              {
                label: "Charanam 2",
                lines: [
                  "prEmarasaprada mantram",
                  "apramEya kriShNa vashIkara mantram || ra ||"
                ]
              },
              {
                label: "Charanam 3",
                lines: [
                  "shukamuni hridaya dhyAna mantram",
                  "sukha muraLIdhara prANa mantram || ra ||"
                ]
              }
            ]
          }
        },
        {
          title: "Radhe Radhe Endru Sollu Kiliye",
          composer: "Sri Krishna Premi Swamigal (Anna)",
          lyrics: {
            tamil: [
              {
                label: "Pallavi",
                lines: [
                  "ராதே ராதே என்று சொல்லு கிளியே",
                  "ராதே ராதே என்று சொல்லு"
                ]
              },
              {
                label: "Charanam 1",
                lines: [
                  "பாலும் பழமும் உண்ணத் தருவேன்",
                  "— ராதே ராதே என்று சொல்லு கிளியே —"
                ]
              },
              {
                label: "Charanam 2",
                lines: [
                  "கூண்டில் இருந்தாலும் விடுதலையை உணர",
                  "— ராதே ராதே என்று சொல்லு கிளியே —"
                ]
              },
              {
                label: "Charanam 3",
                lines: [
                  "ப்ரேமிகவரதனின் அருளைப் பருகிட",
                  "— ராதே ராதே என்று சொல்லு கிளியே —"
                ]
              }
            ],
            english: [
              {
                label: "Pallavi",
                lines: [
                  "rAdhE rAdhE enDru sollu kiLiyE",
                  "rAdhE rAdhE enDru sollu || rAdhE ||"
                ]
              },
              {
                label: "Charanam 1",
                lines: ["pAlum pazhamum uNNat tharuvEn || rAdhE ||"]
              },
              {
                label: "Charanam 2",
                lines: ["kUNDil irundAlum viDudalaiyai uNara || rAdhE ||"]
              },
              {
                label: "Charanam 3",
                lines: ["prEmikavaradanin aruLaip parugiDa || rAdhE ||"]
              }
            ]
          }
        },
        {
          title: "Radhe Radhe Radhe Endru Sollip Pazhagu",
          composer: "Sri Krishna Premi Swamigal (Anna)",
          lyrics: {
            tamil: [
              [
                "ராதே ராதே ராதே என்று சொல்லிப் பழகு",
                "வதனம் தனில் மிளிரும் ஒரு தனி அழகு"
              ],
              [
                "ராதே ராதே ராதே என்று சொல்லிப் பாரு",
                "காதல் பித்து கண்ணன் மீது ஏறும் பாரு"
              ],
              [
                "ராதே ராதே ராதே என்று கூவிடுவோமே",
                "ஸாதனை ஒன்றுமில்லாமல் ஸாதித்திடுவோமே"
              ],
              [
                "ராதே ராதே ராதே என்று ஆடிப் பாடு",
                "போதை ஏறி தத்தீங்கிணதோம் தாளம் போடு"
              ],
              [
                "ராதே ராதே ராதே இதுவே ஸாதனையாமே",
                "சாதல் சாதல் இல்லை இதுவே ஸத்தியமாமே"
              ],
              [
                "ராதே ராதே ராதே ராதே ராதே ராதே",
                "ராதே ராதே ராதே ராதே ராதே ராதே"
              ]
            ],
            english: [
              [
                "rAdhE rAdhE rAdhE endru sollip pazhagu",
                "vadhanam thanil miLirum oru thani azhagu"
              ],
              [
                "rAdhE rAdhE rAdhE endru sollip pAru",
                "kAdhal piththu kaNNan mIdhu ERum pAru"
              ],
              [
                "rAdhE rAdhE rAdhE endru kUviduvOmE",
                "sAdhanai ondrumillAmal sAdhiththiduvOmE"
              ],
              [
                "rAdhE rAdhE rAdhE endru Adip pAdu",
                "pOdhai ERi thaththIngiNathOm thALam pOdu"
              ],
              [
                "rAdhE rAdhE rAdhE idhuvE sAdhanaiyAmE",
                "sAdhal sAdhal illai idhuvE saththiyamAmE"
              ]
            ]
          }
        },
        {
          title: "Radhe Radhe Endral Thithikkuthe Naakku",
          composer: "Sri Krishna Premi Swamigal (Anna)",
          lyrics: {
            tamil: [
              {
                label: "Pallavi",
                lines: ["ராதே ராதே என்றால் தித்திக்குதே நாக்கு"]
              },
              {
                label: "Anupallavi",
                lines: [
                  "தேனும் பாலும் அந்த த்ராக்ஷைப் பழமும்",
                  "கரும்பும் கற்கண்டும் ஸமமாகுமோ இதற்கு"
                ]
              },
              {
                label: "Charanam",
                lines: [
                  "கணக்கற்ற பிறவிகளில் தவம் செய்தோர் நாவில்",
                  "ஒரு கணம் இவள் இருந்திடுவாளே",
                  "கண்ணனின் பக்தர்கள் நாவினிலோ எனில்",
                  "திண்ணமாய் இவளும் இருந்திடுவாளே"
                ]
              }
            ],
            english: [
              {
                label: "Pallavi",
                lines: ["rAdhE rAdhE enDrAl thitthikkudE nAkku"]
              },
              {
                label: "Anupallavi",
                lines: [
                  "thEnum pAlum anda drAkShaip pazhamum",
                  "karumbum kaRkaNDum samamAgumO idaRku"
                ]
              },
              {
                label: "Charanam",
                lines: [
                  "kaNakkaTra piRavigaLil thavam seydOr nAvil",
                  "oru gaNam ivaL irundiDuvALE",
                  "kaNNanin bhakthargaL nAvinilO enil",
                  "thiNNamAy ivaLum irundiDuvALE"
                ]
              }
            ]
          }
        }
      ]
    }
  ]
};
