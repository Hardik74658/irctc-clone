
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { PopularRoutes } from "@/components/home/PopularRoutes";
import { LiveTracker } from "@/components/home/LiveTracker";
import { GetApp } from "@/components/home/GetApp";
import { Testimonials } from "@/components/home/Testimonials";
import { CTA } from "@/components/home/CTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <PopularRoutes />
      <LiveTracker />
      <GetApp />
      <Testimonials />
      <CTA />
    </Layout>
  );
};

export default Index;
