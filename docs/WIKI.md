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
- Astro 5, `output: 'static'`, no adapter, no Neon, no admin, no API.
- Vercel project: `kennesaw-barber-shop`. GitHub: JWCrowe/kennesaw-barber-shop.
- Facts live in `src/data/site.ts` (services, hours, reviews, barbers, story, book URL).

## Routes
`/` · `/services` · `/about` (+ `#barbers`) · `/book` · `/appointments` (redirects to /book) · `/privacy` · `/terms` · `/404`

## Booking
- All Book CTAs open Square: https://book.squareup.com/appointments/0huokl5xwqy0bl/location/6GE8HGYZE2KXZ/services
- Square OAuth / sync (Parker pattern) not wired. When added: switch to `output: 'server'` + `@astrojs/vercel`, new Neon project, Square is schedule source of truth.

## Services (from their /services)
Haircut & style $35-40 · Beard trim $25-30 · Haircut & beard $50-55 · Boys haircut $30-35 · Haircut, style & shave $70-75 · Buzz cut $26 · Buzz cut & beard trim $35-40 · Head shave $30-35 · Hot lather facial shave $40-45 · Military/Law haircut $25 · Military/Law cut & beard $35 · Shave down $27 · Hair wash $11

## Assets
All photos and the logo are from the shop's own Squarespace CDN (portraits, B&W suits group shot as hero, two shop photos). Logo recolored to cream/brass/ink PNGs. Their /gallery page is still template stock images, so no gallery here.

## Reviews
Homepage quotes: Deven, Tim, Jeffrey, William, John. Their site repeats Deven's quote under Aaron, so it is shown once.
