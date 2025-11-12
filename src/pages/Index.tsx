import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Sparkles, MessageSquare, Zap, Eye, Rocket, Smartphone, 
  Plus, Languages, Check, Twitter, Linkedin, Instagram, Star
} from "lucide-react";
import laptopMockup from "@/assets/laptop-mockup.png";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Scroll animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-fade').forEach((el) => {
      el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-purple-400" />
              <span className="text-xl font-bold text-white">Sento</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('features')} className="text-white/80 hover:text-white transition-colors">
                Features
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-white/80 hover:text-white transition-colors">
                Pricing
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-white/80 hover:text-white transition-colors">
                How It Works
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-white/80 hover:text-white transition-colors">
                Testimonials
              </button>
            </div>

            <div className="flex items-center gap-4">
              <button className="text-white/80 hover:text-white transition-colors">Login</button>
              <Button className="gradient-primary text-white hover:shadow-glow transition-all">
                Start Free
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Animated Mesh Gradient Background */}
        <div className="absolute inset-0 mesh-gradient" />
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />

        {/* Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `particle-float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <div className="space-y-8" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
              <h1 className="text-6xl lg:text-7xl font-bold text-white text-shadow-glow leading-tight">
                From Idea to Website in Minutes
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed">
                AI-powered website builder. No coding, no designers. Just describe what you need.
              </p>

              {/* Input Box with Animated Gradient Border */}
              <div className="relative group">
                <div className="gradient-border-animated rounded-2xl p-[3px]">
                  <div className="bg-white rounded-2xl p-6 space-y-4">
                    <input
                      type="text"
                      placeholder="Describe your website... e.g., 'a portfolio for a photographer'"
                      className="w-full text-lg px-4 py-3 border-0 focus:outline-none focus:ring-0 text-gray-900 placeholder:text-gray-500"
                    />
                    <Button className="w-full gradient-primary text-white text-lg py-6 hover:shadow-glow transition-all">
                      <Sparkles className="mr-2 h-5 w-5" />
                      Generate Website
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-white/80">
                <Check className="h-5 w-5 text-green-400" />
                <span>Trusted by 1,000+ businesses worldwide</span>
              </div>
            </div>

            {/* Right Side - Laptop Mockup */}
            <div className="relative" style={{ transform: `translateY(${scrollY * -0.05}px)` }}>
              <div className="relative animate-float">
                <img 
                  src={laptopMockup} 
                  alt="Website mockup on laptop" 
                  className="w-full h-auto drop-shadow-2xl"
                  style={{ 
                    filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.5))',
                    transform: 'perspective(1000px) rotateY(-5deg) rotateX(2deg)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-32 bg-background relative overflow-hidden">
        <div className="dot-pattern absolute inset-0 opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20 scroll-fade">
            <h2 className="text-5xl font-bold mb-4 gradient-text-multi">
              Get Online in 3 Simple Steps
            </h2>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 transform -translate-y-1/2" style={{ top: '120px' }} />
            
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {[
                { icon: MessageSquare, title: "Describe Your Vision", desc: "Tell us what you want in plain English" },
                { icon: Sparkles, title: "AI Generates Instantly", desc: "Watch your website come to life" },
                { icon: Zap, title: "Publish with One Click", desc: "Go live in seconds" }
              ].map((step, index) => (
                <div key={index} className="relative scroll-fade" style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-6">
                      <div className="w-32 h-32 rounded-full glass-morphism flex items-center justify-center shadow-glow animate-pulse-glow z-10 relative">
                        <step.icon className="w-14 h-14 text-white" />
                      </div>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 blur-xl opacity-50" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-lg">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 bg-muted/30 relative">
        <div className="dot-pattern absolute inset-0 opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20 scroll-fade">
            <h2 className="text-5xl font-bold mb-4 gradient-text-multi">
              Everything You Need to Build & Launch
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Sparkles, title: "AI-Powered Design", desc: "Smart layouts tailored to your content" },
              { icon: Eye, title: "Instant Preview", desc: "See your website before you publish" },
              { icon: Rocket, title: "One-Click Deploy", desc: "Go live in seconds" },
              { icon: Smartphone, title: "Mobile Responsive", desc: "Perfect on every device" },
              { icon: Plus, title: "Optional Add-ons", desc: "WhatsApp, payments, forms with one click" },
              { icon: Languages, title: "Multi-Language", desc: "Generate in any language" }
            ].map((feature, index) => (
              <div key={index} className="scroll-fade group" style={{ transitionDelay: `${index * 50}ms` }}>
                <div className="glass-morphism rounded-2xl p-8 h-full shadow-premium hover:shadow-glow transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <feature.icon className="w-16 h-16 text-white mb-6 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-white/80 text-lg">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 scroll-fade">
            <h2 className="text-5xl font-bold mb-4 gradient-text-multi">
              Loved by Creators Worldwide
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                quote: "Built my photography portfolio in 10 minutes. Clients think I paid thousands!", 
                name: "Sarah Chen", 
                role: "Freelance Photographer" 
              },
              { 
                quote: "Finally got my coffee shop online without learning to code. Orders doubled!", 
                name: "Michael Torres", 
                role: "Coffee Shop Owner" 
              },
              { 
                quote: "I use Sento for all my client projects now. Saves me weeks of development time.", 
                name: "Emma Williams", 
                role: "Web Consultant" 
              }
            ].map((testimonial, index) => (
              <div key={index} className="scroll-fade" style={{ transitionDelay: `${index * 100}ms` }}>
                <Card className="h-full shadow-testimonial hover:shadow-glow transition-all duration-500 border-2 border-transparent hover:border-purple-500 group animate-tilt bg-gradient-to-br from-background to-muted/50">
                  <CardHeader>
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <CardDescription className="text-lg italic text-foreground/90">
                      "{testimonial.quote}"
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white text-xl font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 scroll-fade">
            <h2 className="text-5xl font-bold mb-4 gradient-text-multi">
              Choose Your Plan
            </h2>
            <p className="text-xl text-muted-foreground">Start free, upgrade anytime</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <div className="scroll-fade">
              <Card className="h-full glass-morphism-dark shadow-premium hover:shadow-glow transition-all duration-500 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader>
                  <CardTitle className="text-3xl text-white">Basic</CardTitle>
                  <div className="mt-4">
                    <span className="text-5xl font-bold text-white">₹199</span>
                    <span className="text-white/60">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    "10 sites per month",
                    "Download code",
                    "Deploy to subdomain",
                    "No watermark",
                    "Email support"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-white/90">
                      <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button className="w-full gradient-primary text-white hover:shadow-glow transition-all rounded-2xl py-6 text-lg">
                    Start Basic
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Pro Plan - Highlighted */}
            <div className="scroll-fade md:scale-105" style={{ transitionDelay: '100ms' }}>
              <div className="relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="gradient-primary px-6 py-2 rounded-full text-white font-semibold shadow-glow">
                    Recommended
                  </div>
                </div>
                <Card className="h-full gradient-border-pricing shadow-glow hover:shadow-[0_0_80px_rgba(139,92,246,0.6)] transition-all duration-500 group relative overflow-hidden bg-gradient-to-br from-purple-900/20 to-blue-900/20">
                  <CardHeader>
                    <CardTitle className="text-3xl text-white">Pro</CardTitle>
                    <div className="mt-4">
                      <span className="text-5xl font-bold text-white">₹499</span>
                      <span className="text-white/60">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      "Unlimited sites",
                      "Custom domain",
                      "Priority generation",
                      "Edit after generation",
                      "WhatsApp support"
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-white">
                        <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full gradient-primary text-white hover:shadow-glow transition-all rounded-2xl py-6 text-lg font-semibold">
                      Go Pro
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="scroll-fade" style={{ transitionDelay: '200ms' }}>
              <Card className="h-full glass-morphism-dark shadow-premium hover:shadow-glow transition-all duration-500 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader>
                  <CardTitle className="text-3xl text-white">Premium</CardTitle>
                  <div className="mt-4">
                    <span className="text-5xl font-bold text-white">₹999</span>
                    <span className="text-white/60">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    "All Pro features",
                    "White-label solution",
                    "API access",
                    "Dedicated support",
                    "Custom integrations"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-white/90">
                      <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-2 border-white/30 text-white hover:bg-white/10 rounded-2xl py-6 text-lg">
                    Go Premium
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* See It In Action Section */}
      <section className="py-32 bg-gradient-to-br from-muted/50 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-fade">
            <h2 className="text-5xl font-bold mb-4 gradient-text-multi">
              Watch Sento Generate a Website
            </h2>
          </div>

          <div className="scroll-fade">
            <div className="glass-morphism-dark rounded-3xl p-12 shadow-premium max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="text-white/60 text-sm font-mono">INPUT</div>
                  <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                    <p className="text-white text-lg italic">
                      "A modern portfolio website for a freelance photographer with a gallery, about page, and contact form"
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <Sparkles className="w-5 h-5 text-purple-400 animate-pulse-glow" />
                    <span className="text-sm">AI generating...</span>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="text-white/60 text-sm font-mono">OUTPUT</div>
                  <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl p-6 border border-white/20 min-h-[200px] flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center animate-pulse-glow">
                        <Rocket className="w-10 h-10 text-white" />
                      </div>
                      <p className="text-white font-semibold">Website Ready!</p>
                      <p className="text-white/60 text-sm mt-2">Preview & publish in one click</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 text-center">
                <Button className="gradient-primary text-white px-12 py-6 text-lg hover:shadow-glow transition-all rounded-2xl">
                  Try It Free Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-blue-900/50 to-pink-900/50" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 scroll-fade">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-shadow-glow">
            Ready to Build Your Website?
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Join 1,000+ creators using Sento
          </p>
          <Button className="glass-morphism text-white px-12 py-8 text-xl hover:shadow-glow transition-all rounded-2xl font-semibold border-2 border-white/30">
            Create Your Website Free
          </Button>
          <p className="mt-6 text-white/70">No credit card required</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-purple-400" />
                <span className="text-xl font-bold">Sento</span>
              </div>
              <p className="text-white/60">AI websites for everyone</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('features')} className="block text-white/60 hover:text-white transition-colors">Features</button>
                <button onClick={() => scrollToSection('pricing')} className="block text-white/60 hover:text-white transition-colors">Pricing</button>
                <button onClick={() => scrollToSection('how-it-works')} className="block text-white/60 hover:text-white transition-colors">How It Works</button>
                <button onClick={() => scrollToSection('testimonials')} className="block text-white/60 hover:text-white transition-colors">Testimonials</button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <div className="space-y-2 mb-6">
                <a href="#" className="block text-white/60 hover:text-white transition-colors">About</a>
                <a href="#" className="block text-white/60 hover:text-white transition-colors">Blog</a>
                <a href="#" className="block text-white/60 hover:text-white transition-colors">Terms</a>
                <a href="#" className="block text-white/60 hover:text-white transition-colors">Privacy</a>
                <a href="#" className="block text-white/60 hover:text-white transition-colors">Contact</a>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-white/60">
            <p>© 2025 Sento. Built with AI</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
