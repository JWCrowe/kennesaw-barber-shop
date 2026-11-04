// Single source of truth for business facts (from kennesawbarbershop.com). Edit here, every page updates.

export const business = {
  name: 'Kennesaw Barber Shop',
  short: 'Kennesaw Barber Shop',
  since: '1920',
  shopEst: '2008',
  street: '3903 Jiles Rd #102',
  city: 'Kennesaw',
  region: 'GA',
  zip: '30144',
  phone: '(770) 424-6877',
  phoneHref: 'tel:7704246877',
  email: 'Jonathan.Torres@kennesawbarbershop.com',
  // On-site booking lives at /book. The shop's own Square booking page stays as a last resort link only.
  bookHref: '/book',
  squareBookingPage: 'https://book.squareup.com/appointments/0huokl5xwqy0bl/location/6GE8HGYZE2KXZ/services',
  squareLocationId: '6GE8HGYZE2KXZ',
  facebook: 'https://www.facebook.com/KennesawBarber/',
  instagram: 'https://www.instagram.com/kennesawbarbershop/',
  mapsHref:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('Kennesaw Barber Shop, 3903 Jiles Rd, Kennesaw, GA 30144'),
};

export type Service = { name: string; price: string; note?: string; group: 'cuts' | 'shaves' | 'extras' };

export const services: Service[] = [
  { group: 'cuts', name: 'Haircut & Style', price: '$35-40', note: 'The house cut, finished and styled.' },
  { group: 'cuts', name: 'Haircut & Beard', price: '$50-55', note: 'Cut plus a beard shaped to match.' },
  { group: 'cuts', name: 'Haircut, Style & Shave', price: '$70-75', note: 'The full chair. Cut, style, and a hot lather shave.' },
  { group: 'cuts', name: 'Boys Haircut', price: '$30-35' },
  { group: 'cuts', name: 'Buzz Cut', price: '$26', note: 'Same price for everyone.' },
  { group: 'cuts', name: 'Buzz Cut & Beard Trim', price: '$35-40' },
  { group: 'cuts', name: 'Military / Law Haircut', price: '$25', note: 'Thank you for your service.' },
  { group: 'cuts', name: 'Military / Law Cut & Beard', price: '$35' },
  { group: 'shaves', name: 'Hot Lather Facial Shave', price: '$40-45', note: 'Hot towel, warm lather, straight razor.' },
  { group: 'shaves', name: 'Head Shave', price: '$30-35' },
  { group: 'shaves', name: 'Beard Trim', price: '$25-30' },
  { group: 'shaves', name: 'Shave Down', price: '$27' },
  { group: 'extras', name: 'Hair Wash', price: '$11' },
];

export const featured = ['Haircut & Style', 'Haircut & Beard', 'Hot Lather Facial Shave', 'Haircut, Style & Shave'];

export const hoursDisplay = [
  { day: 'Monday', idx: 1, label: '9 AM - 6 PM' },
  { day: 'Tuesday', idx: 2, label: '9 AM - 6 PM' },
  { day: 'Wednesday', idx: 3, label: '9 AM - 6 PM' },
  { day: 'Thursday', idx: 4, label: '9 AM - 6 PM' },
  { day: 'Friday', idx: 5, label: '9 AM - 6 PM' },
  { day: 'Saturday', idx: 6, label: '8 AM - 3 PM' },
  { day: 'Sunday', idx: 0, label: 'Closed' },
];

// Homepage reviews. The live site shows Deven and Aaron with the same quote, so it appears once here.
export const reviews = [
  { quote: 'Been to Kennesaw Barber Shop 4 times now and have never walked out unsatisfied. Great atmosphere and customer service as well.', name: 'Deven' },
  { quote: 'It took me over three years to find this barbershop. I went many places and they never did what I asked. Eddy is the best barber on the planet! He did exactly what I asked and has been doing it great for the last couple years. I highly recommend this place. They’re a great crew.', name: 'Tim' },
  { quote: 'This is the absolute best barber shop in every way possible. Nori is my girl. She always gets down to the finest detail. I don’t trust anyone else with head or beard. Hot shaves are the best.', name: 'Jeffrey' },
  { quote: 'I’ve had my hair cut by Elizabeth the last few times, and I’ve never received so many consistent compliments in my life! Thank you!', name: 'William' },
  { quote: 'Great joint. The owners have a lot of class and know how to take care of their customers. The barbers there are skilled and make you feel at home.', name: 'John' },
];

