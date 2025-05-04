
import { useState } from "react";
import { Link } from "react-router-dom";
import { Bell, Menu, Search, User, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

export function Header() {
  const isMobile = useIsMobile();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const navItems = [
    { title: "Home", href: "/" },
    { title: "Trains", href: "/trains" },
    { title: "My Bookings", href: "/bookings" },
    { title: "Tourism", href: "/tourism" },
    { title: "Support", href: "/support" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center space-x-2">
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
            <span className="hidden font-bold sm:inline-block">RailEasy</span>
          </Link>
          
          {!isMobile && (
            <nav className="hidden md:flex items-center gap-6 text-sm">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "transition-colors hover:text-foreground/80 text-foreground/60"
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          )}
        </div>

        <div className="flex items-center gap-2">
          {!isMobile && (
            <Button variant="outline" size="icon" className="rounded-full">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          )}
          
          {isLoggedIn ? (
            <>
              <Button variant="outline" size="icon" className="rounded-full">
                <Bell className="h-4 w-4" />
                <span className="sr-only">Notifications</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <User className="h-4 w-4" />
                <span className="sr-only">Account</span>
              </Button>
            </>
          ) : (
            <div className="hidden sm:flex items-center gap-2">
              <Button variant="outline" asChild>
                <Link to="/login">Log in</Link>
              </Button>
              <Button asChild>
                <Link to="/signup">Sign up</Link>
              </Button>
            </div>
          )}
          
          {/* Mobile menu */}
          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center border-b pb-4">
                    <div className="flex items-center gap-2">
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
                    <SheetClose className="rounded-full p-1.5 text-foreground/60 hover:text-foreground">
                      <X className="h-5 w-5" />
                      <span className="sr-only">Close</span>
                    </SheetClose>
                  </div>
                  <nav className="flex flex-col gap-4 py-8">
                    {navItems.map((item) => (
                      <SheetClose key={item.href} asChild>
                        <Link
                          to={item.href}
                          className="flex items-center py-2 text-lg font-medium"
                        >
                          {item.title}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                  <div className="mt-auto border-t pt-4">
                    {isLoggedIn ? (
                      <div className="flex flex-col gap-4">
                        <Link to="/profile" className="flex items-center gap-4 py-2">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                            <User className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">John Doe</p>
                            <p className="text-xs text-muted-foreground">john.doe@example.com</p>
                          </div>
                        </Link>
                        <Button variant="outline">Log out</Button>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-2">
                        <Button asChild>
                          <Link to="/signup">Sign up</Link>
                        </Button>
                        <Button variant="outline" asChild>
                          <Link to="/login">Log in</Link>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
}
