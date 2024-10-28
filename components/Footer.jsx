import React from 'react'

export default function Footer() {
    return (
        <footer className="py-6 px-4 border-t">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
                <p className="text-muted-foreground">&copy; 2023 {process.env.NEXT_PUBLIC_APP_NAME}. All rights reserved.</p>
                <nav className="flex gap-4 mt-4 sm:mt-0">
                    <a href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</a>
                    <a href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</a>
                    <a href="#" className="text-muted-foreground hover:text-foreground">Contact</a>
                </nav>
            </div>
        </footer>
    )
}
