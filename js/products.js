/**
 * VibeZone E-commerce - Products Management
 * This file contains all product data and core product functions
 */
/*i want to add of the products to the index.html file in the featured products section and 
have the function to switch between the products in the featured section and the other sections*/ 
// Product Database
const products = [
  // Cars Category
  {
    id: "car-001",
    name: "Tesla Model S Plaid",
    category: "cars",
    brand: "Tesla",
    price: 129990,
    oldPrice: 139990,
    discount: 7,
    stock: 5,
    sku: "CAR-TSLA-001",
    rating: 4.9,
    reviewCount: 124,
    isNew: true,
    isSale: true,
    isFeatured: true,
    tags: ["electric", "luxury", "sedan"],
    colors: ["red", "white", "black", "blue"],
    images: [
      "images/Tesla Model S.jpg",
      "main-images/cars/Tesla Model S-red.jpg",
      "main-images/cars/Tesla Model S-white.jpg",
      "img/products/cars/tesla-model-s-4.jpg",
    ],
    shortDescription: "The quickest production car ever made, with unbelievable performance and range.",
    description:
      "The Tesla Model S Plaid is the highest performing sedan ever built. With 1,020 peak horsepower, it can achieve 0-60 mph in just 1.99 seconds and reach a top speed of 200 mph. The tri-motor all-wheel drive platform provides more than 390 miles of range, making it not just the quickest, but also one of the most versatile electric vehicles on the road.",
    specifications: [
      { name: "Range", value: "390 miles" },
      { name: "Top Speed", value: "200 mph" },
      { name: "0-60 mph", value: "1.99 seconds" },
      { name: "Peak Power", value: "1,020 hp" },
      { name: "Wheels", value: '19" or 21"' },
      { name: "Weight", value: "4,766 lbs" },
      { name: "Cargo", value: "28 cu ft" },
      { name: "Seating", value: "Up to 5 adults" },
    ],
    reviews: [
     
      {
        id: "rev-car-001-2",
        author: "Sarah Williams",
        email: "sarah243@gmail.com",
        rating: 4,
        title: "Amazing car with a few quirks",
        content:
          "The performance is unmatched, and the range is excellent. The only downsides are the yoke steering wheel, which takes some getting used to, and occasional software glitches.",
        date: "2023-04-22",
      },
    ],
    dateAdded: "2023-01-10",
  },
  {
    id: "car-002",
    name: "Hyundai i20",
    category: "cars",
    brand: "Hyundai",
    price: 35000,
    oldPrice: 38000,
    discount: 5,
    stock: 3,
    sku: "CAR-HYUN-002",
    rating: 4.7,
    reviewCount: 86,
    isNew: true,
    isSale: false,
    isFeatured: true,
    tags: ["compact", "hatchback", "city"],
    colors: ["black", "white", "gray", "red"],
    images: ["main-images/cars/Hyundai i20.jpg", "main-images/cars/hyundai i20-white.jpg", "main-images/cars/Hyundai i20 interior.jpg"],
    shortDescription: "The first all-electric BMW 7 Series, combining luxury and sustainability.",
    description:
      "The Hyundai i20 is a compact hatchback that offers a perfect blend of style, performance, and technology. With its sporty design, advanced safety features, and efficient engine options, the i20 is ideal for city driving. The spacious interior is equipped with the latest infotainment system, providing a comfortable and connected driving experience.",
    specifications: [
      { name: "Range", value: "318 miles" },
      { name: "Top Speed", value: "149 mph" },
      { name: "0-60 mph", value: "4.5 seconds" },
      { name: "Peak Power", value: "536 hp" },
      { name: "Wheels", value: '19" to 21"' },
      { name: "Weight", value: "5,917 lbs" },
      { name: "Cargo", value: "17.7 cu ft" },
      { name: "Seating", value: "5 adults" },
    ],
    reviews: [
      {
        id: "rev-car-002-1",
        author: "Robert Chen",
        email: "Ashley@gmail.com",
        rating: 5,
        title: "The ultimate luxury EV",
        content:
          "The i20 is a game-changer. The design is stunning, and the performance is exhilarating. The interior is luxurious, and the tech features are top-notch. A must-have for any EV enthusiast.",
        date: "2023-06-02",
      },
    ],
    dateAdded: "2023-02-15",
  },
  {
    id: "car-003",
    name: "Toyota Camry",
    category: "cars",
    brand: "Toyota",
    price: 75000,
    oldPrice: 90000,
    discount: 6,
    stock: 2,
    sku: "CAR-TOY-003",
    rating: 4.1,
    reviewCount: 92,
    isNew: false,
    isSale: true,
    isFeatured: true,
    tags: ["sedan", "luxury", "hybrid"],
    colors: ["silver", "black", "red", "white"],
    images: [
      "main-images/cars/Toyota Camry-black.jpg",
      "main-images/cars/Toyota Camry-red.jpg",
      "main-images/cars/Toyota Camry-interior.jpg",
    ],
    shortDescription: "A four-door coupe with the heart of a supercar.",
    description:
      "The Toyota Camry is a mid-size sedan that offers a luxurious and comfortable driving experience. With its sleek design, advanced safety features, and efficient hybrid engine, the Camry is a popular choice for families and business travelers alike. The spacious interior is equipped with the latest infotainment system, providing a comfortable and connected driving experience.",
    specifications: [
      { name: "Engine", value: "2.5L hybrid" },
      { name: "Top Speed", value: "149 mph" },
      { name: "0-60 mph", value: "7.5 seconds" },
      { name: "Horsepower", value: "208 hp" },
      { name: "Torque", value: "184 lb-ft" },
      { name: "Transmission", value: "Continuously Variable Transmission (CVT)" },
      { name: "Drivetrain", value: "Front-wheel drive" },
      { name: "Seating", value: "5 adults" },
    ],
    reviews: [
      {
        id: "rev-car-003-1",
        author: "James Wilson",
        email: "james342@gmail.com",
        rating: 5,
        title: "A perfect blend of performance and practicality",
        content:
          "The Toyota Camry is a perfect blend of performance and practicality. The hybrid engine provides excellent fuel efficiency, and the interior is luxurious and comfortable. Highly recommended!",
        date: "2023-03-18",
      },
    ],
    dateAdded: "2022-11-05",
  },
  {
    id: "car-004",
    name: "Toyota Vitz",
    category: "cars",
    brand: "Toyota",
    price: 35000,
    stock: 4,
    sku: "CAR-TOY-004",
    rating: 3.6,
    reviewCount: 78,
    isNew: false,
    isSale: false,
    isFeatured: false,
    tags: ["compact", "hatchback", "city"],
    colors: ["gray", "black", "blue", "white"],
    images: [
      "main-images/cars/vitz-blue.jpg",
      "main-images/cars/vitz-interior.jpg",
      "main-images/cars/vitz-silver.jpg",
      
    ],
    shortDescription: "Compact hatchback with efficient performance and modern design.",
    description:
      "The Toyota Vitz is a compact hatchback that combines efficient performance with modern design. With its agile handling, spacious interior, and advanced safety features, the Vitz is perfect for city driving. The latest model includes a range of engine options, including hybrid variants, ensuring excellent fuel efficiency without compromising on performance.",
    specifications: [
      { name: "Range", value: "510 miles" },
      { name: "Top Speed", value: "155 mph" },
      { name: "0-60 mph", value: "9.2 seconds" },
      { name: "Peak Power", value: "97 hp" },
      { name: "Wheels", value: '15" or 16"' },
      { name: "Weight", value: "2,780 lbs" },
      { name: "Cargo", value: "28.5 cu ft" },
      { name: "Seating", value: "5 adults" },
    ],
    reviews: [
      {
        id: "rev-car-004-1",
        author: "Emily Rodriguez",
        email: "emily@gmail.com",
        rating: 4,
        title: "Beautiful design, impressive performance",
        content:
          "The RS e-tron GT is a head-turner. The design is gorgeous, and the performance is impressive. Range could be better, but charging is quick with the right infrastructure.",
        date: "2023-01-30",
      },
    ],
    dateAdded: "2022-12-20",
  },
  {
    id: "car-005",
    name: "Toyota Vitz",
    category: "cars",
    brand: "Toyota",
    price: 85000,
    stock: 3,
    sku: "CAR-TOY-004",
    rating: 4.2,
    reviewCount: 78,
    isNew: false,
    isSale: false,
    isFeatured: false,
    tags: ["compact", "hatchback", "city"],
    colors: ["gray", "black", "blue", "white"],
    images: [
      "main-images/cars/toyotacorolla-blue.jpg",
      "main-images/cars/toyotacorolla-interior.jpg",
      "main-images/cars/toyotacorolla-gray.jpg",
      
    ],
    shortDescription: "Compact hatchback with efficient performance and modern design.",
    description:
      "The Toyota Corolla is a compact hatchback that combines efficient performance with modern design. With its agile handling, spacious interior, and advanced safety features, the Corolla is perfect for city driving. The latest model includes a range of engine options, including hybrid variants, ensuring excellent fuel efficiency without compromising on performance.",
    specifications: [
      { name: "Range", value: "510 miles" },
      { name: "Top Speed", value: "155 mph" },
      { name: "0-60 mph", value: "9.2 seconds" },
      { name: "Peak Power", value: "97 hp" },
      { name: "Wheels", value: '15" or 16"' },
      { name: "Weight", value: "2,780 lbs" },
      { name: "Cargo", value: "28.5 cu ft" },
      { name: "Seating", value: "5 adults" },
    ],
    reviews: [
      {
        id: "rev-car-004-1",
        author: "Emily Rodriguez",
        email: "emily@gmail.com",
        rating: 4,
        title: "Beautiful design, impressive performance",
        content:
          "The RS e-tron GT is a head-turner. The design is gorgeous, and the performance is impressive. Range could be better, but charging is quick with the right infrastructure.",
        date: "2023-01-30",
      },
    ],
    dateAdded: "2022-12-20",
  },


  // Houses Category
  {
    id: "house-001",
    name: "Modern Beachfront Villa",
    category: "houses",
    brand: "Luxury Estates",
    price: 4500000,
    stock: 1,
    sku: "HOUSE-LUX-001",
    rating: 4.9,
    reviewCount: 42,
    isNew: true,
    isSale: false,
    isFeatured: true,
    tags: ["beachfront", "modern", "villa", "luxury"],
    colors: ["white", "gray"],
    images: [
      "main-images/houses/Modern Beachfront Villa.jpg",
      "main-images/houses/Modern Beachfront Villa-living room.jpg",
      "main-images/houses/Modern Beachfront-bedroom.jpg",
      
    ],
    shortDescription: "Stunning modern beachfront villa with panoramic ocean views.",
    description:
      "This exceptional modern beachfront villa offers the ultimate luxury lifestyle with direct beach access and panoramic ocean views. The 6,500 sq ft residence features 5 bedrooms, 6 bathrooms, and expansive living areas with floor-to-ceiling windows that blur the line between indoor and outdoor living. The property includes an infinity pool, outdoor kitchen, private beach access, and a 3-car garage. State-of-the-art smart home technology, sustainable design elements, and premium finishes throughout make this an unparalleled offering.",
    specifications: [
      { name: "Size", value: "6,500 sq ft" },
      { name: "Bedrooms", value: "5" },
      { name: "Bathrooms", value: "6" },
      { name: "Lot Size", value: "0.75 acres" },
      { name: "Year Built", value: "2022" },
      { name: "Garage", value: "3 cars" },
      { name: "Pool", value: "Infinity edge" },
      { name: "View", value: "Ocean" },
    ],
    reviews: [
      {
        id: "rev-house-001-1",
        author: "Thomas Wright",
        email: "thomas@example.com",
        rating: 5,
        title: "Architectural masterpiece",
        content:
          "I had the pleasure of touring this property, and it's truly an architectural masterpiece. The integration of indoor and outdoor spaces is seamless, and the quality of construction is exceptional.",
        date: "2023-05-10",
      },
    ],
    dateAdded: "2023-03-15",
  },
  {
    id: "house-002",
    name: "classicBrichRanch",
    category: "houses",
    brand: "City Living",
    price: 2850000,
    oldPrice: 3100000,
    discount: 8,
    stock: 1,
    sku: "HOUSE-CITY-002",
    rating: 4.7,
    reviewCount: 36,
    isNew: false,
    isSale: true,
    isFeatured: true,
    tags: ["penthouse", "loft", "urban", "luxury"],
    colors: ["custom"],
    images: [
      "main-images/houses/classicBrichRanch.jpg",
      "main-images/houses/classicBrich-night.jpg",
      "main-images/houses/classicBrichRanch-interior.jpg",
    ],
    shortDescription: "Spectacular penthouse loft with panoramic city views.",
    description:
      "This spectacular penthouse loft is located in the heart of the city, offering breathtaking views and luxurious living. The 3,200 sq ft space features 3 bedrooms, 3.5 bathrooms, and an expansive open floor plan with high ceilings and large windows. The gourmet kitchen is equipped with top-of-the-line appliances, and the living area opens to a private rooftop terrace with stunning skyline views. Additional features include a home office, gym, and two parking spaces.",
    specifications: [
      { name: "Size", value: "3,200 sq ft" },
      { name: "Bedrooms", value: "3" },
      { name: "Bathrooms", value: "3.5" },
      { name: "Terrace", value: "1,000 sq ft" },
      { name: "Year Built", value: "2020 (converted)" },
      { name: "Parking", value: "2 spaces" },
      { name: "Ceiling Height", value: "14 feet" },
      { name: "View", value: "City skyline" },
    ],
    reviews: [
      {
        id: "rev-house-002-1",
        author: "Alexandra Kim",
        email: "alexandra@example.com",
        rating: 5,
        title: "Urban luxury at its finest",
        content:
          "This penthouse defines urban luxury. The views are spectacular, and the attention to detail in the design is impressive. The rooftop terrace is an entertainer's dream.",
        date: "2023-02-28",
      },
    ],
    dateAdded: "2022-12-10",
  },
  {
    id: "house-003",
    name: "Mountain Retreat Estate",
    category: "houses",
    brand: "Alpine Properties",
    price: 3750000,
    stock: 1,
    sku: "HOUSE-ALP-003",
    rating: 4.8,
    reviewCount: 29,
    isNew: true,
    isSale: false,
    isFeatured: false,
    tags: ["mountain", "estate", "retreat", "luxury"],
    colors: ["wood", "stone", "custom"],
    images: [
      "images/Accra hs.jpg",
      "images/Accra 2.jpg",
      "images/Accra bedroom.jpg",
    ],
    shortDescription: "Luxurious mountain estate with breathtaking views.",
    description:
      "This magnificent mountain retreat estate spans 5,800 sq ft on 10 acres of pristine land with breathtaking mountain views. The residence features 4 bedrooms, 5 bathrooms, and expansive living areas with soaring ceilings, exposed beams, and floor-to-ceiling windows that frame the spectacular landscape. The property includes a gourmet kitchen, wine cellar, home theater, outdoor living areas with fireplace, hot tub, and a 4-car garage. Sustainable features include solar power, geothermal heating, and smart home technology.",
    specifications: [
      { name: "Size", value: "5,800 sq ft" },
      { name: "Bedrooms", value: "4" },
      { name: "Bathrooms", value: "5" },
      { name: "Lot Size", value: "10 acres" },
      { name: "Year Built", value: "2021" },
      { name: "Garage", value: "4 cars" },
      { name: "Elevation", value: "7,200 feet" },
      { name: "View", value: "Mountain range" },
    ],
    reviews: [
      {
        id: "rev-house-003-1",
        author: "Daniel Morgan",
        email: "daniel@example.com",
        rating: 5,
        title: "A true mountain sanctuary",
        content:
          "This property is a masterpiece of mountain architecture. The integration with the natural surroundings is perfect, and the quality of construction is outstanding. A true sanctuary.",
        date: "2023-04-15",
      },
    ],
    dateAdded: "2023-01-20",
  },
  {
    id: "house-004",
    name: "Contemporary Countryside Manor",
    category: "houses",
    brand: "Heritage Homes",
    price: 2950000,
    oldPrice: 3200000,
    discount: 8,
    stock: 1,
    sku: "HOUSE-HER-004",
    rating: 4.6,
    reviewCount: 24,
    isNew: false,
    isSale: true,
    isFeatured: true,
    tags: ["countryside", "manor", "contemporary", "luxury"],
    colors: ["custom"],
    images: [
      "images/kumsi hs.jpg",
      "images/Kumasi 2.jpg",
      "images/Tadi Kitchen.jpg",
    ],
    shortDescription: "Elegant contemporary manor set in idyllic countryside.",
    description:
      "This elegant contemporary manor offers 4,800 sq ft of sophisticated living on 5 acres of meticulously landscaped grounds. The residence features 5 bedrooms, 4.5 bathrooms, and thoughtfully designed living spaces that blend traditional architecture with modern amenities. Highlights include a chef's kitchen with butler's pantry, formal dining room, library, home office, and primary suite with luxury bathroom. The grounds feature manicured gardens, a swimming pool, tennis court, guest cottage, and a 3-car garage.",
    specifications: [
      { name: "Size", value: "4,800 sq ft" },
      { name: "Bedrooms", value: "5" },
      { name: "Bathrooms", value: "4.5" },
      { name: "Lot Size", value: "5 acres" },
      { name: "Year Built", value: "2019" },
      { name: "Garage", value: "3 cars" },
      { name: "Guest House", value: "800 sq ft" },
      { name: "Pool", value: "Heated" },
    ],
    reviews: [
      {
        id: "rev-house-004-1",
        author: "Victoria Adams",
        email: "victoria@example.com",
        rating: 4,
        title: "Classic elegance with modern comfort",
        content:
          "This manor strikes the perfect balance between classic elegance and modern comfort. The grounds are stunning, and the interior spaces are beautifully proportioned.",
        date: "2023-03-05",
      },
    ],
    dateAdded: "2022-11-15",
  },

  // Phones Category
  {
    id: "phone-001",
    name: "iPhone 14 Pro Max",
    category: "phones",
    brand: "Apple",
    price: 2,
    stock: 25,
    sku: "PHONE-APL-001",
    rating: 4.8,
    reviewCount: 352,
    isNew: true,
    isSale: false,
    isFeatured: true,
    tags: ["smartphone", "ios", "premium"],
    colors: ["graphite", "silver", "gold", "purple"],
    images: [
      "main-images/phones/iphone 14.jpg",
      "main-images/phones/iphone 16 pro.jpg",
      "main-images/phones/iphone 14-2.jpg",
    ],
    shortDescription: "Apple's most advanced iPhone with Dynamic Island and A16 Bionic chip.",
    description:
      "The iPhone 14 Pro Max features a 6.7-inch Super Retina XDR display with ProMotion technology and the innovative Dynamic Island. Powered by the A16 Bionic chip, it delivers exceptional performance and efficiency. The pro camera system includes a 48MP main camera with quad-pixel sensor, ultra wide, and telephoto lenses. Additional features include Action mode for smooth video, Crash Detection, Emergency SOS via satellite, and all-day battery life.",
    specifications: [
      { name: "Display", value: '6.7" Super Retina XDR' },
      { name: "Processor", value: "A16 Bionic" },
      { name: "Storage", value: "128GB, 256GB, 512GB, 1TB" },
      { name: "Main Camera", value: "48MP (main), 12MP (ultra wide), 12MP (telephoto)" },
      { name: "Front Camera", value: "12MP TrueDepth" },
      { name: "Battery", value: "Up to 29 hours video playback" },
      { name: "Water Resistance", value: "IP68" },
      { name: "Dimensions", value: "160.7 x 77.6 x 7.85 mm" },
    ],
    reviews: [
      
      {
        id: "rev-phone-001-2",
        author: "Olivia Martinez",
        email: "olivia@example.com",
        rating: 4,
        title: "Great phone with minor issues",
        content:
          "The camera and display are outstanding. The only downsides are the weight and the fact that it still uses Lightning instead of USB-C.",
        date: "2023-04-12",
      },
    ],
    dateAdded: "2022-09-16",
  },
  {
    id: "phone-002",
    name: "Samsung Galaxy S23 Ultra",
    category: "phones",
    brand: "Samsung",
    price: 3450,
    oldPrice: 4299,
    discount: 8,
    stock: 18,
    sku: "PHONE-SMSNG-002",
    rating: 4.7,
    reviewCount: 286,
    isNew: true,
    isSale: true,
    isFeatured: true,
    tags: ["smartphone", "android", "premium"],
    colors: ["phantom black", "cream", "green", "lavender"],
    images: [
      "main-images/phones/Samsung Galaxy S23 Ultra.jpg",
      "main-images/phones/Samsung Galaxy S23 Ultra-2.jpg",
      "main-images/phones/Samsung Galaxy S23 Ultra-black.jpg",
    ],
    shortDescription: "Samsung's ultimate flagship with S Pen and 200MP camera.",
    description:
      "The Samsung Galaxy S23 Ultra features a 6.8-inch Dynamic AMOLED 2X display with adaptive 120Hz refresh rate and built-in S Pen. Powered by the Snapdragon 8 Gen 2 processor, it delivers exceptional performance for gaming and multitasking. The revolutionary camera system includes a 200MP main sensor, plus ultra wide, and dual telephoto lenses with up to 100x Space Zoom. Additional features include a 5,000mAh battery with fast charging, IP68 water resistance, and Samsung Knox security.",
    specifications: [
      { name: "Display", value: '6.8" Dynamic AMOLED 2X' },
      { name: "Processor", value: "Snapdragon 8 Gen 2" },
      { name: "Storage", value: "256GB, 512GB, 1TB" },
      { name: "Main Camera", value: "200MP (main), 12MP (ultra wide), 10MP (3x telephoto), 10MP (10x telephoto)" },
      { name: "Front Camera", value: "12MP" },
      { name: "Battery", value: "5,000mAh" },
      { name: "Water Resistance", value: "IP68" },
      { name: "Dimensions", value: "163.4 x 78.1 x 8.9 mm" },
    ],
    reviews: [
      {
        id: "rev-phone-002-1",
        author: "Jason Lee",
        email: "jason@example.com",
        rating: 5,
        title: "The ultimate Android phone",
        content:
          "The S23 Ultra is a powerhouse. The camera system is incredible, especially in low light, and the S Pen functionality adds another dimension to the smartphone experience.",
        date: "2023-03-15",
      },
    ],
    dateAdded: "2023-02-01",
  },
  {
    id: "phone-003",
    name: "iphone 11",
    category: "phones",
    brand: "Apple",
    price: 3100,
    oldPrice: 3300,
    discount: 10,
    stock: 12,
    sku: "PHONE-APL-003",
    rating: 4.6,
    reviewCount: 218,
    isNew: false,
    isSale: true,
    isFeatured: false,
    tags: ["smartphone", "ios", "premium"],
    colors: ["purple", "black", "white", "red"],
    images: [
      "main-images/phones/iphone 11-black.jpg",
      "main-images/phones/iphone 11-mutli-coloured.jpg",
      "main-images/phones/iphone 11-white.jpg",
    ],
    shortDescription: "Google's flagship with advanced AI capabilities and exceptional camera.",
    description:
      "The Google Pixel 7 Pro features a 6.7-inch LTPO OLED display with 120Hz refresh rate and the Google Tensor G2 chip for advanced AI capabilities. The pro-level camera system includes a 50MP main sensor, 12MP ultrawide, and 48MP telephoto with 5x optical zoom. Exclusive features include Photo Unblur, Magic Eraser, and Real Tone for authentic skin tones. The phone runs pure Android with 5 years of security updates and includes features like Live Translate and the best of Google Assistant.",
    specifications: [
      { name: "Display", value: '6.7" LTPO OLED' },
      { name: "Processor", value: "Google Tensor G2" },
      { name: "Storage", value: "128GB, 256GB, 512GB" },
      { name: "Main Camera", value: "50MP (main), 12MP (ultra wide), 48MP (telephoto)" },
      { name: "Front Camera", value: "10.8MP" },
      { name: "Battery", value: "5,000mAh" },
      { name: "Water Resistance", value: "IP68" },
      { name: "Dimensions", value: "162.9 x 76.6 x 8.9 mm" },
    ],
    reviews: [
      {
        id: "rev-phone-003-1",
        author: "Sophia Clark",
        email: "sophia@example.com",
        rating: 4,
        title: "Best camera phone with great software",
        content:
          "The camera system on the Pixel 7 Pro is outstanding, especially for still photography. Google's software features like Magic Eraser are genuinely useful. Battery life could be better, but fast charging helps.",
        date: "2023-01-25",
      },
    ],
    dateAdded: "2022-10-13",
  },
  {
    id: "phone-004",
    name: "iphone 16",
    category: "phones",
    brand: "Apple",
    price: 15000,
    stock: 15,
    sku: "PHONE-APL-004",
    rating: 4.5,
    reviewCount: 176,
    isNew: true,
    isSale: false,
    isFeatured: true,
    tags: ["smartphone", "ios", "premium"],
    colors: ["pink", "teal", "black", "white"],
    images: [
      "main-images/phones/iphone 16-pink.jpg",
      "main-images/phones/iphone 16-blue.jpg",
      "main-images/phones/iphone 16-teal.jpg",
    ],
    shortDescription: "Flagship performance with Hasselblad camera system.",
    description:
      "The OnePlus 11 features a 6.7-inch AMOLED display with 120Hz refresh rate and LTPO 3.0 technology. Powered by the Snapdragon 8 Gen 2 processor, it delivers exceptional performance for gaming and everyday tasks. The triple camera system co-developed with Hasselblad includes a 50MP main sensor, 48MP ultrawide, and 32MP portrait lens. Additional features include 100W SUPERVOOC fast charging, a 5,000mAh battery, and OxygenOS based on Android 13.",
    specifications: [
      { name: "Display", value: '6.7" AMOLED LTPO 3.0' },
      { name: "Processor", value: "Snapdragon 8 Gen 2" },
      { name: "Storage", value: "128GB, 256GB" },
      { name: "Main Camera", value: "50MP (main), 48MP (ultra wide), 32MP (portrait)" },
      { name: "Front Camera", value: "16MP" },
      { name: "Battery", value: "5,000mAh" },
      { name: "Charging", value: "100W SUPERVOOC" },
      { name: "Dimensions", value: "163.1 x 74.1 x 8.53 mm" },
    ],
    reviews: [
      {
        id: "rev-phone-004-1",
        author: "Kevin Zhang",
        email: "kevin@example.com",
        rating: 5,
        title: "Incredible value flagship",
        content:
          "The OnePlus 11 offers flagship performance at a more reasonable price than competitors. The display is gorgeous, performance is snappy, and the camera system is much improved. The 100W charging is a game-changer.",
        date: "2023-04-05",
      },
    ],
    dateAdded: "2023-01-04",
  },

  // Watches Category
  {
    id: "watch-001",
    name: "Apple Watch Series 7",
    category: "watches",
    brand: "Apple",
    price: 2720,
    stock: 6,
    sku: "WATCH-RLX-001",
    rating: 4.9,
    reviewCount: 128,
    isNew: false,
    isSale: false,
    isFeatured: true,
    tags: ["luxury", "smartwatch", "waterproof"],
    colors: ["black", "blue", "green"],
    images: [
      "main-images/watches/series 7-black.jpg",
      "main-images/watches/series 7-back.jpg",
      "main-images/watches/series 7-white.jpg",
    ],
    shortDescription: "The ultimate smartwatch with advanced health features.",
    description:
      "The Apple Watch Series 7 is the ultimate smartwatch, featuring a larger always-on display, advanced health monitoring capabilities, and seamless integration with iOS devices. It includes features like ECG, blood oxygen monitoring, and fitness tracking. The watch is water-resistant up to 50 meters and offers a variety of customizable bands and watch faces. With its sleek design and powerful performance, the Series 7 is perfect for both fitness enthusiasts and everyday users.",
    specifications: [
      { name: "Display", value: "45mm or 41mm OLED Retina display" },
      { name: "Operating System", value: "watchOS 8" },
      { name: "Water Resistance", value: "50 meters" },
      { name: "Health Monitoring", value: "ECG, blood oxygen, and more" },  
      { name: "Fitness Tracking", value: "Heart rate, activity tracking, and more" },
      { name: "Battery Life", value: "Up to 18 hours" },
      { name: "Compatibility", value: "Works with iPhone 6s or later" },

    ],
   
    reviews: [
      {
        id: "rev-watch-001-1",
        author: "Christopher Davis",
        email: "christopher@example.com",
        rating: 5,
        title: "The ultimate diving watch",
        content:
          "The Submariner is the perfect blend of luxury and functionality. The build quality is exceptional, and it's versatile enough to wear with a suit or casual attire. A true icon that holds its value.",
        date: "2023-02-18",
      },
    ],
    dateAdded: "2022-08-10",
  },
  {
    id: "watch-002",
    name: "Omega Speedmaster Professional",
    category: "watches",
    brand: "Omega",
    price: 6400,
    oldPrice: 7000,
    discount: 9,
    stock: 5,
    sku: "WATCH-OMG-002",
    rating: 4.8,
    reviewCount: 96,
    isNew: false,
    isSale: true,
    isFeatured: true,
    tags: ["luxury", "chronograph", "manual"],
    colors: ["black"],
    images: [
      "main-images/watches/Omega Speedmaster Professional-1.jpg",
      "main-images/watches/Omega Speedmaster Professional-box.jpg",
      "main-images/watches/Omega Speedmaster Professional-silver.jpg",
    ],
    shortDescription: "The first watch worn on the moon.",
    description:
      'The Omega Speedmaster Professional, also known as the "Moonwatch," is the first watch worn on the moon during the Apollo 11 mission. This iconic chronograph features a 42mm stainless steel case with a black tachymeter bezel and a hesalite crystal. The black dial includes three subdials for timing functions. Powered by the manual-winding Calibre 1861 movement, it offers a 48-hour power reserve. The watch comes with a stainless steel bracelet and is water-resistant to 50 meters.',
    specifications: [
      { name: "Case Size", value: "42mm" },
      { name: "Case Material", value: "Stainless steel" },
      { name: "Movement", value: "Calibre 1861, Manual-winding" },
      { name: "Water Resistance", value: "50m (167ft)" },
      { name: "Power Reserve", value: "48 hours" },
      { name: "Bracelet", value: "Stainless steel" },
      { name: "Bezel", value: "Fixed tachymeter" },
      { name: "Dial", value: "Black with luminous hour markers" },
    ],
    reviews: [
      {
        id: "rev-watch-002-1",
        author: "Andrew Wilson",
        email: "andrew@example.com",
        rating: 5,
        title: "A piece of history on your wrist",
        content:
          "The Speedmaster Professional is more than just a watch; it's a piece of history. The manual winding movement is a joy to use, and the chronograph functions are precise. The hesalite crystal adds to its vintage charm.",
        date: "2023-03-22",
      },
    ],
    dateAdded: "2022-09-05",
  },
  {
    id: "watch-003",
    name: "Patek Philippe Nautilus",
    category: "watches",
    brand: "Patek Philippe",
    price: 35000,
    stock: 1,
    sku: "WATCH-PTEK-003",
    rating: 4.9,
    reviewCount: 64,
    isNew: true,
    isSale: false,
    isFeatured: true,
    tags: ["luxury", "sports", "automatic"],
    colors: ["blue", "green", "white"],
    images: [
      "main-images/watches/Patek Philippe Nautilus-black.jpg",
      "main-images/watches/Patek Philippe Nautilus-gold.jpg",
      "main-images/watches/Patek Philippe Nautilus-silver.jpg",
    ],
    shortDescription: "One of the most coveted luxury sports watches in the world.",
    description:
      "The Patek Philippe Nautilus is one of the most iconic luxury sports watches ever created. Designed by the legendary Gérald Genta, it features a distinctive porthole-shaped case in stainless steel measuring 40mm. The blue dial with horizontal embossing is complemented by luminous hour markers and hands. Powered by the automatic Calibre 26-330 S C movement with a 45-hour power reserve, it displays hours, minutes, seconds, and date. The integrated bracelet with folding clasp completes this elegant yet sporty timepiece.",
    specifications: [
      { name: "Case Size", value: "40mm" },
      { name: "Case Material", value: "Stainless steel" },
      { name: "Movement", value: "Calibre 26-330 S C, Automatic" },
      { name: "Water Resistance", value: "120m (394ft)" },
      { name: "Power Reserve", value: "45 hours" },
      { name: "Bracelet", value: "Integrated stainless steel" },
      { name: "Dial", value: "Blue with horizontal embossing" },
      { name: "Functions", value: "Hours, minutes, seconds, date" },
    ],
    reviews: [
      {
        id: "rev-watch-003-1",
        author: "Jonathan Price",
        email: "jonathan@example.com",
        rating: 5,
        title: "The ultimate luxury sports watch",
        content:
          "The Nautilus is simply perfect. The blue dial is mesmerizing, and the way it changes in different lighting conditions is magical. The craftsmanship is beyond compare, and it wears incredibly comfortably despite its substantial presence.",
        date: "2023-05-05",
      },
    ],
    dateAdded: "2023-01-15",
  },
  {
    id: "watch-004",
    name: "Apple Watch Ultra",
    category: "watches",
    brand: "Apple",
    price: 799,
    stock: 20,
    sku: "WATCH-APL-004",
    rating: 4.7,
    reviewCount: 215,
    isNew: true,
    isSale: false,
    isFeatured: false,
    tags: ["smartwatch", "sports", "digital"],
    colors: ["titanium"],
    images: [
      "main-images/watches/Apple Watch Ultra-2.jpg",
      "img/products/watches/apple-watch-ultra-2.jpg",
      "main-images/watches/Apple Watch Ultra.jpg",
    ],
    shortDescription: "Apple's most rugged and capable smartwatch.",
    description:
      "The Apple Watch Ultra is designed for endurance athletes, outdoor adventurers, and water sports enthusiasts. The 49mm titanium case features a flat sapphire crystal and the brightest Apple Watch display yet. The customizable Action button provides quick access to a variety of functions. With up to 36 hours of battery life (60 hours in low power mode), it's built for endurance. Features include precision dual-frequency GPS, depth gauge with water temperature sensor, compass with waypoints, and three specialized bands for different activities.",
    specifications: [
      { name: "Case Size", value: "49mm" },
      { name: "Case Material", value: "Titanium" },
      { name: "Display", value: "Always-On Retina LTPO OLED" },
      { name: "Water Resistance", value: "100m (328ft)" },
      { name: "Battery Life", value: "Up to 36 hours (60 in low power)" },
      { name: "Connectivity", value: "LTE, Wi-Fi, Bluetooth, NFC" },
      { name: "Sensors", value: "ECG, Blood Oxygen, Temperature, Depth" },
      { name: "Special Features", value: "Siren, Night Mode, Action Button" },
    ],
    reviews: [
      {
        id: "rev-watch-004-1",
        author: "Michelle Torres",
        email: "michelle@example.com",
        rating: 5,
        title: "The ultimate adventure companion",
        content:
          "The Apple Watch Ultra is a game-changer for outdoor activities. The battery life is excellent, the display is visible in bright sunlight, and the titanium case has survived some serious bumps without a scratch. The Action button is more useful than I expected.",
        date: "2023-04-10",
      },
    ],
    dateAdded: "2022-09-23",
  },
]

