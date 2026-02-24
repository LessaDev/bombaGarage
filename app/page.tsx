import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { ContactForm } from "@/components/contact-form"
import { Location } from "@/components/location"
import { Footer } from "@/components/footer"
import { WhatsAppFab } from "@/components/whatsapp-fab"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <ContactForm />
        <Location />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
