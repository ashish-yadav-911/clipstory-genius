
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import ClipGenerator from '@/components/clipper/ClipGenerator';
import ClipHunter from '@/components/clipper/ClipHunter';

const Clipper = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Navbar />
        
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-7xl mx-auto space-y-6">
            <h1 className="text-3xl font-bold">Clipper</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ClipGenerator />
              <ClipHunter />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Clipper;
