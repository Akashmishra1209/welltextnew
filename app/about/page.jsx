"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"
import { FileText, MessageCircle, Zap, Heart, Github } from "lucide-react"

export default function About() {
  const features = [
    { icon: <FileText className="w-5 h-5" />, text: "Text analysis tools" },
    { icon: <MessageCircle className="w-5 h-5" />, text: "Word and character count" },
    { icon: <Zap className="w-5 h-5" />, text: "Readability scoring" },
    { icon: <Heart className="w-5 h-5" />, text: "Keyword extraction" },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="bg-card text-card-foreground overflow-hidden">
          <CardHeader className="space-y-1 p-8">
            <CardTitle className="text-4xl font-extrabold">About Free and Fast Text Analyzer</CardTitle>
            <CardDescription className="text-xl font-medium opacity-90">Your go-to platform for text analysis and manipulation</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-8 p-8">
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Welcome to our free and fast text analyzer and text-related tools! I Am an individual developer passionate about creating useful tools for text analysis and manipulation.
            </motion.p>
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              My goal is to provide you with a simple, efficient, and completely free platform for all your text-related needs. Whether You Are a student, professional, or just someone who loves working with text, You Will find valuable tools here to help you analyze, modify, and understand your text better.
            </motion.p>
            <Separator />
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-3xl font-semibold">What We Offer</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-2 bg-accent rounded-lg p-4"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge variant="secondary" className="p-2">
                      {feature.icon}
                    </Badge>
                    <span className="font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <Separator />
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              As a solo developer, I Am committed to continuously improving and expanding the tools available on this site. Your feedback and suggestions are always welcome and help shape the future of this project.
            </motion.p>
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Thank you for using our free text analysis tools. I hope you find them helpful and time-saving in your text-related tasks!
            </motion.p>
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <a 
                href="https://github.com/yourusername/your-repo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full hover:bg-secondary/80 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>View on GitHub</span>
              </a>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}