
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import VideoCard from '@/components/common/VideoCard';

// Sample data for upcoming uploads
const upcomingVideos = [
  {
    id: 1,
    title: "5 AI Tools That Will Change Your Workflow Forever",
    thumbnail: "https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    date: "Tomorrow, 9:00 AM",
    platform: "YouTube",
  },
  {
    id: 2,
    title: "How to Use AI to Generate Viral Social Media Content",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    date: "Thursday, 3:30 PM",
    platform: "Instagram",
  },
  {
    id: 3,
    title: "The Complete Guide to AI-Powered Video Editing",
    thumbnail: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    date: "Saturday, 12:00 PM",
    platform: "TikTok",
  }
];

const UpcomingUploads = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Upcoming Uploads</CardTitle>
        <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer">Schedule new</span>
      </CardHeader>
      
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {upcomingVideos.map(video => (
            <VideoCard 
              key={video.id}
              title={video.title}
              thumbnail={video.thumbnail}
              date={video.date}
              platform={video.platform}
              status="scheduled"
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingUploads;
