
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MoreVertical, Play, Eye, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface VideoCardProps {
  title: string;
  thumbnail: string;
  duration?: string;
  views?: number;
  platform?: string;
  status?: 'published' | 'scheduled' | 'draft';
  date?: string;
  className?: string;
}

const VideoCard = ({
  title,
  thumbnail,
  duration,
  views,
  platform,
  status = 'published',
  date,
  className
}: VideoCardProps) => {
  return (
    <Card className={cn("overflow-hidden group", className)}>
      <div className="relative">
        <div className="aspect-video overflow-hidden bg-muted">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        {duration && (
          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded">
            {duration}
          </div>
        )}
        
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Button size="icon" variant="secondary" className="rounded-full bg-white text-black hover:bg-white/90">
            <Play className="h-5 w-5 ml-0.5" />
          </Button>
        </div>
      </div>
      
      <CardContent className="p-3">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-medium line-clamp-2 text-sm">{title}</h3>
            {status === 'scheduled' && date && (
              <div className="flex items-center mt-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3 mr-1" />
                <span>Scheduled for {date}</span>
              </div>
            )}
            {status === 'published' && views !== undefined && (
              <div className="flex items-center mt-1 text-xs text-muted-foreground">
                <Eye className="h-3 w-3 mr-1" />
                <span>{views.toLocaleString()} views</span>
              </div>
            )}
          </div>
          
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
        
        {platform && (
          <div className="mt-2">
            <span className={cn(
              "text-xs px-2 py-0.5 rounded-full",
              platform === 'YouTube' && "bg-red-100 text-red-800",
              platform === 'Instagram' && "bg-purple-100 text-purple-800",
              platform === 'TikTok' && "bg-black text-white"
            )}>
              {platform}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default VideoCard;
