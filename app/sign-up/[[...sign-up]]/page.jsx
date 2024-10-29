"use client"
import { SignUp } from '@clerk/nextjs'
import useTheme from 'next-theme'

export default function Page() {
  const theme = useTheme()
  return (
    <div className="flex min-h-screen justify-center p-4">
      <div className="w-full max-w-sm">
        <SignUp appearance={{
          baseTheme: theme,
          elements: {
            formButtonPrimary: "bg-primary text-primary-foreground hover:bg-primary/90",
            card: "bg-card w-full",
            headerTitle: "text-card-foreground",
            headerSubtitle: "text-muted-foreground",
            socialButtonsBlockButton: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            formFieldLabel: "text-card-foreground",
            formFieldInput: "bg-input",
            dividerLine: "bg-border",
            dividerText: "text-muted-foreground",
            footerActionLink: "text-primary hover:text-primary/90"
          }
        }} />
      </div>
    </div>
  )
}