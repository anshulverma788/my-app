import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card } from '@/components/ui/card';

export default function FAQ() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-8">FAQ</h1>
          <Card className="p-8 max-w-4xl mx-auto">
            <p className="text-gray-700">Find answers to frequently asked questions.</p>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
}