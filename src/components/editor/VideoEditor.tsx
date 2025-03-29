
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { 
  Play, 
  Pause, 
  ScissorsLineDashed, 
  Type, 
  Sparkles,
  Share2,
  Download,
  Undo,
  Redo,
  Layers,
  SplitSquareVertical
} from 'lucide-react';

const VideoEditor = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const videoDuration = 60; // seconds

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-full">
      <div className="lg:col-span-2 space-y-4">
        <Card className="overflow-hidden">
          <div className="relative bg-black aspect-video">
            {/* Placeholder for video preview */}
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <p className="text-lg">Video Preview</p>
            </div>
            
            {/* Playback controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <div className="flex items-center gap-2 mb-2">
                <Button variant="ghost" size="icon" className="text-white" onClick={togglePlay}>
                  {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                </Button>
                <div className="text-white text-xs">
                  {Math.floor(currentTime / 60)}:{(currentTime % 60).toString().padStart(2, '0')} / 
                  {Math.floor(videoDuration / 60)}:{(videoDuration % 60).toString().padStart(2, '0')}
                </div>
              </div>
              
              <Slider
                value={[currentTime]}
                max={videoDuration}
                step={1}
                onValueChange={(value) => setCurrentTime(value[0])}
                className="w-full"
              />
            </div>
          </div>
        </Card>
        
        <div className="grid grid-cols-5 gap-2">
          <Button variant="outline" className="flex flex-col items-center px-2 py-3 h-auto">
            <ScissorsLineDashed className="h-5 w-5 mb-1" />
            <span className="text-xs">Cut</span>
          </Button>
          
          <Button variant="outline" className="flex flex-col items-center px-2 py-3 h-auto">
            <Type className="h-5 w-5 mb-1" />
            <span className="text-xs">Text</span>
          </Button>
          
          <Button variant="outline" className="flex flex-col items-center px-2 py-3 h-auto">
            <Sparkles className="h-5 w-5 mb-1" />
            <span className="text-xs">Effects</span>
          </Button>
          
          <Button variant="outline" className="flex flex-col items-center px-2 py-3 h-auto">
            <Layers className="h-5 w-5 mb-1" />
            <span className="text-xs">Layers</span>
          </Button>
          
          <Button variant="outline" className="flex flex-col items-center px-2 py-3 h-auto">
            <SplitSquareVertical className="h-5 w-5 mb-1" />
            <span className="text-xs">Split</span>
          </Button>
        </div>
        
        <Card>
          <CardContent className="py-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex gap-2">
                <Button variant="ghost" size="icon">
                  <Undo className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Redo className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex items-center">
                  <Download className="h-4 w-4 mr-1" />
                  Save
                </Button>
                <Button size="sm" className="flex items-center bg-gradient-to-r from-tubeai-purple to-tubeai-teal hover:opacity-90">
                  <Share2 className="h-4 w-4 mr-1" />
                  Export
                </Button>
              </div>
            </div>
            
            <div className="relative h-24 border rounded-md overflow-hidden bg-muted/50">
              {/* Timeline visualization would go here */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-sm text-muted-foreground">Timeline</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="space-y-4">
        <Card>
          <CardContent className="p-4">
            <Tabs defaultValue="style">
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="style">Style</TabsTrigger>
                <TabsTrigger value="captions">Captions</TabsTrigger>
                <TabsTrigger value="audio">Audio</TabsTrigger>
              </TabsList>
              
              <TabsContent value="style" className="space-y-4">
                <div>
                  <Label>Aspect Ratio</Label>
                  <div className="grid grid-cols-3 gap-2 mt-1">
                    <Button variant="outline" className="text-xs aspect-[9/16] p-1 h-auto">9:16</Button>
                    <Button variant="outline" className="text-xs aspect-[1/1] p-1 h-auto">1:1</Button>
                    <Button variant="outline" className="text-xs aspect-[16/9] p-1 h-auto">16:9</Button>
                  </div>
                </div>
                
                <div>
                  <Label>Theme</Label>
                  <div className="grid grid-cols-4 gap-2 mt-1">
                    <div className="w-full aspect-square rounded-md bg-tubeai-blue cursor-pointer"></div>
                    <div className="w-full aspect-square rounded-md bg-tubeai-purple cursor-pointer"></div>
                    <div className="w-full aspect-square rounded-md bg-tubeai-teal cursor-pointer"></div>
                    <div className="w-full aspect-square rounded-md bg-gradient-to-br from-tubeai-purple to-tubeai-teal cursor-pointer"></div>
                  </div>
                </div>
                
                <div>
                  <Label>Transitions</Label>
                  <div className="grid grid-cols-2 gap-2 mt-1">
                    <Button variant="outline" className="text-xs">Fade</Button>
                    <Button variant="outline" className="text-xs">Slide</Button>
                    <Button variant="outline" className="text-xs">Zoom</Button>
                    <Button variant="outline" className="text-xs">Wipe</Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="captions" className="space-y-4">
                <div>
                  <Label>Caption Style</Label>
                  <div className="grid grid-cols-2 gap-2 mt-1">
                    <Button variant="outline" className="text-xs">Subtitles</Button>
                    <Button variant="outline" className="text-xs">Captions</Button>
                  </div>
                </div>
                
                <div>
                  <Label>Font</Label>
                  <select className="w-full rounded-md border border-input bg-background px-3 py-2 mt-1">
                    <option>Sans Serif</option>
                    <option>Serif</option>
                    <option>Monospace</option>
                    <option>Display</option>
                  </select>
                </div>
                
                <div>
                  <Label>Text Color</Label>
                  <div className="grid grid-cols-4 gap-2 mt-1">
                    <div className="w-full aspect-square rounded-md bg-white border cursor-pointer"></div>
                    <div className="w-full aspect-square rounded-md bg-tubeai-teal cursor-pointer"></div>
                    <div className="w-full aspect-square rounded-md bg-tubeai-purple cursor-pointer"></div>
                    <div className="w-full aspect-square rounded-md bg-black cursor-pointer"></div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="audio" className="space-y-4">
                <div>
                  <Label>Background Music</Label>
                  <select className="w-full rounded-md border border-input bg-background px-3 py-2 mt-1">
                    <option>None</option>
                    <option>Upbeat</option>
                    <option>Dramatic</option>
                    <option>Relaxed</option>
                    <option>Corporate</option>
                  </select>
                </div>
                
                <div>
                  <Label>Volume</Label>
                  <Slider defaultValue={[70]} max={100} step={1} className="mt-2" />
                </div>
                
                <div>
                  <Label>Voice Over</Label>
                  <Button variant="outline" className="w-full mt-1">
                    Generate Voice Over
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <h3 className="text-sm font-medium mb-3">AI Suggestions</h3>
            <div className="space-y-2">
              <div className="p-3 rounded-md border bg-muted/50 hover:bg-muted cursor-pointer transition-colors">
                <p className="text-xs">Add a dynamic text overlay to emphasize key points</p>
              </div>
              <div className="p-3 rounded-md border bg-muted/50 hover:bg-muted cursor-pointer transition-colors">
                <p className="text-xs">Trim first 5 seconds to improve hook engagement</p>
              </div>
              <div className="p-3 rounded-md border bg-muted/50 hover:bg-muted cursor-pointer transition-colors">
                <p className="text-xs">Add background music to increase viewer retention</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VideoEditor;
