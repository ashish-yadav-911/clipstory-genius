
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import DashboardStats from '@/components/dashboard/DashboardStats';
import RecentUploads from '@/components/dashboard/RecentUploads';
import UpcomingUploads from '@/components/dashboard/UpcomingUploads';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, ResponsiveContainer, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// Sample data for the performance chart
const performanceData = [
  { name: 'Jan', views: 4000, watch: 2400 },
  { name: 'Feb', views: 3000, watch: 1398 },
  { name: 'Mar', views: 2000, watch: 9800 },
  { name: 'Apr', views: 2780, watch: 3908 },
  { name: 'May', views: 1890, watch: 4800 },
  { name: 'Jun', views: 2390, watch: 3800 },
  { name: 'Jul', views: 3490, watch: 4300 },
];

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Navbar />
        
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-7xl mx-auto space-y-6">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            
            <DashboardStats />
            
            <Card>
              <CardHeader>
                <CardTitle>Performance Overview</CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line 
                        type="monotone" 
                        dataKey="views" 
                        stroke="#7209b7" 
                        strokeWidth={2} 
                        activeDot={{ r: 8 }} 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="watch" 
                        stroke="#4cc9f0" 
                        strokeWidth={2} 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <RecentUploads />
            
            <UpcomingUploads />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
