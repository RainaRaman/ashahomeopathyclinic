import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Doctors from '@/components/Doctors';
import Services from '@/components/Services';
import Appointment from '@/components/Appointment';
import Map from '@/components/Map';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Doctors />
      <Services />
      <About />
      <Appointment />
      <Map />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
