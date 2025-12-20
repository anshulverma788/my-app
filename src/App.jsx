import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Package from './pages/All-Package'; 
import Destination from './pages/Destination'; 
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Testimonials from './pages/Testimonials';
import FAQ from './pages/FAQ';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Shimla from './pages/Package/Shimla';
import Dharamshala from './pages/Package/Dharamshala';
import KasolManikaran from './pages/Package/KasolManikaran';
import Spiti8day from './pages/Package/Spiti8day';
import Nainital4Days from './pages/Package/Nainital4Days';
import Mussoorie from './pages/Package/Mussoorie';
import RishikeshHaridwar from './pages/Package/RishikeshHaridwar';
import AuliJoshimath from './pages/Package/AuliJoshimath';
import ShimlaManali from './pages/Package/Shimla-manali';
import KedarnathBadrinath from './pages/Package/KedarnathBadrinath';
import Adventure from './pages/experiences/Adventure';
import Luxury from './pages/experiences/Luxury';
import Cultural from './pages/experiences/Cultural';
import Wellness from './pages/experiences/Wellness';
import Search from './pages/booking/Search';
import BookingPage from './pages/booking/Customize'; 
import Confirmation from './pages/booking/Confirmation';
import NotFound from './pages/NotFound';
const queryClient = new QueryClient();
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Purana Package Route */}
          <Route path="/Package" element={<Package />} />

          {/* 👇 YEH HAI MAIN CHANGE: Ab '/destinations' par aapka naya page khulega */}
          <Route path="/destinations" element={<Destination />} />

          <Route path="/about" element={<About />} />
          <Route path="/Destination" element={<Destination />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />

          {/* Destination Routes (Specific) */}
          <Route path="/Package/Shimla-manali" element={<ShimlaManali />} />
          <Route path="/Package/Shimla" element={<Shimla />} />
          <Route path="/Package/Dharamshala" element={<Dharamshala />} />
          <Route path="/Package/KasolManikaran" element={<KasolManikaran />} />
          <Route path="/Package/Spiti8day" element={<Spiti8day />} />
          <Route path="/Package/Nainital4Days" element={<Nainital4Days />} />
          <Route path="/Package/Mussoorie" element={<Mussoorie />} />
          <Route path="/Package/RishikeshHaridwar" element={<RishikeshHaridwar />} />
          <Route path="/Package/AuliJoshimath" element={<AuliJoshimath />} />
          <Route path="/Package/KedarnathBadrinath" element={<KedarnathBadrinath />} />

          {/* Experience Routes */}
          <Route path="/experiences/adventure" element={<Adventure />} />
          <Route path="/experiences/luxury" element={<Luxury />} />
          <Route path="/experiences/cultural" element={<Cultural />} />
          <Route path="/experiences/wellness" element={<Wellness />} />

          {/* Booking Routes */}
          <Route path="/booking/search" element={<Search />} />
          <Route path="/book/:id" element={<BookingPage />} />
          <Route path="/booking/customize" element={<BookingPage />} />
          <Route path="/booking/confirmation" element={<Confirmation />} />

          {/* 404 fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;