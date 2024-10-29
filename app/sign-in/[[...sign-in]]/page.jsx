'use client'

import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon } from "lucide-react"

export default function Component() {
    const { theme, setTheme } = useTheme()

    return (
        <div className="flex min-h-screen justify-center p-4">
            <div className="w-full max-w-sm">
                <SignIn appearance={{
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