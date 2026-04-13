
/* ================================
   FULL DYNAMIC PROPERTY SYSTEM
================================ */
// navbar for mobile  
const lricHamburger = document.getElementById("lricNav-hamburgerBtn");
const lricMobilePanel = document.getElementById("lricNav-mobilePanel");
const lricCloseBtn = document.getElementById("lricNav-closeBtn");

lricHamburger.addEventListener("click", () => {
  lricMobilePanel.classList.add("lricNav-active");
  lricHamburger.classList.add("lricNav-active");
  document.body.classList.add("lricNav-noScroll");
});

lricCloseBtn.addEventListener("click", () => {
  lricMobilePanel.classList.remove("lricNav-active");
  lricHamburger.classList.remove("lricNav-active");
  document.body.classList.remove("lricNav-noScroll");
});

// sub menu code 
const openExchange = document.getElementById("openExchange");
const exchangePopup = document.getElementById("exchangePopup");
const closeExchange = document.getElementById("closeExchange");

openExchange.addEventListener("click", function (e) {
  e.preventDefault();

  // Close mobile panel
  lricMobilePanel.classList.remove("lricNav-active");

  // Open popup
  exchangePopup.classList.add("active");
});

closeExchange.addEventListener("click", function () {
  exchangePopup.classList.remove("active");

  // Reopen mobile panel
  lricMobilePanel.classList.add("lricNav-active");
});

// sub menu 2 
// Associated popup
const openAssociated = document.getElementById("openAssociated");
const associatedPopup = document.getElementById("associatedPopup");
const closeAssociated = document.getElementById("closeAssociated");

openAssociated.addEventListener("click", function (e) {
  e.preventDefault();

  // Close mobile panel
  lricMobilePanel.classList.remove("lricNav-active");

  // Open associated popup
  associatedPopup.classList.add("active");
});

closeAssociated.addEventListener("click", function () {
  associatedPopup.classList.remove("active");

  // Reopen mobile panel
  lricMobilePanel.classList.add("lricNav-active");
});

//  pop image 
let luxImages = [];
let luxCurrentIndex = 0;

function luxOpenGallery(index) {

  if (!currentPropertyKey) return;

  luxImages = propertyData[currentPropertyKey].images;
  luxCurrentIndex = index;

  document.getElementById("luxPopup").style.display = "flex";
  document.getElementById("luxPopupImage").src =
    luxImages[luxCurrentIndex];
}

function luxCloseGallery() {
  document.getElementById("luxPopup").style.display = "none";
}

function luxChangeSlide(direction) {

  luxCurrentIndex += direction;

  if (luxCurrentIndex < 0)
    luxCurrentIndex = luxImages.length - 1;

  if (luxCurrentIndex >= luxImages.length)
    luxCurrentIndex = 0;

  document.getElementById("luxPopupImage").src =
    luxImages[luxCurrentIndex];
}


// amenity change the palce evry load 
const grid = document.querySelector(".amenities-grid");

function shuffleAmenities() {
  const items = Array.from(grid.children);

  items.sort(() => Math.random() - 0.5);

  items.forEach(item => grid.appendChild(item));
}

// shuffle when user clicks anywhere on page
document.addEventListener("click", shuffleAmenities);


// link copy function 
function copyLink() {
  const url = window.location.href;
  const msg = document.querySelector(".copy-msg");

  navigator.clipboard.writeText(url).then(() => {
    msg.classList.add("show");

    setTimeout(() => {
      msg.classList.remove("show");
    }, 2000);
  });
}




/* ---- PROPERTY DATABASE ---- */

