
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Sample data for charts
const viewsData = [
  { name: 'Mon', views: 4000 },
  { name: 'Tue', views: 3000 },
  { name: 'Wed', views: 2000 },
  { name: 'Thu', views: 2780 },
  { name: 'Fri', views: 1890 },
  { name: 'Sat', views: 2390 },
  { name: 'Sun', views: 3490 },
];

const platformData = [
  { name: 'YouTube', value: 54.4 },
  { name: 'TikTok', value: 23.8 },
  { name: 'Instagram', value: 18.5 },
  { name: 'Other', value: 3.3 },
];

const COLORS = ['#FF0000', '#000000', '#C13584', '#4cc9f0'];

const demographicData = [
  { name: '18-24', male: 20, female: 25 },
  { name: '25-34', male: 35, female: 30 },
  { name: '35-44', male: 15, female: 20 },
  { name: '45-54', male: 10, female: 15 },
  { name: '55+', male: 5, female: 10 },
];

const Analytics = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Navbar />
        
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-7xl mx-auto space-y-6">
            <h1 className="text-3xl font-bold">Analytics</h1>
            
            <Tabs defaultValue="overview">
              <TabsList className="mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="platforms">Platforms</TabsTrigger>
                <TabsTrigger value="audience">Audience</TabsTrigger>
                <TabsTrigger value="content">Content</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Views Over Time</CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={viewsData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Line 
                            type="monotone" 
                            dataKey="views" 
                            stroke="#7209b7" 
                            strokeWidth={2} 
                            activeDot={{ r: 6 }} 
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Platform Distribution</CardTitle>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={platformData}
                              cx="50%"
                              cy="50%"
                              innerRadius={60}
                              outerRadius={80}
                              fill="#8884d8"
                              paddingAngle={5}
                              dataKey="value"
                              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                            >
                              {platformData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Demographics</CardTitle>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={demographicData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="male" fill="#1a2b6d" />
                            <Bar dataKey="female" fill="#7209b7" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="platforms">
                <Card>
                  <CardContent className="p-12 text-center">
                    <p className="text-lg text-muted-foreground">Platform-specific analytics will be displayed here</p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="audience">
                <Card>
                  <CardContent className="p-12 text-center">
                    <p className="text-lg text-muted-foreground">Audience insights will be displayed here</p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="content">
                <Card>
                  <CardContent className="p-12 text-center">
                    <p className="text-lg text-muted-foreground">Content performance will be displayed here</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Analytics;
