# Kennesaw Barber Shop

Astro site for Kennesaw Barber Shop (3903 Jiles Rd #102, Kennesaw, GA) with on-site booking at `/book`. Backend ported from the Parker Modern Classic Hair pattern: Neon Postgres, admin at `/admin`, Square Appointments OAuth + sync. Until Square is connected, bookings come in as inquiries the shop confirms.

**Memory + hands:** start at [docs/WIKI.md](docs/WIKI.md).

```
npm install
cp .env.example .env   # fill in values, never commit
npm run seed           # migrations + admin user
npm run dev            # http://localhost:4321
npm run build
```
