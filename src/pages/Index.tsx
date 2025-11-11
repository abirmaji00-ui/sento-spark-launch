import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Sparkles, 
  MessageSquare, 
  Zap, 
  Eye, 
  Rocket, 
  Smartphone, 
  Plus, 
  Languages,
  Check,
  Twitter,
  Linkedin,
  Instagram
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import websiteMockup from "@/assets/website-mockup.png";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll('.scroll-fade').forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);
  
  const scrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold">Sento</span>
            </div>
            
            {/* Center Links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Features</a>
              <a href="#pricing" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Pricing</a>
              <a href="#how-it-works" className="text-sm font-medium text-foreground hover:text-primary transition-colors">How It Works</a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Login</a>
            </div>
            
            {/* CTA Button */}
            <Button variant="gradient" size="default">
              Start Free
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center gradient-primary overflow-hidden animate-gradient-shift">
        {/* Animated Gradient Mesh Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-white rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '4s' }}></div>
        </div>
        
        {/* Particle Dots */}
        <div className="absolute inset-0 dot-pattern opacity-30"></div>
        
        {/* Parallax effect */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            opacity: Math.max(0, 1 - scrollY / 500)
          }}
        >
          <div className="absolute top-20 left-10 w-3 h-3 rounded-full bg-white/40 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-2 h-2 rounded-full bg-white/30 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 left-1/3 w-4 h-4 rounded-full bg-white/20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-white/30 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left z-10">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-tight text-shadow-glow">
              From Idea to Website<br />in Minutes
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-10 max-w-2xl mx-auto lg:mx-0">
              AI-powered website builder. No coding, no designers. Just describe what you need and watch it come to life.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <Button 
                variant="outline" 
                size="lg" 
                className="glass-morphism border-white/40 text-white hover:bg-white hover:text-primary backdrop-blur-xl text-lg px-10 py-7 rounded-2xl shadow-glow"
              >
                Create Your Website Free
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={scrollToHowItWorks}
                className="glass-morphism border-white/30 text-white hover:bg-white/20 backdrop-blur-xl text-lg px-10 py-7 rounded-2xl"
              >
                See How It Works
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-2 text-white/80">
              <Check className="w-6 h-6" />
              <span className="text-base">Trusted by 1,000+ businesses worldwide</span>
            </div>
          </div>
          
          {/* Right Side - Floating Mockup */}
          <div className="hidden lg:flex justify-center items-center relative">
            <div className="relative animate-float">
              <img 
                src={websiteMockup} 
                alt="Website Mockup" 
                className="w-full max-w-2xl drop-shadow-2xl rounded-lg"
                style={{
                  transform: `perspective(1000px) rotateY(-5deg) rotateX(5deg)`,
                  filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.3))'
                }}
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 md:py-32 scroll-fade opacity-0 transition-all duration-1000">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 gradient-text">Get Online in 3 Simple Steps</h2>
          <p className="text-center text-muted-foreground text-lg mb-20">Your website journey, simplified</p>
          
          {/* Circular Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary hidden md:block -translate-y-1/2 opacity-20"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              {/* Step 1 */}
              <div className="relative flex flex-col items-center text-center group">
                <div className="w-32 h-32 gradient-primary rounded-full flex items-center justify-center mb-6 shadow-glow transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 relative z-10">
                  <MessageSquare className="w-16 h-16 text-white animate-pulse-glow" />
                </div>
                <div className="absolute top-14 w-32 h-32 gradient-primary rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <h3 className="text-2xl font-bold mb-3">Step 1</h3>
                <p className="text-muted-foreground text-lg">Describe your website in plain English</p>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col items-center text-center group">
                <div className="w-32 h-32 gradient-primary rounded-full flex items-center justify-center mb-6 shadow-glow transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 relative z-10">
                  <Sparkles className="w-16 h-16 text-white animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
                </div>
                <div className="absolute top-14 w-32 h-32 gradient-primary rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <h3 className="text-2xl font-bold mb-3">Step 2</h3>
                <p className="text-muted-foreground text-lg">AI generates a professional website instantly</p>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col items-center text-center group">
                <div className="w-32 h-32 gradient-primary rounded-full flex items-center justify-center mb-6 shadow-glow transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 relative z-10">
                  <Zap className="w-16 h-16 text-white animate-pulse-glow" style={{ animationDelay: '1s' }} />
                </div>
                <div className="absolute top-14 w-32 h-32 gradient-primary rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <h3 className="text-2xl font-bold mb-3">Step 3</h3>
                <p className="text-muted-foreground text-lg">Preview, customize, and publish with one click</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 md:py-32 bg-muted/30 relative overflow-hidden scroll-fade opacity-0 transition-all duration-1000">
        {/* Background Pattern */}
        <div className="absolute inset-0 dot-pattern opacity-40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 gradient-text">Everything You Need to Build & Launch</h2>
          <p className="text-center text-muted-foreground text-lg mb-20">Powerful features at your fingertips</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Sparkles, title: "AI-Powered Design", desc: "Smart layouts tailored to your content" },
              { icon: Eye, title: "Instant Preview", desc: "See your website before you publish" },
              { icon: Rocket, title: "One-Click Deploy", desc: "Go live in seconds, no technical skills needed" },
              { icon: Smartphone, title: "Mobile Responsive", desc: "Perfect on every device automatically" },
              { icon: Plus, title: "Optional Add-ons", desc: "Add WhatsApp chat, payment buttons, contact forms with one click" },
              { icon: Languages, title: "Multi-Language", desc: "Generate in any language or create bilingual sites" }
            ].map((feature, idx) => (
              <Card 
                key={idx}
                className="relative gradient-border shadow-premium hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group overflow-hidden bg-card/50 backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative">
                  <feature.icon className="w-16 h-16 text-primary mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-muted-foreground">{feature.desc}</p>
                </CardContent>
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="animate-shimmer"></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 md:py-32 scroll-fade opacity-0 transition-all duration-1000">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Choose Your Plan</h2>
            <p className="text-lg text-muted-foreground">Start free, upgrade when ready</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Free Plan */}
            <Card className="glass-morphism-dark shadow-premium hover:shadow-glow transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="animate-shimmer"></div>
              </div>
              <CardHeader className="relative">
                <CardTitle>Free</CardTitle>
                <CardDescription className="text-2xl font-bold text-foreground mt-2">₹0</CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">2 sites/month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Preview + see code</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Can't download</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">"Made with Sento" watermark</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="relative">
                <Button variant="outline" className="w-full rounded-2xl">Start Free</Button>
              </CardFooter>
            </Card>

            {/* Basic Plan */}
            <Card className="relative gradient-border glass-morphism-dark shadow-glow scale-105 overflow-hidden group">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                <span className="gradient-primary text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg">
                  Most Popular
                </span>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="animate-shimmer"></div>
              </div>
              <CardHeader className="relative">
                <CardTitle>Basic</CardTitle>
                <CardDescription className="text-2xl font-bold text-foreground mt-2">
                  ₹199<span className="text-sm text-muted-foreground">/mo</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">10 sites/month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Download code</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Deploy to subdomain</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">No watermark</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Email support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="relative">
                <Button variant="gradient" className="w-full rounded-2xl shadow-glow">Start Basic</Button>
              </CardFooter>
            </Card>

            {/* Pro Plan */}
            <Card className="glass-morphism-dark shadow-premium hover:shadow-glow transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="animate-shimmer"></div>
              </div>
              <CardHeader className="relative">
                <CardTitle>Pro</CardTitle>
                <CardDescription className="text-2xl font-bold text-foreground mt-2">
                  ₹499<span className="text-sm text-muted-foreground">/mo</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Unlimited sites</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Custom domain</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Priority generation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Edit after generation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">WhatsApp support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="relative">
                <Button variant="default" className="w-full rounded-2xl bg-primary hover:bg-primary/90">Go Pro</Button>
              </CardFooter>
            </Card>

            {/* Premium Plan */}
            <Card className="glass-morphism-dark shadow-premium hover:shadow-glow transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="animate-shimmer"></div>
              </div>
              <CardHeader className="relative">
                <CardTitle>Premium</CardTitle>
                <CardDescription className="text-2xl font-bold text-foreground mt-2">
                  ₹999<span className="text-sm text-muted-foreground">/mo</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">All Pro features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">White-label</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">API access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Dedicated support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="relative">
                <Button variant="default" className="w-full rounded-2xl bg-primary hover:bg-primary/90">Go Premium</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 md:py-32 bg-muted/30 scroll-fade opacity-0 transition-all duration-1000">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 gradient-text">Loved by Creators Worldwide</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { initials: "SC", name: "Sarah Chen", role: "Freelance Designer", quote: "Built my portfolio site in 10 minutes!" },
              { initials: "MT", name: "Michael Torres", role: "Coffee Shop Owner", quote: "Finally got my shop online without hiring anyone!" },
              { initials: "EW", name: "Emma Williams", role: "Consultant", quote: "Saved thousands on web development!" }
            ].map((testimonial, idx) => (
              <Card 
                key={idx}
                className="shadow-premium hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group"
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center transform transition-transform group-hover:scale-110 group-hover:rotate-6">
                      <span className="text-lg font-bold text-white">{testimonial.initials}</span>
                    </div>
                    <div>
                      <CardTitle className="text-base">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 gradient-primary relative overflow-hidden animate-gradient-shift scroll-fade opacity-0 transition-all duration-1000">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow-glow">Ready to Build Your Website?</h2>
          <p className="text-xl text-white/90 mb-10">Join 1,000+ users already creating with Sento</p>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="glass-morphism border-white/40 text-white hover:bg-white hover:text-primary backdrop-blur-xl text-lg px-12 py-8 rounded-2xl shadow-glow mb-6"
          >
            Create Your Free Website
          </Button>
          
          <p className="text-base text-white/70">No credit card required • 2 free websites</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-foreground text-background py-16 overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-foreground to-blue-900/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Column 1 */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6" />
                <span className="text-xl font-bold">Sento</span>
              </div>
              <p className="text-sm text-background/70">AI websites for everyone</p>
            </div>
            
            {/* Column 2 */}
            <div>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-background/70 hover:text-background transition-colors hover:translate-x-1 inline-block">About</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors hover:translate-x-1 inline-block">Blog</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors hover:translate-x-1 inline-block">Terms</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors hover:translate-x-1 inline-block">Privacy</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors hover:translate-x-1 inline-block">Contact</a></li>
              </ul>
            </div>
            
            {/* Column 3 */}
            <div>
              <p className="text-sm font-semibold mb-4">Follow Us</p>
              <div className="flex gap-4">
                <a href="#" className="text-background/70 hover:text-background transition-all hover:scale-110">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-background/70 hover:text-background transition-all hover:scale-110">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-background/70 hover:text-background transition-all hover:scale-110">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 pt-8">
            <p className="text-sm text-background/70 text-center">© 2025 Sento. Built with AI</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
