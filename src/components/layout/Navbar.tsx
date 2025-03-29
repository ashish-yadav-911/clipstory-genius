
import React from 'react';
import { Button } from '@/components/ui/button';
import { BellIcon, UserCircle, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="w-full py-3 px-4 sm:px-6 border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 lg:hidden">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-tubeai-purple to-tubeai-teal flex items-center justify-center text-white font-bold">
              T
            </div>
            <span className="font-bold text-lg">Tube.ai</span>
          </Link>
        </div>
        
        <div className="flex-1 mx-4 max-w-xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search clips, projects, templates..."
              className="w-full py-2 px-4 rounded-full bg-muted border border-border focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="relative">
            <BellIcon className="h-5 w-5" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-tubeai-purple rounded-full"></span>
          </Button>
          
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          
          <div className="flex items-center gap-2">
            <UserCircle className="h-8 w-8 text-muted-foreground" />
            <div className="hidden md:block">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-muted-foreground">Free Plan</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