/**
 * Core Product Functions
 */

// Get all products
function getAllProducts() {
  return products
}

// Get product by ID
function getProductById(id) {
  return products.find((product) => product.id === id)
}

// Get products by category
function getProductsByCategory(category) {
  return products.filter((product) => product.category === category)
}

// Get featured products
function getFeaturedProducts(limit = 8) {
  return products
    .filter((product) => product.isFeatured)
    .sort(() => 0.5 - Math.random()) // Shuffle
    .slice(0, limit)
}

// Get new arrivals
function getNewArrivals(limit = 8) {
  return products
    .filter((product) => product.isNew)
    .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
    .slice(0, limit)
}

// Get sale products
function getSaleProducts(limit = 8) {
  return products
    .filter((product) => product.isSale)
    .sort((a, b) => (b.discount || 0) - (a.discount || 0))
    .slice(0, limit)
}

// Get related products
function getRelatedProducts(productId, limit = 4) {
  const product = getProductById(productId)
  if (!product) return []

  return products
    .filter((p) => p.category === product.category && p.id !== productId)
    .sort(() => 0.5 - Math.random())
    .slice(0, limit)
}

// Search products
function searchProducts(query) {
  query = query.toLowerCase()
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query) ||
      product.tags.some((tag) => tag.toLowerCase().includes(query)),
  )
}

