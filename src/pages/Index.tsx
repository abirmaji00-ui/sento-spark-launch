import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Sparkles, 
  MessageSquare, 
  Zap, 
  Eye, 
  Rocket, 
  Smartphone, 
  Languages,
  Check,
  Star,
  Twitter,
  Linkedin,
  Instagram
} from "lucide-react";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [clickedStep, setClickedStep] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    
    // Fade in on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".scroll-fade").forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleStepClick = (step: number) => {
    setClickedStep(step);
    setTimeout(() => setClickedStep(null), 400);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-6 h-6 text-purple-500" />
              <span className="text-xl font-bold text-white">Sento</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="nav-link text-zinc-400 hover:text-white">Features</a>
              <a href="#pricing" className="nav-link text-zinc-400 hover:text-white">Pricing</a>
              <a href="#how-it-works" className="nav-link text-zinc-400 hover:text-white">How It Works</a>
              <a href="#testimonials" className="nav-link text-zinc-400 hover:text-white">Testimonials</a>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-zinc-400 hover:text-white">
                Login
              </Button>
              <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90">
                Start Free
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Animated Mesh Gradient Background */}
        <div className="absolute inset-0 mesh-gradient-bg" />
        
        {/* Dot Pattern Overlay */}
        <div className="absolute inset-0 dot-pattern opacity-50" />
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }} />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-7xl font-bold text-white leading-tight mb-6 text-shadow-glow">
            From Idea to Website in Minutes
          </h1>
          
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12">
            AI-powered website builder. No coding, no designers. Just describe what you need.
          </p>

          {/* Animated Input Box */}
          <div className="max-w-3xl mx-auto mb-6">
            <div className="gradient-border-flow rounded-2xl p-1">
              <div className="bg-zinc-900 rounded-2xl p-6">
                <input
                  type="text"
                  placeholder="Describe your website... e.g., 'a portfolio for a photographer'"
                  className="w-full bg-transparent text-white placeholder-zinc-500 text-lg outline-none"
                />
              </div>
            </div>
            <Button 
              size="lg" 
              className="mt-6 bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105 transition-transform shadow-glow text-lg px-8 py-6 rounded-xl"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Generate Website
            </Button>
          </div>

          <p className="text-zinc-500 text-sm">
            <Check className="w-4 h-4 inline mr-2 text-purple-500" />
            Trusted by 1,000+ businesses worldwide
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="scroll-fade py-24 bg-zinc-900 relative">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-white text-center mb-16">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative">
            {/* Step 1 */}
            <div className="relative flex flex-col items-center">
              <button
                onClick={() => handleStepClick(1)}
                className={`w-48 h-48 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-2 border-purple-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                  clickedStep === 1 ? 'scale-110 rotate-6 shadow-glow' : ''
                }`}
              >
                <MessageSquare className="w-16 h-16 text-white" />
              </button>
              <h3 className="text-2xl font-semibold text-white mt-6 mb-2">Describe</h3>
              <p className="text-zinc-400 text-center">Tell us what you want in plain English</p>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col items-center">
              <button
                onClick={() => handleStepClick(2)}
                className={`w-48 h-48 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-2 border-purple-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                  clickedStep === 2 ? 'scale-110 rotate-6 shadow-glow' : ''
                }`}
              >
                <Sparkles className="w-16 h-16 text-white animate-pulse-glow" />
              </button>
              <h3 className="text-2xl font-semibold text-white mt-6 mb-2">Generate</h3>
              <p className="text-zinc-400 text-center">AI creates your website instantly</p>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col items-center">
              <button
                onClick={() => handleStepClick(3)}
                className={`w-48 h-48 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-2 border-purple-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                  clickedStep === 3 ? 'scale-110 rotate-6 shadow-glow' : ''
                }`}
              >
                <Zap className="w-16 h-16 text-white" />
              </button>
              <h3 className="text-2xl font-semibold text-white mt-6 mb-2">Publish</h3>
              <p className="text-zinc-400 text-center">Go live with one click</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="scroll-fade py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-white text-center mb-16">
            Everything You Need
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <Card className="bg-zinc-800/50 backdrop-blur-xl border-zinc-700 p-8 rounded-2xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group">
              <Sparkles className="w-16 h-16 text-white mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-semibold text-white mb-3">AI-Powered Design</h3>
              <p className="text-zinc-300">Smart layouts tailored to your content</p>
            </Card>

            {/* Feature 2 */}
            <Card className="bg-zinc-800/50 backdrop-blur-xl border-zinc-700 p-8 rounded-2xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group">
              <Smartphone className="w-16 h-16 text-white mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-semibold text-white mb-3">Mobile Responsive</h3>
              <p className="text-zinc-300">Perfect on every device automatically</p>
            </Card>

            {/* Feature 3 */}
            <Card className="bg-zinc-800/50 backdrop-blur-xl border-zinc-700 p-8 rounded-2xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group">
              <Eye className="w-16 h-16 text-white mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-semibold text-white mb-3">Instant Preview</h3>
              <p className="text-zinc-300">See changes in real-time before publishing</p>
            </Card>

            {/* Feature 4 */}
            <Card className="bg-zinc-800/50 backdrop-blur-xl border-zinc-700 p-8 rounded-2xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group">
              <Languages className="w-16 h-16 text-white mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-semibold text-white mb-3">Fully Customizable</h3>
              <p className="text-zinc-300">Edit anything after generation</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="scroll-fade py-24 bg-zinc-900 relative">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-white text-center mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-zinc-400 text-center mb-16">Start free, upgrade anytime</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <Card className="bg-gradient-to-br from-zinc-800 to-zinc-900 border-zinc-700 p-8 rounded-3xl hover:scale-105 hover:-translate-y-4 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-400 group">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Basic</h3>
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-white">₹199</span>
                  <span className="text-zinc-400 ml-2">/month</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-zinc-300">
                  <Check className="w-5 h-5 text-purple-500 mr-3" />
                  10 sites per month
                </li>
                <li className="flex items-center text-zinc-300">
                  <Check className="w-5 h-5 text-purple-500 mr-3" />
                  Download code
                </li>
                <li className="flex items-center text-zinc-300">
                  <Check className="w-5 h-5 text-purple-500 mr-3" />
                  Deploy to subdomain
                </li>
                <li className="flex items-center text-zinc-300">
                  <Check className="w-5 h-5 text-purple-500 mr-3" />
                  No watermark
                </li>
                <li className="flex items-center text-zinc-300">
                  <Check className="w-5 h-5 text-purple-500 mr-3" />
                  Email support
                </li>
              </ul>

              <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 text-white font-semibold py-6 rounded-xl">
                Start Basic
              </Button>
            </Card>

            {/* Pro Plan - Recommended */}
            <Card className="bg-gradient-to-br from-purple-500 to-blue-600 border-purple-500/50 p-8 rounded-3xl hover:scale-105 hover:-translate-y-4 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-400 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                  Recommended
                </span>
              </div>
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-white">₹499</span>
                  <span className="text-purple-100 ml-2">/month</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-white">
                  <Check className="w-5 h-5 text-white mr-3" />
                  Unlimited sites
                </li>
                <li className="flex items-center text-white">
                  <Check className="w-5 h-5 text-white mr-3" />
                  Custom domain
                </li>
                <li className="flex items-center text-white">
                  <Check className="w-5 h-5 text-white mr-3" />
                  Priority generation
                </li>
                <li className="flex items-center text-white">
                  <Check className="w-5 h-5 text-white mr-3" />
                  Edit after generation
                </li>
                <li className="flex items-center text-white">
                  <Check className="w-5 h-5 text-white mr-3" />
                  WhatsApp support
                </li>
              </ul>

              <Button className="w-full bg-white text-purple-600 hover:bg-gray-100 font-semibold py-6 rounded-xl shadow-glow">
                Go Pro
              </Button>
            </Card>

            {/* Premium Plan */}
            <Card className="bg-gradient-to-br from-blue-800 to-purple-900 border-purple-500/50 p-8 rounded-3xl hover:scale-105 hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-400 group">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Premium</h3>
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-white">₹999</span>
                  <span className="text-purple-200 ml-2">/month</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-purple-100">
                  <Check className="w-5 h-5 text-white mr-3" />
                  All Pro features
                </li>
                <li className="flex items-center text-purple-100">
                  <Check className="w-5 h-5 text-white mr-3" />
                  White-label
                </li>
                <li className="flex items-center text-purple-100">
                  <Check className="w-5 h-5 text-white mr-3" />
                  API access
                </li>
                <li className="flex items-center text-purple-100">
                  <Check className="w-5 h-5 text-white mr-3" />
                  Dedicated support
                </li>
                <li className="flex items-center text-purple-100">
                  <Check className="w-5 h-5 text-white mr-3" />
                  Custom integrations
                </li>
              </ul>

              <Button variant="outline" className="w-full border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold py-6 rounded-xl">
                Go Premium
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="scroll-fade py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-white text-center mb-16">
            Loved by Creators Worldwide
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="bg-zinc-800/50 backdrop-blur-xl border-zinc-700 p-6 rounded-2xl hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-zinc-300 italic text-lg mb-4">
                "Built my photography portfolio in 10 minutes. Clients think I paid thousands!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold mr-3">
                  SC
                </div>
                <div>
                  <p className="text-white font-semibold">Sarah Chen</p>
                  <p className="text-zinc-500 text-sm">Freelance Photographer</p>
                </div>
              </div>
            </Card>

            {/* Testimonial 2 */}
            <Card className="bg-zinc-800/50 backdrop-blur-xl border-zinc-700 p-6 rounded-2xl hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-zinc-300 italic text-lg mb-4">
                "Finally got my coffee shop online without learning to code. Orders doubled!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold mr-3">
                  MT
                </div>
                <div>
                  <p className="text-white font-semibold">Michael Torres</p>
                  <p className="text-zinc-500 text-sm">Coffee Shop Owner</p>
                </div>
              </div>
            </Card>

            {/* Testimonial 3 */}
            <Card className="bg-zinc-800/50 backdrop-blur-xl border-zinc-700 p-6 rounded-2xl hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-zinc-300 italic text-lg mb-4">
                "I use Sento for all my client projects now. Saves me weeks of development time."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold mr-3">
                  EW
                </div>
                <div>
                  <p className="text-white font-semibold">Emma Williams</p>
                  <p className="text-zinc-500 text-sm">Web Consultant</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="scroll-fade py-24 bg-zinc-900 relative">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-white text-center mb-16">
            See It In Action
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {/* Input Side */}
            <div>
              <p className="text-zinc-500 text-sm uppercase mb-3 tracking-wider">INPUT</p>
              <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
                <p className="text-zinc-300 leading-relaxed">
                  "A modern portfolio website for a freelance photographer with gallery, about page, and contact form"
                </p>
                <p className="text-purple-400 text-sm mt-4 flex items-center animate-pulse-glow">
                  <Sparkles className="w-4 h-4 mr-2" />
                  AI generating...
                </p>
              </div>
            </div>

            {/* Output Side */}
            <div>
              <p className="text-zinc-500 text-sm uppercase mb-3 tracking-wider">OUTPUT</p>
              <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl p-8 border border-purple-500/30 flex flex-col items-center justify-center h-full">
                <Rocket className="w-16 h-16 text-white mb-4" />
                <p className="text-white font-bold text-2xl mb-2">Website Ready!</p>
                <p className="text-zinc-400 text-center">Preview & publish in one click</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105 transition-transform shadow-glow text-lg px-8 py-6 rounded-xl"
            >
              Try It Free Now
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="scroll-fade py-24 bg-gradient-to-br from-purple-500 to-blue-600 relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-6xl font-bold text-white mb-4">
            Ready to Build Your Website?
          </h2>
          <p className="text-purple-100 text-xl mb-8">
            Join 1,000+ creators using Sento
          </p>
          <Button 
            size="lg" 
            className="bg-white text-purple-600 hover:bg-gray-100 hover:scale-105 transition-all font-bold text-lg px-12 py-6 rounded-xl shadow-lg"
          >
            Create Your Website Free
          </Button>
          <p className="text-purple-200 text-sm mt-4">
            No credit card required
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-zinc-800 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Column 1 - Branding */}
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <Sparkles className="w-6 h-6 text-purple-500" />
                <span className="text-xl font-bold text-white">Sento</span>
              </div>
              <p className="text-zinc-400 text-sm">AI websites for everyone</p>
            </div>

            {/* Column 2 - Product Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-zinc-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="text-zinc-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#how-it-works" className="text-zinc-400 hover:text-white transition-colors">How It Works</a></li>
              </ul>
            </div>

            {/* Column 3 - Company Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center space-x-6 mb-8">
            <a href="#" className="text-zinc-400 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-zinc-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-zinc-400 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-zinc-600 text-sm">© 2024 Sento. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Index;
