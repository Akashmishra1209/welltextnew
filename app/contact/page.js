import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Github } from "lucide-react"

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="max-w-3xl mx-auto overflow-hidden">
        <CardHeader className="text-center space-y-2  p-8">
          <CardTitle className="text-4xl font-extrabold">Get in Touch</CardTitle>
          <p className="text-xl">We Are here to help and answer any question you might have</p>
        </CardHeader>
        <CardContent className="grid gap-8 p-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex items-center space-x-4 bg-accent rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:scale-105">
              <div className="bg-primary rounded-full p-3">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-sm text-muted-foreground">+919983930509</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-accent rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:scale-105">
              <div className="bg-primary rounded-full p-3">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-sm text-muted-foreground">ashish71570@hotmail.com</p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4 bg-accent rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:scale-105">
            <div className="bg-primary rounded-full p-3">
              <MapPin className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Address</h3>
              <p className="text-sm text-muted-foreground">India</p>
            </div>
          </div>
          <div className="flex items-center space-x-4  rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:scale-105">
            <div className="bg-primary rounded-full p-3">
              <Github className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">GitHub</h3>
              <a 
                href="https://github.com/akashmishra1209" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-primary hover:underline"
              >
                github.com/Akashmishra1209
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}