// Filter products by price range
function filterByPrice(minPrice, maxPrice) {
  return products.filter((product) => product.price >= minPrice && product.price <= maxPrice)
}

// Filter products by brand
function filterByBrand(brands) {
  if (!Array.isArray(brands)) brands = [brands]
  return products.filter((product) => brands.includes(product.brand.toLowerCase()))
}

// Filter products by rating
function filterByRating(minRating) {
  return products.filter((product) => product.rating >= minRating)
}

// Sort products
function sortProducts(products, sortBy) {
  const productsCopy = [...products]

  switch (sortBy) {
    case "price-low":
      return productsCopy.sort((a, b) => a.price - b.price)
    case "price-high":
      return productsCopy.sort((a, b) => b.price - a.price)
    case "name-asc":
      return productsCopy.sort((a, b) => a.name.localeCompare(b.name))
    case "name-desc":
      return productsCopy.sort((a, b) => b.name.localeCompare(a.name))
    case "newest":
      return productsCopy.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
    case "rating":
      return productsCopy.sort((a, b) => b.rating - a.rating)
    case "popularity":
      return productsCopy.sort((a, b) => b.reviewCount - a.reviewCount)
    default:
      return productsCopy
  }
}

/**
 * UI Helper Functions
 */

// Format price
function formatPrice(price) {
  return (
    "₵" +
    price.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  )
}

