import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  ArrowLeft, Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin, 
  Clock, MapPin, MessageCircle, Heart, Send, ChevronRight, Search 
} from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Import Data
import { blogPosts } from "@/data/blogPosts";

export default function BlogPost() {
  const { id } = useParams();
  const [commentText, setCommentText] = useState("");
  
  // Find current post
  const post = blogPosts.find((item) => item.id.toString() === id);
  
  // Find Related Posts (Exclude current)
  const relatedPosts = blogPosts.filter((item) => item.id.toString() !== id).slice(0, 3);

  // Scroll Progress Bar Logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (!post) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="bg-white min-h-screen font-sans text-slate-800">
      <Navbar />

      {/* --- READING PROGRESS BAR (Top Fixed) --- */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-orange-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* ================= HERO SECTION ================= */}
      <div className="relative h-[60vh] md:h-[70vh] w-full bg-slate-900">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-20">
          <div className="container mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs md:text-sm text-gray-300 mb-6 font-medium">
              <Link to="/" className="hover:text-orange-400">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link to="/blogs" className="hover:text-orange-400">Blogs</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-orange-400 truncate max-w-[200px]">{post.title}</span>
            </div>

            <Badge className="bg-orange-600 text-white border-none px-3 py-1 mb-4 text-xs font-bold uppercase tracking-wider">
               {post.category}
            </Badge>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-Lobster font-bold text-white mb-6 leading-tight max-w-4xl">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-300 text-sm font-medium">
              <div className="flex items-center gap-2">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${post.author}`} className="w-8 h-8 rounded-full border border-white/30" alt="author" />
                <span className="text-white">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-orange-400" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-400" />
                <span>8 Min Read</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-orange-400" />
                <span>12 Comments</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN CONTENT AREA ================= */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* --- LEFT: ARTICLE CONTENT (70%) --- */}
          <div className="lg:w-[70%]">
            
            {/* Share Buttons (Mobile Top) */}
            <div className="flex gap-4 mb-8 lg:hidden">
               <Button size="icon" variant="outline" className="rounded-full"><Facebook className="w-4 h-4 text-blue-600" /></Button>
               <Button size="icon" variant="outline" className="rounded-full"><Twitter className="w-4 h-4 text-sky-500" /></Button>
               <Button size="icon" variant="outline" className="rounded-full"><Linkedin className="w-4 h-4 text-blue-700" /></Button>
            </div>

            <article className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-8 prose-a:text-orange-600 prose-img:rounded-2xl prose-img:shadow-lg">
               
               {/* Quick Summary / Table of Contents */}
               <div className="bg-gray-50 border-l-4 border-orange-500 p-6 rounded-r-xl mb-10 not-prose">
                  <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-orange-500" /> In this Article
                  </h4>
                  <ul className="space-y-2 text-sm font-medium text-slate-700">
                     <li className="flex items-center gap-2 cursor-pointer hover:text-orange-600"><span className="w-2 h-2 rounded-full bg-gray-400"></span> Introduction to the Valley</li>
                     <li className="flex items-center gap-2 cursor-pointer hover:text-orange-600"><span className="w-2 h-2 rounded-full bg-gray-400"></span> Best Time to Visit</li>
                     <li className="flex items-center gap-2 cursor-pointer hover:text-orange-600"><span className="w-2 h-2 rounded-full bg-gray-400"></span> Top 5 Hidden Spots</li>
                     <li className="flex items-center gap-2 cursor-pointer hover:text-orange-600"><span className="w-2 h-2 rounded-full bg-gray-400"></span> Where to Stay</li>
                  </ul>
               </div>

               <p className="lead first-letter:text-5xl first-letter:font-bold first-letter:text-orange-500 first-letter:mr-3 first-letter:float-left">
                  {post.content || post.excerpt}
               </p>

               {/* Dummy Content Generation (Agar data kam hai) */}
               {post.contentBlocks ? post.contentBlocks.map((block, idx) => (
                  <p key={idx}>{block}</p>
               )) : (
                 <>
                   <h3>Why You Should Visit Now?</h3>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel sem sit amet dolor fermentum elementum.</p>
                   <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2000&auto=format&fit=crop" alt="Scenery" />
                   <h3>Local Cuisine to Try</h3>
                   <p>Don't miss out on the local delicacies like Siddu, Thukpa, and Dham. The flavors are as rich as the culture.</p>
                 </>
               )}
               
               <blockquote>
                  "Travel is the only thing you buy that makes you richer."
               </blockquote>

            </article>

            {/* Tags & Share (Bottom) */}
            <div className="border-t border-b border-gray-100 py-6 my-10 flex flex-col md:flex-row items-center justify-between gap-6">
               <div className="flex flex-wrap gap-2">
                  {post.tags?.map((tag, i) => (
                     <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase rounded hover:bg-orange-100 hover:text-orange-600 transition-colors">#{tag}</span>
                  ))}
               </div>
               <div className="flex items-center gap-4">
                  <span className="font-bold text-sm text-slate-500">Share:</span>
                  <div className="flex gap-2">
                     <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"><Facebook className="w-4 h-4" /></button>
                     <button className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600"><Twitter className="w-4 h-4" /></button>
                     <button className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600"><Share2 className="w-4 h-4" /></button>
                  </div>
               </div>
            </div>

            {/* Author Box */}
            <div className="bg-emerald-50 rounded-2xl p-8 flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left border border-emerald-100">
               <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${post.author}`} alt={post.author} className="w-20 h-20 rounded-full bg-white p-1 shadow-md" />
               <div className="flex-1">
                  <h4 className="text-xl font-bold text-emerald-900 mb-1">{post.author}</h4>
                  <p className="text-xs font-bold text-orange-600 uppercase mb-3">Senior Travel Editor</p>
                  <p className="text-slate-600 text-sm mb-4">
                     An avid traveler who loves exploring the Himalayas. With over 10 years of experience in trekking and photography, he brings the mountains to your screen.
                  </p>
                  <Link to="/about" className="text-emerald-700 text-sm font-bold underline">View Profile</Link>
               </div>
            </div>

            {/* Previous / Next Navigation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
               <div className="border border-gray-200 p-6 rounded-xl hover:border-orange-300 transition-colors cursor-pointer group">
                  <span className="text-xs text-gray-400 uppercase font-bold">Previous Post</span>
                  <h5 className="font-bold text-slate-800 group-hover:text-orange-600 truncate mt-1">Hidden Waterfalls of Manali</h5>
               </div>
               <div className="border border-gray-200 p-6 rounded-xl hover:border-orange-300 transition-colors cursor-pointer group text-right">
                  <span className="text-xs text-gray-400 uppercase font-bold">Next Post</span>
                  <h5 className="font-bold text-slate-800 group-hover:text-orange-600 truncate mt-1">Top 10 Cafes in Kasol</h5>
               </div>
            </div>

            {/* COMMENTS SECTION */}
            <div className="mt-16">
               <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                  Comments <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded-full">3</span>
               </h3>

               {/* Comment Form */}
               <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm mb-10">
                  <h4 className="font-bold mb-4">Leave a Reply</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                     <Input placeholder="Your Name" className="bg-gray-50" />
                     <Input placeholder="Email Address" className="bg-gray-50" />
                  </div>
                  <Textarea 
                     placeholder="Write your comment here..." 
                     className="bg-gray-50 min-h-[120px] mb-4"
                     value={commentText}
                     onChange={(e) => setCommentText(e.target.value)}
                  />
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                     <Send className="w-4 h-4 mr-2" /> Post Comment
                  </Button>
               </div>

               {/* Comment List (Dummy Data) */}
               <div className="space-y-8">
                  {[1, 2].map((item) => (
                     <div key={item} className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                           <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${item}`} alt="user" />
                        </div>
                        <div className="flex-1">
                           <div className="flex justify-between items-center mb-1">
                              <h5 className="font-bold text-slate-900">Traveler {item}</h5>
                              <span className="text-xs text-gray-400">2 Days ago</span>
                           </div>
                           <p className="text-slate-600 text-sm">
                              This is such an informative post! I am planning to visit next month. Do you suggest booking hotels in advance?
                           </p>
                           <button className="text-orange-600 text-xs font-bold mt-2 hover:underline">Reply</button>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
          </div>

          {/* --- RIGHT: SIDEBAR (30%) --- */}
          <div className="lg:w-[30%]">
             <div className="sticky top-24 space-y-8">
                
                {/* Search Box */}
                <div className="relative">
                   <Input placeholder="Search articles..." className="pl-10 h-12 rounded-full bg-gray-50 border-none shadow-inner" />
                   <Search className="w-4 h-4 text-gray-400 absolute left-4 top-4" />
                </div>

                {/* Call to Action (Booking Widget) */}
                <div className="bg-emerald-900 text-white rounded-2xl p-6 shadow-2xl relative overflow-hidden text-center">
                   <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                   <h4 className="text-xl font-bold font-Lobster mb-2 relative z-10">Planning a Trip?</h4>
                   <p className="text-emerald-200 text-sm mb-6 relative z-10">Let us organize the perfect Himachal getaway for you.</p>
                   <Link to="/contact">
                      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold h-12 relative z-10">
                         Get a Free Quote
                      </Button>
                   </Link>
                </div>

                {/* Popular Categories */}
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                   <h4 className="font-bold text-slate-900 mb-4 text-lg">Categories</h4>
                   <ul className="space-y-3">
                      {["Adventure", "Culture", "Food & Drink", "Travel Tips", "Offbeat"].map((cat, i) => (
                         <li key={i} className="flex justify-between items-center text-slate-600 hover:text-orange-600 cursor-pointer group">
                            <span>{cat}</span>
                            <span className="bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded group-hover:bg-orange-100 group-hover:text-orange-600 transition-colors">
                               {Math.floor(Math.random() * 10) + 2}
                            </span>
                         </li>
                      ))}
                   </ul>
                </div>

                {/* Trending Posts */}
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                   <h4 className="font-bold text-slate-900 mb-4 text-lg">Trending Now</h4>
                   <div className="space-y-4">
                      {relatedPosts.map((post) => (
                         <Link key={post.id} to={`/blog/${post.id}`} className="flex gap-3 group">
                            <img src={post.image} alt="thumb" className="w-20 h-20 object-cover rounded-lg flex-shrink-0 group-hover:opacity-80 transition-opacity" />
                            <div>
                               <span className="text-[10px] text-orange-500 font-bold uppercase">{post.date}</span>
                               <h5 className="font-bold text-sm text-slate-800 leading-snug group-hover:text-orange-600 line-clamp-2 mt-1">
                                  {post.title}
                               </h5>
                            </div>
                         </Link>
                      ))}
                   </div>
                </div>

                {/* Newsletter */}
                <div className="bg-slate-100 rounded-2xl p-6 text-center">
                   <MessageCircle className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                   <h4 className="font-bold text-slate-900 mb-2">Join Our Newsletter</h4>
                   <p className="text-xs text-slate-500 mb-4">Get travel tips and exclusive deals sent to your inbox.</p>
                   <Input placeholder="Enter email" className="bg-white mb-2 text-center" />
                   <Button className="w-full bg-slate-900 text-white">Subscribe</Button>
                </div>

             </div>
          </div>

        </div>

        {/* ================= RELATED POSTS (Bottom) ================= */}
        <div className="mt-20 pt-10 border-t border-gray-200">
           <h3 className="text-3xl font-Lobster font-bold text-center mb-10">You Might Also Like</h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((post) => (
                 <div key={post.id} className="group cursor-pointer">
                    <div className="overflow-hidden rounded-xl h-56 mb-4 relative">
                       <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                       <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-md">
                          {post.category}
                       </div>
                    </div>
                    <h4 className="font-bold text-lg leading-tight group-hover:text-orange-600 transition-colors mb-2">
                       <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h4>
                    <p className="text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>
                 </div>
              ))}
           </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}