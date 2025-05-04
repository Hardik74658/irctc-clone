
import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!name || !email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Account created",
        description: "You have successfully signed up. Welcome aboard!",
      });
    }, 1500);
  };

  return (
    <Layout>
      <div className="flex min-h-screen items-center justify-center py-12">
        <div className="max-w-md w-full space-y-8 px-4">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
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
            <h1 className="text-3xl font-bold tracking-tight">Create an account</h1>
            <p className="text-muted-foreground mt-2">
              Sign up for RailEasy to get started with smarter train travel
            </p>
          </div>
          
          <div className="mt-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">
                  Full Name
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  autoComplete="tel"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  autoComplete="new-password"
                  required
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Must be at least 8 characters and include a number and a special character.
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" required />
                <label
                  htmlFor="terms"
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the{" "}
                  <Link to="/terms" className="text-primary hover:text-primary/80 font-medium">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-primary hover:text-primary/80 font-medium">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Creating account..." : "Create account"}
              </Button>

              <div className="text-center text-sm">
                <p>
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-primary hover:text-primary/80 font-medium"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
