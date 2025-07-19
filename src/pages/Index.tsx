
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Mail, FileText, Users, Shield, Zap, Settings, ArrowRight, Play } from "lucide-react";
import { HowItWorksStep } from "@/components/HowItWorksStep";
import { TimeComparisonChart } from "@/components/TimeComparisonChart";
import { WaitlistDialog } from "@/components/WaitlistDialog";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative px-6 pt-20 pb-32 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 gradient-hero opacity-10" />
        <div className="absolute inset-0 gradient-subtle" />
        
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center space-y-12 animate-fade-up">
            <div className="space-y-8">
              <h1 className="text-6xl md:text-7xl font-bold text-foreground leading-tight">
                AI Agent for Mortgage Professionals
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-normal max-w-4xl mx-auto leading-relaxed">
                Skyla chases docs, manage inbox, and drafts proposals—so you close faster and stay compliant.
              </p>
              <p className="text-body-sm text-muted-foreground/80 max-w-2xl mx-auto">
                Built by award winning mortgage adviser and ex-Canva AI engineer.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <WaitlistDialog>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-medium shadow-brand hover:shadow-large transition-all duration-300"
                >
                  Join the Waitlist
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </WaitlistDialog>
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-border text-foreground hover:bg-secondary px-8 py-4 text-lg font-medium shadow-soft hover:shadow-medium transition-all duration-300"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch Product Video
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
                  <DialogTitle className="sr-only">Product Demo Video</DialogTitle>
                  <DialogDescription className="sr-only">Watch our product demo video to see Skyla in action</DialogDescription>
                  <div className="w-full h-full">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/1B7qdSMz-uY"
                      title="Product Demo Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* What Skyla Does Section */}
      <section className="px-6 py-24 gradient-section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-display-lg text-foreground mb-6">
              More than AI. Skyla gets the work done.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-6 animate-scale-in">
              <div className="flex justify-center">
                <div className="p-4 bg-primary/10 rounded-2xl">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-display-sm text-foreground">
                  Turns email into a live pipeline
                </h3>
                <p className="text-body-md text-muted-foreground leading-relaxed">
                  Skyla organizes your inbox, flags what matters, and helps you act on it. No tabs. No chaos. Just flow.
                </p>
              </div>
            </div>
            
            <div className="text-center space-y-6 animate-scale-in [animation-delay:0.1s]">
              <div className="flex justify-center">
                <div className="p-4 bg-green-500/10 rounded-2xl">
                  <FileText className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-display-sm text-foreground">
                  Chases and collates documents
                </h3>
                <p className="text-body-md text-muted-foreground leading-relaxed">
                  Skyla follows up automatically, gathers missing files, and assembles everything in one place. No admin needed.
                </p>
              </div>
            </div>
            
            <div className="text-center space-y-6 animate-scale-in [animation-delay:0.2s]">
              <div className="flex justify-center">
                <div className="p-4 bg-purple-500/10 rounded-2xl">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-display-sm text-foreground">
                  Generates notes & compliant proposals
                </h3>
                <p className="text-body-md text-muted-foreground leading-relaxed">
                  Every meeting turns into a clean summary and personalized proposal—ready to send with one click.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Time Comparison Chart */}
      <section className="px-6 py-24">
        <TimeComparisonChart />
      </section>

      {/* Solving Real Challenges of Advisers - Integrated Row Layout */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-display-lg text-foreground mb-6">
              Solving Real Challenges of Advisers
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              Real feedback from mortgage professionals who understand the struggle:
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="quote-row py-6 px-8 rounded-xl">
              <blockquote className="text-body-lg text-foreground leading-relaxed italic mb-4">
                "I'm leaving $100k to $200k on the table every year because I can't chase new business."
              </blockquote>
              <footer className="text-body-sm font-medium text-muted-foreground">
                — Senior Mortgage Adviser
              </footer>
            </div>
            
            <div className="quote-row py-6 px-8 rounded-xl">
              <blockquote className="text-body-lg text-foreground leading-relaxed italic mb-4">
                "About 40% of my week is admin—even though I have a full time admin."
              </blockquote>
              <footer className="text-body-sm font-medium text-muted-foreground">
                — Mortgage Professional
              </footer>
            </div>
            
            <div className="quote-row py-6 px-8 rounded-xl">
              <blockquote className="text-body-lg text-foreground leading-relaxed italic mb-4">
                "Document collation is the most time consuming part of the mortgage application process"
              </blockquote>
              <footer className="text-body-sm font-medium text-muted-foreground">
                — Industry Expert
              </footer>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Objections Section */}
      <section className="px-6 py-24 bg-background-soft">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-display-lg text-foreground mb-6">
              AI you can actually trust—with your clients, and your compliance.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="p-4 bg-primary/10 rounded-2xl">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-display-sm text-foreground">
                  Built for privacy
                </h3>
                <p className="text-body-md text-muted-foreground leading-relaxed">
                  Your data is processed in a private, isolated environment. It's encrypted and never used to train public models.
                </p>
              </div>
            </div>
            
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="p-4 bg-yellow-500/10 rounded-2xl">
                  <Zap className="h-8 w-8 text-yellow-600" />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-display-sm text-foreground">
                  Fast from day one
                </h3>
                <p className="text-body-md text-muted-foreground leading-relaxed">
                  No tagging, no training. Skyla connects to your inbox and starts helping right away.
                </p>
              </div>
            </div>
            
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="p-4 bg-muted rounded-2xl">
                  <Settings className="h-8 w-8 text-muted-foreground" />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-display-sm text-foreground">
                  You're always in control
                </h3>
                <p className="text-body-md text-muted-foreground leading-relaxed">
                  Skyla drafts, prepares, and organizes. You review, edit, and send.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-display-lg text-foreground mb-6">
              How It Works
            </h2>
          </div>
          
          <div className="space-y-20">
            <HowItWorksStep
              step="1"
              title="Connect your email account"
              description="Secure OAuth integration with Gmail, Outlook, or your preferred email provider. No forwarding rules needed."
              isReversed={false}
              imageSrc="/lovable-uploads/bfbac1b5-982d-402e-8895-d717dd1904fe.png"
            />
            <HowItWorksStep
              step="2"
              title="Skyla gets work done—you just press 'go'"
              description="Review urgent tasks in your command centre and let Skyla process everything with one click."
              isReversed={true}
              imageSrc="/lovable-uploads/31015f34-083f-48d4-8355-9db7bc5b9a20.png"
            />
            <HowItWorksStep
              step="3"
              title="Skyla drafts automatically—you stay in control"
              description="Every email is drafted for you. Review, edit if needed, and send with confidence."
              isReversed={false}
              imageSrc="/lovable-uploads/be087d4a-7c98-4d52-bc4c-85823435344f.png"
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-6 py-24 gradient-hero">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <h2 className="text-display-lg text-primary-foreground mb-8">
            Built for the way advisers really work.
          </h2>
          <p className="text-body-lg mb-12 opacity-90">
            Join the early group of professionals using Skyla to reclaim time, reduce admin, and close more business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <WaitlistDialog>
              <Button 
                size="lg" 
                className="bg-background text-foreground hover:bg-background/90 px-8 py-4 text-lg font-medium shadow-large hover:shadow-brand transition-all duration-300"
              >
                Join the Waitlist
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </WaitlistDialog>
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg font-medium"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
                <DialogTitle className="sr-only">Product Demo Video</DialogTitle>
                <DialogDescription className="sr-only">Watch our product demo video to see Skyla in action</DialogDescription>
                <div className="w-full h-full">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/1B7qdSMz-uY"
                    title="Product Demo Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-16 bg-foreground text-background">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-body-lg font-medium mb-4">Skyla</p>
          <p className="text-body-sm text-background/70">
            © 2024 Skyla. Built for mortgage professionals who value their time.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
