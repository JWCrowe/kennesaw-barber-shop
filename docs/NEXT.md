# NEXT
1. Jeff: create a Square developer app (production) for the shop, redirect URL `https://kennesaw-barber-shop.vercel.app/api/admin/square/callback`, add `SQUARE_APPLICATION_ID` and `SQUARE_APPLICATION_SECRET` to Vercel, redeploy, then Connect Square in /admin/settings with the shop's Square login. Optional: webhook subscription to `https://kennesaw-barber-shop.vercel.app/api/square/webhook` and `SQUARE_WEBHOOK_SIGNATURE_KEY`.
2. Jeff: Resend key + verified sender (`RESEND_API_KEY`, `RESEND_FROM`). Until then booking emails only log.
3. Decide who the admin login belongs to (currently Jeff's email) and whether `ADMIN_NOTIFY_EMAIL` should be Jon's shop email.
4. Confirm `BOOKING_CHAIRS` (3 now) for request mode.
5. Footer hours and JSON-LD hours are still static from site.ts; switch to live hours if the shop changes hours in Square often.
6. Send the vercel.app link to the shop for feedback. Confirm suite number (#102 vs #101).
7. Real gallery photos and short barber bios from the shop.
8. Custom domain cutover from Squarespace when Jeff says (update PUBLIC_SITE_URL, Square redirect URL, webhook URL).
