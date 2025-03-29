
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Search, Clock, Bookmark, TrendingUp } from 'lucide-react';

// Sample data for trending hooks
const trendingHooks = [
  "How AI is changing the game for content creators",
  "5 psychological tricks that make people click",
  "What they don't tell you about becoming successful",
  "This AI tool lets you create videos in seconds",
  "The real reason why most creators fail",
  "I tried using AI for a week and this happened",
];

// Sample data for saved hooks
const savedHooks = [
  "The truth about passive income nobody tells you",
  "3 tools that revolutionized my content creation",
  "How to ethically use AI in your business",
  "Why most people get AI completely wrong",
];

const ClipHunter = () => {
  const [loading, setLoading] = useState(false);
  
  // Simulate search
  const simulateSearch = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Hook Hunter</CardTitle>
        <CardDescription>
          Find and save engaging hooks for your content
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="mb-6">
          <Label htmlFor="hook-search">Search for hooks</Label>
          <div className="flex gap-2 mt-1">
            <Input id="hook-search" placeholder="E.g., AI, productivity, business tips" />
            <Button onClick={simulateSearch} disabled={loading}>
              {loading ? 'Searching...' : 'Search'}
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="trending">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="trending" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" /> Trending
            </TabsTrigger>
            <TabsTrigger value="recent" className="flex items-center gap-2">
              <Clock className="w-4 h-4" /> Recent
            </TabsTrigger>
            <TabsTrigger value="saved" className="flex items-center gap-2">
              <Bookmark className="w-4 h-4" /> Saved
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="trending">
            <div className="space-y-3">
              {trendingHooks.map((hook, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 cursor-pointer">
                  <div className="flex items-center">
                    <div className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center mr-3">
                      {index + 1}
                    </div>
                    <span>{hook}</span>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="recent">
            <div className="p-12 text-center">
              <Search className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
              <h3 className="mt-4 text-lg font-medium">No recent searches</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Your recent searches will appear here
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="saved">
            <div className="space-y-3">
              {savedHooks.map((hook, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 cursor-pointer">
                  <span>{hook}</span>
                  <Button variant="ghost" size="icon">
                    <Bookmark className="h-4 w-4 fill-current" />
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ClipHunter;