// Team as listed on kennesawbarbershop.com/about. Portraits from the shop's own site.
export const barbers = [
  { name: 'Jon', role: 'Owner & Master Barber', img: '/img/barber-jon.jpg' },
  { name: 'Andrew', role: 'Owner & Master Barber', img: '/img/barber-andrew.jpg' },
  { name: 'James', role: 'Master Barber', img: '/img/barber-james.jpg' },
  { name: 'Richard', role: 'Master Barber', img: '/img/barber-richard.jpg' },
  { name: 'Eduardo', role: 'Master Barber', img: '/img/barber-eduardo.jpg' },
  { name: 'Nick', role: 'Master Barber', img: '/img/barber-nick.jpg' },
  { name: 'Elizabeth', role: 'Master Barber', img: '/img/barber-elizabeth.jpg' },
  { name: 'Nory', role: 'Master Barber', img: '/img/barber-nory.jpg' },
  { name: 'Steven', role: 'Master Barber', img: '/img/barber-steven.jpg' },
];

export const story = [
  { era: '1920', title: 'The Beginning', text: 'Great Grandpa Torres was the community barber in Salina, Puerto Rico. Nobody is quite sure when he was born, but everybody knew whose chair to sit in.' },
  { era: '1960s', title: 'The Second Generation', text: 'Papa Torres moved to New York City at 18, worked the factories, met Grandma Martha, and followed his father into barbering in Manhattan. He moved to Long Island in 1966 and opened his first shop in 1968.' },
  { era: 'Long Island', title: 'The Third Generation', text: 'Andrew and Peter grew up in the family shop, and Martha worked there too as a licensed cosmetologist. At 20, Andrew opened his own shop in East Quogue with his dad’s blessing and ran it for 18 years before moving the family to Georgia.' },
  { era: '1991', title: 'The Fourth Generation', text: 'Jonathan, the fourth generation of Torres barbers, trained at Roffler Barber College in Marietta, then went to work perfecting his craft and his own style.' },
  { era: '2012', title: 'Kennesaw Barber Shop', text: 'The shop opened on Jiles Road in 2008. Andrew bought it in 2012, bringing father and son together under one roof and blending the New York and Georgia traditions into one classic shop.' },
];

// ---------- Booking (Parker pattern) ----------
// Once Square is connected, Square Appointments drives the bookable menu, prices, durations, and hours
// (src/lib/catalog.ts). Everything below is the starter data used until then.

// Hours fallback, used until Square is connected (or if no business hours are posted in Square).
// Day index matches JS Date.getDay(): 0 = Sunday. Hours are 24h decimals.
export const fallbackHours: Record<number, { open: number; close: number } | null> = {
  0: null,
  1: { open: 9, close: 18 },
  2: { open: 9, close: 18 },
  3: { open: 9, close: 18 },
  4: { open: 9, close: 18 },
  5: { open: 9, close: 18 },
  6: { open: 8, close: 15 },
};

// Local (request) mode only: how many clients can be booked into the same time slot before it shows as taken.
// The shop runs several chairs at once. Override with BOOKING_CHAIRS in Vercel env.
export const defaultChairs = 3;

// Starter bookable menu, seeded into Neon. Durations are placeholders until Square sync brings the real ones.
// priceLabel shows the range from the menu board; price_cents holds the low end.
export const seedServices: { id: string; name: string; desc: string; duration: number; cents: number; priceLabel: string }[] = [
  { id: 'cut-style', name: 'Haircut & Style', desc: 'The house cut, finished and styled.', duration: 30, cents: 3500, priceLabel: '$35-40' },
  { id: 'cut-beard', name: 'Haircut & Beard', desc: 'Cut plus a beard shaped to match.', duration: 45, cents: 5000, priceLabel: '$50-55' },
  { id: 'cut-style-shave', name: 'Haircut, Style & Shave', desc: 'The full chair. Cut, style, and a hot lather shave.', duration: 60, cents: 7000, priceLabel: '$70-75' },
  { id: 'boys', name: 'Boys Haircut', desc: '', duration: 30, cents: 3000, priceLabel: '$30-35' },
  { id: 'buzz', name: 'Buzz Cut', desc: 'Same price for everyone.', duration: 30, cents: 2600, priceLabel: '$26' },
  { id: 'buzz-beard', name: 'Buzz Cut & Beard Trim', desc: '', duration: 30, cents: 3500, priceLabel: '$35-40' },
  { id: 'military', name: 'Military / Law Haircut', desc: 'Thank you for your service.', duration: 30, cents: 2500, priceLabel: '$25' },
  { id: 'military-beard', name: 'Military / Law Cut & Beard', desc: '', duration: 45, cents: 3500, priceLabel: '$35' },
  { id: 'hot-shave', name: 'Hot Lather Facial Shave', desc: 'Hot towel, warm lather, straight razor.', duration: 30, cents: 4000, priceLabel: '$40-45' },
  { id: 'head-shave', name: 'Head Shave', desc: '', duration: 30, cents: 3000, priceLabel: '$30-35' },
  { id: 'beard-trim', name: 'Beard Trim', desc: '', duration: 30, cents: 2500, priceLabel: '$25-30' },
  { id: 'shave-down', name: 'Shave Down', desc: '', duration: 30, cents: 2700, priceLabel: '$27' },
  { id: 'hair-wash', name: 'Hair Wash', desc: '', duration: 15, cents: 1100, priceLabel: '$11' },
];
