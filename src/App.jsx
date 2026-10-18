import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Why from './components/Why.jsx';
import Products from './components/Products.jsx';
import SocialProof from './components/SocialProof.jsx';
import CTASection from './components/CTASection.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';

// Alur AIDA: Hero (Attention) -> Why (Interest) -> Products + SocialProof
// (Desire) -> CTA (Action). Navbar & Footer bersifat struktural.
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Why />
        <Products />
        <SocialProof />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
