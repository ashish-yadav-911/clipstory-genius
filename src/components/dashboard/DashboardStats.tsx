
import React from 'react';
import StatsCard from '@/components/common/StatsCard';
import { BarChart2, Eye, Clock, PlayCircle } from 'lucide-react';

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatsCard
        title="Total Views"
        value="124.8K"
        change={{ value: 12.5, trend: 'up' }}
        icon={<Eye className="h-5 w-5" />}
      />
      
      <StatsCard
        title="Watch Time (hrs)"
        value="1,283"
        change={{ value: 8.2, trend: 'up' }}
        icon={<Clock className="h-5 w-5" />}
      />
      
      <StatsCard
        title="Clips Generated"
        value="48"
        change={{ value: 4.1, trend: 'down' }}
        icon={<PlayCircle className="h-5 w-5" />}
      />
      
      <StatsCard
        title="Engagement Rate"
        value="4.7%"
        change={{ value: 0.8, trend: 'up' }}
        icon={<BarChart2 className="h-5 w-5" />}
      />
    </div>
  );
};

export default DashboardStats;
