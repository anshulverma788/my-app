// File: src/data/BlogPosts.jsx

// ✅ 1. Categories Export
export const categories = [
  "All", 
  "Adventure", 
  "Travel Tips", 
  "Culture", 
  "Food",
  "Solo Travel"
];

// ✅ 2. Blog Data (Total 6 Posts)
export const blogPosts = [
  // --- POST 1 ---
  {
    id: 1,
    title: "10 Hidden Gems in Himachal You Must Visit",
    image: "https://i.pinimg.com/736x/84/8c/83/848c83cf85f3a58ff164f39f7a95754d.jpg",
    date: "Dec 25, 2024",
    author: "Rahul Verma",
    category: "Travel Tips",
    excerpt: "Discover the untouched beauty of Himachal Pradesh beyond Shimla and Manali. Explore these secret valleys...",
    content: "Himachal Pradesh is a treasure trove of nature's beauty, but most tourists stick to the popular towns of Shimla and Manali. However, the real magic lies in the unexplored hamlets.",
    contentBlocks: [
        "First on our list is Tirthan Valley. Located in the Kullu district, this valley is the gateway to the Great Himalayan National Park.",
        "Next up is Chitkul, often called the last inhabited village on the Indo-Tibet border.",
        "Finally, don't miss Jibhi. Known for its Victorian-style wooden cottages and lush green forests."
    ],
    tags: ["Himachal", "Offbeat", "Nature", "Trekking"]
  },
  // --- POST 2 ---
  {
    id: 2,
    title: "The Ultimate Guide to Spiti Valley Bike Trip",
    image: "https://i.pinimg.com/736x/80/bb/ac/80bbac0f2981e85796dffaf11b100e15.jpg",
    date: "Jan 05, 2025",
    author: "Aditi Singh",
    category: "Adventure",
    excerpt: "Planning a road trip to Spiti? Here is everything you need to know about routes, permits, and best time to visit.",
    content: "Spiti Valley, Himachal Pradesh ke heart me basa ek aisa destination hai jo aapko duniya ke shor-sharabe se bilkul alag le jaata hai. Ye high-altitude cold desert apni raw beauty, vast landscapes aur deep silence ke liye jaana jaata hai.",
    contentBlocks: [
        "The best time to visit Spiti on a bike is from June to September when the roads are clear of snow.",
        "Make sure to carry extra fuel, a puncture kit, and warm layers. The weather can change in minutes.",
        "Key stops include the Key Monastery, Chandratal Lake, and the highest post office in the world at Hikkim."
    ],
    tags: ["Spiti", "Road Trip", "Biking", "Adventure"]
  },
  // --- POST 3 ---
  {
    id: 3,
    title: "Experience the Rich Culture of Kinnaur",
    image: "https://i.pinimg.com/1200x/6c/e9/ac/6ce9ac823eb1a308c1b042a550fbd63b.jpg",
    date: "Jan 12, 2025",
    author: "Team HD",
    category: "Culture",
    excerpt: "From apple orchards to ancient monasteries, dive deep into the traditional lifestyle of Kinnaur district.",
    content: "Kinnaur is known as the land of gods. The people here are warm, and their culture is a beautiful blend of Hinduism and Buddhism.",
    contentBlocks: [
        "The Kinnauri apple orchards are famous worldwide. Walking through these orchards during harvest season is a delight.",
        "Visit Kalpa to see the majestic Kinner Kailash peak, which changes colors throughout the day.",
        "Don't forget to try the local cuisine!"
    ],
    tags: ["Kinnaur", "Culture", "Food", "Himalayas"]
  },
  // --- POST 4 (NEW) ---
  {
    id: 4,
    title: "Top 5 Cafes in Old Manali for Foodies",
    image: "https://i.pinimg.com/1200x/ab/44/c6/ab44c6cef2692d15726d450960a7b346.jpg",
    date: "Jan 18, 2025",
    author: "Sneha Kapoor",
    category: "Food",
    excerpt: "From River Trout to authentic Israeli food, explore the vibrant cafe culture of Old Manali nestled in pine forests.",
    content: "Old Manali is a paradise for food lovers. Unlike the crowded Mall Road, this part of the town offers a bohemian vibe with riverside cafes.",
    contentBlocks: [
        "Cafe 1947 is a must-visit for its live music and riverside seating.",
        "Drifter's Cafe offers the best breakfast in town with a view of the mountains.",
        "Don't forget to try the fresh Trout fish, a local delicacy available in most Manali restaurants."
    ],
    tags: ["Manali", "Food", "Cafe", "Nightlife"]
  },
  // --- POST 5 (NEW) ---
  {
    id: 5,
    title: "Triund Trek: A Weekend Adventure",
    image: "https://i.pinimg.com/1200x/ce/30/e2/ce30e266603aa6d57fd6f4a3bca11e4c.jpg",
    date: "Jan 22, 2025",
    author: "Vikram Rana",
    category: "Adventure",
    excerpt: "A beginner-friendly trek that offers breathtaking views of the Dhauladhar range. Perfect for a weekend getaway.",
    content: "Triund is one of the most popular treks in Dharamshala. It is an easy to moderate trek that rewards you with a stunning view of the snow-capped Dhauladhar peaks.",
    contentBlocks: [
        "Start your trek from McLeodGanj or Dharamkot early in the morning.",
        "The trail is well-marked and takes about 4-5 hours to reach the top.",
        "Camping at the top under the starlit sky is an experience you will never forget."
    ],
    tags: ["Dharamshala", "Trekking", "Adventure", "Camping"]
  },
  // --- POST 6 (NEW) ---
  {
    id: 6,
    title: "Why Dalhousie Should Be Your Next Winter Stop",
    image: "https://i.pinimg.com/1200x/22/05/c5/2205c539e488d13803c97d02154ead0b.jpg",
    date: "Feb 01, 2025",
    author: "Amit Sharma",
    category: "Travel Tips",
    excerpt: "Experience the colonial charm of Dalhousie covered in a blanket of snow. A perfect winter wonderland.",
    content: "Dalhousie transforms into a Narnia-like world in winters. The colonial-era churches and pine trees covered in snow look absolutely magical.",
    contentBlocks: [
        "Visit Khajjiar, often called the Mini Switzerland of India, for snow activities.",
        "Walk down the Mall Road to shop for woolen shawls and caps.",
        "Make sure to carry heavy woolens as temperatures can drop below zero."
    ],
    tags: ["Dalhousie", "Winter", "Snow", "Family Trip"]
  },
{
    id: 7,
    title: "Palampur: The Tea Capital of Northwest India",
    image: "https://i.pinimg.com/736x/e4/bd/3a/e4bd3a7b05b055b968b2141e4510e208.jpg",
    date: "Feb 05, 2025",
    author: "Riya Malhotra",
    category: "Nature",
    excerpt: "Walk through the aromatic tea gardens and explore the serene monasteries of Palampur.",
    content: "Located in the Kangra Valley, Palampur is famous for its vast tea gardens and paddy fields. It is a perfect destination for those looking to relax amidst nature, away from the hustle of touristy towns.",
    contentBlocks: [
        "Take a guided tour of a tea estate to learn how tea is plucked and processed.",
        "Visit the Tashi Jong Monastery, which offers a peaceful environment and beautiful Tibetan art.",
        "Don't miss the Neugal Khad, a wide stream of water popular for family picnics."
    ],
    tags: ["Palampur", "Tea Gardens", "Nature", "Relaxation"]
  },
  // --- POST 8 (NEW) ---
  {
    id: 8,
    title: "Kheerganga Trek: A Walk Above the Clouds",
    image: "https://i.pinimg.com/1200x/45/0d/ff/450dff26622f0e669214b20dc1b5aed5.jpg",
    date: "Feb 10, 2025",
    author: "Kabir Bedi",
    category: "Adventure",
    excerpt: "Trek through the mystical Parvati Valley to reach the natural hot springs of Kheerganga.",
    content: "Kheerganga is not just a trek; it's a spiritual journey. Located at the end of Parvati Valley, the trek takes you through dense pine forests, waterfalls, and quaint villages.",
    contentBlocks: [
        "The trek starts from Barshaini and is about 12 km long. It is suitable for beginners.",
        "The highlight is the natural hot water spring at the top. Taking a dip after a long trek is pure bliss.",
        "Overnight camping at Kheerganga under the open sky is a must-do experience."
    ],
    tags: ["Kasol", "Kheerganga", "Trekking", "Hot Springs"]
  },
  // --- POST 9 (NEW) ---
  {
    id: 9,
    title: "Stay in an Igloo at Sethan Valley",
    image: "https://i.pinimg.com/1200x/44/21/57/44215778340aca650367dea74a6f7c7d.jpg",
    date: "Feb 14, 2025",
    author: "Ankit Roy",
    category: "Travel Tips",
    excerpt: "Did you know you can stay in an Igloo in India? Head to Sethan Hampta for this once-in-a-lifetime experience.",
    content: "Just 15 km from Manali lies Sethan, a small Buddhist village. In winters, this place turns into a snow paradise where you can actually stay in Igloos built by locals.",
    contentBlocks: [
        "Igloo stays are seasonal, usually available from January to mid-March.",
        "Apart from the stay, you can try skiing and snowboarding on the gentle slopes of Sethan.",
        "It is an offbeat location, so expect basic amenities but luxury views."
    ],
    tags: ["Manali", "Sethan", "Igloo", "Winter"]
  },
  // --- POST 10 (NEW) ---
  {
    id: 10,
    title: "Secrets of the Ancient Kangra Fort",
    image: "https://i.pinimg.com/1200x/79/1b/1a/791b1a8abc0399e0b3c397fbdbf0ff9a.jpg",
    date: "Feb 20, 2025",
    author: "Dr. S. K. Gupta",
    category: "History",
    excerpt: "Explore the ruins of one of the oldest forts in India and learn about its glorious past.",
    content: "Built by the royal Rajput family of Kangra State, the Kangra Fort is a marvel of architecture. It has witnessed centuries of wars, earthquakes, and changing dynasties.",
    contentBlocks: [
        "The fort provides a panoramic view of the Manjhi and Banganga rivers.",
        "Visit the museum at the entrance to see rare photographs and artifacts from the Katoch dynasty.",
        "Audio guides are available, which make the history come alive as you walk through the ruins."
    ],
    tags: ["Kangra", "History", "Architecture", "Fort"]
  },
  {
    id: 11,
    title: "Paragliding in Bir Billing: A Sky-High Adventure",
    image: "https://i.pinimg.com/1200x/60/42/fa/6042fa3a0ff367f71704fdd4a5e48c0a.jpg",
    date: "Feb 25, 2025",
    author: "Rohan Khanna",
    category: "Adventure",
    excerpt: "Fly like a bird at the world's second-highest paragliding site in the serene village of Bir.",
    content: "Bir Billing is globally renowned for paragliding, hosting the Paragliding World Cup. But beyond the adrenaline, Bir is a calm Tibetan colony filled with colorful monasteries and cozy cafes.",
    contentBlocks: [
        "Take a tandem flight from Billing (take-off site) to Bir (landing site) which lasts about 20-30 minutes.",
        "Explore the Deer Park Institute to learn about Buddhist philosophy and meditation.",
        "Rent a cycle and ride through the tea gardens and monasteries during sunset."
    ],
    tags: ["Bir Billing", "Paragliding", "Adventure", "Monastery"]
  },
  // --- POST 12 (NEW) ---
  {
    id: 12,
    title: "A Ride Through History: The Kalka-Shimla Toy Train",
    image: "https://i.pinimg.com/1200x/ce/ec/c5/ceecc5c5ef28900660b1bf5abd71bd8c.jpg",
    date: "Mar 01, 2025",
    author: "Meera Joshi",
    category: "Heritage",
    excerpt: "Experience the charm of slow travel on this UNESCO World Heritage railway surrounded by pine forests.",
    content: "The Kalka-Shimla railway is not just a mode of transport; it's a journey back in time. Built by the British in 1903, this narrow-gauge train passes through 102 tunnels and 864 bridges.",
    contentBlocks: [
        "Book your tickets in advance as the 'Himalayan Queen' and 'Shivalik Deluxe' trains get sold out quickly.",
        "The journey takes about 5-6 hours, offering spectacular views of the hills and villages.",
        "Look out for Tunnel No. 33 near Barog station, which has a fascinating ghost story attached to it."
    ],
    tags: ["Shimla", "Toy Train", "Heritage", "Family Trip"]
  }
];