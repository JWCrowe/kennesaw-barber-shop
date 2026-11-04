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
  bookHref: 'https://book.squareup.com/appointments/0huokl5xwqy0bl/location/6GE8HGYZE2KXZ/services',
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
