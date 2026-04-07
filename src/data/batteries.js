import battery1 from "../assets/battery1.png";
import battery2 from "../assets/battery.png";
import battery3 from "../assets/battery3.png";
import battery4 from "../assets/battery4.png";

export const Batteries = [
  {
    id: 1,
    name: "Exide 80D26R Heavy Duty",
    brand: "Exide",
    type: "Heavy Duty",

    // 💰 Pricing
    mrp: "22,100",
    price: "16,500",
    exchangePrice: "13,000",

    // 🔥 UI fields
    discount: "41.2% OFF",

    // ⭐ Extra (kept as you gave)
    rating: 4.5,
    reviews: 245,
    badge: "Best Seller",

    image: battery1,

    warranty: "36 Months (Full Replacement)",
    capacity: "80 Ah",

    description:
      "Heavy duty car battery with superior cold cranking ability",
  },

  {
    id: 2,
    name: "Amaron AAM-CR-55D26R",
    brand: "Amaron",
    type: "Advanced",

    mrp: "18,000",
    price: "14,200",
    exchangePrice: "11,500",

    discount: "35% OFF",

    rating: 4.7,
    reviews: 312,
    badge: "Premium",

    image: battery2,

    warranty: "48 Months",
    capacity: "55 Ah",

    description:
      "Advanced technology battery with enhanced performance",
  },

  {
    id: 3,
    name: "Luminous Red Charge 150",
    brand: "Luminous",
    type: "Standard",

    mrp: "20,500",
    price: "15,000",
    exchangePrice: "12,000",

    discount: "30% OFF",

    rating: 4.3,
    reviews: 189,
    badge: "New",

    image: battery3,

    warranty: "24 Months",
    capacity: "150 Ah",

    description: "Reliable standard battery for daily use",
  },

  {
    id: 4,
    name: "Tata Green 75D26R",
    brand: "Tata",
    type: "Green",

    mrp: "19,000",
    price: "14,500",
    exchangePrice: "11,800",

    discount: "28% OFF",

    rating: 4.4,
    reviews: 156,
    badge: "Trending",

    image: battery4,

    warranty: "36 Months",
    capacity: "75 Ah",

    description: "Eco-friendly battery technology",
  },

  {
    id: 5,
    name: "Bosch S4 005 74Ah",
    brand: "Bosch",
    type: "Premium",

    mrp: "25,000",
    price: "18,900",
    exchangePrice: "15,500",

    discount: "40% OFF",

    rating: 4.8,
    reviews: 428,
    badge: "Best Seller",

    image: battery1, // reuse if no image

    warranty: "60 Months",
    capacity: "74 Ah",

    description: "Premium quality battery with longest warranty",
  },

  {
    id: 6,
    name: "ACDelco DIN 55",
    brand: "ACDelco",
    type: "Standard",

    mrp: "21,000",
    price: "15,800",
    exchangePrice: "12,900",

    discount: "32% OFF",

    rating: 4.5,
    reviews: 267,
    badge: "Premium",

    image: battery2, // reuse if no image

    warranty: "42 Months",
    capacity: "55 Ah",

    description: "Reliable standard battery trusted worldwide",
  },
];