import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/card';

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-8">Travel Blog</h1>
          <Card className="p-8 max-w-4xl mx-auto">
            <p className="text-gray-700">Read our latest travel stories and tips.</p>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
}