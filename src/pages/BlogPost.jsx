import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/card';

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <Card className="p-8 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Blog Post</h1>
            <p className="text-gray-700">Blog post content goes here.</p>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
}