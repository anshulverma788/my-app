// File: src/pages/Blog.jsx
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/card';
import { Calendar, User, ArrowRight, Clock, MapPin, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// ✅ IMPORT DATA (Path aapke screenshot ke hisaab se set hai)
import { blogPosts, categories } from '../data/BlogPosts';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter Logic
  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 bg-emerald-950 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
             <div className="absolute -top-20 -right-20 w-96 h-96 bg-orange-500 rounded-full blur-[100px]"></div>
             <div className="absolute bottom-0 left-20 w-72 h-72 bg-emerald-400 rounded-full blur-[80px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-orange-400 font-bold tracking-widest uppercase text-sm mb-4 inline-block">Travel Diaries</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Explore the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">Unseen</span> Stories
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg mb-8">
            Tips, guides, and tales from the mountains. Get inspired for your next adventure in Himachal Pradesh.
          </p>
        </div>
      </section>

      {/* FILTER & GRID SECTION */}
      <section className="py-16 container mx-auto px-4">
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-200"
                  : "bg-white text-gray-600 border-gray-200 hover:border-orange-400 hover:text-orange-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 bg-white rounded-2xl flex flex-col h-full">
              
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold text-emerald-800 uppercase tracking-wide">
                  {post.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-orange-500" />
                    {post.date}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-emerald-950 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>

                <div className="pt-4 border-t border-gray-100 flex justify-between items-center mt-auto">
                   <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                        <User className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-gray-700">{post.author}</span>
                   </div>
                   
                   {/* LINK TO SINGLE POST PAGE */}
                   <Link to={`/blog/${post.id}`}>
                     <button className="text-sm font-bold text-emerald-600 flex items-center gap-1 hover:gap-2 transition-all hover:text-orange-500">
                       Read More <ArrowRight className="w-4 h-4" />
                     </button>
                   </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}