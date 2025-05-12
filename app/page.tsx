import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FAQSection from "@/components/faq-section"
import ContactForm from "@/components/contact-form"
import SupportTopics from "@/components/support-topics"
import ContactDetails from "@/components/contact-details"

export default function CustomerSupportPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Customer Support</h1>
          <p className="mt-2">We're here to help you with any questions or issues</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="faq" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="faq">FAQs</TabsTrigger>
            <TabsTrigger value="topics">Support Topics</TabsTrigger>
            <TabsTrigger value="contact">Contact Us</TabsTrigger>
          </TabsList>

          <TabsContent value="faq" className="space-y-6">
            <FAQSection />
          </TabsContent>

          <TabsContent value="topics" className="space-y-6">
            <SupportTopics />
          </TabsContent>

          <TabsContent value="contact" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <ContactForm />
              <ContactDetails />
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-muted py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
