import watch from "./assets/Smartwatch.png";

// Data arrays for brands and sizes
const brands = ["Apple", "Samsung", "Garmin", "Fitbit", "Amazfit"];
const colors = ["Black", "Silver", "Gold", "Rose Gold", "Blue"];
const sizes = ["38mm", "40mm", "42mm", "44mm"];
const features = [
  "GPS",
  "Heart Rate Monitor",
  "Water Resistant",
  "Sleep Tracking",
  "Bluetooth",
];

const cart = [
  {
    id:1,
    title: "Titan x",
    Price: 250,
    Quantity: 3,
    image: watch,
  },
  {
    id:2,
    title: "Titan x",
    Price: 250,
    Quantity: 3,
    image: watch,
  },
  {
    id:3,
    title: "Titan x",
    Price: 250,
    Quantity: 3,
    image: watch,
  },
  {
    id:4,
    title: "Titan x",
    Price: 250,
    Quantity: 3,
    image: watch,
  },
  {
    id:5,
    title: "Titan x",
    Price: 250,
    Quantity: 3,
    image: watch,
  },
  {
    id:6,
    title: "Titan x",
    Price: 250,
    Quantity: 3,
    image: watch,
  },
  {
    id:7,
    title: "Titan x",
    Price: 250,
    Quantity: 3,
    image: watch,
  },
  {
    id:8,
    title: "Titan x",
    Price: 250,
    Quantity: 3,
    image: watch,
  },
  {
    id:9,
    title: "Titan x",
    Price: 250,
    Quantity: 3,
    image: watch,
  },
  {
    id:10,
    title: "Titan x",
    Price: 250,
    Quantity: 3,
    image: watch,
  },
  {
    id:11,
    title: "Titan x",
    Price: 250,
    Quantity: 3,
    image: watch,
  },
  {
    id:12,
    title: "Titan x",
    Price: 250,
    Quantity: 3,
    image: watch,
  },
  {
    id:13,
    title: "Titan x",
    Price: 250,
    Quantity: 3,
    image: watch,
  },
];

const products = [
  {
    productId: 1,
    title: "SmartWatch Pro Max",
    discount: "15%",
    price: 4500,
    ratings: 4.5,
  },
  {
    productId: 2,
    title: "FitTracker Elite",
    discount: "20%",
    price: 3200,
    ratings: 4.3,
  },
  {
    productId: 3,
    title: "TechTime Advanced",
    discount: "10%",
    price: 4999,
    ratings: 4.7,
  },
  {
    productId: 4,
    title: "HealthWave Plus",
    discount: "18%",
    price: 3800,
    ratings: 4.4,
  },
  {
    productId: 5,
    title: "ActiveLife SmartFit",
    discount: "25%",
    price: 2800,
    ratings: 4.1,
  },
  {
    productId: 6,
    title: "PulseSync Pro",
    discount: "12%",
    price: 4200,
    ratings: 4.6,
  },
  {
    productId: 7,
    title: "ChronoFit Pro",
    discount: "22%",
    price: 3500,
    ratings: 4.2,
  },
  {
    productId: 8,
    title: "MoveTech Ultra",
    discount: "30%",
    price: 1500,
    ratings: 4.0,
  },
  {
    productId: 9,
    title: "VitaPulse X",
    discount: "17%",
    price: 4000,
    ratings: 4.5,
  },
  {
    productId: 10,
    title: "SmartTime Explorer",
    discount: "28%",
    price: 2900,
    ratings: 4.3,
  },
  {
    productId: 11,
    title: "UltraFit Pro",
    discount: "19%",
    price: 2700,
    ratings: 4.6,
  },
  {
    productId: 12,
    title: "WellnessTracker 3000",
    discount: "23%",
    price: 3400,
    ratings: 4.2,
  },
  {
    productId: 13,
    title: "SmartPulse One",
    discount: "12%",
    price: 3900,
    ratings: 4.4,
  },
  {
    productId: 14,
    title: "HealthSync Elite",
    discount: "15%",
    price: 4200,
    ratings: 4.3,
  },
  {
    productId: 15,
    title: "FitTime Max",
    discount: "20%",
    price: 3300,
    ratings: 4.5,
  },
  {
    productId: 16,
    title: "PulseWave 2.0",
    discount: "28%",
    price: 3100,
    ratings: 4.1,
  },
  {
    productId: 17,
    title: "TrackFit Pro",
    discount: "14%",
    price: 3600,
    ratings: 4.6,
  },
  {
    productId: 18,
    title: "HealthTech 5000",
    discount: "24%",
    price: 2950,
    ratings: 4.4,
  },
  {
    productId: 19,
    title: "FitnessWave Plus",
    discount: "30%",
    price: 2200,
    ratings: 4.3,
  },
  {
    productId: 20,
    title: "SmartTrack Elite",
    discount: "18%",
    price: 3100,
    ratings: 4.2,
  },
  {
    productId: 21,
    title: "SmartWatch Pro Max",
    discount: "15%",
    price: 4500,
    ratings: 4.5,
  },
  {
    productId: 22,
    title: "FitTracker Elite",
    discount: "20%",
    price: 3200,
    ratings: 4.3,
  },
  {
    productId: 23,
    title: "TechTime Advanced",
    discount: "10%",
    price: 4999,
    ratings: 4.7,
  },
  {
    productId: 24,
    title: "HealthWave Plus",
    discount: "18%",
    price: 3800,
    ratings: 4.4,
  },
  {
    productId: 25,
    title: "ActiveLife SmartFit",
    discount: "25%",
    price: 2800,
    ratings: 4.1,
  },
  {
    productId: 26,
    title: "PulseSync Pro",
    discount: "12%",
    price: 4200,
    ratings: 4.6,
  },
  {
    productId: 27,
    title: "ChronoFit Pro",
    discount: "22%",
    price: 3500,
    ratings: 4.2,
  },
  {
    productId: 28,
    title: "MoveTech Ultra",
    discount: "30%",
    price: 1500,
    ratings: 4.0,
  },
  {
    productId: 29,
    title: "VitaPulse X",
    discount: "17%",
    price: 4000,
    ratings: 4.5,
  },
  {
    productId: 30,
    title: "SmartTime Explorer",
    discount: "28%",
    price: 2900,
    ratings: 4.3,
  },
];


export { cart, brands, colors, sizes, features, products };
