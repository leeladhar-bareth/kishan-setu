

export const farmerProfile = {
  name: "Ramesh Kumar",
  village: "Rampur, Uttar Pradesh",
  phone: "+91 98XXX-XX210",
  mandiDistance: "18 km",
  nearestMandi: "Azadpur Mandi",
  totalTrips: 14,
  totalSaved: 4820,
  rating: 4.8,
};

export const transporterProfile = {
  name: "Suresh Yadav",
  vehicle: "Tata Ace Gold",
  vehicleNo: "UP 32 AB 4421",
  capacity: "750 kg",
  rating: 4.9,
  tripsCompleted: 218,
  earningsThisMonth: 28750,
  pendingPayout: 4200,
  status: "Available",
};

export const farmerUpcomingTrips = [
  {
    id: "TRP-1082",
    crop: "Tomatoes",
    quantity: "400 kg",
    pickup: "Rampur Farm",
    drop: "Azadpur Mandi",
    date: "Today, 06:30 AM",
    transporter: "Suresh Yadav",
    vehicle: "Tata Ace Gold",
    fare: 620,
    status: "Driver En Route",
    progress: 35,
  },
  {
    id: "TRP-1083",
    crop: "Onions",
    quantity: "650 kg",
    pickup: "Rampur Farm",
    drop: "Azadpur Mandi",
    date: "Tomorrow, 07:00 AM",
    transporter: "Mohit Singh",
    vehicle: "Mahindra Bolero Pickup",
    fare: 940,
    status: "Confirmed",
    progress: 100,
  },
];

export const farmerPastTrips = [
  { id: "TRP-1061", crop: "Potato", qty: "500 kg", drop: "Azadpur Mandi", date: "12 Mar", fare: 780, status: "Delivered" },
  { id: "TRP-1044", crop: "Wheat", qty: "700 kg", drop: "Fatehpur Mandi", date: "28 Feb", fare: 1120, status: "Delivered" },
  { id: "TRP-1021", crop: "Cauliflower", qty: "200 kg", drop: "Azadpur Mandi", date: "14 Feb", fare: 410, status: "Delivered" },
  { id: "TRP-1008", crop: "Onions", qty: "600 kg", drop: "Lucknow Mandi", date: "02 Feb", fare: 1340, status: "Delivered" },
];

export const transporterTripRequests = [
  {
    id: "REQ-2201",
    farmer: "Ramesh Kumar",
    crop: "Tomatoes",
    quantity: "400 kg",
    pickup: "Rampur Farm, UP",
    drop: "Azadpur Mandi",
    distance: "18 km",
    date: "Today, 06:30 AM",
    offeredFare: 620,
    urgency: "Normal",
  },
  {
    id: "REQ-2202",
    farmer: "Geeta Devi",
    crop: "Onions",
    quantity: "650 kg",
    pickup: "Bisawan Village",
    drop: "Fatehpur Mandi",
    distance: "32 km",
    date: "Today, 09:00 AM",
    offeredFare: 1080,
    urgency: "Urgent",
  },
  {
    id: "REQ-2203",
    farmer: "Hari Prasad",
    crop: "Wheat Sacks",
    quantity: "700 kg",
    pickup: "Sundarpur",
    drop: "Azadpur Mandi",
    distance: "24 km",
    date: "Tomorrow, 06:00 AM",
    offeredFare: 880,
    urgency: "Normal",
  },
];

export const transporterActiveTrips = [
  {
    id: "TRP-1082",
    farmer: "Ramesh Kumar",
    crop: "Tomatoes",
    quantity: "400 kg",
    pickup: "Rampur Farm",
    drop: "Azadpur Mandi",
    fare: 620,
    eta: "06:48 AM",
    progress: 65,
  },
];