// Create star rating HTML
function getStarRatingHTML(rating) {
  const fullStars = Math.floor(rating)
  const halfStar = rating % 1 >= 0.5
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)

  let stars = ""

  // Full stars
  for (let i = 0; i < fullStars; i++) {
    stars += '<i class="fas fa-star"></i>'
  }

  // Half star
  if (halfStar) {
    stars += '<i class="fas fa-star-half-alt"></i>'
  }

  // Empty stars
  for (let i = 0; i < emptyStars; i++) {
    stars += '<i class="far fa-star"></i>'
  }

  return stars
}

// Create product card HTML
function createProductCard(product) {
  const card = document.createElement("div")
  card.className = "product-card"
  card.setAttribute("data-id", product.id)
  card.setAttribute("data-category", product.category)
  card.setAttribute("data-price", product.price)

  card.innerHTML = `
        <div class="product-image">
            <img src="${product.images[0]}" alt="${product.name}">
            <div class="product-badges">
                ${product.isNew ? '<span class="badge new">New</span>' : ""}
                ${product.isSale ? '<span class="badge sale">Sale</span>' : ""}
                ${product.discount ? `<span class="badge discount">-${product.discount}%</span>` : ""}
            </div>
            <div class="product-actions">
                <a href="product-detail.html?id=${product.id}" class="action-btn"><i class="fas fa-eye"></i></a>
                <a href="#" class="action-btn add-to-wishlist" data-id="${product.id}"><i class="far fa-heart"></i></a>
                <a href="#" class="action-btn add-to-cart-btn" data-id="${product.id}"><i class="fas fa-shopping-cart"></i></a>
            </div>
        </div>
        <div class="product-info">
            <div class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</div>
            <h3 class="product-title"><a href="product-detail.html?id=${product.id}">${product.name}</a></h3>
            <div class="product-rating">
                <div class="stars">
                    ${getStarRatingHTML(product.rating)}
                </div>
                <span class="rating-count">(${product.reviewCount})</span>
            </div>
            <div class="product-price">
                <span class="current-price">${formatPrice(product.price)}</span>
                ${product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : ""}
            </div>
        </div>
    `

  return card
}