const propertyData = {

  DARJEELING: {
    title: "RAMADA, DARJEELING, DARJEELING - (Internal Exchange)",
    location: "📍 Darjeeling, 11 km from Tiger Hill",
    rating: "⭐ 4.8",
    photos: "🖼 1 Photos",
    category: "Internal Exchange",
    country: "India",
    city: "Darjeeling",
    about: "Find your peaceful oasis on Gandhi Road at our Ramada Darjeeling Gandhi Road hotel with spectacular views of Kangchenjunga, the world’s third largest mountain. We are located within walking distance of Darjeeling Railway Station — a UNESCO World Heritage Site — and near to area shopping. Relax and refresh in our elegant and spacious rooms, and host first-class events in our immaculate event space. Located in Darjeeling, 11 km from Tiger Hill, Ramada Darjeeling features rooms with mountain views and free Wi-Fi. This property is set a short distance from attractions such as Happy Valley Tea estate. A tour desk at Hotel can provide information on the area. Guest rooms in the hotel are fitted with a flat-screen TV with satellite channels. Featuring a private bathroom with a bath or shower and free toiletries, certain rooms at Ramada Darjeeling also have pool view. The units at the accommodation features centralized heating system and a wardrobe.",
    map: "https://www.openstreetmap.org/export/embed.html?bbox=116.38%2C39.88%2C116.42%2C39.92&layer=mapnik&marker=39.90%2C116.40",
    images: [
      "./Assest/hotel/DARJEELING/DARJEELING (2).jpeg",
      "./Assest/hotel/DARJEELING/DARJEELING (1).jpeg",
    ],
    related: ["DARJEELING"]
  },

  GOA: {
    title: "LE PEARL RESORT CANDOLIM, GOA - (Internal Exchange)",
    location: "📍 Near Candolim beach",
    rating: "⭐ 4.7",
    photos: "🖼 9 Photos",
    category: "Internal Exchange",
    country: "India",
    city: "Goa",
    about: "Le Pearl Beach Resort, boutique retrest by the sea is bang on the main Candolim beach road, Le Pearl Beach Resort is just 20 meters from the Candolim beach. One just has to cross the road to be on the fabulous Candolim beach. Best location in Goa with more than 5 five star hotels/resorts in a radius of 3 Kms from the resort.Other details about the resort are : The resort has 24 luxury rooms, all boutique rooms. The resort has a restaurant and Bar The resort had a speciality barbeque and grill counter (operation from 16th December 2016) The resort has Swimming pool, kids play area and an exclusive Gym The resort also has a Conference Hall of 2,000 Sq. Ft.",
    map: "https://www.google.com/maps?q=The+Verda+Le+Pearl+Goa&output=embed",
    images: [
      "./Assest/hotel/Goa/Goa (5).png",
      "./Assest/hotel/Goa/Goa (1).png",
      "./Assest/hotel/Goa/Goa (4).png",
      "./Assest/hotel/Goa/Goa (2).png",
      "./Assest/hotel/Goa/Goa (3).png"
    ],
    related: ["GOA", "NAGOA"]
  },
  NAGOA: {
    title: "NAGOA GRAND, GOA - (Internal Exchange)",
    location: "📍 3 Kms from the resort.",
    rating: "⭐ 4.7",
    photos: "🖼 9 Photos",
    category: "Internal Exchange",
    country: "India",
    city: "Goa",
    about: `Le Pearl Beach Resort, boutique retrest by the sea is bang on the main Candolim beach road, Le Pearl Beach Resort is just 20 meters from the Candolim beach. One just has to cross the road to be on the fabulous Candolim beach. Best location in Goa with more than 5 five star hotels/resorts in a radius of 3 Kms from the resort.
Other details about the resort are :

The resort has 24 luxury rooms, all boutique rooms.
The resort has a restaurant and Bar
The resort had a speciality barbeque and grill counter (operation from 16th December 2016)
The resort has Swimming pool, kids play area and an exclusive Gym
The resort also has a Conference Hall of 2,000 Sq. Ft.
`,
    map: "https://www.google.com/maps?q=Nagoa+Grande+Resort+and+Spa+Goa&output=embed",
    images: [
      "./Assest/hotel/Goa/Goa (1).jpeg",
      // "./Assest/hotel/Goa/Goa (1).png",
      "./Assest/hotel/Goa/Goa (2).jpeg",
      // "./Assest/hotel/Goa/Goa (2).png",
      // "./Assest/hotel/Goa/Goa (3).png"
    ],
    related: ["GOA", "NAGOA"]
  },

  JAIPUR: {
    title: "CAMBAY KUKAS, JAIPUR - (Internal Exchange)",
    location: "📍 Located amidst the industrial hub of Jaipur",
    rating: "⭐ 4.4",
    photos: "🖼 2 Photos",
    category: "Internal Exchange",
    country: "India",
    city: "Jaipur",
    about: "Located amidst the industrial hub of Jaipur and, spread over an area of 13036 Sq. Mts, Cambay Grand Kukas in Jaipur offers you a pleasant and hospitable stay with 5-star facilities. It is a world class hotel that offers its visitors a world of opulence and comfort. The Hotel in Jaipur hosts a total of 126 elegantly designed rooms. The rooms are well equipped meeting the demands of modern life convenience. This Jaipur Hotel hosts an array of facilities that include Wi-Fi internet facility, Spa Service, Business Centre, Pool, Salon, and Spa. The multi cuisine restaurants and food outlets are ready to cater to your taste buds with their diverse range of food and beverages. This resort is affiliated with RCI. This Hotels in Jaipur also houses meeting rooms and banquet halls that can seat up to 300 people. The rooms at Cambay Jaipur are an amazing amalgam of elegance in design and functional superiority. Their stylishly designed rooms are outfitted to make your stay comfortable. Every one of the 106 rooms is equipped with a king size bed complete with supple sleeper beds, lightweight duvet, leather headboards and, plump cushions, an LCD TV, Motorized blinds and thermostat AC. Apart from these basic facilities, the in-room facilities include an electronic safe, a minibar, a tea/coffee maker, in-room dining facility, direct dial phone and wake-up call service. A comfortable abode that is contemporarily designed allows you to unwind and rejuvenate during your stay in Jaipur.",
    map: "https://www.google.com/maps?q=Cambay+Grand+Kukas+Jaipur&output=embed",
    images: [
      "./Assest/hotel/JAIPUR/JAIPUR-1 (1).jpeg",
      "./Assest/hotel/JAIPUR/JAIPUR-1 (2).jpeg",
      // "./Assest/hotel/JAIPUR/JAIPUR-1 (3).jpeg",
      // "./Assest/hotel/JAIPUR/JAIPUR-1 (4).jpeg",
      // "https://picsum.photos/400/300?35"
    ],
    related: ["ACHROL", "JAIPUR"]
  },

  ACHROL: {
    title: "ACHROL NIWAS A TREEHOUSE RESORT JAIPUR, JAIPUR - (Internal Exchange)",
    location: "📍 main city of Jaipur on NH8",
    rating: "⭐ 4.4",
    photos: "🖼 2 Photos",
    category: "Internal Exchange",
    country: "India",
    city: "Jaipur",
    about: `Achrol Niwas, A Treehouse Resort at Jaipur provides you an oasis of peace from your hectic city life. Spread over 7 acres of land amidst a vast sprawling just short of the main city of Jaipur on NH8 the 40 rooms and villas overlook the vast verdant lawns or the Vegetable garden in the hotel.
           Sit in your private balcony, sipping your morning cup of tea or simply relax in your Villa with a private courtyard or by your private pool and allow the tensions of the daily life to float away.`,
    map: "https://www.google.com/maps?q=Cambay+Grand+Kukas+Jaipur&output=embed",
    images: [
      // "./Assest/hotel/JAIPUR/JAIPUR-1 (1).jpeg",
      // "./Assest/hotel/JAIPUR/JAIPUR-1 (2).jpeg",
      "./Assest/hotel/JAIPUR/JAIPUR-1 (3).jpeg",
      "./Assest/hotel/JAIPUR/JAIPUR-1 (4).jpeg",
      // "https://picsum.photos/400/300?35"
    ],
    related: ["ACHROL", "JAIPUR"]
  },

  MANALI: {
    title: "GETO RESORT, MANALI - (Internal Exchange)",
    location: "📍 Whispering wood Hotel is located in the heart of Manali.",
    rating: "⭐ 4.9",
    photos: "🖼 12 Photos",
    category: "Internal Exchange",
    country: "India",
    city: "Manali",
    about: "Manali is a hill station nestled in the mountains of the Indian state of Himachal Pradesh. The Whispering wood Hotel is located in the heart of Manali. The eminent tourist excursions suchlike Manali Sanctuary(2 km), Hidimba Devi Temple(2.1 km), Solang Valley(11.3 km), Bhrigu Lake(17.5 km) and many more located in the close vicinity to the hotel. Whispering Wood is located 50.9 km away from Near Beas Bridge, 153 km away from Chauntra Bhater Railway Station and 1.9 km away from Manali Bus Stand. The hotel itself offers services that are designed to offer maximum comfort to its guests. Some of the services offered here are Wi-Fi internet access, doctor on call, laundry service, lift/elevator, parking, travel desk, 24/7 power supply, 24 hours room service and barbeque. To relax your muscles and rejuvenate your tired body and mind, there is an exclusive steam and sauna room. Moreover, arrangements Of Kitty Parties & Birthday Party are also available for the guests. All rooms are spacious and provided with a range of amenities like television, shower, balcony/terrace, satellite/cable television, DVD/CD player, internet access (complimentary).",
    map: "https://www.google.com/maps?q=Geto+Hotels+%26+Resorts&output=embed",
    images: [
      "./Assest/hotel/MANALI/MANALI (1).jpeg",
      "./Assest/hotel/MANALI/MANALI (2).jpeg",
      "./Assest/hotel/MANALI/MANALI (3).jpeg",
      "https://picsum.photos/400/300?44",
      "https://picsum.photos/400/300?45"
    ],
    related: ["GETO", "SITARA", "PRINI"]
  },
  PRINI: {
    title: "PRINI PALACE, MANALI - (Internal Exchange)",
    location: "📍 Whispering wood Hotel is located in the heart of Manali.",
    rating: "⭐ 4.9",
    photos: "🖼 12 Photos",
    category: "Internal Exchange",
    country: "India",
    city: "Manali",
    about: `Hotel Prini Palace is synonymous in Manali, Himachal Pradesh over with providing the right blend of service, luxury and quiet Comfort. Nationally acclaimed for all-round excellence and unparalleled levels of service. Accommodation is available in neat and clean rooms, which are well appointed with modern in-room facilities. The rooms are clean; the staff is very courteous and efficient. the hotel has all modern furnishings.
     Lets SARS Hotels and Cottage – Hotel Prini Palace shall try to ensure that once you are with us for the first time, you are with us forever and ever because our endeavor has always been to consistently improve our services by means of inviting innovating ideas .
     Right blend of service, luxury and quiet efficiency.
     The staff is very courteous and efficient. the hotel has all modern furnishings.
     Hotels have established a reputation for redefining the paradigm of luxury and excellence.`,
    map: "https://www.google.com/maps?q=Geto+Hotels+%26+Resorts&output=embed",
    images: [
      "./Assest/hotel/MANALI/MANALI (1).jpeg",
      "./Assest/hotel/MANALI/MANALI (2).jpeg",
      // "./Assest/hotel/MANALI/MANALI (3).jpeg",
      // "https://picsum.photos/400/300?44",
      // "https://picsum.photos/400/300?45"
    ],
    related: ["GETO", "SITARA", "PRINI"]
  },
  SITARA: {
    title: "HOTEL SITARA INTERNATIONAL, MANALI - (Internal Exchange)",
    location: "📍 Whispering wood Hotel is located in the heart of Manali.",
    rating: "⭐ 4.9",
    photos: "🖼 12 Photos",
    category: "Internal Exchange",
    country: "India",
    city: "Manali",
    about: `Welcome to Hotel Sitara International Manali located on the back of river Beas, this exclusive hotel, overlooks the snow capped peaks in the far horizon, fresh mountain air to breathe, rugged slopes and wide valleys . With pricing being the lowest and Services being the best in the hotel industry, it will be an unmatched and unforgettable experience for its most valued assets i.e.
    Hotel Sitara International was introduced this hotel in year 2001 and since then we are continuously and relentlessly providing best facilities and services to our guests. Due to the sincere efforts of the company, the Hotel Sitara international has acquired a good reputation and goodwill amongst the tourists, travel agents, corporates, educational institutions etc.
    Accommodation Settled in to the luxury of your very own threshold brook, well appointed rooms Deluxe Room, Super Dlx Room, Family Room. and suits of a tasteful and opulent living.
    Hotel Sitara has total 34 Rooms in which 24 Super Deluxe, 08 Deluxe , 02 Family Rooms. Hotel provides all the facilities like Gym , Parking , Discotheque and Games Room`,
    map: "https://www.google.com/maps?q=Geto+Hotels+%26+Resorts&output=embed",
    images: [
      // "./Assest/hotel/MANALI/MANALI (1).jpeg",
      "./Assest/hotel/MANALI/SITARA (2).jpeg",
      "./Assest/hotel/MANALI/SITARA (1).jpeg",
      // "https://picsum.photos/400/300?44",
      // "https://picsum.photos/400/300?45"
    ],
    related: ["GETO", "SITARA", "PRINI"]
  },

  NAINITAL: {
    title: "ALPINE CLUB, NAINITAL - (Internal Exchange)",
    location: "📍 Near Candolim beach",
    rating: "⭐ 4.7",
    photos: "🖼 9 Photos",
    category: "Internal Exchange",
    country: "India",
    city: "Nainital",
    about: "Some of the services offered by the hotel include activity centre, airport transfer, bar, barbeque shack, bicycles on hire, bonfire, conference facilities, dining hall, doctor on call, games room, guide service, restaurant, internet facility, laundry service, lawns/gardens, library, outdoor activities, parking facility, railway station transfer, shuttle service, sightseeing, taxi services, travel desk and Wi-Fi connectivity. Room Amenities This Swiss chalet-style hotel has 8 exclusive rooms categorized into Luxury Suite and Luxury Double. All the rooms are well-furnished and appointed with all modern amenities like a color television, telephone, sofas/chairs and heater besides a geyser and bathroom amenities in the attached bathrooms. All rooms are comfortably furnished with all required amenities. Dining The hotel has a multi-cuisine restaurant serving a variety of food. Barbeque can be arranged on request on the deck. It is an ideal place for families and groups alike. Room service and outdoor meals can also be arranged. Don’t miss Once you are here, there isn’t really much that you could miss. Its bright facade is bound to get your attention! But, a quiet corner here is a little wrought iron bench that lies at the edge of the garden. Ideal for a quiet and cozy chat between two. Internet: Available & Parking Available Check-In Time: 12:00 PM & Check-Out Time: 10:00 AM",
    map: "https://www.google.com/maps?q=Alpine+Club+India&output=embed",
    images: [
      "./Assest/hotel/NAINITAL/NAINITAL (2).jpeg",
      "./Assest/hotel/NAINITAL/NAINITAL (1).jpeg",
      // "./Assest/hotel/Goa/Goa (2).jpeg",
      // "./Assest/hotel/Goa/Goa (2).png",
      // "./Assest/hotel/Goa/Goa (3).png"
    ],
    related: ["NAINITAL"]
  },

  OOTY: {
    title: "LE FLORA, OOTY - (Internal Exchange)",
    location: "📍 OOTY",
    rating: "⭐ 4.8",
    photos: "🖼 2 Photos",
    category: "Internal Exchange",
    country: "India",
    city: "Ooty",
    about: "It is situated in a sprawling area of four acres which is well landscaped overlooking tea gardens. The Resort provides well-appointed 80 rooms with excellent ambience for nature lovers with amazing facilities and an activity area to spend a quality time with family members is a perfect getaway.The resort offers a great option and yet at an affordable budget with a great value for money and carry memories of a life time.",
    map: "https://www.google.com/maps?q=Ooty,Tamil+Nadu&output=embed",
    images: [
      "./Assest/hotel/OOTY/OOTY (1).jpeg",
      "./Assest/hotel/OOTY/OOTY (2).jpeg",
      // "./Assest/hotel/NAINITAL/NAINITAL (1).jpeg",
      // "./Assest/hotel/Goa/Goa (3).png",
      // "./Assest/hotel/NAINITAL/NAINITAL (1).jpeg"
    ],
    related: ["OOTY"]
  },

  PANCHGANI: {
    title: "MILLENNIUM PARK, PANCHGANI - (Internal Exchange)",
    location: "📍  PANCHGANI",
    rating: "⭐ 4.8",
    photos: "🖼 2 Photos",
    category: "Internal Exchange",
    country: "India",
    city: "Panchgani",
    about: "Just as how Panchgani and Strawberry have a unique combination in our minds, so would be your experience with ‘Hotel Millennium Park’. Setting international standards for luxurious accommodation, quality amenities and uncompromising personal service, ‘Hotel Millennium Park’ offers a wide range of rooms that would suit your needs and budget. ‘HOSPITALITY’ being the key word of our business, we at ‘Millennium’, are dedicated to make a difference in setting new standards of excellence and professionalism in our line of business and have in the last fifteen years’, made tremendous efforts in upgrading our services, training staff and improving the work environment. We also stand committed to provide the best in the hospitality industry and continue to invest to create more trained personnel.",
    map: "https://www.google.com/maps?q=Hotel+Millennium+Park+Pune&output=embed",
    images: [
      "./Assest/hotel/PANCHGANI/PANCHGANI (2).jpeg",
      "./Assest/hotel/PANCHGANI/PANCHGANI (1).jpeg",
      // "./Assest/hotel/OOTY/OOTY (1).jpeg",
      // "./Assest/hotel/Goa/Goa (3).png",
      // "./Assest/hotel/OOTY/OOTY (2).jpeg"
    ],
    related: ["PANCHGANI"]
  },

  RANIKHET: {
    title: "ESSENCE OF NATURE, RANIKHET - (Internal Exchange)",
    location: "📍 RANIKHET",
    rating: "⭐ 4.8",
    photos: "🖼 2 Photos",
    category: "Internal Exchange",
    country: "India",
    city: "Ranikhet",
    about: "Quintessentially Himalayas in their fabric, Essence of Nature resort is a renowned wellness property that extends a distinctive flavor of hospitality. It offers topnotch extravagance while remaining profoundly embedded in its local heritage. The Essence of Nature is a one-of-the-kind property that heals the soul and shed away anxiety with its phenomenal locale amid the Himalayas. If you love to settle down for a break in the lap of nature, EoN is definitely a great choice to rejuvenate yourself. An eco-friendly resort, strategically created among the beautiful Oak trees. The resort is blessed with pleasant weather throughout the year as Oak trees balance the extreme cold climatic conditions.",
    map: "https://www.google.com/maps?q=Essence+of+Nature+India&output=embed",
    images: [
      "./Assest/hotel/RANIKHET/RANIKHET (1).jpg",
      "./Assest/hotel/RANIKHET/RANIKHET (1).jpeg",
      "./Assest/hotel/RANIKHET/RANIKHET (3).jpeg",
      // "./Assest/hotel/PANCHGANI/PANCHGANI (1).jpeg",
      // "./Assest/hotel/OOTY/OOTY (2).jpeg"
    ],
    related: ["RANIKHET"]
  },

  SHIMLA: {
    title: "GALILEO RESORT, SHIMLA - (Internal Exchange)",
    location: "📍 SHIMLA",
    rating: "⭐ 4.8",
    photos: "🖼  Photos",
    category: "Internal Exchange",
    country: "India",
    city: "Shimla",
    about: "In the suburbs of the Queen of Hills, Shimla, in a beautiful place called Gallu near Kufri. A lovely Swiss style Galleu Hill Resort, which still holds the nostalgia of the old world charm along with the most modern day facilities is situated here. Shimla remains top on list of tourist to be visited because of it beautiful environment, Mall Road, The Ridge, Toy Train etc. which makes it a little crowded so people are looking for an alternative or even better places to visit. Now Kufri is in demand among travelers. Galleu Hill Resort, Kufri located at a distance of 18.5 kms from Shimla which is 2205mts from Sea level which makes kufri 5 °c cooler then Shimla. it is surrounded by misty mountains and tall pine forests retains the classic rustic charm which make it especially popular among trekkers, Kufri is the starting point of treks to Manali, Shimla, Rewalsar and Fagu among others. Kufri, Shimla and Chail form the Golden Triangle of Himachal Pradesh. The cool and pleasant climate, along with stunning natural beauty, makes Kufri a perfect summer getaway.",
    map: "https://www.google.com/maps?q=Galleu+Hill+Resort&output=embed",
    images: [
      // "./Assest/hotel/SHIMLA/SHIMLA (1).jpeg",
      // "./Assest/hotel/SHIMLA/SHIMLA (2).jpeg",
      "./Assest/hotel/SHIMLA/SHIMLA (3).jpeg",
      "./Assest/hotel/SHIMLA/SHIMLA (4).jpeg",
      // "./Assest/hotel/SHIMLA/SHIMLA (5).jpeg",
      // "./Assest/hotel/SHIMLA/SHIMLA (6).jpeg"
    ],
    related: ["HILL", "HIM", "WINGAIT", "SHIMLA"]
  },
  HILL: {
    title: "HILL CREST RESORT, SHIMLA - (Internal Exchange)",
    location: "📍 SHIMLA",
    rating: "⭐ 4.2",
    photos: "🖼  Photos",
    category: "Internal Exchange",
    country: "India",
    city: "Shimla",
    about: `Hill Crest Resort is one of the fastest emerging names in the hospitality sector with business hotels and luxury resorts spread across India. Equipped with years of experience, the group is committed towards quality and excellence providing its patrons with the finest of business and holiday stay experiences. Blessed with a unique natural setup, with the unrivalled view of the Himalaya, this hill station is a perfect destination for all seasons and reasons. With this scenic backdrop beckoning your attention unfailingly, you are sure to enjoy every nanosecond of your stay in The Retreat—your automatic choice for a comfortable and fun-filled memorable trip. Whether it is the breathtaking views of the grandeur of the snow-covered Himalayas or the splendid sunrise and sunset, there is always an aura of awe and enchantment.`,
    map: "https://www.google.com/maps?q=31.1574433,77.2090746&output=embed",
    images: [
      "./Assest/hotel/SHIMLA/HILL (1).png",
      "./Assest/hotel/SHIMLA/HILL (2).png",
      "./Assest/hotel/SHIMLA/HILL (3).png",
      "./Assest/hotel/SHIMLA/HILL (4).png",
      "./Assest/hotel/SHIMLA/HILL (5).png",
      "./Assest/hotel/SHIMLA/HILL (6).png"
    ],
    related: ["HILL", "HIM", "WINGAIT", "SHIMLA"]
  },
  HIM: {
    title: "HIM DEV, SHIMLA - (Internal Exchange)",
    location: "📍 SHIMLA",
    rating: "⭐ 4.6",
    photos: "🖼  Photos",
    category: "Internal Exchange",
    country: "India",
    city: "Shimla",
    about: `Hotel Himdev is located in the Kachhi Ghatti area of Shimla, 4 kilometers from Shimla Railway Station and 25 kilometers from Jubbarhatti Airport.Popular attractions of Shimla are within easy reach from the hotel; Viceregal Lodge is just 2 kilometers away, the Mall is 5 kilometers from it and the Ridge lies at a distance of 6 kilometers.
       The rooms of the hotel are divided into different categories that include Standard Room, Deluxe Room and Suite. In all, the hotel maintains 92 rooms that include amenities such as satellite television, direct dial telephone, coffee/tea maker and mini-bar.
       The bathrooms are attached with rooms and are provided with all the necessary amenities. At leisure, guests can indulge themselves in learning yoga from the in-house experts or take a steam bath.`,
    map: "https://www.google.com/maps?q=31.093041,77.137597&output=embed",
    images: [
      "./Assest/hotel/SHIMLA/SHIMLA (1).jpeg",
      "./Assest/hotel/SHIMLA/SHIMLA (2).jpeg",
      // "./Assest/hotel/SHIMLA/SHIMLA (3).jpeg",
    ],
    related: ["HILL", "HIM", "WINGAIT", "SHIMLA"]
  },
  WINGAIT: {
    title: "WINGAIT, SHIMLA - (Internal Exchange)",
    location: "📍 SHIMLA",
    rating: "⭐ 4.5",
    photos: "🖼  Photos",
    category: "Internal Exchange",
    country: "India",
    city: "Shimla",
    about: `One of the few Heritage Properties left in Shimla, Wingait Inn is a “Heritage Boutique Hotel” which is professionally run shimla hotel situated at calm end of Shimla’s famous Mall Road with the City Center just a few minutes walk away.

      Wingait Inn offers its guests to Shimla a sense of grandeur along side comfy accommodation, as well as a variety of efficient services and modern facilities. Located on the Shimla Mall Road, Wingait Inn is an oasis of calm on the bustling promenade. The most structure of the property was created throughout British Raj, currently it’s restored and established as a hotel for you to stay.
      Wingait Inn Hotel Shimla offers a spread of facilities and services to its guest, including a Travel Desk, Car Rental Services, Doctor on Call and Laundry Services.
      It is simply accessible from Shimla Airdrome, Rail Terminal and Bus Station.
      Our aim is to provide a skilled service to make you feel as comfy as you would in your home.`,
    map: "https://www.google.com/maps?q=31.1030352,77.1518152&output=embed",
    images: [
      "./Assest/hotel/SHIMLA/SHIMLA (5).jpeg",
      "./Assest/hotel/SHIMLA/SHIMLA (6).jpeg"
    ],
    related: ["HILL", "HIM", "WINGAIT", "SHIMLA"]
  },
  CAIRNS: {
    title: "PALM ROYALE CAIRNS, CAIRNS - (Internal Exchange)",
    location: "📍 CAIRNS",
    rating: "⭐ 4.8",
    photos: "🖼 4 Photos",
    category: "Internal Exchange",
    country: "Australia",
    city: "Cairns",
    about: "A world away from the everyday and within minutes of everything that Cairns has to offer – that’s the beauty of Palm Royale Cairns, not to mention its attentive service, fabulous guest rooms, choice of pools, magnificent landscaped gardens and numerous resort facilities. Mediterranean architecture blends seamlessly with the tropical environment of Cairns. Set against azure skies and an emerald backdrop of rainforest clad mountains, the modern exterior shrouded in lush greenery provide the perfect foil and beckon (as the Italians say) Amare la Vita…or ‘love of life’. Having successfully captured the tropical spirit of Cairns and its wonderful climate, Palm Royale Cairns is an inviting palm fringed oasis of aqua swimming pools and shady gardens. Laze the days away on sun-drenched terraces or retire to the air-conditioned comfort of your room after a day visiting the Great Barrier Reef, World Heritage Listed Rainforest or outback. Comfort and convenience are assured – Palm Royale Cairns is set on one hectare or 2.5 acres just 4.5 kms or 3.2 miles from Cairns City Centre and 8 km or 5 miles from Cairns International and Domestic Airports.",
    map: "https://www.google.com/maps?q=Palm+Royale+Cairns,+QLD,+Australia&output=embed",
    images: [
      "./Assest/hotel/CAIRNS/CAIRNS (1).jpeg",
      "./Assest/hotel/CAIRNS/CAIRNS (2).jpeg",
      "./Assest/hotel/CAIRNS/CAIRNS (3).jpeg",
      // "./Assest/hotel/SHIMLA/SHIMLA (5).jpeg",
      // "./Assest/hotel/SHIMLA/SHIMLA (3).jpeg"
    ],
    related: ["CAIRNS"]
  },

  GOLDCOAST: {
    title: "MERCURE GOLD COAST RESORT, GOLD COAST - (Internal Exchange)",
    location: "📍 Gold Coast, Australia",
    rating: "⭐ 4.8",
    photos: "🖼 5 Photos",
    category: "Internal Exchange",
    country: "Australia",
    city: "Gold Coast",
    about: "Located 30 minutes from Gold Coast Airport and minutes from beautiful beaches, Surfers Paradise, Currumbin Sanctuary, Robina Town Centre, Cbus Stadium and Metricon Stadium, Mercure Gold Coast Resort is ideal for business or leisure. Recently renovated, the resort offers 292 contemporary rooms including Privilege and Superior Spa Rooms. Each room features ensuite, work desk, tea/coffee facilities, TV, and balcony or courtyard overlooking gardens, golf course or pool. Facilities include swimming pools, conference facilities and championship golf courses.",
    map: "https://www.google.com/maps?q=Mercure+Gold+Coast+Resort&output=embed",
    images: ["./Assest/hotel/GOLDCOAST/GOLD COAST (1).jpeg",
      "./Assest/hotel/GOLDCOAST/GOLD COAST (2).jpeg",
      // "./Assest/hotel/CAIRNS/CAIRNS (2).jpeg",
      // "./Assest/hotel/MELBOURNE/MELBOURNE (1).jpeg",
      // "./Assest/hotel/CAIRNS/CAIRNS (3).jpeg",
    ],
    related: ["GOLDCOAST"]
  },

  MELBOURNE: {
    title: "SOPHIA, MELBOURNE - (Internal Exchange)",
    location: "📍 Melbourne CBD, Australia",
    rating: "⭐ 4.5",
    photos: "🖼 4 Photos",
    category: "Internal Exchange",
    country: "Australia",
    city: "Melbourne",
    about: "Hotel Sophia is centrally located in Melbourne CBD within walking distance to Southern Cross Station, Crown Casino and Queen Victoria Markets. The hotel offers budget boutique accommodation with personalised service and complimentary buffet breakfast. Rooms include standard doubles, triples and superior rooms. Guests can easily access the free City Circle tram nearby.",
    map: "https://www.google.com/maps?q=SOPHIA,+MELBOURNE&output=embed",
    images: ["./Assest/hotel/MELBOURNE/MELBOURNE (2).jpeg",
      "./Assest/hotel/MELBOURNE/MELBOURNE (1).jpeg",
      // "./Assest/hotel/GOLDCOAST/GOLD COAST (2).jpeg",
      // "./Assest/hotel/GOLDCOAST/GOLD COAST (1).jpeg",
      // "./Assest/hotel/SHIMLA/SHIMLA (5).jpeg",

    ],
    related: ["MELBOURNE"]
  },

  SYDNEY: {
    title: "HOLIDAY INN WARWICK FARM, SYDNEY - (Internal Exchange)",
    location: "📍 Warwick Farm, Sydney",
    rating: "⭐ 4.6",
    photos: "🖼 4 Photos",
    category: "Internal Exchange",
    country: "Australia",
    city: "Sydney",
    about: "Holiday Inn Warwick Farm offers 146 rooms from superior to executive suites. Located at 355 Hume Highway, it provides easy access to Liverpool, Parramatta and greater western Sydney. Designed for business and leisure travelers with modern facilities and friendly hospitality.",
    map: "https://www.google.com/maps?q=Holiday+Inn+Warwick+Farm+by+IHG&output=embed",
    images: ["./Assest/hotel/SYDNEY/SYDNEY (2).jpeg",
      "./Assest/hotel/SYDNEY/SYDNEY (1).jpeg",
      // "./Assest/hotel/GOLDCOAST/GOLD COAST (1).jpeg",
      // "./Assest/hotel/SHIMLA/SHIMLA (5).jpeg",
      // "./Assest/hotel/CAIRNS/CAIRNS (2).jpeg",
    ],
    related: ["SYDNEY"]
  },

  JIMCORBETT: {
    title: "CORBETT TUSKER TRAIL, JIM CORBETT - (Internal Exchange)",
    location: "📍 Near Corbett National Park, India",
    rating: "⭐ 4.7",
    photos: "🖼 5 Photos",
    category: "Internal Exchange",
    country: "India",
    city: "Jim Corbett",
    about: "Corbett Tusker Trail offers luxury rooms and cottages near Corbett National Park. Features include multi-cuisine restaurant IM’S Dining, swimming pools for kids and adults, 24x7 room service and serene natural surroundings.",
    map: "https://www.google.com/maps?q=Corbett+Tusker+Trail&output=embed",
    images: ["./Assest/hotel/JIMCORBETT/JIMCORBETT (3).jpeg",
      "./Assest/hotel/JIMCORBETT/JIMCORBETT (2).jpeg",
      "./Assest/hotel/JIMCORBETT/JIMCORBETT (1).jpeg",
      // "./Assest/hotel/GOLDCOAST/GOLD COAST (1).jpeg",
      // "./Assest/hotel/SHIMLA/SHIMLA (5).jpeg",
    ],
    related: ["JIMCORBETT"]
  },

  UJJAIN: {
    title: "HOTEL CITY POINT, UJJAIN - (Internal Exchange)",
    location: "📍 Ujjain, India",
    rating: "⭐ 4.4",
    photos: "🖼 3 Photos",
    category: "Internal Exchange",
    country: "India",
    city: "Ujjain",
    about: "Hotel City Point offers affordable and luxury accommodation with Deluxe Suite and Superior AC rooms. Provides comfortable stay with attached bathrooms and modern facilities.",
    map: "https://www.google.com/maps?q=City+Point+Hotel+Ujjain&output=embed",
    images: ["./Assest/hotel/UJJAIN/UJJAIN (1).jpeg",
      "./Assest/hotel/UJJAIN/UJJAIN (2).jpeg",
      "./Assest/hotel/UJJAIN/UJJAIN (3).jpeg",
      "./Assest/hotel/UJJAIN/UJJAIN (4).jpeg",
      // "./Assest/hotel/GOLDCOAST/GOLD COAST (1).jpeg"
    ],
    related: ["UJJAIN"]
  },

  ISTANBUL: {
    title: "ALL SEASONS HOTEL ISTANBUL - (Internal Exchange)",
    location: "📍 Istanbul, Turkey",
    rating: "⭐ 4.6",
    photos: "🖼 4 Photos",
    category: "Internal Exchange",
    country: "Turkey",
    city: "Istanbul",
    about: "All Seasons Hotel located in historic Istanbul offers comfortable accommodation near Sultanahmet, Blue Mosque and Grand Bazaar. Combines Ottoman and Byzantine heritage with modern facilities.",
    map: "https://www.google.com/maps?q=All+Seasons+Hotel+Istanbul&output=embed",
    images: ["./Assest/hotel/ISTANBUL/ISTANBUL (1).jpeg",
      "./Assest/hotel/ISTANBUL/ISTANBUL (2).jpeg",
      "./Assest/hotel/ISTANBUL/ISTANBUL (3).jpeg",
      // "./Assest/hotel/UJJAIN/UJJAIN (2).jpeg",
      // "./Assest/hotel/UJJAIN/UJJAIN (3).jpeg",
    ],
    related: ["ISTANBUL"]
  },

  AUSTRIA: {
    title: "ALPHOTEL INNSBRUCK, AUSTRIA - (Internal Exchange)",
    location: "📍 Innsbruck, Austria",
    rating: "⭐ 4.7",
    photos: "🖼 4 Photos",
    category: "Internal Exchange",
    country: "Austria",
    city: "Innsbruck",
    about: "Alphotel Innsbruck combines Tyrolese hospitality with modern design. Offers 136 rooms, restaurant, conference rooms and free parking near motorway exit Innsbruck Ost.",
    map: "https://www.google.com/maps?q=Alphotel+Innsbruck&output=embed",
    images: ["./Assest/hotel/AUSTRIA/AUSTRIA (3).jpeg",
      "./Assest/hotel/AUSTRIA/AUSTRIA (2).jpeg",
      "./Assest/hotel/AUSTRIA/AUSTRIA (1).jpeg",
      // "./Assest/hotel/ISTANBUL/ISTANBUL (3).jpeg",
      // "./Assest/hotel/ISTANBUL/ISTANBUL (2).jpeg",
    ],
    related: ["AUSTRIA"]
  },

  BANGKOK: {
    title: "AMBASSADOR HOTEL, BANGKOK - (Internal Exchange)",
    location: "📍 Sukhumvit Soi 11, Bangkok",
    rating: "⭐ 4.6",
    photos: "🖼 4 Photos",
    category: "Internal Exchange",
    country: "Thailand",
    city: "Bangkok",
    about: "Ambassador Hotel Bangkok offers 397 fully air-conditioned rooms with modern amenities. Located near Sky Train and major shopping venues with 24-hour room service.",
    map: "https://www.google.com/maps?q=Ambassador+Hotel+Bangkok&output=embed",
    images: ["./Assest/hotel/BANGKOK/BANGKOK (1).jpeg",
      "./Assest/hotel/BANGKOK/BANGKOK (3).jpeg",
      "./Assest/hotel/BANGKOK/BANGKOK (2).jpeg",
      // "./Assest/hotel/AUSTRIA/AUSTRIA (2).jpeg",
      // "./Assest/hotel/AUSTRIA/AUSTRIA (2).jpeg"
    ],
    related: ["BANGKOK"]
  },

  THAILAND: {
    title: "ANYAVEE AO NANG BAY RESORT, THAILAND - (Internal Exchange)",
    location: "📍 Ao Nang Beach, Krabi",
    rating: "⭐ 4.7",
    photos: "🖼 4 Photos",
    category: "Internal Exchange",
    country: "Thailand",
    city: "Krabi",
    about: "Anyavee Ao Nang Bay Resort features outdoor pool, restaurant, free WiFi and private parking. Located near Nopparat Thara Beach and Krabi Airport.",
    map: "https://www.google.com/maps?q=Anyavee+Ao+Nang+Bay+Resort+Thailand&output=embed",
    images: ["./Assest/hotel/THAILAND/THAILAND (1).jpeg",
      "./Assest/hotel/THAILAND/THAILAND (2).jpeg",
      "./Assest/hotel/THAILAND/THAILAND (3).jpeg",
      "./Assest/hotel/THAILAND/THAILAND (4).jpeg",
      "./Assest/hotel/THAILAND/THAILAND (5).jpeg",
    ],
    related: ["THAILAND"]
  },

  ITALY: {
    title: "ATLANTIC PALACE, ITALY - (Internal Exchange)",
    location: "📍 Florence, Italy",
    rating: "⭐ 4.7",
    photos: "🖼 4 Photos",
    category: "Internal Exchange",
    country: "Italy",
    city: "Florence",
    about: "Hotel Atlantic Palace is a 4-star hotel in Florence offering 67 rooms blending ancient Florentine style with modern comfort. Located near UNESCO heritage sites.",
    map: "https://www.google.com/maps?q=Hotel+Bellevue+Syrene&output=embed",
    images: ["./Assest/hotel/ITALY/ITALY (1).jpeg",
      "./Assest/hotel/ITALY/ITALY (2).jpeg",
      // "./Assest/hotel/THAILAND/THAILAND (3).jpeg",
      // "./Assest/hotel/THAILAND/THAILAND (4).jpeg",
      // "./Assest/hotel/BANGKOK/BANGKOK (3).jpeg",
    ],
    related: ["ITALY"]
  },

  MALAYSIA: {
    title: "BAYVIEW GEORGETOWN PENANG, MALAYSIA - (Internal Exchange)",
    location: "📍 Georgetown, Penang",
    rating: "⭐ 4.8",
    photos: "🖼 5 Photos",
    category: "Internal Exchange",
    country: "Malaysia",
    city: "Penang",
    about: "Bayview Hotel Georgetown Penang offers 340 rooms, rooftop Sky Bar and revolving restaurant. Located near UNESCO heritage old town and commercial district.",
    map: "https://www.google.com/maps?q=Bayview+Hotel+Georgetown+Penang&output=embed",
    images: ["./Assest/hotel/MALAYSIA/MALAYSIA (1).jpeg",
      "./Assest/hotel/MALAYSIA/MALAYSIA (3).jpeg",
      "./Assest/hotel/MALAYSIA/MALAYSIA (2).jpeg",
      // "./Assest/hotel/ITALY/ITALY (2).jpeg",
      // "./Assest/hotel/THAILAND/THAILAND (3).jpeg",

    ],
    related: ["MALAYSIA"]
  },

  YERCAUD: {
    title: "HOTEL SHEVROYS, YERCAUD - (Internal Exchange)",
    location: "📍 Yercaud, Tamil Nadu",
    rating: "⭐ 4.6",
    photos: "🖼 4 Photos",
    category: "Internal Exchange",
    country: "India",
    city: "Yercaud",
    about: "Hotel Shevaroys started in 1971 and offers villa-style cottages amidst 14 acres of coffee plantations. Known for luxury cottages and heritage hospitality.",
    map: "https://www.google.com/maps?q=Hotel+Shevaroys,+Ooty,+Tamil+Nadu,+India&output=embed",
    images: ["./Assest/hotel/YERCAUD/YERCAUD (1).png",
      "./Assest/hotel/YERCAUD/YERCAUD (2).png",
      "./Assest/hotel/YERCAUD/YERCAUD (3).png",
      "./Assest/hotel/YERCAUD/YERCAUD (4).png",
      "./Assest/hotel/YERCAUD/YERCAUD (5).png"
    ],
    related: ["YERCAUD"]
  },
  AGRA: {
    title: "The Grand Imperial, Agra - (LRIC Associated)",
    location: "📍 46, 20/46, Mahatma Gandhi Rd, Baluganj, Rakabganj, Agra, Uttar Pradesh 282001",
    rating: "⭐ 4.8",
    photos: "🖼 4 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "Agra",
    about: `The Grand Imperial stationed in Agra is the integration of magnificence and luxury in the classiest way.  Inside The Grand Imperial, services like spa, gym, free parking and staff guidance can be availed. As the name suggests, the hotel provides high-class services for all the customers. The rooms have been designed with bright colors that will fill you up with energy and enthusiasm to explore the hotel further. Also, these rooms are well-equipped with all the modern day necessities.
            At The Grand Imperial, rooms are available with garden views so that it soothes your soul down. This hotel is perfect for travels related to business purposes. A diverse range of cuisine like Indian, Chinese & Continental can also be enjoyed at The Grand Imperial. The places of tourist interests are all near the hotel so commuting is very easy. Anyways, an additional cab facility is also present for the customers’ ease.`,
    map: "https://www.google.com/maps?q=The+Grand+Imperial+Agra&output=embed",
    images: [
      "./Assest/hotel/Agra/Agra (1).jpeg",
      "./Assest/hotel/Agra/Agra (1).png",
      "./Assest/hotel/Agra/Agra (2).jpeg",
      "./Assest/hotel/Agra/Agra (2).png",
      "./Assest/hotel/Agra/Agra (3).png",
    ],
    related: ["AGRA2", "AGRA3", "AGRA"]
  },
  AGRA2: {
    title: "Man Singh Agra, Agra - (LRIC Associated)",
    location: "📍 Agra",
    rating: "⭐ 4.1",
    photos: "🖼 2 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "Agra",
    about: `Mansingh Palace is a great choice for travellers looking for a 5-star hotel in Agra. It is located on Fatehabad Road. This hotel stands out as one of the highly recommended hotels in Agra and is recommended by 91% of our guests. The hotel is rated 4.2 out of 5, which is considered Very good. The property enjoys a great location advantage and provides easy and fast connectivity to the major transit points of the city. Some of the popular transit points from the hotel are Agra Fort Railway Station (2.9 km), Agra Cantt Railway Station (4.5 km), Billochpura (Baluchpura) Railway Station (6.6 km) and Agra Airport (7.4 km). The Hotel is in proximity to some popular tourist attractions and other places of interest in Agra. Some of the tourist attractions include Eklavya Sports Stadium (2.5 km), Eklavya Stadium (2.7 km), Jeet Singh Stadium (3.0 km), Jeet Singh Stadium (3.0 km), Mankameshwar Temple (3.0 km), Rawli Temple Collactrate Agra Mahant Shekhar Sharma (3.3 km) and Central Methodist Church (3.3 km).
            From all the 5 Star hotels in Agra, Mansingh Palace is very much popular among the tourists. A smooth check-in/check-out process, flexible policies and friendly management garner great customer satisfaction for this property. The Hotel has a standard Check-In time as 02:00 PM and Check-Out time as 12:00 PM. It is a couple-friendly property, hence it is absolutely safe for unmarried couples to stay here.`,
    map: "https://www.google.com/maps?q=Mansingh+Palace+Agra&output=embed",
    images: [
      "./Assest/hotel/Agra/Agra1 (3).png",
      "./Assest/hotel/Agra/Agra (6).jpeg",
    ],
    related: ["AGRA2", "AGRA3", "AGRA"]
  },
  AGRA3: {
    title: "HOTEL ORCHID, Agra - (LRIC Associated)",
    location: "📍 Agra",
    rating: "⭐ 4.4",
    photos: "🖼 8 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "Agra",
    about: `You’ve just landed in Agra! Just round the corner from the arrival arena of the Tajmahal, is The Orchid Hotel. We offer complimentary Railway Station transfers to our guests. The Orchid is an oasis of a green eco-friendly haven right in the heart of bustling Agra. It delights you even as it transports you to all things wonderful and beautiful.More and more people today are concerned about the environment and making spaces eco friendly. We at The Orchid too are trying to do our bit. The hotel has been designed, built and is maintained keeping environment issues in mind. So it is with joy that we invite you, our guests to celebrate not just your stay with us, but also to join in, in bringing a much needed eco awareness in our way of life.`,
    map: "https://www.google.com/maps?q=The+Grand+Imperial+Agra&output=embed",
    images: [
      "./Assest/hotel/Agra/Agra1 (1).png",
      "./Assest/hotel/Agra/Agra1 (2).png",
      "./Assest/hotel/Agra/Agra1 (3).png",
      "./Assest/hotel/Agra/Agra1 (4).png",
      "./Assest/hotel/Agra/Agra1 (5).png"
    ],
    related: ["AGRA2", "AGRA3", "AGRA"]
  },
  AHMEDABAD: {
    title: "CAMBAY GRAND AHMEDABAD, Ahmedabad - (LRIC Associated)",
    location: "📍 AHMEDABAD",
    rating: "⭐ 4.4",
    photos: "🖼 8 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "Ahmedabad",
    about: `Located near the Sarkhej-Gandhinagar Highway, in the heart of a bustling city centre and its key business areas,The hotel is well appointed with state-of-the-art meeting rooms and banquet halls with a seating capacity of up to 1000 persons.Cambay Grand is an illustrious property rendering manifold facilities including tastefulaccommodation, ambrosial dining, refined conferencing and banqueting, spa, swimming pool, discotheque and fitness centre. The hotel has remained in service since November 2009 and it is an ideal choice for stay owing to its easy accessibility to the domestic and international airport`,
    map: "https://www.google.com/maps?q=The+Grand+Imperial+Agra&output=embed",
    images: [
      // "./Assest/hotel/Agra/Agra1 (1).png",
      // "./Assest/hotel/Agra/Agra1 (2).png",
      "./Assest/hotel/Agra/Agra1 (3).png",
      "./Assest/hotel/Agra/Agra1 (4).png",
      // "./Assest/hotel/Agra/Agra1 (5).png"
    ],
    related: ["AHMEDABAD"]
  },
  AHMEDABAD1: {
    title: "CAMBAY GRAND AHMEDABAD, Ahmedabad - (LRIC Associated)",
    location: "📍 AHMEDABAD",
    rating: "⭐ 4.",
    photos: "🖼 8 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "Ahmedabad",
    about: `Offering an indoor swimming pool, a fitness centre and a spa and wellness centre, Narayani Heights Hotel & Resort is located in Ahmedabad. Free WiFi access is available in all areas. Sardar Vallabhbhai Patel International Airport is just 3 km away.

Each room here will provide you with a flat-screen satellite TV, air conditioning and a minibar. Complete with a refrigerator, the dining area also has an electric kettle. Featuring a shower, private bathroom also comes with a bathtub and shower. You can enjoy city view from the room.

At Narayani Heights Hotel & Resort you will find facilities like entertainment staff, meeting facilities and a games room. The property offers free parking. Tour desk staff can be approached for further assistance in travel and rental car arrangements.

The property is 8 km from the famous Sabarmati Ashram, 10 km from the Akshardham Temple and 16 km from Mahatma Mandir. The Sabarmati railway Station is 7 km away while the Ahmedabad Bus Station is 20 km away.

Dum-e-Zaika, the in-house restaurant, serves vegetarian Indian delights. 24-house café serves vegetarian multi-cuisine specialities. Room service can be requested for in-room dining comforts.

We speak your language!`,
    map: "https://www.google.com/maps?q=Cambay+Grand+Ahmedabad&output=embed",
    images: [
      // "./Assest/hotel/Agra/Agra1 (1).png",
      "./Assest/hotel/Agra/Agra1 (2).png",
      // "./Assest/hotel/Agra/Agra1 (3).png",
      // "./Assest/hotel/Agra/Agra1 (4).png",
      "./Assest/hotel/Agra/Agra1 (5).png"
    ],
    related: ["AHMEDABAD", "AHMEDABAD1"]
  },

  AMRITSAR: {
    title: "Hotel Grand Sawera, Amritsar - (LRIC Associated)",
    location: "📍 AMRITSAR",
    rating: "⭐ 4.4",
    photos: "🖼 2 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "Amritsar",
    about: `Cradled amidst the hills of Aravalis, surrounded by dancing fields of maize and mustard, rests a beautiful sprawling resort, adjacent to an international standard golf course, 20 kms off Manesar, just outside Delhi.

With picturesque greens and serene water bodies, this visually stunning and breathtaking retreat exudes an old world charm. Spread around 72 acres, it envelopes a Standard 9 Hole Golf Course designed by Graham Cooke, one of the most respected golf course architects in North America and Canada’s top legendary amateur player; making it a perfect haven for golf enthusiasts from the world over.

A landscaped getaway, with an exclusive banquets arena that comprises 3 large conference rooms and manicured open spaces to host a variety of events, it transforms as a stunning location for destination weddings and stay conferences as well.

Designed to suit all experiences, it is also a bird watchers paradise with numerous migratory birds making this their second home. For the soul searchers, it’s a maze of cobbled walls, paved niches, alcoves and stone fountains that make it a perfect dream escape for a tranquil holiday away from home.

What’s more this pet friendly hotel, invites your furry friends in with open arms as well, making sure your vacation is even more special.`,
    map: "https://www.google.com/maps?q=Hotel+Sawera+Grand+Amritsar&output=embed",
    images: [
      "./Assest/hotel/Amritsar/Amritsar (1).png",
      "./Assest/hotel/Amritsar/Amritsar (2).png",
      "./Assest/hotel/Amritsar/Amritsar (3).png",
      "./Assest/hotel/Amritsar/Amritsar (4).png",
      "./Assest/hotel/Amritsar/Amritsar (5).png",
    ],
    related: ["AMRITSAR", "AMRITSAR2"]
  },
  AMRITSAR2: {
    title: "TREEHOUSE LONDON STREET, Amritsar - (LRIC Associated)",
    location: "📍 AMRITSAR",
    rating: "⭐ 4.4",
    photos: "🖼 2 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "Amritsar",
    about: `Treehouse London Street, Amritsar is located on Queens Road, one of Asia’s longest and most important roadways. The hotel is just a few minutes away from the railway station and Gobind Ghar Fort and is in close proximity to Sadda Pind and the famed Golden Temple.`,
    map: "https://www.google.com/maps?q=TreeHouse+London+Street+Amritsar&output=embed",
    images: [
      "./Assest/hotel/Amritsar/Amritsar (6).png",
      "./Assest/hotel/Amritsar/Amritsar (7).png",
      "./Assest/hotel/Amritsar/Amritsar (8).png",
      "./Assest/hotel/Amritsar/Amritsar (9).png",
      "./Assest/hotel/Amritsar/Amritsar (10).png",
    ],
    related: ["AMRITSAR", "AMRITSAR2"]
  },

  BANGALORE: {
    title: "LORDS ECO INN, BANGALORE - (LRIC Associated)",
    location: "📍 BANGALORE",
    rating: "⭐ 4.9",
    photos: "🖼 12 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "Bangalore",
    about: `Lords Eco Inn Jayanagar, Bengaluru nestled in the heart of the city is a residential and commercial hub also know for one of the oldest and posh localities in Bengaluru.

Lords Eco Inn, Jayanagar is just 500 metres from Lalbagh Botanical Garden and 4th block commercial area. It also close to major shopping and entertainment destinations in addition to its strategic location the hotel provides a lavish setting with modern in-room amenities, also has features like mini kitchen for extended stay and conferencing facility to meet the business & social needs.`,
    map: "https://www.google.com/maps?q=Lords+Eco+Inn+Jayanagar+Bangalore&output=embed",
    images: [
      "./Assest/hotel/Bangalore/Bangalore (1).png",
      "./Assest/hotel/Bangalore/Bangalore (2).png",
      "./Assest/hotel/Bangalore/Bangalore (3).png",
      "./Assest/hotel/Bangalore/Bangalore (4).png",
      "./Assest/hotel/Bangalore/Bangalore (5).png",
      "./Assest/hotel/Bangalore/Bangalore (6).png",
      "./Assest/hotel/Bangalore/Bangalore (7).png",
      "./Assest/hotel/Bangalore/Bangalore (8).png"
    ],
    related: ["BANGALORE", "BANGALORE1"]
  },
  BANGALORE1: {
    title: "HOWARD JOHNSON, Bangalore - (LRIC Associated)",
    location: "📍 BANGALORE",
    rating: "⭐ 4.9",
    photos: "🖼 12 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "Bangalore",
    about: `Howard Johnson Bangalore, a part of Wyndham Hotel Group offers free Wi-Fi connectivity, a well equipped Gymnasium, Executive Lounge and Meeting rooms, Spa and Sauna facility and a gleaming azure outdoor swimming pool.`,
    map: "https://www.google.com/maps?q=Howard+Johnson+by+Wyndham+Bengaluru+Hebbal&output=embed",
    images: [
      "./Assest/hotel/Bangalore/Bangalore (9).png",
      "./Assest/hotel/Bangalore/Bangalore (10).png",
      "./Assest/hotel/Bangalore/Bangalore (11).png",
      "./Assest/hotel/Bangalore/Bangalore (12).png",
      "./Assest/hotel/Bangalore/Bangalore (13).png",
      "./Assest/hotel/Bangalore/Bangalore (14).png",
    ],
    related: ["BANGALORE", "BANGALORE1"]
  },

  AULI: {
    title: "Cliff Top Club, AULI - (LRIC Associated)",
    location: "📍 Auli",
    rating: "⭐ 4.7",
    photos: "🖼 2 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "Auli",
    about: `The resort is paradise in winters for skiing and sledding enthusiasts and for anyone who wishes to venture out in the snow and enjoy snow sports.
HIGHLIGHTSCliff Top Club at Auli is located at an altitude of over 10,000 feet in India’s most scenic location amid the snow clad Himalayas. The resort provides a 270 degree clear view of the snow covered Nanda Devi range (the highest in india and third highest in the world). Other ranges in sight include Dronagiri, Kamet, Trishul, Neelkanth, Mana, and Mukut . They belong to the snow-line ranges which are covered with snow all round the year.A marvel of civil engineering, the Cliff Top Club has been built on inhospitable terrain over years of labour coupled with traditional and innovative techniques.
Those who brave the drive in a 4×4 vehicle are rewarded with a magnificent sight as the resort rises into view from the steep and treacherous path that leads up to it from Joshimath. For those who prefer to zip up in the cable car, the resort seems like a tiny speck in the vast snow covered expanse of the Himalayas. The warm hospitality however belies the inhospitable conditions under which the CTC staff battle the forces of nature to provide comfort to the guests.The resort is paradise in winters for skiing and sledding enthusiasts and for anyone who wishes to venture out in the snow and enjoy snow sports.In summers, when the snow gives way to carpets of grass and flowers, hikers and trekkers will find numerous marked walks and mountain bike trails.`,
    map: "https://www.google.com/maps?q=The+Cliff+Top+Club+Auli&output=embed",
    images: [
      "./Assest/hotel/AULI/Auli (1).jpeg",
      "./Assest/hotel/AULI/Auli (2).jpeg"
    ],
    related: ["AULI"]
  },

  BANDHAVGARH: {
    title: "Mint Bandhavgarh Resort, BANDHAVGARH - (LRIC Associated)",
    location: "📍 BANDHAVGARH",
    rating: "⭐ 4.8",
    photos: "🖼 2 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "BANDHAVGARH",
    about: `Mint Bandhavgarh Resort is a great choice for travellers looking for a 4-star hotel in Bandhavgarh. It is located in Sarmaniya. The hotel is rated 4.1 out of 5, which is considered Very good.

From all the 4 Star hotels in Bandhavgarh, Mint Bandhavgarh Resort is very much popular among the tourists. A smooth check-in/check-out process, flexible policies and friendly management garner great customer satisfaction for this property. The Hotel has a standard Check-In time as 02:00 PM and Check-Out time as 12:00 PM.
What our guests think 84% of the guests have recommended Mint Bandhavgarh Resort on our platform. Nice property, good service quality, good food, good stay experience and clean rooms are some highly appreciated and talked about aspects of the property. With an overall rating of 4.1 out of 5 (95 Ratings), the property is rated very well by 44% of the guests, 30% have rated it good, 9% have rated it average and 17% have rated it as bad. Also, we recommend that guests must go through traveller reviews and ratings posted by fellow travellers on the Star Inn suites and retreat platform to ensure that Mint Bandhavgarh Resort is best suited for them.`,
    map: "https://www.google.com/maps?q=Mint+Resort+Bandhavgarh&output=embed",
    images: [
      "./Assest/hotel/BANDHAVGARH/BANDHAVGARH (1).jpeg",
      "./Assest/hotel/BANDHAVGARH/BANDHAVGARH (2).jpeg",
    ],
    related: ["BANDHAVGARH"]
  },

  BHIMTAL: {
    title: "Tag Resort Lavanya, BHIMTAL - (LRIC Associated)",
    location: "📍  BHIMTAL",
    rating: "⭐ 4.8",
    photos: "🖼 2 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "Bhimtal",
    about: `Situated in the lake district – Bhimtal, this resort is an ideal spot to stay if you want to couple natural beauty with luxury. The resort provides you with spacious and beautiful lake-view rooms incorporated with pretty interiors and a balcony that lets you soak in the dreamy Sunrise view, Tag Resorts Lavanya Bhimtal makes your stay comfortable and memorable at a happy value price. We boast of our professional staff members who are determined to give you the best service and are extremely friendly with you that creates a sense of affinity and makes you feel like home.

Surrounded with lakes, trees and hills; the resort is totally immersed in the colour of nature and provides an aesthetic feeling . The clear sky, the chilled blow of wind, the green lawns, the gigantic mountains and of course the sprinkling lake makes up for surrounding that enchants you throughout.

Apart from the serenity, the resort also provides world class modern amenities that enhance your stay amidst the hills. In addition to the amenities we also arrange for fun and thrilling activities/events for you that amplify your holiday excitement and provide you with the feeling of sheer exhilaration.`,
    map: "https://www.google.com/maps?q=Lavanya+Bhimtal&output=embed",
    images: [
      "./Assest/hotel/BHIMTAL/BHIMTAL (1).jpeg",
      "./Assest/hotel/BHIMTAL/BHIMTAL (2).jpeg",
    ],
    related: ["BHIMTAL"]
  },

  BILASPUR: {
    title: "PARK INN BY RADISSON GURGAON BILASPUR, BILASPUR - (LRIC Associated)",
    location: "📍 RANIKHET",
    rating: "⭐ 4.8",
    photos: "🖼 2 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "Bilaspur",
    about: `Located outside of Gurgaon and near Delhi, our hotel is an ideal place to stay for guests on business trips or on holiday to India’s famous Golden Triangle. Sleep soundly in one of 98 rooms and suites with thoughtful amenities like free Wi-Fi, a workstation, and coffee and tea facilities.

Each of the 98 hotel rooms combines the convenience of a workstation and satellite TV with the comfort of a sleeper sofa and plush bedding.`,
    map: "https://www.google.com/maps?q=Park+Inn+by+Radisson+Bilaspur&output=embed",
    images: [
      "./Assest/hotel/BILASPUR/BILASPUR (1).jpeg",
      "./Assest/hotel/BILASPUR/BILASPUR (2).jpeg",
    ],
    related: ["BILASPUR"]
  },

  GANGTOK: {
    title: "Denzong Shangrila Hotel & Spa, GANGTOK - (LRIC Associated)",
    location: "📍 GANGTOK",
    rating: "⭐ 4.8",
    photos: "🖼 4 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "Gangtok",
    about: `Denzong Shangrila, where comfort and hospitality are in sync with the panoramic view and beauty of the majestic Kanchenjunga Himalayan range.It is situated in Development area which is minutes away from M.G. Marg, the heart of Gangtok town.

This newly renovated hotel is a heaven of tranquility and among the few properties in Gangtok with a breathtaking view of Mt.Kanchenjunga and also amazing views of Rumtek and Ranka as well as the whole of Gangtok town.

Denzong Shangrila is one of the finest properties in the area offering the best of modern amenities along with traditional Sikkimese hospitality. A delicate blend of sikkimese / tibetan culture and contemporary design gives the property its unique character making it ideal for both business and pleasure.

Our hotel mixes the authentic with the present day necessities bringing alive the local ethos. All 29 rooms captures the essence of sikkimese / tibetan influence along with the modern comfort and solace you deserve.`,
    map: "https://www.google.com/maps?q=Denzong+Shangrila+Lords+Inn+Gangtok&output=embed",
    images: [
      "./Assest/hotel/GANGTOK/GANGTOK (1).jpeg",
      "./Assest/hotel/GANGTOK/GANGTOK (1).jpeg",
    ],
    related: ["GANGTOK", "GANGTOK1"]
  },
  GANGTOK1: {
    title: "Lemon Tree, GANGTOK - (LRIC Associated)",
    location: "📍 GANGTOK",
    rating: "⭐ 4.8",
    photos: "🖼 4 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "Gangtok",
    about: `Lemon Tree Hotel, Gangtok is set in the lap of the enchanting eastern Himalayan range, offering captivating views of the serene valley. Conveniently located just 10 minutes away from MG Marg, the refreshing hotel is designed in traditional Sikkimese style architecture, with stylish wood frontages, arched windows, and red and yellow sloping roofs.

A vibrant lobby ushers you into 80 stylish and spacious rooms that help you unwind with their fresh and bright interiors, smart in-room amenities, refreshing services and a close to home comfort. The hotel houses a multi-cuisine coffee shop–Citrus Café and hip-recreation bar-Slounge, rejuvenating spa-Pema, full equipped gym, besides an outdoor swimming pool, to keep you feeling fresh-as-a-lemon.

An idyllic place of stay for both business and leisure, the hotel is about 3 hours from Nathula Pass, on the Indo-Chinese border and is in close proximity to Kanchenjanga National Park, the UNESCO World Heritage Site, home to the rare red panda, snow leopard, and the elusive musk deer.`,
    map: "https://www.google.com/maps?q=Lemon+Tree+Hotel+Gangtok&output=embed",
    images: [
      "./Assest/hotel/GANGTOK/GANGTOK (3).jpeg",
      "./Assest/hotel/GANGTOK/GANGTOK (4).jpeg",
    ],
    related: ["GANGTOK", "GANGTOK1"]
  },

  GIRFOREST: {
    title: "VISHAL LORDS INN, GIR FOREST - (LRIC Associated)",
    location: "📍 GIR FOREST",
    rating: "⭐ 4.8",
    photos: "🖼 5 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "Gir Forest",
    about: `Vishal Lords Inn offers an unbleached getaway with an outdoor swimming pool and lush green gardens jeweled with palms, blooming flowers and melodious chorus of birds’ chirping truly in laps of nature.

From the open terrace guests can admire panoramic views of Gir Mountains and sip refreshing beverages at sun down. Delight in a romantic candle light dinner, exclusive engagement and anniversary at one of our private dining venue.

We invite you to discover an enchanting holiday at the world’s only home of Asiatic Lion ‘panthera lio persica’ complimented with personalized flawless service.

Pavillion Occupants: 02 Furnished The PAVILION ROOM Category provided with beautifully furnished rooms with all cozy comforts of Bedding, bathroom accessories, toiletries and lighting effects match the taste of our guests preferring luxurious stay. The Various amenities provided such as Tea/coffee maker, Rainy shower, Hot & cold running water, internet access at your service. Feature- Wi-Fi Internet, Air Conditioning, Suitablility, Wheelchair Access, Smoking Allowed, For Children, Elder Access, Coffee & Tea Maker, Dual lines Intercom, LED with setup Box, Room Service Hot N Cold Water Running`,
    map: "https://www.google.com/maps?q=Vishal+Lords+Inn+Gir+Forest&output=embed",
    images: ["./Assest/hotel/GIR FOREST/GIR FOREST (1).jpeg",
      "./Assest/hotel/GIR FOREST/GIR FOREST (2).jpeg"

    ],
    related: ["GIRFOREST", "GIRFOREST1"]
  },
  GIRFOREST1: {
    title: "Lion’s Den, GIR FOREST - (LRIC Associated)",
    location: "📍 GIR FOREST",
    rating: "⭐ 4.8",
    photos: "🖼 5 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "Gir Forest",
    about: `Lions’s Den is a unique concept ideal for families and large groups with 2 bedroom villas spread over acres of green forested area and mango orchard. It’s a weekend retreat with 2 Bedroom Family Villas, Club House, swimming pool, restaurant and a mini theatre. Lion’s Den Weekend Home, a perfect natural beauty within the Gir National Park, surrounded by mango orchard and a monsoon fed river, offers a relaxing atmosphere. The Restaurant serve authentic local kathiawari fresh food. Lion’s Den is the best weekend place where you can unwind and enjoy in lap of nature and one of the best place to stay while travelling to Gir National Park.`,
    map: "https://www.google.com/maps?q=Vishal+Lords+Inn+Gir+Forest&output=embed",
    images: ["./Assest/hotel/GIR FOREST/GIR FOREST (1).png",
      // "./Assest/hotel/GIR FOREST/GIR FOREST (2).png",
      // "./Assest/hotel/GIR FOREST/GIR FOREST (3).png",
      "./Assest/hotel/GIR FOREST/GIR FOREST (4).png"

    ],
    related: ["GIRFOREST", "GIRFOREST1"]
  },

  GURUGRAM: {
    title: "Best Western Resort Country Club, GURUGRAM - (LRIC Associated)",
    location: "📍 GURUGRAM",
    rating: "⭐ 4.5",
    photos: "🖼 4 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "Gurugram",
    about: `About Best Western Resort Country Club A relaxed 45 minutes drive from delhi int’l airport on the Delhi – Jaipur Highway & you arrive at Best Western Resort Country Club – away from the pollution & congestion of Delhi. The lush green Environment set in the most picturesque surroundings make Best Western Resort Country Club the perfect place for your conferences, parties & really enjoyable holidays and also give you a choice of experiencing the benefits of the Club Membership which are only for the privileged few.`,
    map: "https://www.google.com/maps?q=Resort+Country+Club+Manesar+Gurgaon&output=embed",
    images: [
      "./Assest/hotel/GURUGRAM/GURUGRAM (2).jpeg",
      "./Assest/hotel/GURUGRAM/GURUGRAM (3).jpeg"

    ],
    related: ["GURUGRAM"]
  },

  HYDERABAD: {
    title: "Radisson Blu, HYDERABAD - (LRIC Associated)",
    location: "📍 HYDERABAD",
    rating: "⭐ 4.6",
    photos: "🖼 4 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "Hyderabad",
    about: `Located in Hyderabad’s upscale Banjara Hills neighborhood, the Radisson Blu Plaza Hotel Hyderabad Banjara Hills offers a tranquil stay near the bustling city center. Travelers appreciate our proximity to major businesses, notable shopping malls, movie theaters, and gourmet restaurants. Major hospitals such as CARE and L V Prasad Eye Institute along with fertility and hair implant clinics are also in the vicinity. If you need a break from on-site meetings, take a relaxing stroll in nearby KBR National Park. Here for vacation? Use our transportation services for easy trips to attractions like Golconda Fort, or drive to historic sites like Charminar and Birla Mandir, both less than eight kilometers from our hotel.`,
    map: "https://www.google.com/maps?q=Radisson+Blu+Plaza+Hotel+Hyderabad+Banjara+Hills&output=embed",
    images: ["./Assest/hotel/HYDERABAD/HYDERABAD (1).jpeg",
      "./Assest/hotel/HYDERABAD/HYDERABAD (3).jpeg"
    ],
    related: ["HYDERABAD", "HYDERABAD1"]
  },
  HYDERABAD1: {
    title: "Taj Deccan, HYDERABAD - (LRIC Associated)",
    location: "📍 HYDERABAD",
    rating: "⭐ 4.6",
    photos: "🖼 6 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "Hyderabad",
    about: `Located in Hyderabad’s elite Banjara Hills, this elegant hotel offers a welcome respite for both leisure and business travellers alike. Spread over 6 acres of landscaped gardens, it is conveniently located 35-40 minutes away from the Rajiv Gandhi International Airport and 5 kilometres away from the railway station, and roughly 19 kilometres away from Secendrabad. The Hyderabad hotel has 151 comfortable and spacious rooms, including 10 suites. At Taj Deccan, we have 6 conference rooms, including one boardroom. Our meeting venues can accommodate from 15 to 500 guests. The lush green lawns that surround the hotel are an inviting venue for cocktails and receptions for up to 1,500 people. With the finest features and top-notch services, Taj Deccan is the epitome of elegance. The features and amenities will leave you wanting for more. Soak in the space that’s buzzing with energy. Treat yourself to luxury at one of the best 5-star hotels in Hyderabad`,
    map: "https://www.google.com/maps?q=Taj+Deccan+Hyderabad&output=embed",
    images: ["./Assest/hotel/HYDERABAD/HYDERABAD (1).png",
      "./Assest/hotel/HYDERABAD/HYDERABAD (2).png",
      "./Assest/hotel/HYDERABAD/HYDERABAD (2).jpeg",

    ],
    related: ["HYDERABAD", "HYDERABAD1"]
  },
  DALHOUSIE: {
    title: "Dalhousie Valley, DALHOUSIE - (LRIC Associated)",
    location: "📍 DALHOUSIE",
    rating: "⭐ 4.6",
    photos: "🖼 4 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "DALHOUSIE",
    about: `Dalhousie Valley by DLS Group of Hotels is a great choice for travellers looking for a 3 star hotel in Dalhousie. It is located in Banikhet.This Hotel stands out as one of the highly recommended hotel in Dalhousie and is recommended by 87% of our guests. Hotel is rated 4.0 out of 5, which is considered as very good. The Hotel is in proximity to some popular tourist attractions and other places of interest in Dalhousie. Some of the tourist attractions near Dalhousie Valley by DLS Group of Hotels and St. Patrick’s Church (2.8 kms). From all the 3 Star hotels in Dalhousie, Dalhousie Valley by DLS Group of Hotels is very much popular among the tourists. A smooth check-in/check-out process, flexible policies and friendly management garner great customer satisfaction for this property. The Hotel has standard Check-In time as 02:00 PM and Check-Out time as 12:00 PM. It is a couple-friendly property.`,
    map: "https://www.google.com/maps?q=DLS+Dalhousie+Valley+Resort&output=embed",
    images: ["./Assest/hotel/DALHOUSIE/DALHOUSIE (4).png",
      "./Assest/hotel/DALHOUSIE/DALHOUSIE (5).png",
      "./Assest/hotel/DALHOUSIE/DALHOUSIE (6).png",
      "./Assest/hotel/DALHOUSIE/DALHOUSIE (7).png",
      "./Assest/hotel/DALHOUSIE/DALHOUSIE (8).png",
      "./Assest/hotel/DALHOUSIE/DALHOUSIE (9).png"
    ],
    related: ["DALHOUSIE", "DALHOUSIE1"]
  },
  DALHOUSIE1: {
    title: "Amara Blue Magnets Dalhousie, DALHOUSIE - (LRIC Associated)",
    location: "📍 DALHOUSIE",
    rating: "⭐ 4.7",
    photos: "🖼 5 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "DALHOUSIE",
    about: `Hotel Blue Magnet, Dalhousie, is the ideal place to stay for leisure tourists, honeymoon couples, nature lovers, or any group of family or friends who wants to spend their holidays relaxing in nature’s arms. The nearest airport and railway station to the region are Pathankot Railway Station and Pathankot Airport. Subhash Baoli(5 km), St Patricks Church(6 km), St. Francis’ Church(7 km), St. John’s Church(8 km), and many more. Room Amenities: All rooms are fully furnished, spacious, fresh and contemporary in design and offer the temporary resident a comfortable and stylish place to call home. They showcase pleasing decor with elegant furnishings. They are equipped with a wardrobe, tea/coffee maker, intercom, and many more. They have en suite bathrooms with essential toiletries. Hotel Facilities: The hotel offers laundry, doctor on call, room service, nature walk, car hire, elevator, and other facilities.`,
    map: "https://www.google.com/maps?q=The+Hoften+Blue+Magnets+Dalhousie&output=embed",
    images: ["./Assest/hotel/DALHOUSIE/DALHOUSIE (3).jpeg",
      "./Assest/hotel/DALHOUSIE/DALHOUSIE (4).jpeg"
    ],
    related: ["DALHOUSIE", "DALHOUSIE1"]
  },
  UDAIPUR: {
    title: "CAMBAY, UDAIPUR - (LRIC Associated)",
    location: "📍 UDAIPUR",
    rating: "⭐ 4.7",
    photos: "🖼 5 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "UDAIPUR",
    about: `The Cambay Resort is an upscale business-cum-leisure resort situated at Udaipur, Rajasthan offering facilities and is spread over an area of 11407 Square Meters. This resort is 3 hours drive from Ahmedabad and is a gateway to places like Nathdwara, Chittorgarh etc. The resort’s design is inspired by the city’s unique architectural eminence set against a scenic backdrop of hills. With an inventory of 60 rooms, this resort provides a range of facilities which include restaurants, spa, swimming pool and fitness centre. The resort has meeting rooms and banquet halls with capacity for up to 500 persons. This resort is also an RCI Affiliated resort. This resort houses our CIHM center.`,
    map: "https://www.google.com/maps?q=Cambay+Spa+and+Resort+Udaipur&output=embed",
    images: ["./Assest/hotel/DALHOUSIE/DALHOUSIE (3).jpeg",
      "./Assest/hotel/DALHOUSIE/DALHOUSIE (4).jpeg"
    ],
    related: ["UDAIPUR"]
  },
  JODHPUR: {
    title: "Clark Resort, JODHPUR - (LRIC Associated)",
    location: "📍 JODHPUR",
    rating: "⭐ 4.6",
    photos: "🖼 4 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "Jodhpur",
    about: `Jhalamand Garh is a unique blend as it combines the best of both cultures – the architectural brilliance of Mewar coupled with the unmatchable traditional hospitality of Marwar. Recognised as a member of the Heritage Hotels Association in India, Jhalamand Garh offers a highly personalised service as it is run and managed by the Jhalamand family itself. Its proximity to Jodhpur, the second largest town of Rajasthan, makes it an ideal place to spend a peaceful holiday in a quiet rural atmosphere. It gives a guest a chance to see a traditional Rajput home and also participate in their customs. The well-kept lawns are filled with flowers and the sounds of peacocks and parrots. The beautiful pool along the lawn is another great highlight of the mansion. The Castle offers 24 Deluxe Rooms with bath, running hot and cold water. All the rooms are tastefully decorated with period furniture while providing 21st-century comfort. The magnificent ‘Darikhana’ or ‘Diwan-E-Aam’ where the Rulers used to hold Darbars is now used as the Lobby. Lush green lawns are a very welcome site in this otherwise arid region. Guests are received in traditional Rajasthani Rajput customs and are made to feel part of the family. Hence the departures are often sentimental as one feels he/she is leaving his/her home and dear ones.

The accommodation offers a terrace.`,
    map: "https://www.google.com/maps?q=Clarks+Inn+Jodhpur&output=embed",
    images: ["./Assest/hotel/JODHPUR/Clark Resort/JODHPUR-2 (1).jpeg",
      "./Assest/hotel/JODHPUR/Clark Resort/JODHPUR-2 (2).jpeg"
    ],
    related: ["JODHPUR", "JODHPUR1"]
  },
  JODHPUR1: {
    title: "FORT CHANWA LUNI, JODHPUR - (LRIC Associated)",
    location: "📍 JODHPUR",
    rating: "⭐ 4.6",
    photos: "🖼 4 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "Jodhpur",
    about: `Maharaja Jaswant Singh II Ruler of Jodhpur, Marwar from 1876-1895 A.D is remembered as a benevolent Monarch who steered the administration and economy of the state away from chaos and instability to a period of sustained development, security and justice for all. Amongst the prominent civil servants in this Ruler’s coterie of administrators, was a young Charan by the name of Kaviraj Muraridanji. He was an astute politician and a farsighted administrator. In 1894 Kaviraj Muraridanji received in Jagir the little known hamlet of Chanwa. There he build an exquisite little fortified haveli, today known as Heritage Hotel Fort Chanwa. In 1941, however the village of Chanwa became “Khalsa” (belonging to the State) as, ironically Muraridanji fell victim to a law introduced by him in the best interest of Marwar, whereby feudal estates lacking a male successor and without a recognized adoption in the life time of the deceased Jagirdar were automatically resumed by the state, after his death. In the year 1948 Chanwa was granted in “Jagir” to Maharaj Dalip Singh, the youngest son of Maharaja Umaid Singh. However over the years the fortress sank into years of neglect and decay.
Heritage Room
The Heritage Rooms at Fort Chanwa. Luni, represent a timeless Rajasthan. Our most authenticly decorated suites are the Heritage Suites, located in the original 18th-century Rajput haveli.  Whilst preserving the old-world charm, these suites are equipped with all modern amenities to create a luxurious blend of historic and contemporary.

Deluxe Room
Spacious and luxurious, these rooms are intended for comfort and relaxation. These appealing rooms radiate the same charm that is predominant throughout the Hotel.`,
    map: "https://www.google.com/maps?q=Fort+Chanwa+Luni+Jodhpur&output=embed",
    images: ["./Assest/hotel/JODHPUR/FORT CHANWA LUNI/FortChanwaLuni (1).png",
      "./Assest/hotel/JODHPUR/FORT CHANWA LUNI/FortChanwaLuni (2).png",
      "./Assest/hotel/JODHPUR/FORT CHANWA LUNI/FortChanwaLuni (3).png",
      "./Assest/hotel/JODHPUR/FORT CHANWA LUNI/FortChanwaLuni (4).png",
      "./Assest/hotel/JODHPUR/FORT CHANWA LUNI/FortChanwaLuni (5).png",
      "./Assest/hotel/JODHPUR/FORT CHANWA LUNI/FortChanwaLuni (6).png"
    ],
    related: ["JODHPUR", "JODHPUR1"]
  },

  KHAJURAHO: {
    title: "Mint Bundela Resort khajuraho, KHAJURAHO - (LRIC Associated)",
    location: "📍KHAJURAHO",
    rating: "⭐ 4.6",
    photos: "🖼 4 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "Khajuraho",
    about: `Overview
Mint Bundela Resort is a great option for travellers looking out for a resort in Khajuraho. It is located in Sevagram. This Resort stands out as one of the highly recommended resorts in Khajuraho and is recommended by 96% of our guests. The resort is rated 4.5 out of 5, which is considered Excellent. Some of the popular transit points from the resort are Khajuraho Airport (2.3 km) and Khajuraho Airport (2.3 km).

From all the 4 Star hotels in Khajuraho, Mint Bundela Resort is very much popular among tourists. A smooth check-in/check-out process, flexible policies and friendly management garner great customer satisfaction for this property. The Resort has standard Check-In time as 02:00 PM and Check-Out time as 12:00 PM.

What our guests think
Good service quality, good stay experience, good rooms, nice property and good swimming pool are some highly appreciated and talked about aspects of the property. With an overall rating of 4.5 out of 5 (202 Ratings), the property is rated very well by 58% of the guests, 30% have rated it good, 6% have rated it average and 6% have rated it as bad. Also, we recommend that guests must go through traveller reviews and ratings posted by fellow travellers on the Star Inn Suites and Retreat platform to ensure that Mint Bundela Resort is best suited for them.`,
    map: "https://www.google.com/maps?q=Bundela+Resort+Khajuraho&output=embed",
    images: ["./Assest/hotel/KHAJURAHO/Mint Bundela Resort/Mint Bundela Resort (1).jpeg",
      "./Assest/hotel/KHAJURAHO/Mint Bundela Resort/Mint Bundela Resort (2).jpeg",
    ],
    related: ["KHAJURAHO", "KHAJURAHO1"]
  },
  KHAJURAHO1: {
    title: "Ramada Khajuraho, KHAJURAHO - (LRIC Associated)",
    location: "📍KHAJURAHO",
    rating: "⭐ 4.9",
    photos: "🖼 4 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "Khajuraho",
    about: `A 5-minute drive from Khajuraho Airport, the 5-star Ramada Khajuraho is surrounded by greenery and boasts an inviting outdoor pool, a jogging track and luxurious, modern rooms.

Featuring marble flooring, the air-conditioned rooms are equipped with a flat-screen TV, a safe, minibar and an electric kettle. The private bathroom includes a bath or shower and free toiletries. Lighting and room temperature is controlled via an electronic bedside console.

Raneh Falls is 20 km from the hotel while Panna Tiger Sanctuary and Pandav Falls are approximately 25 km away.

Ramada Khajuraho provides airport transfers and same-day laundry and dry cleaning services at an extra charge. It also has a travel desk and a souvenir shop.

Dining options include the multi-cuisine Gautama Restaurant. Unwind with a drink from Mahua Bar or head to Downing Street, which is the hotel’s disco.

This is our guests’ favourite part of Khajurāho, according to independent reviews.

Couples particularly like the location — they rated it 8.8 for a two-person trip.`,
    map: "https://www.google.com/maps?q=Ramada+by+Wyndham+Khajuraho&output=embed",
    images: ["./Assest/hotel/KHAJURAHO/Ramada Khajuraho/Ramada Khajuraho (1).jpeg",
      "./Assest/hotel/KHAJURAHO/Ramada Khajuraho/Ramada Khajuraho (2).jpeg",
    ],
    related: ["KHAJURAHO", "KHAJURAHO1"]
  },
  KUTCH: {
    title: "Ramada By Wyndham, KUTCH - (LRIC Associated)",
    location: "📍 KUTCH",
    rating: "⭐ 4.1",
    photos: "🖼 2 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "KUTCH",
    about: `Ramada by Wyndham Gandhidham Shinay is close to bustling Mundra and Kandla port towns, and within reach of Tolani College of Arts and Science. Shop Khanna and Adipur markets, visit Patadiya Hanuman and Swaminarayan temples, and stroll through Gandhi Samadhi. Major highways, Gandhidham Bus Station, and Adipur Railway Station are easily accessible, while Kandla Airport (IXY) is just 12 kilometers away, and Bhuj Airport (BHJ) is 59 kilometers away.
Non-smoking hotel with on-site dining, a spa, gym, and free WiFi
We make it easy to unwind with relaxing amenities like an outdoor pool with sundeck, spa, and sauna. Stay connected with free high-speed WiFi, work out in the fitness center, and dine at two on-site restaurants—offering meal plan options for hotel guests. We also offer free parking, a hotel vehicle, travel and car rental desks, same-day dry cleaning, and a knowledgeable concierge. Each non-smoking guest room features a flat-screen HDTV, laptop-size safe, desk, coffee maker, minibar, ironing amenities, hair dryer, and bottled water.`,
    map: "https://www.google.com/maps?q=Ramada+by+Wyndham+Gandhidham+Shinay&output=embed",
    images: ["./Assest/hotel/KUTCH/Ramada By Wyndham/Ramada By Wyndham (1).jpeg",
      "./Assest/hotel/KUTCH/Ramada By Wyndham/Ramada By Wyndham (2).jpeg",
      "",
    ],
    related: ["KUTCH"]
  },
  MADURAI: {
    title: "Courtyard by Marriott, MADURAI - (LRIC Associated)",
    location: "📍 MADURAI",
    rating: "⭐ 4.4",
    photos: "🖼 3 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "MADURAI",
    about: `Surrounded by celebrated downtown attractions, Courtyard by Marriott Madurai is a luxury haven in a Madurai City, Tamil Nadu. Immerse yourself in 5-star comfort in elegantly appointed hotel accommodations, boasting refined design elements, complimentary Wi-Fi, remote-controlled curtains, touch-screen showers and inspiring views of Madurai City. Savor delectable international cuisine and creative craft cocktails in our hotel’s inviting restaurant and upscale bar. Meet, gather and unwind in our spacious and inviting hotel lobby with GoBoard technology. Enjoy a coveted location amid shopping, dining and entertainment, just minutes from Meenakshi Amman Temple, INOX Mall, Rajaji Hospital and Aravind Eye Hospital. Host flawless meetings, weddings and social affairs in our sophisticated event space, including the two largest ballrooms in Madurai. Punctuate a full day of work, shopping our sightseeing with a relaxing treatment in our hotel spa. Embrace 5-star comfort in Tamil Nadu at our luxury hotel in Madurai City`,
    map: "https://www.google.com/maps?q=Courtyard+by+Marriott+Madurai&output=embed",
    images: ["./Assest/hotel/MADURAI/Courtyard by Marriott/Courtyard by Marriott (1).jpeg",
      "./Assest/hotel/MADURAI/Courtyard by Marriott/Courtyard by Marriott (2).jpeg",
      "",
    ],
    related: ["MADURAI", "MADURAI1"]
  },
  MADURAI1: {
    title: "FORTUNE PANDIYAN HOTEL Madurai, MADURAI - (LRIC Associated)",
    location: "📍 MADURAI",
    rating: "⭐ 4.1",
    photos: "🖼 3 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "MADURAI",
    about: `The Fortune Pandiyan Hotel, member ITC’s hotel group, India’s premier chain of luxury hotels, is Madurai’s first luxury hotel that is set amidst 3 acres of landscaped gardens. The hotel offers guests the highest standards in cuisine and personalized service. Fortune Pandiyan Hotel has hosted several heads of state, prime ministers, presidents and other prominent guests since 1968. As a guest, experience the traditional warmth and hospitality of South India blended with efficiency of a contemporary hotel

Fortune Pandiyan hotel is the ideal place to stay for business and leisure travellers visiting Madurai.Fortune Pandiyan Hotel offers Standard Rooms and recently renovated fully refurbished, Deluxe Rooms, Fortune Club Rooms, Exclusive Fortune Club Rooms and Fortune Suites

De-stress with a relaxing break at Fortune Pandiyan Hotel, enjoy a delicious dinner in the Orchid Restaurant and unwind with a beauty treatment – with choices of massage or facial in Orchid Bali Spa. Enjoy a workout in the Maverick Health Club or take a dip in the outdoor swimming pool. At the end of your day, relax in the comfort of the Ranch Bar with a bottle of wine or cocktail`,
    map: "https://www.google.com/maps?q=Fortune+Pandiyan+Hotel+Madurai&output=embed",
    images: ["./Assest/hotel/MADURAI/FORTUNE PANDIYAN HOTEL/FORTUNE PANDIYAN HOTEL (1).jpeg",
      "./Assest/hotel/MADURAI/FORTUNE PANDIYAN HOTEL/FORTUNE PANDIYAN HOTEL (2).jpeg",
      "",
    ],
    related: ["MADURAI", "MADURAI1"]
  },
  MUNNAR: {
    title: "AYUR COUNTY, MUNNAR - (LRIC Associated)",
    location: "📍 MUNNAR",
    rating: "⭐ 4.6",
    photos: "🖼 4 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "MUNNAR",
    about: `An off-the-radar location, tucked away from the chaos and hustle of the city, Ayur County is a quaint and exquisite resort that is located 3kms away from the picturesque village of Chinnakanal in Munnar, which offers you the ethereal bliss of a sun-kissed yet cool and cosy sojourn.

Encountering all the most modern amenities, Ayur County offers various types of accommodations such as suites, cottages and independent villas which are connected to facilities that range from a therapeutic Ayurvedic centre to a serene niche comprising of a classic restaurant and an outdoor pool, that is just about perfect to dip your toes in while enjoying the panoramic view of the mesmerising Chinnakanal valley. The laden pathways, feel-good courtyard, perpetually mist-sprayed lawns, wood and wrick furnished halls and the magnificent view facing rooms with balconies, all covered in thick and lustrous foliage of the unspoiled nature, is a perfect hideout for an unwinding and relaxing holiday.

Presidential Suite
We offer you a royal presidential suite with the luxury of two voluminous and extravagant double rooms and double beds, a capacious bath and toilet with the comfort of a bathing tub, a common living hall and an airy balcony that shall provide you with the picturesque view of the lush green valleys and the misty blue hills. The suite is equipped with a mini bar and a kettle, while the complimentary tea and coffee kits are supplied as standards.`,
    map: "https://www.google.com/maps?q=Ayur+County+Resorts+Munnar&output=embed",
    images: ["./Assest/hotel/MUNNAR/MUNNAR (1).jpeg",
      "./Assest/hotel/MUNNAR/MUNNAR (1).jpeg",
      "",
    ],
    related: ["MUNNAR", "MUNNAR1"]
  },
  MUNNAR1: {
    title: "GRAND PLAZA MUNNAR, MUNNAR - (LRIC Associated)",
    location: "📍 MUNNAR",
    rating: "⭐ 4.6",
    photos: "🖼 1 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "MUNNAR",
    about: `Grand Plaza munnar is undoubtedly one of the finest hotels in Munnar. Immerse yourself in the beauty of the hills and become part of this eco boutique hotel. Here we strive to provide the best experiences with every stay. Experiences that are environmental aware and culturally rich. Experiences that last a life time. The hotel has 39 elegantly furnished spacious rooms. Each room is individually designed in such a way that it offers a breathtaking view of the tea plantations. Gently draw the curtains & nature transports you into the timeless world of peace & tranquility. Take time to feel the composed ambience. It is so soothing and relaxing that you will love to come here again & again. The rare surroundings amidst the tea plantations provide the perfect setting for a romantic getaway.

ELEGANCE
Elegant rooms that are well appointed to pamper you for an unforgettable vacation by emphasizing even on the minutest of the details of your requirement.
AMBIENCE
Real cozy rooms with unmatchable amenities and breath – taking views of Lush – Green Kannandevan Hills.
EMINENCE SUITE
Luxurious and spacious suite room with a separate living room, dining space and dressing area where you will be treated like a king with uncompromising service.
EMINENCE ROYAL
Luxurious and spacious suite room with a separate living room, dining space and dressing area where you will be treated like a king with uncompromising service.`,
    map: "https://www.google.com/maps?q=Grand+Plaza+Munnar&output=embed",
    images: ["./Assest/hotel/MUNNAR/MUNNAR (3).jpeg",
      "./Assest/hotel/MUNNAR/MUNNAR (4).jpeg",
    ],
    related: ["MUNNAR", "MUNNAR1"]
  },
  MUSSOORIE: {
    title: "Amara Hillqueen, Mussoorie, MUSSOORIE - (LRIC Associated)",
    location: "📍 MUSSOORIE",
    rating: "⭐ 4.6",
    photos: "🖼 4 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "MUSSOORIE",
    about: `Wake up to the cool breeze blowing through the scenic hills of Mussoorie and witness the vast expanse of the valley when you stay at Amara Hill Queen. It is one of the finest hotels in Mussoorie where budget meets luxury to provide you with the warmest hospitality, all at an affordable price. A popular choice among corporate guests and leisure travellers, our hotel is nestled between Mall Road and the beautiful ropeway at Mussoorie. With its facilities and friendly staff, our hotel is truly the queen of the hills.

Accommodation
We prioritize our guests and their needs. In order to provide such a tailored hospitality experience, we have 4 categories of rooms, namely Amara Comfort, Amara Premium, Amara Comfort Four Bedded Room, Amara Premium Family Room . Designed with our esteemed guests in mind, we also have inter-connected family rooms ensuring that you don’t have to stay apart even for a minute. Additionally, all rooms are furnished with modern facilities and amenities to provide a resplendent stay.`,
    map: "https://www.google.com/maps?q=CALUX+Hill+Queen+Mussoorie&output=embed",
    images: ["./Assest/hotel/MUSSOORIE/MUSSOORIE (3).jpeg",
      "./Assest/hotel/MUSSOORIE/MUSSOORIE (4).jpeg",
      "",
    ],
    related: ["MUSSOORIE", "MUSSOORIE1"]
  },
  MUSSOORIE1: {
    title: "Kamakshi Grand, MUSSOORIE - (LRIC Associated)",
    location: "📍 MUSSOORIE",
    rating: "⭐ 4.6",
    photos: "🖼 4 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "MUSSOORIE",
    about: `Escape to destination where spectacular landscapes, historical wonders, magnificent Snow Clad Himalayan Mountains and nature adventure promise to create memories for a lifetime.

Luxurious settings, impeccable service, international cuisine and pampering Hospitality come together to create the perfect holiday.

A place away from the ordinary, this 40 key hotel is framed at every vantage point by nature at its most spectacular. The cable car, which takes you to famous Gun Hill point, is only a short walk away. Meadows and forests that have enchanted travelers for centuries wait to be explored by trekking enthusiasts and undying romantics.

Kamakshi Grand is built in a style true to the modern architecture. In every way the indoors mirror the beauty of the outdoors. TEMPTATION a Specialty restaurant, a Recreational Rooftop and private Balconies are amongst the necessary luxuries in place. Add to these other thoughtful additions like our Cultural & Folk Dances, Puppet and Magic Shows, children’s area, a Conference and Activity hall and a dedicated Activities Concierge and you will find The Kamakshi Grand is a place at par with the best in the world.`,
    map: "https://www.google.com/maps?q=Hotel+Kamakshi+Grand+Mussoorie&output=embed",
    images: ["./Assest/hotel/MUSSOORIE/MUSSOORIE (1).jpeg",
      "./Assest/hotel/MUSSOORIE/MUSSOORIE (2).jpeg",
      "",
    ],
    related: ["MUSSOORIE", "MUSSOORIE1"]
  },

  RATNAGIRI: {
    title: "CHERILYN MONTA, RATNAGIRI, RATNAGIRI - (LRIC Associated)",
    location: "📍 RATNAGIRI",
    rating: "⭐ 4.6",
    photos: "🖼 4 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "RATNAGIRI",
    about: `Cherilyn Monta – We have established a reputation as real estate developers who have built not just homes but lifestyles. A reputation based on a track record of promoting and marketing innovative real estate projects and completing them within the promised time and cost.

Since 1997 we have track record for our steadfast commitment to building Top Class Landmarks – Refined in Appearance with an emphasis on Quality and Concern for the Environment.
Deluxe Room
Super Deluxe Suite
3 bhk bungalow

Room Amenities: Guests can choose from a Studio, Deluxe Suite, Super Deluxe Suite or a 3BHK Villa. In-room amenities include tea/coffee maker, TV, A/C, and en-suite bathroom features hot/cold water supply.`,
    map: "https://www.google.com/maps?q=Cherilyn+Monta+Resort+Ratnagiri&output=embed",
    images: ["./Assest/hotel/RATNAGIRI/RATNAGIRI (1).jpeg",
      "./Assest/hotel/RATNAGIRI/RATNAGIRI (2).jpeg",
    ],
    related: ["RATNAGIRI"]
  },
  RISHIKESH: {
    title: "Panambi Resort Rishikesh, RISHIKESH - (LRIC Associated)",
    location: "📍 RISHIKESH",
    rating: "⭐ 4.7",
    photos: "🖼 6 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "RISHIKESH",
    about: `Panambi Resort is a great option for travellers looking out for a resort in Rishikesh. It is located in Ganga Bhogpur Talla. This Resort stands out as one of the highly recommended resorts in Rishikesh and is recommended by 100% of our guests. The resort is rated 4.2 out of 5, which is considered Very good. The property enjoys a great location advantage and provides easy and fast connectivity to the major transit points of the city. Some of the popular transit points from the resort are Railway Level Crossing (4.8 km), Virbhadra Railway Station (5.5 km) and Rishikesh Railway Station (9.5 km). The Resort is in proximity to some popular tourist attractions and other places of interest in Rishikesh. Some of the tourist attractions include and Goa Beach (12.2 km).

From all the 4 Star hotels in Rishikesh, Panambi Resort is very much popular among the tourists. A smooth check-in/check-out process, flexible policies and friendly management garner great customer satisfaction for this property. The Resort has standard Check-In time as 02:00 PM and Check-Out time as 12:00 PM. It is a couple-friendly property, hence it is absolutely safe for unmarried couples to stay here.

Hotel & Room Amenities
All the amenities and services of Panambi Resort focus on the convenience of its guests. The hotel offers a well-equipped meeting/conference room with video conferencing facilities, a spacious banquet hall for hosting personal parties and social gatherings. The Resort also boasts of a beautiful swimming pool. The fitness centre/gym of the resort can also be accessed by the guests. The in-house restaurant of the resort offers a wide range of cuisines. This Resort also has a Spa which makes the overall stay experience even more comforting. With room facilities like 24-hour Room Service, 24-hour Security, TV, Balcony/Terrace and Electrical Chargers, the property provides a comfortable stay experience.`,
    map: "https://www.google.com/maps?q=Panambi+Resort+%26+Spa+Rishikesh&output=embed",
    images: ["./Assest/hotel/RISHIKESH/RISHIKESH (3).jpeg",
      "./Assest/hotel/RISHIKESH/RISHIKESH (4).jpeg",
      "",
    ],
    related: ["RISHIKESH", "RISHIKESH1"]
  },
  RISHIKESH1: {
    title: "Kamakshi Residency, RISHIKESH - (LRIC Associated)",
    location: "📍 RISHIKESH",
    rating: "⭐ 4.7",
    photos: "🖼 6 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "RISHIKESH",
    about: `Escape to destination where spectacular landscapes, historical wonders, magnificent Snow Clad Himalayan Mountains and nature adventure promise to create memories for a lifetime.

Luxurious settings, impeccable service, international cuisine and pampering Hospitality come together to create the perfect holiday.

Kamakshi Residency is built in a style true to the modern architecture. In every way the indoors mirror the beauty of the outdoors. TEMPTATION a Specialty restaurant and a Recreational Rooftop are amongst the necessary luxuries in place. Add to these other thoughtful additions like our Cultural & Folk Dances, Puppet and Magic Shows, Parking Area, a Conference and Activity hall and a dedicated Activities Concierge and you will find The Kamakshi Residency is a place at par with the best in the world.

Kamakshi Residency premium ROOMS
The fabulous views through the floor-to-ceiling glazed windows and balconies ensure you never miss a moment of the surroundings. Ceiling-height windows frame, white peaks and overlooking valleys is a great experience round the year, especially magical when there are blankets of snow outside, luxuriously furnished and decorated with indigenous crafts, these rooms are warm, welcoming spaces, designed to make you feel right at home when you’re miles away from yours.`,
    map: "https://www.google.com/maps?q=30.1321229,78.3247799&output=embed",
    images: ["./Assest/hotel/RISHIKESH/RISHIKESH (1).jpeg",
      "./Assest/hotel/RISHIKESH/RISHIKESH (2).jpeg",
      "",
    ],
    related: ["RISHIKESH", "RISHIKESH1"]
  },
  SHIMOGA: {
    title: "Royal Orchid Central, Shimoga, SHIMOGA - (LRIC Associated)",
    location: "📍 SHIMOGA",
    rating: "⭐ 4.6",
    photos: "🖼 4 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "SHIMOGA",
    about: `Shimoga, Karnataka, is a bustling city known for its prospering mineral industry. Strategically located in proximity to KIADB Mandli Kallur Industrial Area, KSRTC Bus Stand, Shimoga Railway Station and the City Centre Mall, is Hotel Royal Orchid Central. This makes it a suitable hotel in Shimoga for all those travelers who are here for a business or a vacation.

Royal Orchid Central, Shimoga houses 108 rooms and suites furnished with all amenities required for a comfortable stay. Dining options; Tiger Trail (Authentic Indian Cuisine); Pinxx (Coffee Shop) and Mix Bar (Lounge Bar). With 3 banquet spaces and 1 board room, we are adept at handling MICE events and other social occasions.`,
    map: "https://www.google.com/maps?q=Royal+Orchid+Central+Shimoga&output=embed",
    images: ["./Assest/hotel/SHIMOGA/SHIMOGA (1).jpeg",
      "./Assest/hotel/SHIMOGA/SHIMOGA (2).jpeg",
      "",
    ],
    related: ["SHIMOGA"]
  },
  SHIRDI: {
    title: "REEVA SUITES, SHIRDI - (LRIC Associated)",
    location: "📍 SHIRDI",
    rating: "⭐ 4.9",
    photos: "🖼 4 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "SHIRDI",
    about: `WELCOME To Hotel REEVA. Hotel REEVA is having Two Hotels in Shirdi. 1. Hotel Reeva Suites (Shirdi”s only ALL SUITES Hotel) 2. Hotel Reeva REGENCY (Premium 3 Star Hotel) Both the hotels are located just 10 Minutes walking distance from Shri Sai Baba Temple, in a peaceful area at 112 Shirdi-Shiv Road, Nighoj, Shirdi. Shirdi being a pilgrimage circuit (Shri Sai Baba) and the other popular temples in the city are Dwarkamai Temple, Chawadi Temple, Gurusthan, Sakuri Temple and Shani Shingnapur. Hotel is located 125 Kms from Aurangabad Airport, Kopargaon Railway Station (19 Kms) Sai Nagar Station, Shirdi (2 Kms), Shirdi Bus Stand (1 Km).

Hotel REEVA SUITES having 15 modern Suite Rooms. The guestrooms provided are affordable yet offers some of the premium 5 Star facilities. Each Suite Room can accommodate upto 4 adults, having 2 rooms inside and 2 separate attached bathrooms. Rates are on double occupancy any extra pax will be charged as an additional. The executive suite has bedroom and lounge with sofa cum bed & both rooms are having Air conditioner. Common room amenities are; Free WIFI, Safe Deposit, Tea/Coffee maker, Daily newspaper, Telephone, Satellite TV, 24 Hours Hot Water, 24 Hours Auto Power Backup, Premium Toiletries etc. Hotel Reeva REGENY – Having 45 AC Superior Rooms, with all premium amenities, each room is equipped with Queen Bed, Satellite TV, Hotel Water, Toiletries, In Room Safe, Free WIFI, 24 Hours Power backup

Hotel amenities include ample free car parking and lush green garden with children play area. It has round the clock security system and ultra-modern elevators with 24 hours auto power back up. In house Pure Veg Restaurant “REEVA LOUNGE”`,
    map: "https://www.google.com/maps?q=Hotel+Reeva+Shirdi&output=embed",
    images: ["./Assest/hotel/SHIRDI/SHIRDI (1).jpeg",
      "./Assest/hotel/SHIRDI/SHIRDI (2).jpeg",
      "",
    ],
    related: ["SHIRDI"]
  },
  SOMNATH: {
    title: "LORDS INN, SOMNATH - (LRIC Associated)",
    location: "📍 SOMNATH",
    rating: "⭐ 4.8",
    photos: "🖼 4 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "SOMNATH",
    about: `Lords Inn Somnath has 58 well equipped luxurious rooms for utmost guest comfort with all the essential amenities to ensure unforgettable accommodation in Somnath. Lords Inn Somnath is a true value luxury hotel located at a distance of just 2 km from the famous shrine. Somnath is also ideally located for a post pilgrimage visit to Sasan Gir. The banqueting and conferencing facilities can accommodate upto 150 pax. The hotel can also host weddings and parties in its Garden lawn.

Stay at the best 3-star hotel in Somnath and enjoy its exceptional facilities Lords Inn located at Veraval Somnath offers an affordable and comfortable stay for business as well as leisure travellers. It is located just 2.5 km from Somnath temple and offers an outdoor pool and fitness centre.

The well known Someshwar Mahadev Jyotirling is located at a distance of 1 km while Bhalka Tirth is 3 km from the hotel. Somnath railway station is only 300 meters while the Somnath bus stand is 1 km away from Lords Inn.

The Veraval railway station is 5 km from the hotel. The closest airport is the Diu Airport located 85 km. The Rajkot Civil Airport is located at a distance of 200 km. Lords Inn offers swimming pool and a fitness center for the fitness enthusiasts.

Their business centre, and meeting rooms cater to the needs of corporate travellers. At the banquet facility, one can arrange events. Accessible path of travel is ensured for the physically challenged and free Wi-Fi facility is available for all guests.

Lords Inn has 58 well-equipped rooms. It offers a combination of deluxe rooms and suite rooms. Each room offers free internet, bottled water, tea/coffee maker along with access to the swimming pool. Other amenities include complimentary toiletries, daily housekeeping, a safe deposit box at reception and valet parking for the guests.

Room service is also available for the resident guests. The hotel has an all-day dining restaurant named Blue Coriander that offers multi-cuisine offerings in both buffet spread and a-la-carte menu. The Caf is a coffee shop here that offers hot beverages and snacks.`,
    map: "https://www.google.com/maps?q=Lords+Inn+Somnath&output=embed",
    images: ["./Assest/hotel/SOMNATH/SOMNATH (1).jpeg",
      "./Assest/hotel/SOMNATH/SOMNATH (2).jpeg",
      "",
    ],
    related: ["SOMNATH"]
  },
  VISAKHAPATNAM: {
    title: "Fairfield By Marriott, VISAKHAPATNAM - (LRIC Associated)",
    location: "📍 VISAKHAPATNAM",
    rating: "⭐ 4.3",
    photos: "🖼 4 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "VISAKHAPATNAM",
    about: `Treat yourself to an exceptional stay at Fairfield by Marriott Visakhapatnam. Located in the heart of the city, our hotel is near NAD Junction, beautiful beaches, famous temples, numerous shops, and 3.8 Kms to the airport, making it the perfect choice for every traveler. Recharge in upscale rooms and suites which feature allergy-friendly flooring, indulgent bedding, mini-refrigerators, complimentary Wi-Fi and floor-to-ceiling windows.
Suites offer generous living rooms, marble bathrooms and grocery services, perfect for traveling families. Take advantage of our free Grab n’ Go breakfast, complimentary parking and 24-hour fitness centre. Enjoy delicious international fare, including a popular buffet, at our sunlight-infused restaurant, or share appetizers and cocktails at our bar. If a business conference, wedding or social event brings you to our Visakhapatnam hotel, you’ll be delighted with our versatile venues, our rooftop pool, and custom catering.`,
    map: "https://www.google.com/maps?q=Fairfield+by+Marriott+Visakhapatnam&output=embed",
    images: ["./Assest/hotel/VISAKHAPATNAM/VISAKHAPATNAM (1).jpeg",
      "./Assest/hotel/VISAKHAPATNAM/VISAKHAPATNAM (6).jpeg",
      "",
    ],
    related: ["VISAKHAPATNAM", "VISAKHAPATNAM1", "VISAKHAPATNAM2"]
  },
  VISAKHAPATNAM1: {
    title: "Fortune Inn Sree Kanya, VISAKHAPATNAM - (LRIC Associated)",
    location: "📍 VISAKHAPATNAM",
    rating: "⭐ 4.3",
    photos: "🖼 4 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "VISAKHAPATNAM",
    about: `Fortune Inn Sree Kanya is a contemporary business hotel conveniently located in one of the largest cities of Andhra Pradesh, Visakhapatnam; offering 68 well-appointed rooms, elegant conferencing and banqueting space, a well-equipped gymnasium, along with a wide range of services and modern amenities.

Visakhapatnam, popularly known as Vizag, is nestled amongst the hills of the Eastern Ghats and faces the Bay of Bengal. It is said to be the heart of the Indian Naval Defense, as the Eastern Naval Command is located here. Vizag is primarily an industrial city and is home to several heavy industries like Vizag steel plant, Hindustan Petroleum Corporation Limited, and some major organizations like Shipyard, NSTL and Naval Command. Visakhapatnam is one of the leading ports in Asia as it handles the maximum cargo in the country. Vizag also attracts a large number of tourists for its unspoilt beaches, nearby scenic valleys and caves, thus making it a rare mixture of a city with a magical past and a vibrant present.

Situated in the heart of this port city, Fortune Inn Sree Kanya is just 11 km from the airport and 2.5 km from the railway station making it a preferred destination for business and leisure transit travelers for a restful and comfortable stay in Vizag.`,
    map: "https://www.google.com/maps?q=Fortune+Inn+Sree+Kanya+Visakhapatnam&output=embed",
    images: ["./Assest/hotel/VISAKHAPATNAM/VISAKHAPATNAM (4).jpeg",
      "./Assest/hotel/VISAKHAPATNAM/VISAKHAPATNAM (5).jpeg",
      "",
    ],
    related: ["VISAKHAPATNAM", "VISAKHAPATNAM1", "VISAKHAPATNAM2"]
  },
  VISAKHAPATNAM3: {
    title: "Four Points by Sheraton Marriott International, Visakhapatnam, VISAKHAPATNAM - (LRIC Associated)",
    location: "📍 VISAKHAPATNAM",
    rating: "⭐ 4.3",
    photos: "🖼 4 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "VISAKHAPATNAM",
    about: `Four Points by Sheraton – Marriott International Visakhapatnam is 25 minutes’ drive from Visakhapatnam Airport. Conveniently located in the city center with close proximity to the Ramakrishna beach, Business hub, and major shopping avenues. The hotel is located 600 meters from HSBC, 850 meters from WNS and less than 1 km from Concentrix. Located close to key business districts of Visakhapatnam such as Eastern Naval Command, Naval Dockyard & Hindustan Petroleum Corporation Limited. Four Points by Sheraton – Marriott Intl. Visakhapatnam is 5 mins drive from Ramakrishna Beach, 20 mins drive from Kailashgiri and 5 mins drive from Submarine Museum. The hotel is designed artistically with the lobby, open corridors, and unrestricted concept of height, light & space that gives a feeling of luxury. The hotel features a huge atrium lobby & luxury spa. It offers free parking, complimentary Wi-Fi, an ozonized outdoor pool and a separate kid’s pool, 24 hours fitness center with certified trainer & a 24 hours concierge service. The hotel offers the most spacious rooms in the city with the comfort of premium bedding, an armchair, and ample workspace. It comes with a tea & coffeemaker, Iron & Ironing board, Hairdryer, free daily newspapers, and luxury bath amenities. The hotel houses several meeting rooms, a business center, and a tour desk. The “Eatery” offers local and international cuisine while the “Best Brews” bar offers beverages and 24 hours in-room dining facility. The hotel is well known for its Culinary excellence, variety & exclusive dining options as the Poolside. Four Points Visakhapatnam prides itself on the elegance and uniqueness of a Four Points while assuring the quality and promise of Marriott Hotels.`,
    map: "https://www.google.com/maps?q=Four+Points+by+Sheraton+Visakhapatnam&output=embed",
    images: ["./Assest/hotel/VISAKHAPATNAM/VISAKHAPATNAM (2).jpeg",
      "./Assest/hotel/VISAKHAPATNAM/VISAKHAPATNAM (3).jpeg",
      "",
    ],
    related: ["VISAKHAPATNAM", "VISAKHAPATNAM1", "VISAKHAPATNAM2"]
  },
  VRINDAVAN: {
    title: "VRINDA ANANDAM RESORT, VRINDAVAN - (LRIC Associated)",
    location: "📍 VRINDAVAN",
    rating: "⭐ 4.6",
    photos: "🖼 4 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "VRINDAVAN",
    about: `Defined by sheer elegance and style, Vrinda Anandam Resort raises the bar for luxury hospitality in Vrindavan for the first time. Located in the heart of Vrindavan, Vrinda Anandam Resort provide the ideal settings for those who would like to live the ultimate lifestyle with the same comfort and practicality as those of their own homes. The Resort has 35 1 BHK and is open for destination weddings, family vacations, spiritual wellness. come and explore the nature and get indulge in the spirituality of Lord Krishna…

Owing to an Apartment in the lush green areas of Vrinda Anandam, one can be assured of well-planned parks and lawns, better facilities and amenities, all at one place.`,
    map: "https://www.google.com/maps?q=Vrinda+Anandam+Resort+Vrindavan&output=embed",
    images: ["./Assest/hotel/VRINDAVAN/VRINDAVAN (1).jpeg",
      "./Assest/hotel/VRINDAVAN/VRINDAVAN (2).jpeg",
      "",
    ],
    related: ["VRINDAVAN"]
  },
  WAYANAD: {
    title: "Adithya Nature Resort-Best Resort in Wayanad, WAYANAD - (LRIC Associated)",
    location: "📍 WAYANAD",
    rating: "⭐ 4.6",
    photos: "🖼 4 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "WAYANAD",
    about: `Set deep in the lush womb of a tropical rainforest on the slopes of the Western Ghat mountains, Adithya Nature Resort Wayanad, Vythiri – The Best Nature Resort in Wayanad –is where the primal forces of nature come alive on a landscape lush with rain trees, a fascinating array of fauna and flora, alive with a symphony of birds calling out, barking deer, the trumpeting of an elephant and so much more. A sensory journey in every aspect, exult in communion.`,
    map: "https://www.google.com/maps?q=Adithya+Nature+Resort+Wayanad&output=embed",
    images: ["./Assest/hotel/WAYANAD/WAYANAD (3).jpeg",
      "./Assest/hotel/WAYANAD/WAYANAD (4).jpeg",
      "",
    ],
    related: ["WAYANAD", "WAYANAD1"]
  },
  WAYANAD1: {
    title: "Wayanad Contour Island Resort and Spa, WAYANAD - (LRIC Associated)",
    location: "📍 WAYANAD",
    rating: "⭐ 4.2",
    photos: "🖼 2 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "WAYANAD",
    about: `Hidden deep in the lush green Banasura hills of Wayanad, is the paradise on earth, Contour Island Resort & Spa with rooms and cottages overlooking the magical Banasura Sagar lake and the islands, the view is something straight out of a fairytale world! The infinity pool is the best place to spend your day relaxing with your loved ones. If seclusion is what you seek, you can opt for your own private pool cottage. At contour Island resort, our team of specialized chefs works to fulfill your culinary desires. Rejuvenate your mind, body, and soul at our Ayurveda spa and return a new you. Come, experience nature as your only neighbour.
The rustic and beautiful interiors with it’s most luxurious and romantic furnishings blends itself with the kerala traditional charm and sets the scene of nature and forest from the resort for a memorable stay at Contour Island resort & Spa in Wayanad,`,
    map: "https://www.google.com/maps?q=Contour+Island+Resort+and+Spa&output=embed",
    images: ["./Assest/hotel/WAYANAD/WAYANAD (1).jpeg",
      "./Assest/hotel/WAYANAD/WAYANAD (2).jpeg",
      "",
    ],
    related: ["WAYANAD", "WAYANAD1"]
  },
  GUJARAT: {
    title: "Club Embark @ Shilpi Hill Resort, GUJARAT - (LRIC Associated)",
    location: "📍 GUJARAT",
    rating: "⭐ 4.6",
    photos: "🖼 4 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "GUJARAT",
    about: `Shilpi Hill Resort is the perfect get-away for friends and family longing to experience the serenity of long walks-ways, lush greens and lazy evenings. Visiting this home-away-from-home will reveal an old age fortress, sitting aloft a hillock surrounded by simple nature. Shilpi Hill Resort is just close enough to Gujarat and Mumbai to be easily accessible and yet far enough to offer a perfect hill-station weather.

In the calmness and coolness of this popular resort you will find modern amenities, courteous service and a feeling of being welcome. Shilpi Hill Resort – accommodation and vacations on naturally beautiful hill resort, saputara. From family vacations to outdoor recreation and business functions. Resort offers a full array of services to create a simple and pleasurable environment for your stay.`,
    map: "https://www.google.com/maps?q=Shilpi+Hill+Resort+Saputara&output=embed",
    images: ["./Assest/hotel/GUJARAT/GUJARAT (1).jpeg",
      "./Assest/hotel/GUJARAT/GUJARAT (2).jpeg",
      "./Assest/hotel/GUJARAT/GUJARAT (3).jpeg",
      "./Assest/hotel/GUJARAT/GUJARAT (4).jpeg"
    ],
    related: ["GUJARAT"]
  },
  DELHI: {
    title: "J.P.HOTEL AND RESORTS, Delhi - (LRIC Associated)",
    location: "📍 DELHI",
    rating: "⭐ 4.6",
    photos: "🖼 4 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "Delhi",
    about: `JP HOTEL & RESORTS is a unit of S.S Infrastructure, an emergent name in the hospitality industry. it is a refined, upscale, full service business hotel, offering 50 gracefully appointed rooms, a delicious complement of dining and lounge areas and conferencing space that perfectly blend functionality with finesse to ensure a distinguished hospitailty experience. 

The hotel looks forward to make guests feel at home and provide them with every possible support to make their journey to the top an enjoyable one and this is going to be achieved while ensuring welfare and well-being of the staff as well as the environment.`,
    map: "https://www.google.com/maps?q=J.P.HOTE+Delhi&output=embed",
    images: ["./Assest/hotel/DELHI/DELHI (1).png",
      "./Assest/hotel/DELHI/DELHI (2).png",
      "./Assest/hotel/DELHI/DELHI (3).png",
      "./Assest/hotel/DELHI/DELHI (4).png"
    ],
    related: ["DELHI"]
  },
  KERALA: {
    title: "Oxygen Resorts Alleppey, KERALA - (LRIC Associated)",
    location: "📍KERALA ",
    rating: "⭐ 4.6",
    photos: "🖼 4 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "KERALA",
    about: `Nestled parallel to the backwaters of Kerala, Haveli Backwater Resort is an idle place to lodge at your tour to Alleppey (Alappuzha). This posada offers a great view of backwaters and greenery on every side. Haveli Resort, as the name might prompt; exhibits a Rajasthani architect and built. Oozing with royalty and traditional décor, it is the most preferred and loved resorts by the tourists coming from in and around states. Members can avail a freewide parking space and a lavish swimming pool. And just when you’re about to settle in the hotel, you can hear the waters calling you from just across the road. Boat tours could be enjoyed from the main gate of the resort. And if you wish to indulge yourself in some body therapy, there is an in-house spa presenting traditional Ayurveda, Swedish Spa at your service. And is any hotel guide complete without talking about its food? Haveli resort offers a Multi-Cuisine restaurant named Sarangi serving all meal periods with the finest mouthwatering delights from all over the world.`,
    map: "https://www.google.com/maps?q=Oxygen+Resorts+Alleppey&output=embed",
    images: ["./Assest/hotel/KERALA/KERALA1 (1).webp",
      "./Assest/hotel/KERALA/KERALA1 (2).webp",
      "./Assest/hotel/KERALA/KERALA1 (3).webp",
    ],
    related: ["KERALA", "KERALA1", "KERALA2"]
  },
  KERALA1: {
    title: "La Flora Spicewood Resort, KERALA - (LRIC Associated)",
    location: "📍KERALA ",
    rating: "⭐ 4.6",
    photos: "🖼 4 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "KERALA",
    about: `Welcome to La Flora Spicewood Resort Munnar, we are one of the best resorts in Munnar providing the more meaningful way to spend your vacation holidays. The resort is situated just 4 hours’ drive from kochi and located in Suryanelli chinnakanal road on kannandevan hills providing the heaven of comfort and hospitality in each and every rooms. We are near to major view points and sight-seeing places. We are located near the Kolukkumala which is the world’s highest organic orthodox tea plantation.Members who want to venture out may bicycle down mountain trails, go for trekking, jeep safari, climb rocks, try to catch a rainbow trout or spend a day in a tea plantation. We offer Hight speed internet connection, Travel desk, Tour packages, Aruyvedic massage support, Doctor on call, Sightseeing facilities, Jeep safari, Trekking arrangements, Laundry, 24 hrs running hot and cold water.`,
    map: "https://www.google.com/maps?q=La+Flora+Spicewood+Munnar&output=embed",
    images: ["./Assest/hotel/KERALA/KERALA (6).jpeg",
      "./Assest/hotel/KERALA/KERALA (7).jpeg",
      "./Assest/hotel/KERALA/KERALA (8).jpeg",
      "./Assest/hotel/KERALA/KERALA (9).jpeg",
      "./Assest/hotel/KERALA/KERALA (10).jpeg"
    ],
    related: ["KERALA", "KERALA1", "KERALA2"]
  },
  KERALA2: {
    title: "Joys Munnar, KERALA - (LRIC Associated)",
    location: "📍KERALA ",
    rating: "⭐ 4.6",
    photos: "🖼 4 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "KERALA",
    about: `Munnar breathtakingly beautiful haven of peace and tranquility is the idyllic and sought-after tourist destination in God’s own country Kerala. A romantic location to explore and enjoy the beauty of life. Joys resort Munnar is located in Chinnakkanal and is characteristically designed to offer you a unique view of the vast tea estate and the mythical mountain peaks you can treat your taste buds at the Tea room, a multi-cuisine restaurant serving delicious food spanning a variety of cuisines. Munnar is recognized for having some of the best and most beautiful tea gardens across the globe.

Hence,the restaurant is also named as the Tea Garden restaurant. It provides delicious dishes in a homely ambience. Joys resort Munnar is a ravishing musical tale that sings of nature’s sublime beauty and your eternal romance with nature! Being here once will awaken your love for nature. Munnar is dotted with majestic waterfalls that are surrounded by beautiful mountains of Western Gats and walk through the aromatic tea gardens, scenic hills covered with green foliage and a camera in hand; there cannot be a better way to spend your evening! Joys Resort is truly the right destination to explore the beauty of Munnar.`,
    map: "https://www.google.com/maps?q=Joys+Resorts+Munnar+Kerala&output=embed",
    images: ["./Assest/hotel/KERALA/KERALA (5).jpeg",
      "./Assest/hotel/KERALA/KERALA (4).jpeg",
      "./Assest/hotel/KERALA/KERALA (3).jpeg",
      "./Assest/hotel/KERALA/KERALA (2).jpeg",
      ""
    ],
    related: ["KERALA", "KERALA1", "KERALA2"]
  },

  RAJASTHAN: {
    title: "TIGER DEN RESORT, RAJASTHAN - (LRIC Associated)",
    location: "📍 RAJASTHAN",
    rating: "⭐ 4.6",
    photos: "🖼 4 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "RAJASTHAN",
    about: `An ideal RE-SORT (yes, you will re-sort your self) to distress and detoxify away from the maddening crowd away from the constant ringing of your cell phones, emails, Internet and newspapers. You definitely deserve it, and we know you desire it as well. Come and live your dreams, of a peaceful life, close to nature, close to God, and above all close to yourself. Tiger Den Resort, nestled in the lap of nature provides you a sub line setting, for you feel the power of the Earth, Water, Fire, Space and the wild. Let the five elements, hidden in you for years, emerge and merge with surroundings.

Tiger Den Resort – inspired by nature and its charismatic beauty ensures your comfort by providing ethnic interiors for you to enjoy the tranquil surroundings. Crossing the hills and the deciduous trees, close to the endless horizons, taking wheels to the heart of the pristine forest; Beast, Experience immortal bliss and behold peace in your body, mind and soul. You will really hum the famous line by Robert Frost:

“Woods are lovely dark and deep, but I have promise to keep.
And miles to go before I sleep, and miles to go before I sleep.”`,
    map: "https://www.google.com/maps?q=Tiger+Den+Resort+Ranthambore&output=embed",

    images: ["./Assest/hotel/RAJASTHAN/RAJASTHAN (1).png",
      "./Assest/hotel/RAJASTHAN/RAJASTHAN (10).png",
      "./Assest/hotel/RAJASTHAN/RAJASTHAN (11).png",
      "./Assest/hotel/RAJASTHAN/RAJASTHAN (12).png"
    ],
    related: ["RAJASTHAN", "RAJASTHAN1", "RAJASTHAN2"]
  },
  RAJASTHAN1: {
    title: "TREEHOUSE THE PUGMARK, RAJASTHAN - (LRIC Associated)",
    location: "📍 RAJASTHAN",
    rating: "⭐ 4.6",
    photos: "🖼 4 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "RAJASTHAN",
    about: `Welcome to the Treehouse Pugmark Resort Nestled at the edge of Ranthambore National Park in Rajasthan and set over an area of 10 acres, Treehouse Pugmark is the true combination of sheer comfortability and resplendent luxury. The judicious blend of modern architecture and inventive landscaping are the glittering gem of the resort. And as far as services and facilities are concerned, Treehouse Pugmark has left no stone unturned in catering modern conveniences in order to serve all guests flawlessly.`,
    map: "https://www.google.com/maps?q=The+Pugmark+A+Wildlife+Resort+Ranthambore&output=embed",
    images: ["./Assest/hotel/RAJASTHAN/RAJASTHAN (9).png",
      "./Assest/hotel/RAJASTHAN/RAJASTHAN (8).png",
      "./Assest/hotel/RAJASTHAN/RAJASTHAN (7).png",
      "./Assest/hotel/RAJASTHAN/RAJASTHAN (6).png"
    ],
    related: ["RAJASTHAN", "RAJASTHAN1", "RAJASTHAN2"]
  },
  RAJASTHAN2: {
    title: "TODAY’S SUNRISE, RAJASTHAN - (LRIC Associated)",
    location: "📍 RAJASTHAN",
    rating: "⭐ 4.6",
    photos: "🖼 4 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "RAJASTHAN",
    about: `Newly refurbished and enamored with luxury, Treehouse Sunrise Resort is one of the best hotels in Neemrana. Situated in close proximity to Gurgaon and Delhi, Treehouse Sunrise Resort in Neemrana is not only perfect for corporate and business tourists, but also for families looking for a fun weekend. Spread over 10 acres with just 24 rooms, it is the perfect place to relax, repose and re-energize in. Whether looking for a stopover en route Jaipur or searching for the perfect getaway for the weekend or seeking a hotel for your business associate, Treehouse Sunrise Resort, Neemrana hotel fills in all the blanks providing its distinct and affordable services to a gamut of clientele. Soak in the spectacular views of the Aravalli Range, unwind with a dip in the pool, watch your kids have fun at skating, or simply sit in your private garden or private sit out overlooking the verdant green, there are facilities galore to be experienced at the Treehouse Sunrise Resort.`,
    map: "https://www.google.com/maps?q=TODAYS+SUNRISE+LUXURY+RESORT+Neemrana&output=embed",
    images: ["./Assest/hotel/RAJASTHAN/RAJASTHAN (2).png",
      "./Assest/hotel/RAJASTHAN/RAJASTHAN (3).png",
      "./Assest/hotel/RAJASTHAN/RAJASTHAN (4).png",
      "./Assest/hotel/RAJASTHAN/RAJASTHAN (5).png"
    ],
    related: ["RAJASTHAN", "RAJASTHAN1", "RAJASTHAN2"]
  },
  HARIDWAR: {
    title: "KHANNA PALACE, HARIDWAR - (LRIC Associated)",
    location: "📍 HARIDWAR",
    rating: "⭐ 4.6",
    photos: "🖼 4 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "HARIDWAR",
    about: `Hotel Khanna Palace, located in the queen of holy cities, Haridwar, which is located at the bank of river Ganges and the hotel is within walking distance of some of the city’s best-known attractions including Harkipauri , Mansa Devi , Shanti Kunj , Chandi Devi , Bharat Mata Mandir , Pawan Dham and many other .The hotel is 27 kilometers from the sacred city with Adventure , Rishikesh . The elegant Khanna Palace the grand hotel, combines the classic beauty of this holy city with all the comforts and modern facilities.It offers a diverse range of superb accommodation choices in its 41 rooms,each expressing individuality and the exceptional standard.Also providing Elevator for easy accessiblity on the floors Whether you’re traveling for business, pleasure, or both, Khanna palalce offers all the comforts of home.`,
    map: "https://www.google.com/maps?q=Hotel+Khanna+Palace+Haridwar&output=embed",
    images: ["./Assest/hotel/HARIDWAR/HARIDWAR (1).webp",
      "./Assest/hotel/HARIDWAR/HARIDWAR (2).webp",
      "./Assest/hotel/HARIDWAR/HARIDWAR (3).webp",
      "./Assest/hotel/HARIDWAR/HARIDWAR (4).webp",
      "./Assest/hotel/HARIDWAR/HARIDWAR (5).webp"
    ],
    related: ["HARIDWAR", "HARIDWAR1"]
  },
  HARIDWAR1: {
    title: "HYPHEN GRAND, HARIDWAR - (LRIC Associated)",
    location: "📍 HARIDWAR",
    rating: "⭐ 4.6",
    photos: "🖼 4 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "HARIDWAR",
    about: `Hyphen Grand is one of the finest hotels located in Haridwar. It is located in Industrial hub of Haridwar, Sidcul, which offers consistent services at an extremely reasonable tariff. The hotel is ideal place for business travelers and tourists, Conferences, Meetings and Weddings. The hotel is a route to all the notable places of worships and hill stations in the area.

The Hotel has been designed for the modern-day business traveler. The hotel erases all your weariness away with its distinct comforts and luxuries. Plus, it has all the amenities that make your business trip stress-free and successful.`,
    map: "https://www.google.com/maps?q=Hyphen+Grand+Hotel+Haridwar&output=embed",
    images: ["./Assest/hotel/HARIDWAR/HARIDWAR (6).webp",
      "./Assest/hotel/HARIDWAR/HARIDWAR (7).webp",
      "./Assest/hotel/HARIDWAR/HARIDWAR (8).webp",
      "./Assest/hotel/HARIDWAR/HARIDWAR (9).webp",
      "./Assest/hotel/HARIDWAR/HARIDWAR (10).webp",
      "./Assest/hotel/HARIDWAR/HARIDWAR (11).webp"
    ],
    related: ["HARIDWAR", "HARIDWAR1"]
  },
  MAHARASHTRA: {
    title: "CHERILYN MONTA, Maharashtra - (LRIC Associated)",
    location: "📍 MAHARASHTRA",
    rating: "⭐ 4.1",
    photos: "🖼 8 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "MAHARASHTRA",
    about: `We have established a reputation as real estate developers who have built not just homes but lifestyles. A reputation based on a track record of promoting and marketing innovative real estate projects and completing them within the promised time and cost.

Since 1997 we have track record for our steadfast commitment to building Top Class Landmarks – Refined in Appearance with an emphasis on Quality and Concern for the Environment.

Ratnagiri is located on the western coast of Maharashtra. Some of the famous Ratnagiri attractions are Jaigad Fort, Jaigad lighthouse, Swayambhu Ganpati temple, Thibaw point, Ratnadurg fort, etc.`,
    map: "https://www.google.com/maps?q=Cherilyn+Monta+Resort&output=embed",
    images: [
      "./Assest/hotel/Maharashtra/Maharashtra (1).webp",
      "./Assest/hotel/Maharashtra/Maharashtra (2).webp",
      "./Assest/hotel/Maharashtra/Maharashtra (3).webp",
      "./Assest/hotel/Maharashtra/Maharashtra (4).webp",
      "./Assest/hotel/Maharashtra/Maharashtra (5).webp",
    ],
    related: ["MAHARASHTRA", "MAHARASHTRA1", "MAHARASHTRA2"]
  },
  MAHARASHTRA1: {
    title: "Olive Resort, Maharashtra - (LRIC Associated)",
    location: "📍 MAHARASHTRA",
    rating: "⭐ 4.3",
    photos: "🖼 9 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "MAHARASHTRA",
    about: `Set in Silāri, Olive Resort – Sillari Pench offers 3 accommodation with private balconies. Among the facilities of this property are a restaurant, a 24-hour front desk and room service, along with free WiFi. The property offers bike hire and features a garden and outdoor pool.

All guest rooms come with air conditioning, a flat-screen TV with cable channels, a fridge, a kettle, a shower, free toiletries and a desk. At the resort all rooms have a wardrobe and a private bathroom.

Guests at Olive Resort – Sillari Pench can enjoy a buffet breakfast.

The accommodation offers a terrace. You can play table tennis at Olive Resort – Sillari Pench, and the area is popular for cycling.`,
    map: "https://www.google.com/maps?q=Olive+Resort+Sillari+Pench&output=embed",
    images: [
      "./Assest/hotel/Maharashtra/Maharashtra (6).webp",
      "./Assest/hotel/Maharashtra/Maharashtra (7).webp",
      "./Assest/hotel/Maharashtra/Maharashtra (8).webp",
      "./Assest/hotel/Maharashtra/Maharashtra (9).webp",
      "./Assest/hotel/Maharashtra/Maharashtra (10).webp",
      "./Assest/hotel/Maharashtra/Maharashtra (11).webp",
      // "./Assest/hotel/Maharashtra/Maharashtra (5).webp"
    ],
    related: ["MAHARASHTRA", "MAHARASHTRA1", "MAHARASHTRA2"]
  },
  MAHARASHTRA3: {
    title: "KUMAR PLAZA, Maharashtra - (LRIC Associated)",
    location: "📍 MAHARASHTRA",
    rating: "⭐ 4.7",
    photos: "🖼 9 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "MAHARASHTRA",
    about: `Welcome to Matheran, Welcome to Hotel Kumar Plaza. Matheran a rain forest just 100 kms. from Bombay, a paradise with no pollution.

Kumar Plaza-The perfect Host, Located right in the Heart of Matheran, Kumar Plaza enjoys an unique vantage position. With the Mini Train railway station situcated in close proximity. to make your stay comfortable, all our rooms are elegantly furnished. Replete with all modern amenities like attached bath with hot ‘n’ cold shower, Satellite t.v., Indoor / Outdoor Games, pool Table, Children play Ground & Telephone facilities.

The Sumptuous Ala-Carte menu with excellent choice of exquisitely prepared Indian, Gujarati, Tandoori, Mughlai & Chinese food, using only the best and freshest ingredients available and prepared by our experts which can be enjoyed at the Restaurant, Fast Food or right in your room.
A conference room with all facilities for your Business.

Banqueting facilities available for your intimate gathering at Matheran`,
    map: "https://www.google.com/maps?q=Kumar+Plaza+Resort+Matheran&output=embed",
    images: [
      "./Assest/hotel/Maharashtra/Maharashtra (12).webp",
      "./Assest/hotel/Maharashtra/Maharashtra (13).webp",
      "./Assest/hotel/Maharashtra/Maharashtra (14).webp",
      "./Assest/hotel/Maharashtra/Maharashtra (15).webp",
      "./Assest/hotel/Maharashtra/Maharashtra (16).webp",
    ],
    related: ["MAHARASHTRA", "MAHARASHTRA1", "MAHARASHTRA2"]
  },

  GWALIOR: {
    title: "Clarks Inn Suites, Gwalior - (LRIC Associated)",
    location: "📍 GWALIOR",
    rating: "⭐ 4.6",
    photos: "🖼 4 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "Gwalior",
    about: `Situated in Gwalior, 400 m from Jai Vilas Palace, Clarks Inn Suites Gwalior features accommodation with a restaurant, free private parking, a fitness centre and a bar. All rooms boast a flat-screen TV with cable channels and a private bathroom. The accommodation provides an outdoor swimming pool, a 24-hour front desk, where staff can assist guests, as well as free WiFi throughout the property.

All rooms in the hotel are fitted with a kettle. Guest rooms will provide guests with a fridge.

Guests at Clarks Inn Suites Gwalior can enjoy a continental or a buffet breakfast.

The accommodation offers a terrace.

Teli Ka Mandir is 2.2 km from Clarks Inn Suites Gwalior, while Sasbahu Temple is 2.4 km from the property. The nearest airport is Gwalior, 13 km from the hotel, and the property offers a paid airport shuttle service.`,
    map: "https://www.google.com/maps?q=Clarks+Inn+Suites+Gwalior&output=embed",
    images: [
      "./Assest/hotel/Gwalior/Gwalior (1).webp",
      "./Assest/hotel/Gwalior/Gwalior (2).webp",
      "./Assest/hotel/Gwalior/Gwalior (3).webp",
      "./Assest/hotel/Gwalior/Gwalior (4).webp",
      "./Assest/hotel/Gwalior/Gwalior (5).webp",
      "./Assest/hotel/Gwalior/Gwalior (6).webp"
    ],
    related: ["GWALIOR"]
  },
  BHOPAL: {
    title: "Hotel Shubh Inn, Bhopal - (LRIC Associated)",
    location: "📍 BHOPAL",
    rating: "⭐ 4.6",
    photos: "🖼 4 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "Bhopal",
    about: `Hotel Shubh Inn is situated in Bhopal, within 7 km of Museum of Man and 8 km of Van Vihar National Park. Among the facilities of this property are a restaurant, a 24-hour front desk and room service, along with free WiFi. There is free private parking and the property features paid airport shuttle service.

At the hotel, rooms are fitted with a desk, a flat-screen TV and a private bathroom. The rooms at Hotel Shubh Inn have air conditioning and a wardrobe.

A continental breakfast is available each morning at the accommodation.

Kanha Fun City is 11 km from Hotel Shubh Inn, while People’s Mall is 15 km from the property. The nearest airport is Raja Bhoj Domestic Airport, 18 km from the hotel.`,
    map: "https://www.google.com/maps?q=Hotel+Shubh+Inn+Bhopal&output=embed",
    images: ["./Assest/hotel/Bhopal/Bhopal (1).webp",
      "./Assest/hotel/Bhopal/Bhopal (2).webp",
      "./Assest/hotel/Bhopal/Bhopal (3).webp",
      "./Assest/hotel/Bhopal/Bhopal (4).webp",
      "./Assest/hotel/Bhopal/Bhopal (5).webp"
    ],
    related: ["BHOPAL"]
  },
  DHARMSALA: {
    title: "ANUPAM RESORT, DHARMSALA - (LRIC Associated)",
    location: "📍 DHARMSALA",
    rating: "⭐ 4.6",
    photos: "🖼 4 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "DHARMSALA",
    about: `Finding an ideal hotel in McLeod Ganj does not have to be difficult. Welcome to Anupam Resort, a nice option for travellers like you. While staying at Anupam Resort, visitors can check out Tibet World (1.4 mi) and Tsechokling Gompa (1.5 mi), some of McLeod Ganj’s top attractions. The hotel offers room service and baggage storage, to make your visit even more pleasant. The property also features breakfast. Guests arriving by vehicle have access to free parking. When you’re feeling hungry, be sure to check out French Cafe, which is a French restaurant that is popular with locals and out-of-towners alike. Plus, during your trip, don’t forget to check out Naddi View Point (0.4 mi), Kalachakra Temple (1.2 mi), and Sunset Point (0.4 mi), some attractions that are a short walk from Anupam Resort.`,
    map: "https://www.google.com/maps?q=Anupam+Resort+By+DLS+Hotels+Naddi+Dharamshala&output=embed",
    images: ["./Assest/hotel/DHARMSALA/DHARMSALA (1).webp",
      "./Assest/hotel/DHARMSALA/DHARMSALA (2).webp",
      "./Assest/hotel/DHARMSALA/DHARMSALA (3).webp",
      "./Assest/hotel/DHARMSALA/DHARMSALA (4).webp",
      "./Assest/hotel/DHARMSALA/DHARMSALA (5).webp"
    ],
    related: ["DHARMSALA", "DHARMSALA1"]
  },
  DHARMSALA1: {
    title: "HOTEL DIVYANSH, DHARMSALA - (LRIC Associated)",
    location: "📍 DHARMSALA",
    rating: "⭐ 4.6",
    photos: "🖼 4 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "DHARMSALA",
    about: `See why so many travellers make Hotel Divyansh their small hotel of choice when visiting Dharamsala. Providing an ideal mix of value, comfort and convenience, it offers a family-friendly setting with an array of amenities designed for travellers like you. Hotel Divyansh features room service and newspaper. Plus, guests can enjoy an on-site restaurant, which has made this a popular choice among travellers visiting Dharamsala. For guests with a vehicle, free parking is available. While you’re here, be sure to check out some of the Asian restaurants, including Tibet Kitchen, White Rabbit Dhaba, and Black Magic, all of which are a short distance from Hotel Divyansh. At Hotel Divyansh, your comfort and satisfaction come first, and they look forward to welcoming you to Dharamsala.`,
    map: "https://www.google.com/maps?q=Hotel+Divyansh+By+VRB+Hotels+Dharamshala&output=embed",
    images: ["./Assest/hotel/DHARMSALA/DHARMSALA (6).webp",
      "./Assest/hotel/DHARMSALA/DHARMSALA (7).webp",
      "./Assest/hotel/DHARMSALA/DHARMSALA (8).webp",
      "./Assest/hotel/DHARMSALA/DHARMSALA (9).webp",
      "./Assest/hotel/DHARMSALA/DHARMSALA (10).webp",
      "./Assest/hotel/DHARMSALA/DHARMSALA (11).webp"
    ],
    related: ["DHARMSALA", "DHARMSALA1"]
  },
  HIMACHALPRADESH: {
    title: "Hotel The Holidays Club Nemo, HIMACHAL PRADESH - (LRIC Associated)",
    location: "📍 HIMACHAL",
    rating: "⭐ 4.6",
    photos: "🖼 4 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "HIMACHAL PRADESH",
    about: `Ideally situated in Manāli, The Holidays Club Nemo features air-conditioned rooms, a bar and a garden. Among the facilities of this property are a restaurant, a 24-hour front desk and room service, along with free WiFi throughout the property. Tibetan Monastery is 1.3 km away and Manu Temple is 3 km from the hotel.

All rooms in the hotel are fitted with a kettle. At The Holidays Club Nemo the rooms are fitted with a balcony, a private bathroom and a flat-screen TV.

Hidimba Devi Temple is 2.3 km from the accommodation, while Circuit House is 1.2 km from the property. The nearest airport is Kullu–Manali Airport, 51 km from The Holidays Club Nemo.`,
    map: "https://www.google.com/maps?q=Hotel+The+Holidays+Club+Nemo+Manali&output=embed",
    images: ["./Assest/hotel/HIMACHAL/HIMACHAL (1).webp",
      "./Assest/hotel/HIMACHAL/HIMACHAL (2).webp",
      "./Assest/hotel/HIMACHAL/HIMACHAL (3).webp",
      "./Assest/hotel/HIMACHAL/HIMACHAL (4).webp",
      "./Assest/hotel/HIMACHAL/HIMACHAL (5).webp",
      "./Assest/hotel/HIMACHAL/HIMACHAL (6).webp"
    ],
    related: ["HIMACHALPRADESH", "HIMACHALPRADESH1", "HIMACHALPRADESH2", "HIMACHALPRADESH3"]
  },
  HIMACHALPRADESH1: {
    title: "HOTEL DEVLOK, HIMACHAL PRADESH - (LRIC Associated)",
    location: "📍 HIMACHAL",
    rating: "⭐ 4.6",
    photos: "🖼 4 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "HIMACHAL PRADESH",
    about: `Hotel Devlok is 3 Star Property situated in the middle of an apple orchard with an excellent pine wood forest view and with in the Manali township. It is on the main Road which leads to Hadimba Devi Temple from circuit house. It is approx. 600 meteres from Himachal Tourism office and taxi stand at Mall. HOTEL DEVLOK is ideally located on the vintage point which is away from the hustle and bustle of the market and yet it is only a strolling distance away. All room command a panaromic view of the lust green surroundings . Hotel Devlok is having 12 Super Deluxe Room , 5 Deluxe and 2 Family Rooms . Hotel Devlok is sure to make your visit to Manali one worth remembering.`,
    map: "https://www.google.com/maps?q=Hotel+Devlok+Manali+Himachal+Pradesh&output=embed",
    images: ["./Assest/hotel/HIMACHAL/HIMACHAL (7).webp",
      "./Assest/hotel/HIMACHAL/HIMACHAL (8).webp",
      "./Assest/hotel/HIMACHAL/HIMACHAL (9).webp",
      "./Assest/hotel/HIMACHAL/HIMACHAL (10).webp",
      "./Assest/hotel/HIMACHAL/HIMACHAL (11).webp",
    ],
    related: ["HIMACHALPRADESH", "HIMACHALPRADESH1", "HIMACHALPRADESH2", "HIMACHALPRADESH3"]
  },
  HIMACHALPRADESH2: {
    title: "KARTIK COTTAGES, HIMACHAL PRADESH - (LRIC Associated)",
    location: "📍 HIMACHAL",
    rating: "⭐ 4.6",
    photos: "🖼 4 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "HIMACHAL PRADESH",
    about: `Kartik Cottage is an excellent choice of luxury accommodation in Manali that easily  surpasses top rated hotels. Carved out of grey sandstone and pinewood, the cottage boasts of fully modernized accommodation for couples and families. Developed in recent years the cottage is perfect combination for economical yet luxurious holidays in Manali.

The cottage is suitable for up to four couples on honeymoon or a medium size family on long vacations. The in house kitchen can be used for preparing meals by yourself. The cottage offers premium high quality luxury and comfort at fraction of budget. Give it a shot on your next holidays at Manali.`,
    map: "https://www.google.com/maps?q=Kartik+Cottages+Himachal+Pradesh&output=embed",
    images: ["./Assest/hotel/HIMACHAL/HIMACHAL (19).webp",
      "./Assest/hotel/HIMACHAL/HIMACHAL (2).webp",
      "./Assest/hotel/HIMACHAL/HIMACHAL (1).webp",
      "./Assest/hotel/HIMACHAL/HIMACHAL (10).webp",
      "./Assest/hotel/HIMACHAL/HIMACHAL (13).webp",
    ],
    related: ["HIMACHALPRADESH", "HIMACHALPRADESH1", "HIMACHALPRADESH2", "HIMACHALPRADESH3"]
  },
  HIMACHALPRADESH3: {
    title: "Hotel BrijVilla, HIMACHAL PRADESH - (LRIC Associated)",
    location: "📍 HIMACHAL",
    rating: "⭐ 4.6",
    photos: "🖼 4 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "HIMACHAL PRADESH",
    about: `Known for its pleasant climate and natural beauty, Dalhousie is one of the most famous hill stations in Himachal Pradesh, which reflects a perfect blend of modern India and old world charm, where British aura can be felt from its colonial architecture. Hotel BrijVilla is nestled on one of the highest peaks of Moti Tiba, above the circuit in the dense forest of Deodar trees. This exceptionally elegant property is a true paradise for family travelers as well as honeymooners. Crafted with colonial architecture and graceful aura of the hotel will bring you a heavenly abode and compel you to soak in its beauty will leave you awestruck. Also, experience unparalleled rejuvenation when you stay at the hotel with a spectacular view of distant mountain ranges.`,
    map: "https://www.google.com/maps?q=Brij+Villa+Dalhousie&output=embed",
    images: ["./Assest/hotel/HIMACHAL/HIMACHAL (14).webp",
      "./Assest/hotel/HIMACHAL/HIMACHAL (12).webp",
      "./Assest/hotel/HIMACHAL/HIMACHAL (13).webp",
    ],
    related: ["HIMACHALPRADESH", "HIMACHALPRADESH1", "HIMACHALPRADESH2", "HIMACHALPRADESH3"]
  },
  CHAIL: {
    title: "Mint Tarika Resort, Chail - (LRIC Associated)",
    location: "📍 CHAIL",
    rating: "⭐ 4.6",
    photos: "🖼 4 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "Chail",
    about: `Surrounded by thick forests on the beautiful hills of Chail, Mint Tarika Resort is 4 km from the world’s highest Chail Cricket Pitch. Its many outdoor activities include sunset golfing, river rafting and mountain trekking. Mint Tarika Resort is also uniquely equipped with heated swimming pool and spa bath. Free parking is available.

Cool mountain air flows through modern state of the art accommodation, which are equipped with a fan. All rooms come with a cable TV, minibar and hairdryer. All bathrooms have hot-water showers and guest can pamper themselves by using the spa bath offered in certain rooms.

The Spa features relaxing ayurvedic massage, while the gymnasium provides for a refreshing workout. Guest can also enjoy a game of pool or table tennis, whereas as kids can indulge in playing video games or board games at the indoor games room.

The multi cuisine restaurant, Mint Cafe serves a wide variety of delicious dishes. The in house discotheque is equipped with entertainment system to entertain the guest by spinning off musical classics. Guest also have an access to the Tuck Shop to satiate their needs for some quick munchies.`,
    map: "https://www.google.com/maps?q=Tarika+Resort+and+Spa+Chail&output=embed",
    images: ["./Assest/hotel/Chail/Chail (1).webp",
      "./Assest/hotel/Chail/Chail (2).webp",
      "./Assest/hotel/Chail/Chail (3).webp",
      "./Assest/hotel/Chail/Chail (4).webp",
      "./Assest/hotel/Chail/Chail (5).webp",
      "./Assest/hotel/Chail/Chail (6).webp"
    ],
    related: ["CHAIL", "CHAIL1"]
  },
  CHAIL1: {
    title: "TREEHOUSE CHAIL VILLAS, Chail - (LRIC Associated)",
    location: "📍 CHAIL",
    rating: "⭐ 4.6",
    photos: "🖼 4 Photos",
    category: "LRIC Associated",
    country: "India",
    city: "Chail",
    about: `Perched high up in Chail amidst the Shivalik hills, Treehouse Chail Villas offers breathtaking panoramic views of the majestic valleys with clear views of Shimla and Kasauli. Chail, the most beautiful hill station, is isolated in Himachal Pradesh, spreading across 3 hills. Situated over the hilltop and nestled amidst pristine apple and peach orchards, travelers looking for best Chail hotels.`,
    map: "https://www.google.com/maps?q=TreeHouse+Chail+Villas&output=embed",
    images: ["./Assest/hotel/Chail/Chail (7).webp",
      "./Assest/hotel/Chail/Chail (8).webp",
      "./Assest/hotel/Chail/Chail (9).webp",
      "./Assest/hotel/Chail/Chail (10).webp",
      "./Assest/hotel/Chail/Chail (11).webp",
      "./Assest/hotel/Chail/Chail (12).webp"
    ],
    related: ["CHAIL", "CHAIL1"]
  },

  RANTHAMBHORE: {
    title: "Nahargarh Ranthambhore, Ranthambhore - (LRIC Associated)",
    location: "📍 RANTHAMBHORE",
    rating: "⭐ 4.6",
    photos: "🖼 4 Photos",
    city: "RANTHAMBHORE",
    category: "LRIC Associated",
    country: "India",
    about: `Luxuriate in, Discover Wildlife and create fond memories that you'll treasure
at the royal palace of Nahargarh in Ranthambhore

Nahargarh is magnificently poised near the forest of Ranthambhore, amidst the dense expanse of trees and abundant wildlife. This fascinating royal retreat is just a few yards away from Ranthambhore National Park- the Tiger inhabited wildlife sanctuary of Rajasthan. Stretched across acres of land, and encompassed by lush wilderness, Nahargarh dressed in ivory white fortification and set amidst thousands of trees offers a tranquil experience of royalty and wilderness. Nahargarh, the exuberant palace hotel is revered amongst the guests for being one of the most indulgent properties in Rajasthan; where adventurous safaris and tiger tour moments bring excitement to mornings, while evenings are more engaging with cultural performances.

Come; discover the fascinating holidays in Nahargarh featuring exceptional amenities, anticipatory service and mesmeric views of wildlife.`,
    map: "https://www.google.com/maps?q=Nahargarh+Ranthambhore&output=embed",
    images: [
      "./Assest/hotel/RANTHAMBHORE/Ranthambhore (1).webp",
      "./Assest/hotel/RANTHAMBHORE/Ranthambhore (2).webp",
      "./Assest/hotel/RANTHAMBHORE/Ranthambhore (3).webp",
      "./Assest/hotel/RANTHAMBHORE/Ranthambhore (4).webp",
      "./Assest/hotel/RANTHAMBHORE/Ranthambhore (5).webp"
    ],
    related: ["RANTHAMBHORE"]
  },

};


