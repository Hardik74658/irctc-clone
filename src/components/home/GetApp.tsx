
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function GetApp() {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold tracking-tight mb-4 animate-fade-in">
              Download Our Mobile App
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Get access to exclusive mobile-only features including offline ticket access, 
              real-time notifications, and faster booking on our user-friendly mobile app.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Button className="flex items-center justify-center gap-2 h-14 px-6">
                <svg className="h-6 w-6" viewBox="0 0 384 512" fill="currentColor">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
                <div className="flex flex-col text-left">
                  <span className="text-xs">Download on the</span>
                  <span className="text-lg font-medium">App Store</span>
                </div>
              </Button>
              <Button className="flex items-center justify-center gap-2 h-14 px-6">
                <svg className="h-6 w-6" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.6 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                </svg>
                <div className="flex flex-col text-left">
                  <span className="text-xs">Get it on</span>
                  <span className="text-lg font-medium">Google Play</span>
                </div>
              </Button>
            </div>
            
            <div className="mt-8 flex items-center gap-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-amber-500" fill="currentColor">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-amber-500" fill="currentColor">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-amber-500" fill="currentColor">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-amber-500" fill="currentColor">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-amber-500" fill="currentColor">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
              <span className="text-sm text-muted-foreground">4.8/5 from over 10,000 reviews</span>
            </div>

            <div className="mt-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button variant="link" className="flex items-center p-0">
                Learn more about our app features
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative aspect-[9/16] max-w-xs mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-[3rem] -rotate-6"></div>
              
              <div className="absolute inset-0 rotate-6">
                <div className="h-full w-full bg-background rounded-[3rem] border-8 border-foreground/10 shadow-xl overflow-hidden">
                  <div className="h-8 w-24 bg-foreground/5 rounded-full absolute top-4 left-1/2 -translate-x-1/2"></div>

                  <div className="h-full pt-16 pb-8 px-5">
                    <div className="h-full w-full bg-accent/50 rounded-3xl overflow-hidden">
                      <div className="h-12 bg-primary/10 flex items-center px-4">
                        <div className="h-6 w-24 bg-primary/20 rounded-full"></div>
                      </div>
                      
                      <div className="p-4 space-y-4">
                        <div className="h-32 bg-background rounded-xl flex items-center justify-center">
                          <svg viewBox="0 0 24 24" className="h-12 w-12 text-primary/40">
                            <path
                              fill="currentColor"
                              d="M4,15V9H12V4.16L19.84,12L12,19.84V15H4Z"
                            />
                          </svg>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="h-4 w-3/4 bg-background rounded-full"></div>
                          <div className="h-4 w-1/2 bg-background rounded-full"></div>
                        </div>
                        
                        <div className="h-20 bg-background rounded-xl"></div>
                        <div className="h-16 bg-background rounded-xl"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block absolute bottom-0 right-0 transform translate-x-1/4">
              <svg width="180" height="180" viewBox="0 0 200 200" className="text-primary/10">
                <path
                  fill="currentColor"
                  d="M45.11,45.11C19.59,70.64,19.59,111.89,45.11,137.41L137.41,45.11C111.89,19.59,70.64,19.59,45.11,45.11Z"
                />
                <path
                  fill="currentColor"
                  d="M137.41,137.41C162.94,111.89,162.94,70.64,137.41,45.11L45.11,137.41C70.64,162.94,111.89,162.94,137.41,137.41Z"
                  opacity="0.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