// Show notification
function showNotification(message, type = "success") {
  // Check if notification container exists
  let notificationContainer = document.querySelector(".notification-container")

  // Create container if it doesn't exist
  if (!notificationContainer) {
    notificationContainer = document.createElement("div")
    notificationContainer.className = "notification-container"
    document.body.appendChild(notificationContainer)
  }

  // Create notification
  const notification = document.createElement("div")
  notification.className = `notification ${type}`
  notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === "success" ? "fa-check-circle" : "fa-exclamation-circle"}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close"><i class="fas fa-times"></i></button>
    `

  // Add to container
  notificationContainer.appendChild(notification)

  // Add close event
  const closeBtn = notification.querySelector(".notification-close")
  closeBtn.addEventListener("click", () => {
    notification.classList.add("fade-out")
    setTimeout(() => {
      notification.remove()
    }, 300)
  })

  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.classList.add("fade-out")
    setTimeout(() => {
      notification.remove()
    }, 300)
  }, 5000)
}

// Export functions for use in other files
window.productUtils = {
  getAllProducts,
  getProductById,
  getProductsByCategory,
  getFeaturedProducts,
  getNewArrivals,
  getSaleProducts,
  getRelatedProducts,
  searchProducts,
  filterByPrice,
  filterByBrand,
  filterByRating,
  sortProducts,
  formatPrice,
  getStarRatingHTML,
  createProductCard,
  showNotification,
}
