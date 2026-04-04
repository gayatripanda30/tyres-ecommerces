import tyre1 from "../assets/tyre1.png";
import tyre2 from "../assets/tyre2.png";
import tyre3 from "../assets/tyre3.png";
import tyre4 from "../assets/tyre4.png";
import tyre5 from "../assets/tyre5.png";
import tyre6 from "../assets/tyre6.png";


export const allTyres = [
 
  { id: 1, name: "SCORPION VERDE AS", brand: "pirelli", type: "All-Season", image: tyre1, rating: 4.6, price: 334, description: "Eco-friendly all-season tyre with superior grip", reviews: 1250, badge: "Best Seller", discount: 10 },
  { id: 2, name: "P ZERO", brand: "pirelli", type: "Performance", image: tyre2, rating: 4.8, price: 500, description: "Ultimate performance sports tyre", reviews: 2340, badge: "Premium", discount: 15 },
  { id: 3, name: "SCORPION AT PLUS", brand: "pirelli", type: "Off-Road", image: tyre3, rating: 4.5, price: 420, description: "All-terrain adventure tyre", reviews: 890, badge: "New", discount: 5 },
  { id: 8, name: "CINTURATO P7", brand: "pirelli", type: "Comfort", image: tyre1, rating: 4.7, price: 380, description: "Comfort-focused city driving tyre", reviews: 1567, badge: null, discount: 8 },
  { id: 9, name: "SCORPION VERDE ALL SEASON PLUS", brand: "pirelli", type: "All-Season", image: tyre2, rating: 4.4, price: 395, description: "Improved all-season performance", reviews: 756, badge: null, discount: 12 },
  { id: 10, name: "P ZERO CORSA", brand: "pirelli", type: "Performance", image: tyre3, rating: 4.9, price: 650, description: "Track-ready high-performance tyre", reviews: 3120, badge: "Premium", discount: 20 },
  { id: 11, name: "DIABLO ROSSO", brand: "pirelli", type: "Performance", image: tyre4, rating: 4.7, price: 480, description: "Motorcycle performance tyre", reviews: 892, badge: "Trending", discount: 10 },


  { id: 4, name: "PILOT SPORT 4", brand: "michelin", type: "Performance", image: tyre4, rating: 4.7, price: 960, description: "Premium performance with exceptional handling", reviews: 3210, badge: "Best Seller", discount: 18 },
  { id: 5, name: "PRIMACY 4", brand: "michelin", type: "Comfort", image: tyre5, rating: 4.5, price: 720, description: "Quiet and comfortable driving experience", reviews: 1567, badge: null, discount: 10 },
  { id: 12, name: "DEFENDER LTX M/S", brand: "michelin", type: "All-Season", image: tyre5, rating: 4.6, price: 410, description: "Long-lasting all-season SUV tyre", reviews: 2134, badge: "Best Seller", discount: 12 },
  { id: 13, name: "LATITUDE SPORT 3", brand: "michelin", type: "All-Season", image: tyre6, rating: 4.5, price: 380, description: "Dynamic SUV all-season tyre", reviews: 1678, badge: null, discount: 8 },
  { id: 14, name: "PILOT SPORT 4S", brand: "michelin", type: "Performance", image: tyre1, rating: 4.8, price: 1050, description: "Ultimate sports car tyre", reviews: 4521, badge: "Premium", discount: 22 },
  { id: 15, name: "CROSSCLIMATE 2", brand: "michelin", type: "All-Season", image: tyre2, rating: 4.7, price: 450, description: "All-weather performance tyre", reviews: 2876, badge: "Trending", discount: 15 },
  { id: 16, name: "PRIMACY 4 PLUS", brand: "michelin", type: "Comfort", image: tyre3, rating: 4.6, price: 780, description: "Premium comfort with safety", reviews: 1934, badge: "New", discount: 14 },


  { id: 6, name: "DUELER HP SPORT", brand: "bridgestone", type: "All-Season", image: tyre6, rating: 4.6, price: 325, description: "Durable all-season sports tyre", reviews: 1892, badge: "Best Seller", discount: 10 },
  { id: 7, name: "POTENZA RE003", brand: "bridgestone", type: "Performance", image: tyre1, rating: 4.4, price: 600, description: "Advanced performance technology", reviews: 1456, badge: null, discount: 12 },
  { id: 17, name: "TURANZA QuietTrack", brand: "bridgestone", type: "Comfort", image: tyre4, rating: 4.5, price: 520, description: "Whisper-quiet comfort tyre", reviews: 2345, badge: "Trending", discount: 16 },
  { id: 18, name: "ALENZA PLUS II", brand: "bridgestone", type: "All-Season", image: tyre5, rating: 4.7, price: 460, description: "Premium all-season luxury tyre", reviews: 2134, badge: "Premium", discount: 11 },
  { id: 19, name: "ECOPIA EP500", brand: "bridgestone", type: "Eco", image: tyre6, rating: 4.8, price: 550, description: "Eco-friendly fuel-efficient tyre", reviews: 3267, badge: "Best Seller", discount: 18 },
  { id: 20, name: "POTENZA S001", brand: "bridgestone", type: "Performance", image: tyre2, rating: 4.6, price: 750, description: "High precision performance tyre", reviews: 1809, badge: "Premium", discount: 14 },
  { id: 21, name: "DUELER A/T 697", brand: "bridgestone", type: "Off-Road", image: tyre3, rating: 4.4, price: 580, description: "Rugged off-road tyre", reviews: 1234, badge: "New", discount: 9 },
  { id: 22, name: "ZLX 4S", brand: "mrf", type: "All-Season", image: tyre4, rating: 4.5, price: 310, description: "Balanced traction and comfort for everyday driving", reviews: 920, badge: "Best Seller", discount: 12 },
  { id: 23, name: "ZVTV" , brand: "mrf", type: "Performance", image: tyre5, rating: 4.3, price: 360, description: "Sporty handling for fast road response", reviews: 680, badge: null, discount: 8 },
  { id: 24, name: "Apollo Alnac 4G", brand: "apollo", type: "All-Season", image: tyre1, rating: 4.4, price: 340, description: "Reliable grip and long tyre life", reviews: 1140, badge: "Trending", discount: 10 },
  { id: 25, name: "Apollo Aspire 4G", brand: "apollo", type: "Comfort", image: tyre2, rating: 4.2, price: 330, description: "Comfort-focused travel with low noise", reviews: 990, badge: null, discount: 7 },
  { id: 26, name: "CEAT Milaze X3", brand: "ceat", type: "Performance", image: tyre3, rating: 4.3, price: 355, description: "Responsive handling and stable cornering", reviews: 850, badge: "Premium", discount: 11 },
  { id: 27, name: "CEAT SecuraDrive", brand: "ceat", type: "All-Season", image: tyre4, rating: 4.4, price: 320, description: "Durable everyday tyre with long tread life", reviews: 760, badge: null, discount: 9 },
  { id: 28, name: "JK Tyre Elanzo H/T", brand: "jk", type: "All-Terrain", image: tyre5, rating: 4.1, price: 370, description: "Strong build for SUVs and light trucks", reviews: 620, badge: "New", discount: 10 },
  { id: 29, name: "JK Tyre Lander SUV", brand: "jk", type: "Off-Road", image: tyre6, rating: 4.0, price: 390, description: "Rugged traction for mud and gravel", reviews: 540, badge: null, discount: 12 },
  { id: 30, name: "TVS Eurogrip 4S", brand: "tvs", type: "All-Season", image: tyre1, rating: 4.2, price: 295, description: "Economic choice with consistent grip", reviews: 500, badge: null, discount: 8 },
  { id: 31, name: "TVS Roadpro", brand: "tvs", type: "Performance", image: tyre2, rating: 4.3, price: 345, description: "Enhanced steering response for urban roads", reviews: 470, badge: "Trending", discount: 10 },
];