export const transporterHistory = [
  { id: "TRP-2188", crop: "Potato", fare: 780, distance: "22 km", date: "12 Mar", rating: 5 },
  { id: "TRP-2172", crop: "Wheat", fare: 1120, distance: "41 km", date: "28 Feb", rating: 5 },
  { id: "TRP-2155", crop: "Cauliflower", fare: 410, distance: "14 km", date: "14 Feb", rating: 4 },
  { id: "TRP-2139", crop: "Onions", fare: 1340, distance: "58 km", date: "02 Feb", rating: 5 },
];

export const transporterEarnings = [
  { month: "Sep", amount: 18200 },
  { month: "Oct", amount: 22400 },
  { month: "Nov", amount: 20100 },
  { month: "Dec", amount: 26800 },
  { month: "Jan", amount: 24300 },
  { month: "Feb", amount: 28750 },
];

export const nearbyTransporters = [
  { name: "Suresh Yadav", vehicle: "Tata Ace Gold", distance: "1.2 km", rating: 4.9, farePerKm: 22, eta: "8 min" },
  { name: "Mohit Singh", vehicle: "Bolero Pickup", distance: "2.8 km", rating: 4.7, farePerKm: 26, eta: "14 min" },
  { name: "Anil Verma", vehicle: "Eicher Pro", distance: "4.1 km", rating: 4.8, farePerKm: 30, eta: "22 min" },
  { name: "Deepak Rai", vehicle: "Tata Ace", distance: "5.6 km", rating: 4.6, farePerKm: 20, eta: "28 min" },
];

export const testimonials = [
  {
    name: "Geeta Devi",
    role: "Farmer, Bisawan",
    quote: "Pehle brokers 20-30% lete the. Kisan Setu se maine seedha transporter book kiya — ₹800 bach gaye ek trip mein!",
    img: "/images/farmer-portrait.jpg",
  },
  {
    name: "Suresh Yadav",
    role: "Transporter, Azadpur",
    quote: "Ab mujhe khali truck lekar wapas nahi aana padta. App se return trip bhi mil jaata hai. Commission zero hai!",
    img: "/images/transporter-portrait.jpg",
  },
  {
    name: "Hari Prasad",
    role: "Farmer, Sundarpur",
    quote: "Transparent pricing, koi hidden charge nahi. Subah book kiya, dopahar tak mandi pahunch gaya.",
    img: "/images/farmer-portrait.jpg",
  },
];

export const features = [
  {
    icon: "💰",
    title: "Zero Commission",
    desc: "Koi broker, koi hidden fee nahi. Farmer jo pay kare, transporter ko full amount milta hai.",
  },
  {
    icon: "🚛",
    title: "Nearby Transporters",
    desc: "Aapke khet ke 10 km radius mein verified transporters instantly available.",
  },
  {
    icon: "📍",
    title: "Live Tracking",
    desc: "Real-time location tracking — aapka crop kahan hai, aapki ungliyon par.",
  },
  {
    icon: "🌾",
    title: "Mandi Rates",
    desc: "Live mandi rates dekho, fair price paao, kisi middleman ki zaroorat nahi.",
  },
  {
    icon: "📱",
    title: "Works on Any Phone",
    desc: "Basic Android phone se bhi chalta hai. Hindi, English, aur regional languages.",
  },
  {
    icon: "🔒",
    title: "Secure Payments",
    desc: "UPI, cash on delivery — dono options. Payment guarantee hai Kisan Setu ki taraf se.",
  },
];

export const steps = [
  { n: 1, title: "Register as Farmer", desc: "Apna naam, gaon, aur crop details daalein. OTP verify karein." },
  { n: 2, title: "Post Your Requirement", desc: "Crop type, quantity, pickup, drop mandi — 30 seconds mein trip post." },
  { n: 3, title: "Get Instant Quotes", desc: "Nearby transporters se competitive fares milein. Transparent comparison." },
  { n: 4, title: "Book & Track", desc: "Confirm karein, live tracking se crop ko mandi tak pahunchate hue dekhein." },
];
