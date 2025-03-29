
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import VideoEditor from '@/components/editor/VideoEditor';

const Editor = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Navbar />
        
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">Video Editor</h1>
              <div className="text-sm text-muted-foreground">Project: Untitled</div>
            </div>
            
            <VideoEditor />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Editor;
