import { About } from "@/components/sections/about"
import { BeforeAfter } from "@/components/sections/before-after"
import { BookingForm } from "@/components/sections/booking-form"
import { CredibilityBar } from "@/components/sections/credibility-bar"
import { Differentials } from "@/components/sections/differentials"
import { Faq } from "@/components/sections/faq"
import { FloatingWhatsapp } from "@/components/sections/floating-whatsapp"
import { Footer } from "@/components/sections/footer"
import { Hero } from "@/components/sections/hero"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Insurance } from "@/components/sections/insurance"
import { Location } from "@/components/sections/location"
import { Navbar } from "@/components/sections/navbar"
import { Services } from "@/components/sections/services"
import { Specialties } from "@/components/sections/specialties"
import { SpecialOffer } from "@/components/sections/special-offer"
import { Stats } from "@/components/sections/stats"
import { Technology } from "@/components/sections/technology"
import { Testimonials } from "@/components/sections/testimonials"
import { WhatsappDirect } from "@/components/sections/whatsapp-direct"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <CredibilityBar />
        <About />
        <Differentials />
        <Testimonials />
        <BeforeAfter />
        <Stats />
        <Services />
        <Specialties />
        <HowItWorks />
        <Technology />
        <Insurance />
        <SpecialOffer />
        <BookingForm />
        <WhatsappDirect />
        <Location />
        <Faq />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </div>
  )
}

export default App
