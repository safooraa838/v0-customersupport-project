import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Phone, Clock } from "lucide-react"

export default function ContactDetails() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Our Contact Information</h2>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            <span>Phone Support</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="font-medium">+1 (555) 123-4567</p>
          <p className="text-sm text-muted-foreground mt-1">For immediate assistance</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            <span>Email</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="font-medium">support@yourcompany.com</p>
          <p className="text-sm text-muted-foreground mt-1">We'll respond within 24 hours</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            <span>Address</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="font-medium">123 Business Street</p>
          <p className="text-sm text-muted-foreground">Suite 100</p>
          <p className="text-sm text-muted-foreground">San Francisco, CA 94103</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <span>Business Hours</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex justify-between">
            <span>Monday - Friday:</span>
            <span>9:00 AM - 6:00 PM EST</span>
          </div>
          <div className="flex justify-between">
            <span>Saturday:</span>
            <span>10:00 AM - 4:00 PM EST</span>
          </div>
          <div className="flex justify-between">
            <span>Sunday:</span>
            <span>Closed</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
