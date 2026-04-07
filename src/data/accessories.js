// ✅ IMPORT IMAGES
import floorMats from "../assets/accessories.png";
import steering from "../assets/accessories1.png";
import phone from "../assets/accessories2.png";
import headrest from "../assets/accessories3.png";
import purifier from "../assets/accessories2.png";
import seat from "../assets/accessories.png";
import dashcam from "../assets/accessories1.png";
import vacuum from "../assets/accessories3.png";
import wipers from "../assets/accessories.png";

export const accessories = [
  {
    id: 1,
    name: "Car Floor Mats (Set of 5)",
    brand: "Generic",
    type: "Interior",
    price: 1200,
    discount: 20,
    rating: 4.3,
    reviews: 145,
    badge: "Best Seller",
    image: floorMats, // ✅ UPDATED
    category: "Interior Accessories",
    description: "Premium quality car floor mats"
  },
  {
    id: 2,
    name: "Steering Wheel Cover",
    brand: "AutoCare",
    type: "Interior",
    price: 600,
    discount: 15,
    rating: 4.5,
    reviews: 234,
    badge: "Popular",
    image: steering,
    category: "Interior Accessories",
    description: "Comfortable steering wheel cover"
  },
  {
    id: 3,
    name: "Mobile Phone Holder",
    brand: "TechMount",
    type: "Modern",
    price: 800,
    discount: 10,
    rating: 4.6,
    reviews: 312,
    badge: "New",
    image: phone,
    category: "Tech Accessories",
    description: "Dashboard mobile holder"
  },
  {
    id: 4,
    name: "Headrest Pillow (Pair)",
    brand: "ComfortMax",
    type: "Interior",
    price: 1500,
    discount: 12,
    rating: 4.4,
    reviews: 189,
    badge: "Best Seller",
    image: headrest,
    category: "Comfort Accessories",
    description: "Memory foam pillows"
  },
  {
    id: 5,
    name: "Car Air Purifier",
    brand: "FreshAir",
    type: "Air Quality",
    price: 2500,
    discount: 18,
    rating: 4.7,
    reviews: 267,
    badge: "Premium",
    image: purifier,
    category: "Air Quality",
    description: "HEPA filter purifier"
  },
  {
    id: 6,
    name: "Seat Covers (Full Set)",
    brand: "StyleMax",
    type: "Interior",
    price: 3500,
    discount: 25,
    rating: 4.5,
    reviews: 423,
    badge: "Best Seller",
    image: seat,
    category: "Interior Accessories",
    description: "Premium seat covers"
  },
  {
    id: 7,
    name: "Dashboard Camera (4K)",
    brand: "VisionTech",
    type: "Security",
    price: 8500,
    discount: 20,
    rating: 4.8,
    reviews: 512,
    badge: "Premium",
    image: dashcam,
    category: "Security Accessories",
    description: "4K dashcam"
  },
  {
    id: 8,
    name: "Car Vacuum Cleaner",
    brand: "CleanPro",
    type: "Cleaning",
    price: 2200,
    discount: 15,
    rating: 4.4,
    reviews: 178,
    badge: "Trending",
    image: vacuum,
    category: "Cleaning Accessories",
    description: "Portable vacuum"
  },
  {
    id: 9,
    name: "Windshield Wipers",
    brand: "CleanGlass",
    type: "Maintenance",
    price: 600,
    discount: 10,
    rating: 4.3,
    reviews: 267,
    badge: "Popular",
    image: wipers,
    category: "Maintenance",
    description: "High quality wipers"
  },
];