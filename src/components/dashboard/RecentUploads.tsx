
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import VideoCard from '@/components/common/VideoCard';

// Sample data - in a real app, this would come from an API
const recentVideos = [
  {
    id: 1,
    title: "10 Amazing AI Tools You Need to Try in 2023",
    thumbnail: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    duration: "3:24",
    views: 12540,
    platform: "YouTube",
  },
  {
    id: 2,
    title: "How Machine Learning is Transforming Content Creation",
    thumbnail: "https://images.unsplash.com/photo-1642229407671-59b36eef3c95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    duration: "5:12",
    views: 8432,
    platform: "YouTube",
  },
  {
    id: 3,
    title: "Quick Tutorial: Using AI to Generate Better YouTube Thumbnails",
    thumbnail: "https://images.unsplash.com/photo-1634224143538-ce0221abf732?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    duration: "2:45",
    views: 4190,
    platform: "TikTok",
  },
  {
    id: 4,
    title: "The Future of Content Creation: AI vs Humans",
    thumbnail: "https://images.unsplash.com/photo-1661956602926-db6b25f75947?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    duration: "8:32",
    views: 15890,
    platform: "Instagram",
  }
];

const RecentUploads = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Uploads</CardTitle>
        <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer">View all</span>
      </CardHeader>
      
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {recentVideos.map(video => (
            <VideoCard 
              key={video.id}
              title={video.title}
              thumbnail={video.thumbnail}
              duration={video.duration}
              views={video.views}
              platform={video.platform}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentUploads;
