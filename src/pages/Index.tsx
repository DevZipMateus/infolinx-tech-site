
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ScrollStory from '@/components/ScrollStory';
import About from '@/components/About';
import Services from '@/components/Services';
import Plans from '@/components/Plans';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ScrollStory />
        <About />
        <Services />
        <Plans />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
