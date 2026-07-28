import * as React from "react";
import { Container } from "@/components/foundation/Container";
import { SectionHeading } from "@/components/typography/SectionHeading";
import { FeaturedWorkCard } from "@/components/cards/FeaturedWorkCard";
import { ServiceItem } from "@/components/ui/ServiceItem";
import { ProcessStep } from "@/components/ui/ProcessStep";
import { PhilosophyBlock } from "@/components/ui/PhilosophyBlock";
import { Testimonial } from "@/components/cards/Testimonial";
import { CTASection } from "@/components/ui/CTASection";
import { Button } from "@/components/foundation/Button";
import { BarChart, MonitorSmartphone, Palette, Zap } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-grow flex flex-col w-full overflow-hidden">
      
      {/* 1. Hero Section */}
      <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center pt-20 pb-32">
        {/* Background elements for cinematic feel */}
        <div className="absolute inset-0 z-0 bg-[var(--color-bg-primary)] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80vw] max-w-3xl aspect-square rounded-full bg-gradient-glow opacity-[var(--opacity-10)] blur-[var(--blur-xl)] pointer-events-none" />
        
        <Container className="relative z-10 flex flex-col items-center text-center gap-8 md:gap-12">
          <div className="flex flex-col gap-6 max-w-4xl">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-primary leading-[1.1]">
              Elevate Your Brand to <span className="text-gradient-glow">Atmospheric</span> Heights
            </h1>
            <p className="font-sans text-lg md:text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
              We are a premium digital marketing and creative growth agency engineering cinematic web experiences and scalable brand architectures.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2 w-full sm:w-auto">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Explore Our Work
            </Button>
            <Button variant="ghost" size="lg" className="w-full sm:w-auto border border-transparent hover:border-[var(--color-border-hover)]">
              Our Philosophy
            </Button>
          </div>
        </Container>
      </section>

      {/* 2. Featured Work Section */}
      <section id="work" className="py-24 md:py-32 relative z-10 bg-[var(--color-bg-primary)]">
        <Container>
          <div className="flex flex-col gap-12 md:gap-16">
            <SectionHeading 
              title="Featured Work" 
              subtitle="Cinematic digital experiences engineered for maximum conversion and brand resonance."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <FeaturedWorkCard 
                title="Aura E-Commerce Redesign"
                category="Web Experience"
                href="#"
                imageSrc="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1200&auto=format&fit=crop"
                imageAlt="Aura E-Commerce"
              />
              <FeaturedWorkCard 
                title="Nexus Fintech Platform"
                category="Brand Identity"
                href="#"
                imageSrc="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"
                imageAlt="Nexus Fintech"
              />
            </div>
            <div className="flex justify-center mt-4">
              <Button variant="secondary" size="lg">View All Case Studies</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Services Section */}
      <section id="services" className="py-24 md:py-32 relative z-10 bg-[var(--color-bg-primary)]">
        <Container>
          <div className="flex flex-col gap-12 md:gap-16">
            <SectionHeading 
              title="Our Services" 
              subtitle="A strategic approach to digital dominance."
              align="center"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <ServiceItem 
                title="Digital Strategy"
                description="Data-driven roadmaps to position your brand as a market leader."
                icon={BarChart}
                href="#"
              />
              <ServiceItem 
                title="Brand Identity"
                description="Visually striking, atmospheric brand systems."
                icon={Palette}
                href="#"
              />
              <ServiceItem 
                title="Web Experiences"
                description="High-performance, cinematic digital platforms."
                icon={MonitorSmartphone}
                href="#"
              />
              <ServiceItem 
                title="Creative Growth"
                description="Scalable marketing architectures designed for infinite growth."
                icon={Zap}
                href="#"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Process Section */}
      <section id="process" className="py-24 md:py-32 relative z-10 bg-[var(--color-bg-primary)]">
        <Container size="standard">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="flex flex-col gap-6 lg:sticky lg:top-32 h-fit">
              <SectionHeading 
                title="The Ascendia Process" 
                subtitle="A rigorous, three-phase methodology designed to transform complex challenges into elegant, cinematic solutions."
              />
            </div>
            <div className="flex flex-col">
              <ProcessStep 
                stepNumber={1}
                title="Discovery & Alignment"
                description="We dive deep into your brand DNA, market positioning, and target audience to uncover hidden opportunities for exponential growth."
              />
              <ProcessStep 
                stepNumber={2}
                title="Architectural Strategy"
                description="Developing a robust, scalable blueprint for both design and technical execution, ensuring every pixel and interaction serves a strategic purpose."
              />
              <ProcessStep 
                stepNumber={3}
                title="Cinematic Execution"
                description="Deploying the final product with extreme attention to detail, sophisticated motion design, and rigorous performance optimization."
                isLast={true}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Growth Mindset (PhilosophyBlock) */}
      <section className="py-24 md:py-40 relative z-10 bg-[var(--color-bg-primary)]">
        <Container size="standard">
          <PhilosophyBlock 
            statement="Design without strategy is just decoration. Strategy without design is just data."
            author="Elena Rostova"
            role="Chief Creative Officer"
          />
        </Container>
      </section>

      {/* 6. Why Ascendia */}
      <section id="about" className="py-24 md:py-32 relative z-10 bg-[var(--color-bg-primary)]">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <div className="flex-1 w-full flex flex-col gap-10">
              <SectionHeading 
                title="Why Ascendia?" 
                subtitle="We build digital experiences that refuse to be ignored."
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-[var(--color-border-subtle)]">
                <div className="flex flex-col gap-3">
                  <h4 className="font-heading text-4xl font-medium text-brand-azure">10x</h4>
                  <p className="font-sans text-sm text-secondary leading-relaxed">Average ROI increase across our client portfolio within the first year.</p>
                </div>
                <div className="flex flex-col gap-3">
                  <h4 className="font-heading text-4xl font-medium text-brand-azure">100%</h4>
                  <p className="font-sans text-sm text-secondary leading-relaxed">In-house engineering and design. We never outsource your vision.</p>
                </div>
              </div>
            </div>
            
            <div className="flex-1 w-full max-w-xl aspect-square rounded-[var(--radius-lg)] bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] p-8 md:p-12 relative overflow-hidden flex items-center justify-center backdrop-blur-md">
               <div className="absolute inset-0 bg-gradient-glow opacity-[var(--opacity-10)] pointer-events-none blur-3xl" />
               <p className="font-heading text-xl md:text-2xl text-primary leading-relaxed text-center relative z-10 max-w-md">
                 We believe in the power of atmospheric design—where space, typography, and motion converge to create undeniable, magnetic value.
               </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. Testimonials */}
      <section className="py-24 md:py-32 relative overflow-hidden z-10 bg-[var(--color-bg-primary)]">
        <Container>
          <div className="flex flex-col gap-12 md:gap-16">
            <SectionHeading 
              title="Client Testimonials" 
              align="center"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto w-full">
              <Testimonial 
                quote="Ascendia completely redefined our digital presence. The cinematic quality of their work elevated our brand in ways we didn't think were possible."
                author="Michael Chang"
                role="CEO"
                company="Lumina Tech"
              />
              <Testimonial 
                quote="Their strategic approach to design is unparalleled. They don't just build websites; they craft immersive digital environments."
                author="Sarah Jenkins"
                role="VP of Marketing"
                company="Vanguard Studios"
                avatarSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 8. Final CTA */}
      <section className="pt-24 pb-40 md:pt-32 md:pb-56 relative z-10 bg-[var(--color-bg-primary)]">
        <Container size="wide">
          <CTASection 
            title="Ready to elevate your brand?"
            description="Partner with us to create digital experiences that transcend the ordinary."
            primaryAction={{ label: "Start a Project", href: "#" }}
            secondaryAction={{ label: "View Our Work", href: "#" }}
          />
        </Container>
      </section>

    </main>
  );
}
