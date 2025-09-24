import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div>
            <p className="font-semibold">MediConnect</p>
            <p className="text-sm text-muted-foreground">Healing Hands, Connected Hearts</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 text-sm">
          <Link href="/" className="text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <Link href="/#features" className="text-muted-foreground hover:text-foreground">
            Features
          </Link>
          <Link href="/donate" className="text-muted-foreground hover:text-foreground">
            Donate
          </Link>
          <Link href="/request" className="text-muted-foreground hover:text-foreground">
            Request
          </Link>
          <Link href="/#about" className="text-muted-foreground hover:text-foreground">
            About
          </Link>
          <Link href="/contact" className="text-muted-foreground hover:text-foreground">
            Contact
          </Link>
          <Link href="/dashboard" className="text-muted-foreground hover:text-foreground">
            Dashboard
          </Link>
        </div>
        <div className="flex items-center gap-3 text-muted-foreground">
          <Link href="https://github.com" aria-label="GitHub" className="hover:text-foreground">
            <Github className="size-5" />
          </Link>
          <Link href="https://twitter.com" aria-label="Twitter" className="hover:text-foreground">
            <Twitter className="size-5" />
          </Link>
          <Link href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-foreground">
            <Linkedin className="size-5" />
          </Link>
        </div>
      </div>
      <div className="border-t border-border/40 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} MediConnect. All rights reserved.
      </div>
    </footer>
  )
}
