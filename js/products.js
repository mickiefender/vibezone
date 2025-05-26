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
    name: "GMC Pickup",
    category: "cars",
    brand: "GMC",
    price: 946196,
    oldPrice: 960000,
    discount: 7,
    stock: 5,
    sku: "CAR-GMC-001",
    rating: 4.9,
    reviewCount: 124,
    isNew: true,
    isSale: true,
    isFeatured: true,
    tags: ["pickup", "luxury", "performance"],
    colors: ["silver"],
    images: [
      "CARS/GMC pickup.JPG",
      "CARS/GMC pickup2.JPG",
      "CARS/GMC 5.JPG",
      "CARS/GMC4.jpg",
      "CARS/GMC 3.jpg"
     
    ],
    shortDescription: "The GMC Pickup is a powerful and luxurious truck designed for both work and play.",
    description:
      "The GMC Pickup is a powerful and luxurious truck designed for both work and play. With its robust engine options, advanced towing capabilities, and spacious interior, it is perfect for hauling heavy loads or enjoying a weekend getaway. The latest model features cutting-edge technology, including an advanced infotainment system, driver assistance features, and premium materials throughout the cabin.",
    specifications: [
      { name: "Engine", value: "6.2L V8" },
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
        id: "rev-car-001-2",
        author: "Sarah Appiah",
        email: "sarah243@gmail.com",
        rating: 4,
        title: "Powerful and luxurious",
        content:
          "The GMC Pickup is a powerful truck that doesn't compromise on luxury. The interior is spacious and comfortable, and the performance is outstanding. The only downside is the fuel efficiency, but that's expected with such a powerful engine.",
        date: "2023-04-22",
      },
    ],
    dateAdded: "2023-01-10",
  },
  {
    id: "car-002",
    name: "Mecedes G63 2022",
    category: "cars",
    brand: "Mercedes-Benz",
    price: 2750580,
  
    oldPrice: 38000,
    discount: 5,
    stock: 3,
    sku: "CAR-MER-002",
    rating: 4.7,
    reviewCount: 86,
    isNew: true,
    isSale: false,
    isFeatured: true,
    tags: ["luxury", "suv", "performance"],
    colors: [ "white"],
    images: ["CARS/Mecedes G63-2JPG.JPG", "CARS/G63-2.jpg"],
    shortDescription: "The Mercedes G63 2022 is a luxury SUV that combines performance, style, and advanced technology.",
    description:
      "The Mercedes G63 2022 is a luxury SUV that combines performance, style, and advanced technology. With its iconic design, powerful engine options, and state-of-the-art features, it is the ultimate vehicle for those who demand the best. The G63 offers a spacious and opulent interior, advanced safety systems, and cutting-edge infotainment technology, making it perfect for both city driving and off-road adventures.",
    specifications: [
      { name: "Engine", value: "4.0L V8 biturbo" },
      { name: "Top Speed", value: "250 mph" },
      { name: "0-60 mph", value: "4.5 seconds" },
      { name: "Horsepower", value: "577 hp" },
      { name: "Torque", value: "627 lb-ft" },
      { name: "Transmission", value: "9-speed automatic" },
      { name: "Drivetrain", value: "All-wheel drive" },
      { name: "Seating", value: "5 adults" },
    ],
    reviews: [
      {
        id: "rev-car-002-1",
        author: "Robert Carter",
        email: "robertcarter@gmail.com",
        rating: 5,
        title: "The ultimate luxury SUV",
        content:
          "The Mercedes G63 2022 is the ultimate luxury SUV. The performance is outstanding, and the interior is like a five-star hotel on wheels. The technology features are top-notch, and the ride quality is incredibly smooth. It's worth every penny!",
        date: "2023-06-02",
      },
    ],
    dateAdded: "2023-02-15",
  },
  {
    id: "car-003",
    name: "Porsche Cayenne 2022",
    category: "cars",
    brand: "Porsche",
    price: 946199,
    oldPrice: 966000,
    discount: 6,
    stock: 2,
    sku: "CAR-POR-003",
    rating: 4.1,
    reviewCount: 92,
    isNew: false,
    isSale: true,
    isFeatured: true,
    tags: ["luxury", "suv", "performance"],
    colors: [ "black"],
    images: [
      "CARS/porche cayenne-2.jpg",
      "CARS/porche cayenne-3.jpg",
      "CARS/porche cayenne-4.jpg",
      "CARS/porche cayenne-5.jpg",
      "CARS/porche cayenne-9.jpg",
    ],
    shortDescription: "The Porsche Cayenne is a luxury SUV that combines performance, style, and advanced technology.",
    description:
      "The Porsche Cayenne is a luxury SUV that combines performance, style, and advanced technology. With its sleek design, powerful engine options, and state-of-the-art features, it is the ultimate vehicle for those who demand the best. The Cayenne offers a spacious and opulent interior, advanced safety systems, and cutting-edge infotainment technology, making it perfect for both city driving and off-road adventures.",
    specifications: [
      { name: "Engine", value: "3.0L V6 biturbo" },
      { name: "Top Speed", value: "155 mph" },
      { name: "0-60 mph", value: "4.8 seconds" },
      { name: "Horsepower", value: "438 hp" },
      { name: "Torque", value: "405 lb-ft" },
      { name: "Transmission", value: "8-speed automatic" },
      { name: "Drivetrain", value: "All-wheel drive" },
      { name: "Seating", value: "5 adults" },
    ],
    reviews: [
      {
        id: "rev-car-003-1",
        author: "James Andoh",
        email: "james342@gmail.com",
        rating: 5,
        title: "Exceptional performance and luxury",
        content:
          "The Porsche Cayenne is an exceptional vehicle. The performance is outstanding, and the luxury features are top-notch. The ride quality is smooth, and the technology is state-of-the-art. It's a must-have for anyone who appreciates luxury and performance.",
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
      "cars/vitz-blue.jpg",
      "cars/vitz-interior.jpg",
      "cars/vitz-silver.jpg",
      
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
    name: "RAM",
    category: "cars",
    brand: "RAM",
    price: 85000,
    stock: 3,
    sku: "CAR-RAM-005",
    rating: 4.2,
    reviewCount: 78,
    isNew: false,
    isSale: false,
    isFeatured: false,
    tags: ["pickup", "truck", "performance"],
    colors: ["gray", "white"],
    images: [
      "CARS/RAM1.JPG",
      "CARS/RAM2.JPG",
      "CARS/RAM 4.JPG",
      "CARS/RAM5.JPG",
      "CARS/RAM3.JPG"
      
    ],
    shortDescription: "The RAM 1500 is a full-size pickup truck known for its rugged performance and advanced technology.",
    description:
      "The RAM 1500 is a full-size pickup truck known for its rugged performance and advanced technology. With its powerful engine options, spacious interior, and innovative features, it is designed to handle tough jobs while providing a comfortable ride. The latest model includes advanced safety systems, a user-friendly infotainment interface, and a range of customization options to suit any lifestyle.",
    specifications: [
      { name: "Engine", value: "5.7L HEMI V8" },
      { name: "Top Speed", value: "120 mph" },
      { name: "0-60 mph", value: "6.4 seconds" },
      { name: "Horsepower", value: "395 hp" },
      { name: "Torque", value: "410 lb-ft" },
      { name: "Transmission", value: "8-speed automatic" },
      { name: "Drivetrain", value: "Rear-wheel drive or four-wheel drive" },
      { name: "Seating", value: "5 adults" },
    ],
    reviews: [
      {
        id: "rev-car-004-1",
        author: "Emily Hagan",
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



//Car Tyres
  {
    id: "tyre-001",
    name: "Genesys XP1 Tyres",
    category: "tyres",
    brand: "Genesys",
    price: 1100,
    stock: 1,
    sku: "TYRE-GEN-001",
    rating: 4.9,
    reviewCount: 42,
    isNew: true,
    isSale: false,
    isFeatured: true,
    tags: ["Joyroad", "Sport", "Tyres"],
    colors: ["white", "gray"],
    images: [
      "Tyres/GENESYS XP1.jpg",
      "Tyres/GENESYS-.jpg",
      "Tyres/GENESYS-185.jpg",
      
    ],
    shortDescription: "High-performance all-season tyres designed for superior handling and comfort.",
    description:
      "The Genesys XP1 Tyres are high-performance all-season tyres designed for superior handling and comfort. Engineered with advanced tread patterns and high-quality rubber compounds, these tyres provide excellent grip in both wet and dry conditions. The XP1 Tyres are perfect for drivers who demand performance without sacrificing ride quality. They feature low road noise, enhanced durability, and improved fuel efficiency, making them an ideal choice for everyday driving.",
    specifications: [
      { name: "Type", value: "All-season" },
      { name: "Tread Pattern", value: "Symmetrical" },
      { name: "Speed Rating", value: "H (130 mph)" },
      { name: "Load Index", value: "91 (1,356 lbs)" },
      { name: "UTQG Rating", value: "600 A A" },
      { name: "Warranty", value: "60,000 miles" },
      { name: "Sizes Available", value: "185/65R15, 195/60R16, 205/55R17" },
    ],
    reviews: [
      {
        id: "rev-tyre-001-1",
        author: "Thomas Obiri",
        email: "thomas23@gmail.com",
        rating: 5,
        title: "Exceptional performance and comfort",
        content:
          "The Genesys XP1 Tyres have transformed my driving experience. The grip is outstanding, especially in wet conditions, and the ride is incredibly smooth. I also appreciate the low road noise. Highly recommend these tyres for anyone looking for performance and comfort.",
        date: "2023-05-10",
      },
    ],
    dateAdded: "2023-03-15",
  },

   {
    id: "tyre-002",
    name: "Joyroad Sport Rx6 Tyres",
    category: "tyres",
    brand: "Joyroad",
    price: 1100,
    stock: 1,
    sku: "TYRE-JOY-001",
    rating: 4.9,
    reviewCount: 42,
    isNew: true,
    isSale: false,
    isFeatured: true,
    tags: ["Joyroad", "Sport", "Tyres"],
    colors: ["white", "gray"],
    images: [
      "Tyres/Joyroad Sport Rx6.jpg",
      "Tyres/JOYROAD-TOUR RXI.jpg",
      "Tyres/JOYROAD-GRAND TOURER .jpg",
      
    ],
    shortDescription: "High-performance all-season tyres designed for superior handling and comfort.",
    description:
      "The Joyroad Sport Rx6 Tyres are high-performance all-season tyres designed for superior handling and comfort. Engineered with advanced tread patterns and high-quality rubber compounds, these tyres provide excellent grip in both wet and dry conditions. The Sport Rx6 Tyres are perfect for drivers who demand performance without sacrificing ride quality. They feature low road noise, enhanced durability, and improved fuel efficiency, making them an ideal choice for everyday driving.",
    specifications: [
      { name: "Type", value: "All-season" },
      { name: "Tread Pattern", value: "Symmetrical" },
      { name: "Speed Rating", value: "H (130 mph)" },
      { name: "Load Index", value: "91 (1,356 lbs)" },
      { name: "UTQG Rating", value: "600 A A" },
      { name: "Warranty", value: "60,000 miles" },
      { name: "Sizes Available", value: "185/65R15, 195/60R16, 205/55R17" },
      { name: "Warranty", value: "60,000 miles" },
      { name: "Sizes Available", value: "185/65R15, 195/60R16, 205/55R17" },
    ],
    reviews: [
      {
        id: "rev-tyre-002-1",
        author: "James Arhin",
        email: "jamesarhin@gmail.com",
        rating: 5,
        title: "Quality and performance",
        content:
          "The Joyroad Sport Rx6 Tyres have exceeded my expectations. The handling is precise, and the ride is comfortable. They perform exceptionally well in both dry and wet conditions. I also appreciate the low road noise, which makes for a pleasant driving experience. Highly recommend these tyres for anyone looking for quality and performance.",
        date: "2023-05-10",
      },
    ],
    dateAdded: "2023-03-15",
  },


   {
    id: "tyre-003",
    name: "Sport XV1 Tyres",
    category: "tyres",
    brand: "Sport",
    price: 1100,
    stock: 1,
    sku: "TYRE-SPT-001",
    rating: 4.9,
    reviewCount: 42,
    isNew: true,
    isSale: false,
    isFeatured: true,
    tags: ["Sport", "Tyres"],
    colors: ["black"],
    images: [
      "Tyres/SPORT XV1-235.jpg",
      "Tyres/SPORT XVI 215.jpg",
      "Tyres/SPORT XVI-265.jpg",
      "Tyres/SPORT XVI 255.jpg",
      
    ],
    shortDescription: "High-performance all-season tyres designed for superior handling and comfort.",
    description:
      "The Sport XV1 Tyres are high-performance all-season tyres designed for superior handling and comfort. Engineered with advanced tread patterns and high-quality rubber compounds, these tyres provide excellent grip in both wet and dry conditions. The Sport XV1 Tyres are perfect for drivers who demand performance without sacrificing ride quality. They feature low road noise, enhanced durability, and improved fuel efficiency, making them an ideal choice for everyday driving.",
    specifications: [
      { name: "Type", value: "All-season" },
      { name: "Tread Pattern", value: "Symmetrical" },
      { name: "Speed Rating", value: "H (130 mph)" },
      { name: "Load Index", value: "91 (1,356 lbs)" },
      { name: "UTQG Rating", value: "600 A A" },
      { name: "Warranty", value: "60,000 miles" },
      { name: "Sizes Available", value: "185/65R15, 195/60R16, 205/55R17" },
      { name: "Warranty", value: "60,000 miles" },
      { name: "Sizes Available", value: "185/65R15, 195/60R16, 205/55R17" },
    ],
    reviews: [
      {
        id: "rev-tyre-003-1",
        author: "Justice Osei",
        email: "justiceosei@gmail.com",
        rating: 5,
        title: "Driving pleasure",
        content:
          "The Sport XV1 Tyres have transformed my driving experience. The grip is outstanding, especially in wet conditions, and the ride is incredibly smooth. I also appreciate the low road noise. Highly recommend these tyres for anyone looking for performance and comfort.",
        date: "2023-05-10",
      },
    ],
    dateAdded: "2023-03-15",
  },



   {
    id: "tyre-004",
    name: "Vantage XU1 Tyres",
    category: "tyres",
    brand: "Vantage",
    price: 1100,
    stock: 1,
    sku: "TYRE-VAN-001",
    rating: 4.9,
    reviewCount: 42,
    isNew: true,
    isSale: false,
    isFeatured: true,
    tags: ["vantage", "sport", "tyres"],
    colors: ["black"],
    images: [
      "Tyres/VANTAGE XU1.jpg",
      "Tyres/VANTAGE XUI 215.jpg",
      
      
    ],
    shortDescription: "High-performance all-season tyres designed for superior handling and comfort.",
    description:
      "The Vantage XU1 Tyres are high-performance all-season tyres designed for superior handling and comfort. Engineered with advanced tread patterns and high-quality rubber compounds, these tyres provide excellent grip in both wet and dry conditions. The Vantage XU1 Tyres are perfect for drivers who demand performance without sacrificing ride quality. They feature low road noise, enhanced durability, and improved fuel efficiency, making them an ideal choice for everyday driving.",
    specifications: [
      { name: "Type", value: "All-season" },
      { name: "Tread Pattern", value: "Symmetrical" },
      { name: "Speed Rating", value: "H (130 mph)" },
      { name: "Load Index", value: "91 (1,356 lbs)" },
      { name: "UTQG Rating", value: "600 A A" },
      { name: "Warranty", value: "60,000 miles" },
      { name: "Sizes Available", value: "185/65R15, 195/60R16, 205/55R17" },
      { name: "Warranty", value: "60,000 miles" },
      { name: "Sizes Available", value: "185/65R15, 195/60R16, 205/55R17" },
    ],
    reviews: [
      {
        id: "rev-tyre-004-1",
        author: "Daniel Mensah",
        email: "danielmensah@gmail.com",
        rating: 5,
        title: "Good performance and comfort",
        content:
          "The Vantage XU1 Tyres have exceeded my expectations. The handling is precise, and the ride is comfortable. They perform exceptionally well in both dry and wet conditions. I also appreciate the low road noise, which makes for a pleasant driving experience. Highly recommend these tyres for anyone looking for quality and performance.",
        date: "2023-05-10",
      },
    ],
    dateAdded: "2023-03-15",
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
      "houses/Modern Beachfront Villa.jpg",
      "houses/Modern Beachfront Villa-living room.jpg",
      "houses/Modern Beachfront-bedroom.jpg",
      
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
      "houses/classicBrichRanch.jpg",
      "houses/classicBrich-night.jpg",
      "houses/classicBrichRanch-interior.jpg",
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
      "phones/iphone 14.jpg",
      "phones/iphone 16 pro.jpg",
      "phones/iphone 14-2.jpg",
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
      "phones/Samsung Galaxy S23 Ultra.jpg",
      "phones/Samsung Galaxy S23 Ultra-2.jpg",
      "phones/Samsung Galaxy S23 Ultra-black.jpg",
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
      "phones/iphone 11-black.jpg",
      "phones/iphone 11-mutli-coloured.jpg",
      "phones/iphone 11-white.jpg",
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
      "phones/iphone 16-pink.jpg",
      "phones/iphone 16-blue.jpg",
      "phones/iphone 16-teal.jpg",
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
    name: "Casio G-Shock",
    category: "watches",
    brand: "Casio",
    price: 1000,
    stock: 6,
    sku: "WATCH-CAS-001",
    rating: 4.9,
    reviewCount: 110,
    isNew: false,
    isSale: false,
    isFeatured: true,
    tags: ["casual", "digital", "durable"],
    colors: ["black", "blue", "gray"],
    images: [
      "watches/Casio G-shock-black &ash.jpg",
      "watches/Casio G-shock-black-5.jpg",
      "watches/Casio G-shock-black&3.jpg",
      "watches/Casio G-shock-black&blue.jpg",
      "watches/Casio G-shock-black4.jpg"
    ],
    shortDescription: "The ultimate rugged watch with advanced features.",
    description:
      "The Casio G-Shock is the ultimate rugged watch designed for durability and functionality. Known for its shock resistance, this watch features a 45mm resin case with a mineral glass crystal. The digital display includes a backlight, world time, stopwatch, countdown timer, and multiple alarms. It is water-resistant up to 200 meters, making it suitable for swimming and diving. The G-Shock is powered by a reliable quartz movement and has a battery life of approximately 2 years.",
    specifications: [
      { name: "Case Size", value: "45mm" },
      { name: "Case Material", value: "Resin" },
      { name: "Movement", value: "Quartz" },
      { name: "Water Resistance", value: "200m (656ft)" },
      { name: "Battery Life", value: "2 years" },
      { name: "Display", value: "Digital" },
      { name: "Features", value: "Backlight, World Time, Stopwatch, Countdown Timer, Multiple Alarms" },

    ],
   
    reviews: [
      {
        id: "rev-watch-001-1",
        author: "Emmanuel Yawson",
        email: "emmanuel@example.com",
        rating: 5,
        title: "The ultimate diving watch",
        content:
          "The Casio G-Shock is the ultimate diving watch. It's durable, water-resistant, and has a ton of features. It's a must-have for anyone who loves adventure and outdoor activities.",
        date: "2023-02-18",
      },
    ],
    dateAdded: "2022-08-10",
  },
  {
    id: "watch-002",
    name: "G-Shock",
    category: "watches",
    brand: "Casio",
    price: 1000,
    discount: 9,
    stock: 5,
    sku: "WATCH-CAS-002",
    rating: 4.8,
    reviewCount: 96,
    isNew: false,
    isSale: true,
    isFeatured: true,
    tags: ["luxury", "chronograph", "automatic"],
    colors: ["black","red","blue"],
    images: [
      "watches/Casio G-shock-black and red.jpg",
      "watches/Casio G-shock-black.jpg",
      "watches/Casio G-shock-black&white.jpg",
      "watches/Casio G-shock-black&yellow.jpg"
    ],
    shortDescription: "The first watch worn on the moon.",
    description:
      'The G-Shock is a legendary timepiece known for its durability and advanced features. This model features a 42mm stainless steel case with a black tachymeter bezel. The chronograph function allows for precise timing, and the watch is powered by the Calibre 1861 manual-winding movement. The black dial has luminous hour markers and hands, ensuring visibility in low light conditions. It is water-resistant up to 50 meters, making it suitable for everyday wear.',
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
    name: "G-Shock",
    category: "watches",
    brand: "Casio",
    price: 1000,
    stock: 1,
    sku: "WATCH-CAS-003",
    rating: 4.9,
    reviewCount: 64,
    isNew: true,
    isSale: false,
    isFeatured: true,
    tags: ["luxury", "automatic", "sports"],
    colors: ["blue", "green", "white","orange","red"],
    images: [
      "watches/Casio G-shock-trans&seablue.jpg",
      "watches/Casio G-shock-transparent-orange.jpg",
      "watches/Casio G-shock-transparent&blue.jpg",
      "watches/Casio G-shock-transparent&blue2.jpg",
      "watches/Casio G-shock-transparent&cream.jpg",
      "watches/Casio G-shock-transparent&red.jpg",
      
    ],
    shortDescription: "The G-Shock is a legendary timepiece known for its durability and advanced features.",
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
        email: "jonathan@gmail.com",
        rating: 5,
        title: "Simply perfect",
        content:
          "The G-Shock is simply perfect for my active lifestyle. It's tough, reliable, and has all the features I need. The design is sleek and modern, and I love the variety of colors available. It's a watch that can handle anything.",
        date: "2023-05-05",
      },
    ],
    dateAdded: "2023-01-15",
  },
  {
    id: "watch-004",
    name: "G-Shock",
    category: "watches",
    brand: "Casio",
    price: 1000,
    stock: 10,
    sku: "WATCH-APL-004",
    rating: 4.7,
    reviewCount: 215,
    isNew: true,
    isSale: false,
    isFeatured: false,
    tags: ["smartwatch", "rugged", "outdoor"],
    colors: ["yellow", "white"],
    images: [
      "watches/Casio G-shock-yellow&black.jpg",
      "watches/Casio G-shock-white2.jpg",
      "watches/Casio G-shock-white&black.jpg",
    ],
    shortDescription: "The Casio G-Shock is the ultimate rugged watch designed for durability and functionality.",
    description:
      "The Casio G-Shock is the ultimate rugged watch designed for durability and functionality. Known for its shock resistance, this watch features a 49mm titanium case with a sapphire crystal. The always-on Retina LTPO OLED display provides excellent visibility in all conditions. It includes advanced health and fitness tracking features such as ECG, blood oxygen monitoring, and temperature sensing. The watch is water-resistant up to 100 meters and has a battery life of up to 36 hours (60 hours in low power mode). Additional features include LTE connectivity, GPS, and an Action button for quick access to functions.",
    specifications: [
      { name: "Case Size", value: "49mm" },
      { name: "Case Material", value: "Titanium" },
      { name: "Display", value: "Always-on Retina LTPO OLED" },
      { name: "Movement", value: "Apple S8 SiP with 64-bit dual-core processor" },
      { name: "Water Resistance", value: "100m (328ft)" },
      { name: "Battery Life", value: "Up to 36 hours (60 hours in low power mode)" },
      { name: "Health Features", value: "ECG, Blood Oxygen, Temperature Sensing" },
      { name: "Connectivity", value: "LTE, GPS, Wi-Fi, Bluetooth" },
      { name: "Action Button", value: "Programmable for quick access" },
    ],
    reviews: [
      {
        id: "rev-watch-004-1",
        author: "Michelle Asante",
        email: "michelle132@gmail.com",
        rating: 5,
        title: "Perfect for outdoor adventures",
        content:
          "The G-Shock is perfect for my outdoor adventures. It's tough, reliable, and has all the features I need. The design is sleek and modern, and I love the variety of colors available. It's a watch that can handle anything.",
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