/* ---- MAIN UPDATE FUNCTION ---- */
let currentPropertyKey = "";
function updateProperty(key) {

  currentPropertyKey = key;

  const data = propertyData[key];
  if (!data) return;

  document.getElementById("propertyTitle").innerText = data.title;
  document.getElementById("propertyLocation").innerText = data.location;
  document.getElementById("propertyRating").innerText = data.rating;
  document.getElementById("propertyAbout").innerText = data.about;
  document.getElementById("quickCategory").innerText = data.category || "-";
  document.getElementById("quickCountry").innerText = data.country || "-";
  document.getElementById("quickCity").innerText = data.city || "-";
  document.getElementById("quickRating").innerText = data.rating || "-";

  document.getElementById("propertyMap").src = data.map;
  document.getElementById("mapAddress").innerText = data.location;

  const images = data.images || [];

  // helper function
  function setImageWithAlt(imgId, imgPath) {
    const img = document.getElementById(imgId);

    if (!img) return;

    img.src = imgPath || "";

    // extract file name → DARJEELING (2)
    const fileName = imgPath
      ? imgPath.split('/').pop().split('.').slice(0, -1).join('.')
      : "No Image";

    img.alt = fileName;

    // ❌ if image fails → show alt text
    img.onerror = function () {
      this.style.display = "none";

      let altBox = this.nextElementSibling;

      if (!altBox || !altBox.classList.contains("img-alt-text")) {
        altBox = document.createElement("div");
        altBox.className = "img-alt-text";
        this.parentNode.appendChild(altBox);
      }

      altBox.innerText = this.alt;
    };

    // ✅ if image loads → show image again
    img.onload = function () {
      this.style.display = "block";
      if (this.nextElementSibling?.classList.contains("img-alt-text")) {
        this.nextElementSibling.remove();
      }
    };
  }

  // apply to all images
  setImageWithAlt("mainGalleryImg", images[0]);
  setImageWithAlt("img1", images[1] || images[0]);
  setImageWithAlt("img2", images[2] || images[0]);
  setImageWithAlt("img3", images[3] || images[0]);
  setImageWithAlt("img4", images[4] || images[0]);

  // 🔥 AUTO PHOTO COUNT
  const extraPhotos = images.length > 1 ? images.length - 1 : 0;

  document.getElementById("propertyPhotos").innerText =
    `🖼 ${images.length} Photos`;

  document.getElementById("galleryPhotoCount").innerText =
    `+${extraPhotos} Photos`;

  // Related
  const relatedGrid = document.getElementById("relatedGrid");
  relatedGrid.innerHTML = "";

  if (data.related) {
    data.related.forEach(id => {

      const h = propertyData[id];
      if (!h) return;

      relatedGrid.innerHTML += `
        <div class="related-card" onclick="updateProperty('${id}')">
          <img src="${h.images[0] || ''}">
          <div class="card-body">
            <h3>${h.title}</h3>
            <p>${h.location}</p>
            <div class="card-bottom">
              <span>${h.rating}</span>
              <a href="#" class="view-btn">View</a>
            </div>
          </div>
        </div>
      `;
    });
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}


/* ---- MENU CLICK HANDLER ---- */

document.querySelectorAll(".dropdown-menu a, .exchange-popup-body a")
  .forEach(link => {

    link.addEventListener("click", function (e) {

      const key = this.dataset.key;

      // ONLY stop navigation when dynamic data is needed
      if (key) {
        e.preventDefault();
        updateProperty(key);

        document.getElementById("exchangePopup")?.classList.remove("active");
        document.getElementById("associatedPopup")?.classList.remove("active");

        // restore scroll
        document.body.classList.remove("lricNav-noScroll");

        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      // else → allow normal navigation

    });

  });

/* ---- DEFAULT LOAD ---- */
document.addEventListener("DOMContentLoaded", () => {

  // get all city names from HTML
  const cities = Array.from(
    document.querySelectorAll(".exchange-popup-body a")
  ).map(link => link.dataset.key);

  // filter only valid cities موجود in propertyData
  const validCities = cities.filter(city => propertyData[city]);

  // pick random city
  const randomCity = validCities[Math.floor(Math.random() * validCities.length)];

  // default load
  updateProperty(randomCity || "DARJEELING");

});