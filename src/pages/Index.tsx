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

const Index = () => {
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
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center gradient-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            From Idea to Website<br />in Minutes
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            AI-powered website builder. No coding, no designers. Just describe what you need and watch it come to life.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Create Your Website Free
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={scrollToHowItWorks}
              className="border-white/60 text-white hover:bg-white/10"
            >
              See How It Works
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-white/80">
            <Check className="w-5 h-5" />
            <span className="text-sm">Trusted by 1,000+ businesses worldwide</span>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get Online in 3 Simple Steps</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-4">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Step 1</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Describe your website in plain English</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Step 2</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">AI generates a professional website instantly</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Step 3</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Preview, customize, and publish with one click</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Everything You Need to Build & Launch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Sparkles className="w-12 h-12 text-primary mb-4" />
                <CardTitle>AI-Powered Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Smart layouts tailored to your content</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Eye className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Instant Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">See your website before you publish</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Rocket className="w-12 h-12 text-primary mb-4" />
                <CardTitle>One-Click Deploy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Go live in seconds, no technical skills needed</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Smartphone className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Mobile Responsive</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Perfect on every device automatically</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Plus className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Optional Add-ons</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Add WhatsApp chat, payment buttons, contact forms with one click</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Languages className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Multi-Language</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Generate in any language or create bilingual sites</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Plan</h2>
            <p className="text-lg text-muted-foreground">Start free, upgrade when ready</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Free Plan */}
            <Card>
              <CardHeader>
                <CardTitle>Free</CardTitle>
                <CardDescription className="text-2xl font-bold text-foreground mt-2">₹0</CardDescription>
              </CardHeader>
              <CardContent>
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
              <CardFooter>
                <Button variant="outline" className="w-full">Start Free</Button>
              </CardFooter>
            </Card>

            {/* Basic Plan */}
            <Card className="relative border-primary shadow-2xl scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="gradient-primary text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                  Most Popular
                </span>
              </div>
              <CardHeader>
                <CardTitle>Basic</CardTitle>
                <CardDescription className="text-2xl font-bold text-foreground mt-2">
                  ₹199<span className="text-sm text-muted-foreground">/mo</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
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
              <CardFooter>
                <Button variant="gradient" className="w-full">Start Basic</Button>
              </CardFooter>
            </Card>

            {/* Pro Plan */}
            <Card>
              <CardHeader>
                <CardTitle>Pro</CardTitle>
                <CardDescription className="text-2xl font-bold text-foreground mt-2">
                  ₹499<span className="text-sm text-muted-foreground">/mo</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
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
              <CardFooter>
                <Button variant="default" className="w-full">Go Pro</Button>
              </CardFooter>
            </Card>

            {/* Premium Plan */}
            <Card>
              <CardHeader>
                <CardTitle>Premium</CardTitle>
                <CardDescription className="text-2xl font-bold text-foreground mt-2">
                  ₹999<span className="text-sm text-muted-foreground">/mo</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
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
              <CardFooter>
                <Button variant="default" className="w-full">Go Premium</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Loved by Creators Worldwide</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">SC</span>
                  </div>
                  <div>
                    <CardTitle className="text-base">Sarah Chen</CardTitle>
                    <CardDescription>Freelance Designer</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">"Built my portfolio site in 10 minutes!"</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">MT</span>
                  </div>
                  <div>
                    <CardTitle className="text-base">Michael Torres</CardTitle>
                    <CardDescription>Coffee Shop Owner</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">"Finally got my shop online without hiring anyone!"</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">EW</span>
                  </div>
                  <div>
                    <CardTitle className="text-base">Emma Williams</CardTitle>
                    <CardDescription>Consultant</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">"Saved thousands on web development!"</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Build Your Website?</h2>
          <p className="text-lg text-white/90 mb-8">Join 1,000+ users already creating with Sento</p>
          
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary mb-4">
            Create Your Free Website
          </Button>
          
          <p className="text-sm text-white/70">No credit card required • 2 free websites</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
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
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-background/70 hover:text-background transition-colors">About</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors">Blog</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors">Terms</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors">Privacy</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors">Contact</a></li>
              </ul>
            </div>
            
            {/* Column 3 */}
            <div>
              <div className="flex gap-4">
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  <Instagram className="w-5 h-5" />
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
