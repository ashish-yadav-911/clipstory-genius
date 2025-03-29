
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Upload, Film, FileText, Wand2 } from 'lucide-react';

const ClipGenerator = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [generating, setGenerating] = useState(false);

  // Simulate upload progress
  const simulateUpload = () => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 200);
  };

  // Simulate generation
  const simulateGeneration = () => {
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
    }, 3000);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Generate New Clip</CardTitle>
        <CardDescription>
          Create engaging clips from your videos, text, or images
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <Tabs defaultValue="video" className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="video" className="flex items-center gap-2">
              <Film className="w-4 h-4" /> Video
            </TabsTrigger>
            <TabsTrigger value="text" className="flex items-center gap-2">
              <FileText className="w-4 h-4" /> Text/Topic
            </TabsTrigger>
            <TabsTrigger value="image" className="flex items-center gap-2">
              <Upload className="w-4 h-4" /> Image
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="video">
            <div className="space-y-4">
              <div>
                <Label htmlFor="video-url">Video URL</Label>
                <Input id="video-url" placeholder="Enter YouTube, TikTok, or other video URL" />
              </div>
              
              <div className="border-2 border-dashed rounded-lg p-8 text-center">
                <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-2 text-sm font-medium">Upload your video</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Drag and drop a video file or click to browse
                </p>
                <Button onClick={simulateUpload} variant="outline" className="mt-4">Select Video</Button>
                
                {uploadProgress > 0 && (
                  <div className="mt-4">
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-tubeai-purple to-tubeai-teal h-2 rounded-full" 
                        style={{ width: `${uploadProgress}%` }}
                      ></div>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {uploadProgress < 100 ? 'Uploading...' : 'Upload complete!'}
                    </p>
                  </div>
                )}
              </div>
              
              <div>
                <Label htmlFor="clip-length">Clip Length (seconds)</Label>
                <Input id="clip-length" type="number" defaultValue={30} min={5} max={120} />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="text">
            <div className="space-y-4">
              <div>
                <Label htmlFor="topic">Topic or Title</Label>
                <Input id="topic" placeholder="Enter topic or title for your clip" />
              </div>
              
              <div>
                <Label htmlFor="content">Content Details</Label>
                <Textarea 
                  id="content" 
                  placeholder="Describe what you want in your clip" 
                  className="min-h-[150px]"
                />
              </div>
              
              <div>
                <Label htmlFor="style">Style</Label>
                <select 
                  id="style" 
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                >
                  <option>Educational</option>
                  <option>Entertainment</option>
                  <option>Tutorial</option>
                  <option>News</option>
                  <option>Commentary</option>
                </select>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="image">
            <div className="space-y-4">
              <div className="border-2 border-dashed rounded-lg p-8 text-center">
                <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-2 text-sm font-medium">Upload an image</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Drag and drop an image or click to browse
                </p>
                <Button onClick={simulateUpload} variant="outline" className="mt-4">Select Image</Button>
                
                {uploadProgress > 0 && (
                  <div className="mt-4">
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-tubeai-purple to-tubeai-teal h-2 rounded-full" 
                        style={{ width: `${uploadProgress}%` }}
                      ></div>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {uploadProgress < 100 ? 'Uploading...' : 'Upload complete!'}
                    </p>
                  </div>
                )}
              </div>
              
              <div>
                <Label htmlFor="image-prompt">Story Prompt</Label>
                <Textarea 
                  id="image-prompt" 
                  placeholder="Describe the story you want to create from this image" 
                  className="min-h-[100px]"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      
      <CardFooter>
        <Button 
          onClick={simulateGeneration} 
          disabled={generating} 
          className="bg-gradient-to-r from-tubeai-purple to-tubeai-teal hover:opacity-90 w-full"
        >
          <Wand2 className="mr-2 h-4 w-4" />
          {generating ? 'Generating...' : 'Generate Clip'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ClipGenerator;
