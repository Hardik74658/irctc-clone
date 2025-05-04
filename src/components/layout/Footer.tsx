
import { Link } from "react-router-dom";
import { ExternalLink, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    Company: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Blog", href: "/blog" },
    ],
    Support: [
      { label: "Help Center", href: "/help" },
      { label: "Safety Center", href: "/safety" },
      { label: "Community", href: "/community" },
      { label: "Contact Us", href: "/contact" },
    ],
    Legal: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Cookie Settings", href: "/cookies" },
    ],
  };

  return (
    <footer className="bg-background border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center space-x-2">
              <div className="relative h-8 w-8">
                <svg viewBox="0 0 24 24" className="h-8 w-8 text-primary">
                  <path
                    fill="currentColor"
                    d="M9,21H5c-1.1,0-2-0.9-2-2V5c0-1.1,0.9-2,2-2h4c1.1,0,2,0.9,2,2v14C11,20.1,10.1,21,9,21z"
                  />
                  <path
                    fill="currentColor"
                    d="M19,21h-4c-1.1,0-2-0.9-2-2v-5c0-1.1,0.9-2,2-2h4c1.1,0,2,0.9,2,2v5C21,20.1,20.1,21,19,21z"
                    opacity="0.6"
                  />
                  <path
                    fill="currentColor"
                    d="M19,12h-4c-1.1,0-2-0.9-2-2V5c0-1.1,0.9-2,2-2h4c1.1,0,2,0.9,2,2v5C21,11.1,20.1,12,19,12z"
                    opacity="0.4"
                  />
                </svg>
              </div>
              <span className="font-bold">RailEasy</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Book train tickets easily, quickly, and securely with our modern railway booking platform.
            </p>
            <div className="mt-4 flex space-x-3">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Button>
            </div>
          </div>
          
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h3 className="text-sm font-medium">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Download App</h3>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <svg className="h-5 w-5 mr-2" viewBox="0 0 384 512" fill="currentColor">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-xs">Download on the</span>
                  <span className="text-sm font-medium">App Store</span>
                </div>
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <svg className="h-5 w-5 mr-2" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.6 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-xs">Get it on</span>
                  <span className="text-sm font-medium">Google Play</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {currentYear} RailEasy. All rights reserved.
          </p>
          <div className="flex items-center mt-4 sm:mt-0">
            <Button variant="link" size="sm" className="text-xs text-muted-foreground">
              <ExternalLink className="h-3 w-3 mr-1" />
              Official IRCTC Website
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
