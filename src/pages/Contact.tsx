import { Mail, Phone } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
          <CardDescription>Get in touch with our team</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4" />
            <a href="mailto:info@lyvena.xyz" className="text-primary hover:underline">
              info@lyvena.xyz
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Contact