# WIKI: Kennesaw Barber Shop

Docs: [RULES](RULES.md) · [NEXT](NEXT.md) · [DAILY_LOG](DAILY_LOG.md) · [DEPLOY](DEPLOY.md) · [ROADMAP](ROADMAP.md)

## Who / where
- Shop: Kennesaw Barber Shop. Torres family, four generations since 1920. Shop est. 2008, bought by Andrew 2012. Jon (Jonathan) is 4th gen, Roffler Barber College.
- Owners: Jon and Andrew (both Owner & Master Barber).
- Barbers (from their /about): Jon, Andrew, James, Richard, Eduardo (Eddy), Nick, Elizabeth, Nory (Nori), Steven.
- Address: 3903 Jiles Rd #102, Kennesaw, GA 30144 (their Google Directions link says Suite 101; using #102 until Jeff confirms).
- Phone (770) 424-6877 · Email Jonathan.Torres@kennesawbarbershop.com
- Hours: Mon to Fri 9 AM to 6 PM, Sat 8 AM to 3 PM, Sun closed.
- Social: facebook.com/KennesawBarber · instagram.com/kennesawbarbershop
- Current site: kennesawbarbershop.com (Squarespace). DNS untouched.

## Stack
- Astro 5, `output: 'server'`, `@astrojs/vercel` (maxDuration 30). Marketing pages /about, /privacy, /terms, /404 are prerendered. `/`, `/services`, `/book` render on demand with a 60s CDN cache so hours and menu follow Square once connected.
- Neon Postgres project `kennesaw-barber-shop` (id fancy-dew-48860076, aws-us-east-1). Schema in `db/migrations` and kept current by `ensureSchema()` in `src/lib/db.ts` (schema_version 4).
- Admin at `/admin` (email + password, jose session cookie). Pages: dashboard, inquiries, appointments, calendar, clients, settings (Connect Square, hours, time off).
- Vercel project: `kennesaw-barber-shop`. GitHub: JWCrowe/kennesaw-barber-shop. Daily cron `/api/cron/square-sync` (vercel.json).
- Facts live in `src/data/site.ts` (seed services, fallback hours, reviews, barbers, story, Square location id).
- Backend ported from Parker Modern Classic Hair (JWCrowe/parker-modern-classic-hair). Google Calendar is stubbed off (`src/lib/google.ts`).

## Routes
`/` · `/services` · `/about` (+ `#barbers`) · `/book` · `/appointments` (redirects to /book) · `/privacy` · `/terms` · `/404` · `/admin/*` · `/api/availability` · `/api/bookings` · `/api/health` · `/api/square/webhook` · `/api/cron/square-sync`

## Booking (on site)
- `/book`: service, barber (optional), day, time, name/phone/email, done. `?service=<id>` deep links a service.
- Without Square connected ("local" mode): slots come from shop hours (Settings, else `fallbackHours`), 30 min steps, up to `BOOKING_CHAIRS` (default 3) overlapping bookings per slot. Admin time off blocks every chair. Each booking is saved as an inquiry in /admin/inquiries; the shop confirms by phone or text. Preferred barber goes in the note.
- With Square connected ("square" mode): slots come from Square SearchAvailability for location 6GE8HGYZE2KXZ, de-duplicated across barbers, or filtered to one barber when the client picks one. Submitting creates a real Square booking and the customer in Square. Square services, prices, hours and team sync into the site (Settings > Sync, webhook, and the daily cron).
- Old Square booking page kept as `business.squareBookingPage` for reference: https://book.squareup.com/appointments/0huokl5xwqy0bl/location/6GE8HGYZE2KXZ/services
- Connect Square: create a Square developer app, set redirect URL `https://kennesaw-barber-shop.vercel.app/api/admin/square/callback`, put `SQUARE_APPLICATION_ID` and `SQUARE_APPLICATION_SECRET` in Vercel, redeploy, then /admin/settings > Connect Square while signed in to the shop's Square account.
- Env reference: `.env.example`. `/api/health` shows which env vars are present (never values).

## Services (from their /services)
Haircut & style $35-40 · Beard trim $25-30 · Haircut & beard $50-55 · Boys haircut $30-35 · Haircut, style & shave $70-75 · Buzz cut $26 · Buzz cut & beard trim $35-40 · Head shave $30-35 · Hot lather facial shave $40-45 · Military/Law haircut $25 · Military/Law cut & beard $35 · Shave down $27 · Hair wash $11

## Assets
All photos and the logo are from the shop's own Squarespace CDN (portraits, B&W suits group shot as hero, two shop photos). Logo recolored to cream/brass/ink PNGs. Their /gallery page is still template stock images, so no gallery here.

## Reviews
Homepage quotes: Deven, Tim, Jeffrey, William, John. Their site repeats Deven's quote under Aaron, so it is shown once.
