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
import { FadeIn } from "@/components/animation/FadeIn";
import { ScrollytellingEngine } from "@/components/engine/ScrollytellingEngine";

export default function Home() {
  return (
    <main className="flex-grow flex flex-col w-full overflow-hidden">
      <ScrollytellingEngine>
        {/* 1. Hero Section */}
        <section id="hero" className="relative min-h-[100svh] flex flex-col justify-center pt-32 pb-40 overflow-hidden">
          <Container className="relative z-10 flex flex-col items-center text-center">
          <div className="flex flex-col items-center gap-8 md:gap-10 w-full max-w-[1000px]">
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-medium tracking-tighter text-primary leading-[1.05] drop-shadow-sm">
              Elevate Your Brand to<br className="hidden sm:block" /> <span className="text-gradient-glow font-semibold relative inline-block">Atmospheric<div className="absolute -inset-2 bg-gradient-glow blur-2xl opacity-[var(--opacity-20)] -z-10 rounded-full pointer-events-none" /></span> Heights
            </h1>
            <p className="font-sans text-lg sm:text-xl lg:text-2xl text-secondary w-full max-w-[700px] mx-auto leading-[1.6] tracking-tight font-light">
              From scroll-stopping social media to high-converting websites, we create digital experiences that drive measurable business growth.
            </p>
          </div>
          
          {/* Premium CTA Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6 mt-12 md:mt-16 w-full sm:w-auto">
            <Button 
              variant="primary" 
              className="w-full sm:w-auto h-12 lg:h-14 px-8 lg:px-10 text-base lg:text-lg font-medium rounded-full shadow-[0_0_40px_-10px_rgba(96,165,250,0.3)] hover:shadow-[0_0_80px_-15px_rgba(192,132,252,0.5)] transition-all duration-[700ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-1 hover:scale-[1.03] ring-1 ring-white/10"
            >
              Explore Our Work
            </Button>
            <Button 
              variant="ghost" 
              className="w-full sm:w-auto h-12 lg:h-14 px-8 lg:px-10 text-base lg:text-lg font-medium rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)] backdrop-blur-md hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-[700ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-1"
            >
              Our Philosophy
            </Button>
          </div>
        </Container>
      </section>

      {/* 2. Featured Work Section */}
      <section id="work" className="py-24 md:py-32 relative z-10">
        <Container>
          <div className="flex flex-col gap-12 md:gap-16">
            <FadeIn>
              <SectionHeading 
                title="Featured Work" 
                subtitle="Cinematic digital experiences engineered for maximum conversion and brand resonance."
              />
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <FadeIn delay={0.1}>
                <FeaturedWorkCard 
                  title="Aura E-Commerce Redesign"
                  category="Web Experience"
                  href="#"
                  imageSrc="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1200&auto=format&fit=crop"
                  imageAlt="Aura E-Commerce"
                />
              </FadeIn>
              <FadeIn delay={0.2}>
                <FeaturedWorkCard 
                  title="Nexus Fintech Platform"
                  category="Brand Identity"
                  href="#"
                  imageSrc="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"
                  imageAlt="Nexus Fintech"
                />
              </FadeIn>
            </div>
            <FadeIn delay={0.3} className="flex justify-center mt-4">
              <Button variant="secondary" size="lg">View All Case Studies</Button>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* 3. Services Section */}
      <section id="services" className="py-24 md:py-32 relative z-10">
        <Container>
          <div className="flex flex-col gap-12 md:gap-16">
            <FadeIn>
              <SectionHeading 
                title="Our Services" 
                subtitle="A strategic approach to digital dominance."
                align="center"
              />
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <FadeIn delay={0.1}>
                <ServiceItem 
                  title="Digital Strategy"
                  description="Data-driven roadmaps to position your brand as a market leader."
                  icon={BarChart}
                  href="#"
                />
              </FadeIn>
              <FadeIn delay={0.2}>
                <ServiceItem 
                  title="Brand Identity"
                  description="Visually striking, atmospheric brand systems."
                  icon={Palette}
                  href="#"
                />
              </FadeIn>
              <FadeIn delay={0.3}>
                <ServiceItem 
                  title="Web Experiences"
                  description="High-performance, cinematic digital platforms."
                  icon={MonitorSmartphone}
                  href="#"
                />
              </FadeIn>
              <FadeIn delay={0.4}>
                <ServiceItem 
                  title="Creative Growth"
                  description="Scalable marketing architectures designed for infinite growth."
                  icon={Zap}
                  href="#"
                />
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Process Section */}
      <section id="process" className="py-24 md:py-32 relative z-10">
        <Container size="standard">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="flex flex-col gap-6 lg:sticky lg:top-32 h-fit">
              <FadeIn>
                <SectionHeading 
                  title="The Ascendia Process" 
                  subtitle="A rigorous, three-phase methodology designed to transform complex challenges into elegant, cinematic solutions."
                />
              </FadeIn>
            </div>
            <div className="flex flex-col">
              <FadeIn delay={0.1}>
                <ProcessStep 
                  stepNumber={1}
                  title="Discovery & Alignment"
                  description="We dive deep into your brand DNA, market positioning, and target audience to uncover hidden opportunities for exponential growth."
                />
              </FadeIn>
              <FadeIn delay={0.2}>
                <ProcessStep 
                  stepNumber={2}
                  title="Architectural Strategy"
                  description="Developing a robust, scalable blueprint for both design and technical execution, ensuring every pixel and interaction serves a strategic purpose."
                />
              </FadeIn>
              <FadeIn delay={0.3}>
                <ProcessStep 
                  stepNumber={3}
                  title="Cinematic Execution"
                  description="Deploying the final product with extreme attention to detail, sophisticated motion design, and rigorous performance optimization."
                  isLast={true}
                />
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Growth Mindset (PhilosophyBlock) */}
      <section className="py-24 md:py-40 relative z-10">
        <Container size="standard">
          <FadeIn>
            <PhilosophyBlock 
              statement="Design without strategy is just decoration. Strategy without design is just data."
              author="Elena Rostova"
              role="Chief Creative Officer"
            />
          </FadeIn>
        </Container>
      </section>

      {/* 6. Why Ascendia */}
      <section id="about" className="py-24 md:py-32 relative z-10">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <div className="flex-1 w-full flex flex-col gap-10">
              <FadeIn>
                <SectionHeading 
                  title="Why Ascendia?" 
                  subtitle="We build digital experiences that refuse to be ignored."
                />
              </FadeIn>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-[var(--color-border-subtle)]">
                <FadeIn delay={0.1} className="flex flex-col gap-3">
                  <h4 className="font-heading text-4xl font-medium text-brand-azure">10x</h4>
                  <p className="font-sans text-sm text-secondary leading-relaxed">Average ROI increase across our client portfolio within the first year.</p>
                </FadeIn>
                <FadeIn delay={0.2} className="flex flex-col gap-3">
                  <h4 className="font-heading text-4xl font-medium text-brand-azure">100%</h4>
                  <p className="font-sans text-sm text-secondary leading-relaxed">In-house engineering and design. We never outsource your vision.</p>
                </FadeIn>
              </div>
            </div>
            
            <FadeIn direction="left" delay={0.2} className="flex-1 w-full max-w-xl aspect-square rounded-[var(--radius-lg)] bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] p-8 md:p-12 relative overflow-hidden flex items-center justify-center backdrop-blur-md">
               <div className="absolute inset-0 bg-gradient-glow opacity-[var(--opacity-10)] pointer-events-none blur-3xl" />
               <p className="font-heading text-xl md:text-2xl text-primary leading-relaxed text-center relative z-10 max-w-md">
                 We believe in the power of atmospheric design—where space, typography, and motion converge to create undeniable, magnetic value.
               </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* 7. Testimonials */}
      <section className="py-24 md:py-32 relative overflow-hidden z-10">
        <Container>
          <div className="flex flex-col gap-12 md:gap-16">
            <FadeIn>
              <SectionHeading 
                title="Client Testimonials" 
                align="center"
              />
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto w-full">
              <FadeIn delay={0.1}>
                <Testimonial 
                  quote="Ascendia completely redefined our digital presence. The cinematic quality of their work elevated our brand in ways we didn't think were possible."
                  author="Michael Chang"
                  role="CEO"
                  company="Lumina Tech"
                />
              </FadeIn>
              <FadeIn delay={0.2}>
                <Testimonial 
                  quote="Their strategic approach to design is unparalleled. They don't just build websites; they craft immersive digital environments."
                  author="Sarah Jenkins"
                  role="VP of Marketing"
                  company="Vanguard Studios"
                  avatarSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
                />
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* 8. Final CTA */}
      <section className="pt-24 pb-40 md:pt-32 md:pb-56 relative z-10">
        <Container size="wide">
          <CTASection 
            title="Ready to elevate your brand?"
            description="Partner with us to create digital experiences that transcend the ordinary."
            primaryAction={{ label: "Start a Project", href: "#" }}
            secondaryAction={{ label: "View Our Work", href: "#" }}
          />
        </Container>
      </section>
      </ScrollytellingEngine>
    </main>
  );
}
