import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { ArrowRight, Type, Hash, ArrowUpDown, Wand2, CheckCircle, Clock, Zap } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
          Analyze and Transform Text in Seconds
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Our free tool helps you count words, analyze characters, and transform text with just a click.
        </p>
        <Link href="/tools">
        <Button size="lg" className="font-semibold">
          Try It Now <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Word Count", icon: Hash, description: "Quickly count words in your text" },
              { title: "Character Analysis", icon: Type, description: "Get detailed character statistics" },
              { title: "Case Conversion", icon: ArrowUpDown, description: "Convert to UPPER, lower, Title, or Sentence case" },
              { title: "Text Transformation", icon: Wand2, description: "Transform your text in various ways" },
            ].map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <feature.icon className="h-6 w-6" />
                    <span className="ml-2">{feature.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <ol className="space-y-4">
            {[
              "Enter your text in the provided text area.",
              "Choose the analysis or transformation you want to perform.",
              "Click the corresponding button to see instant results.",
              "Copy or use the transformed text as needed.",
            ].map((step, index) => (
              <li key={index} className="flex items-center">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold mr-4">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Compare Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How We Compare</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="p-4 text-left font-bold">Features</th>
                  <th className="p-4 text-center font-bold">Our Tool</th>
                  <th className="p-4 text-center font-bold">Others</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Comprehensive Text Analysis & Transformation", us: true, others: "Limited" },
                  { feature: "User Experience & Privacy", us: "Intuitive & Private", others: "Varies with Data Collection" },
                  { feature: "Advanced Features & Regular Updates", us: "Included", others: "Premium or Unavailable" },
                  { feature: "Real-time Analysis", us: true, others: "Often Delayed" },
                  { feature: "Custom Reporting", us: "Flexible Options", others: "Limited or Premium" },
                ].map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-background" : "bg-muted"}>
                    <td className="p-4 border">{item.feature}</td>
                    <td className="p-4 border text-center">
                      {item.us === true ? <CheckCircle className="inline h-5 w-5 text-green-500" /> : item.us}
                    </td>
                    <td className="p-4 border text-center">
                      {item.others === true ? <CheckCircle className="inline h-5 w-5 text-green-500" /> : item.others}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Text Analyzer</h2>
          <div className="grid gap-6">
            {[
              { title: "Fast and Efficient", icon: Zap, description: "Get instant results with our lightning-fast analysis engine." },
              { title: "User-Friendly Interface", icon: CheckCircle, description: "Intuitive design makes it easy for anyone to use." },
              { title: "Always Available", icon: Clock, description: "Access our tool 24/7 from any device with an internet connection." },
            ].map((benefit, index) => (
              <Alert key={index}>
                <benefit.icon className="h-4 w-4" />
                <AlertTitle>{benefit.title}</AlertTitle>
                <AlertDescription>{benefit.description}</AlertDescription>
              </Alert>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Analyze Your Text?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start using our free text analyzer and transformer tool now. No sign-up required!
          </p>
          <Link href="/tools">
          <Button size="lg" className="font-semibold">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          </Link>
        </div>
      </section>

    </div>
  )
}