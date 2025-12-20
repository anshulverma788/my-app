import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Routes, Route } from 'react-router-dom';

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

      <Routes>
        {/* HOME */}
        <Route path="/" element={<Index />} />

        {/* MAIN */}
        <Route path="/package" element={<Package />} />
        <Route path="/destinations" element={<Destination />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />

        {/* PACKAGES */}
        <Route path="/package/shimla-manali" element={<ShimlaManali />} />
        <Route path="/package/shimla" element={<Shimla />} />
        <Route path="/package/dharamshala" element={<Dharamshala />} />
        <Route path="/package/kasol-manikaran" element={<KasolManikaran />} />
        <Route path="/package/spiti-8day" element={<Spiti8day />} />
        <Route path="/package/nainital-4days" element={<Nainital4Days />} />
        <Route path="/package/mussoorie" element={<Mussoorie />} />
        <Route path="/package/rishikesh-haridwar" element={<RishikeshHaridwar />} />
        <Route path="/package/auli-joshimath" element={<AuliJoshimath />} />
        <Route path="/package/kedarnath-badrinath" element={<KedarnathBadrinath />} />

        {/* EXPERIENCES */}
        <Route path="/experiences/adventure" element={<Adventure />} />
        <Route path="/experiences/luxury" element={<Luxury />} />
        <Route path="/experiences/cultural" element={<Cultural />} />
        <Route path="/experiences/wellness" element={<Wellness />} />

        {/* BOOKING */}
        <Route path="/booking/search" element={<Search />} />
        <Route path="/booking/customize" element={<BookingPage />} />
        <Route path="/booking/confirmation" element={<Confirmation />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
