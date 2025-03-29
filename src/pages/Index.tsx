
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Video, Scissors, BarChart3, Wand2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-4 px-6 flex items-center justify-between bg-background/80 backdrop-blur-sm border-b z-10">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-tubeai-purple to-tubeai-teal flex items-center justify-center text-white font-bold">
            T
          </div>
          <span className="font-bold text-xl">Tube.ai</span>
        </div>
        
        <div className="flex items-center gap-4">
          <Link to="/dashboard">
            <Button variant="ghost">Dashboard</Button>
          </Link>
          <Link to="/login">
            <Button variant="outline">Log in</Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-gradient-to-r from-tubeai-purple to-tubeai-teal hover:opacity-90">
              Sign up
            </Button>
          </Link>
        </div>
      </header>
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-6 text-center bg-gradient-to-b from-muted/50 to-background">
          <h1 className="text-4xl md:text-6xl font-bold max-w-4xl mx-auto mb-6">
            Generate Viral Content with <span className="gradient-text">AI-Powered</span> Video Clips
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Transform your ideas into engaging videos. Automate clip creation, editing, and distribution across platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard">
              <Button size="lg" className="bg-gradient-to-r from-tubeai-purple to-tubeai-teal hover:opacity-90">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-background rounded-xl p-6 shadow-sm hover-scale border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Scissors className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Clipper</h3>
                <p className="text-muted-foreground">
                  Automatically identify and extract the most engaging segments from your content.
                </p>
              </div>
              
              <div className="bg-background rounded-xl p-6 shadow-sm hover-scale border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Video className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Video Editor</h3>
                <p className="text-muted-foreground">
                  Edit and enhance your clips with captions, effects, and transitions in minutes.
                </p>
              </div>
              
              <div className="bg-background rounded-xl p-6 shadow-sm hover-scale border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Wand2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Automator</h3>
                <p className="text-muted-foreground">
                  Upload to multiple platforms with AI-generated descriptions and hashtags.
                </p>
              </div>
              
              <div className="bg-background rounded-xl p-6 shadow-sm hover-scale border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Analytics</h3>
                <p className="text-muted-foreground">
                  Track performance across platforms and get insights to improve your content.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-tubeai-blue to-tubeai-purple text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Content Strategy?</h2>
            <p className="text-lg md:text-xl mb-8 text-white/80">
              Join thousands of creators using Tube.ai to streamline their workflow and increase engagement.
            </p>
            <Link to="/dashboard">
              <Button size="lg" className="bg-white text-tubeai-purple hover:bg-white/90">
                Start Creating Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <footer className="py-8 px-6 border-t">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-tubeai-purple to-tubeai-teal flex items-center justify-center text-white font-bold">
                T
              </div>
              <span className="font-bold">Tube.ai</span>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Support</a>
            </div>
          </div>
          <div className="text-center md:text-left mt-4 text-sm text-muted-foreground">
            © 2023 Tube.ai. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
