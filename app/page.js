import React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Hash, Type, Wand2, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const features = [
    {
      title: "Word Count",
      icon: Hash,
      description: "Advanced word counting and analysis tools",
      benefits: [
        "Real-time word counting",
        "Character statistics",
        "Reading time estimation",
      ],
    },
    {
      title: "Text Analysis",
      icon: Type,
      description: "Comprehensive text analysis features",
      benefits: [
        "Readability scores",
        "Keyword density",
        "Sentence structure analysis",
      ],
    },
    {
      title: "Text Transformation",
      icon: Wand2,
      description: "Powerful text transformation tools",
      benefits: [
        "Case conversion",
        "Remove duplicates",
        "Format cleanup",
      ],
    },
  ]
  
  const steps = [
    {
      title: "Enter Text",
      description: "Paste or type your text into the editor",
    },
    {
      title: "Choose Tools",
      description: "Select the analysis or transformation tools you need",
    },
    {
      title: "Get Results",
      description: "View detailed analysis and transformed text instantly",
    },
    {
      title: "Export",
      description: "Download or copy your results with one click",
    },
  ]
  
  const comparisonFeatures = [
    { name: "Real-time Analysis", us: true, others: false },
    { name: "Advanced Statistics", us: true, others: true },
    { name: "Export Options", us: true, others: false },
    { name: "API Access", us: true, others: false },
    { name: "Custom Reports", us: true, others: false },
  ]
  
  const pricingComparison = [
    { name: "Basic Features", us: "Free", others: "Paid" },
    { name: "Advanced Features", us: "Free", others: "$9.99/mo" },
    { name: "API Access", us: "Free", others: "$29.99/mo" },
    { name: "Support", us: "24/7", others: "Limited" },
  ]
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />
        <div className="relative max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-4">
            <Badge variant="secondary" className="mb-4 animate-fade-in">
              ✨ Powerful Text Analysis Tool
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Analyze and Transform Text
              <br className="hidden sm:inline" /> in{" "}
              <span className="text-primary animate-pulse">Seconds</span>
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
              Our free tool helps you count words, analyze characters, and transform
              text with just a click.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 min-[400px]:flex-row justify-center mt-4">
              <Link href="/tools">
                <Button size="lg" className="font-medium hover:scale-105 transition-transform">
                  Try It Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="font-medium hover:bg-primary/10">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
            <p className="text-muted-foreground">
              Everything you need for perfect text analysis
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <feature.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
{/* How It Works Section */}
<section className="py-20 px-4">
  <div className="max-w-5xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4">How It Works</h2>
      <p className="text-muted-foreground">
        Get started in just a few simple steps
      </p>
    </div>
    
    {/* Grid for Steps */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
      
      {/* Responsive Connecting Lines */}
      <div className="hidden lg:block absolute top-1/2 left-[8%] right-[8%] h-0.5 bg-primary/20 -translate-y-1/2" />
      <div className="hidden md:block lg:hidden absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-primary/20 -translate-y-1/2" />
      
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center text-center relative">
          
          {/* Step Circle */}
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 relative z-10 border-2 border-primary">
            <span className="text-lg font-bold text-primary">
              {index + 1}
            </span>
          </div>
          
          {/* Step Title & Description */}
          <h3 className="font-semibold mb-2">{step.title}</h3>
          <p className="text-sm text-muted-foreground">{step.description}</p>
          
          {/* Arrow Indicators */}
          {index < steps.length - 1 && (
            <>
              {/* Arrow for Large Screens */}
              <ArrowRight className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 text-primary/40 w-8 h-8" />
              {/* Arrow for Medium Screens */}
              <ArrowRight className="hidden md:block lg:hidden absolute -right-4 top-1/2 -translate-y-1/2 text-primary/40 w-8 h-8" />
              {/* Arrow for Small Screens */}
              <ArrowRight className="block md:hidden absolute left-1/2 -bottom-8 text-primary/40 w-8 h-8 transform rotate-90" />
            </>
          )}
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Comparison Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground">
              See how we compare to other solutions
            </p>
          </div>
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="pricing">Pricing</TabsTrigger>
            </TabsList>
            <TabsContent value="features">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="font-medium">Feature</div>
                    <div className="font-medium text-center">Our Tool</div>
                    <div className="font-medium text-center">Others</div>
                    {comparisonFeatures.map((feature, index) => (
                      <React.Fragment key={index}>
                        <div className="text-muted-foreground">
                          {feature.name}
                        </div>
                        <div className="text-center">
                          {feature.us ? (
                            <CheckCircle className="inline h-5 w-5 text-green-500" />
                          ) : (
                            "—"
                          )}
                        </div>
                        <div className="text-center">
                          {feature.others ? (
                            <CheckCircle className="inline h-5 w-5 text-green-500" />
                          ) : (
                            "—"
                          )}
                        </div>
                        {index < comparisonFeatures.length - 1 && (
                          <Separator className="col-span-3 my-2" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="pricing">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="font-medium">Plan</div>
                    <div className="font-medium text-center">Our Tool</div>
                    <div className="font-medium text-center">Others</div>
                    {pricingComparison.map((item, index) => (
                      <React.Fragment key={index}>
                        <div className="text-muted-foreground">{item.name}</div>
                        <div className="text-center font-medium text-primary">{item.us}</div>
                        <div className="text-center">{item.others}</div>
                        {index < pricingComparison.length - 1 && (
                          <Separator className="col-span-3 my-2" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
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
